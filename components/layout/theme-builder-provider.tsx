"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeBuilderWidget } from "@/components/playground/theme-builder";
import { cloneThemePalettes, defaultThemePalettes, isThemeBuilderStorage, THEME_BUILDER_STORAGE_KEY, type ThemeBuilderStorage, type ThemeMode, type ThemePalettes, type ThemeToken } from "@/lib/theme-builder";

type ThemeBuilderContextValue = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  palettes: ThemePalettes;
  updateToken: (mode: ThemeMode, token: ThemeToken, value: string) => void;
  resetToken: (mode: ThemeMode, token: ThemeToken) => void;
  reset: () => void;
};

const ThemeBuilderContext = createContext<ThemeBuilderContextValue | null>(null);
const themeTokens = Object.keys(defaultThemePalettes.light) as ThemeToken[];
const PERSIST_DELAY = 180;

export function ThemeBuilderProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [enabled, setEnabledState] = useState(false);
  const [palettes, setPalettes] = useState<ThemePalettes>(() => cloneThemePalettes(defaultThemePalettes));
  const [hydrated, setHydrated] = useState(false);
  const palettesRef = useRef(palettes);
  const frameRef = useRef<number | null>(null);
  const pendingCssRef = useRef(new Map<ThemeToken, string>());
  const persistTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleCssToken = useCallback((token: ThemeToken, value: string) => {
    pendingCssRef.current.set(token, value);
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      pendingCssRef.current.forEach((nextValue, nextToken) => document.documentElement.style.setProperty(`--theme-${nextToken}`, nextValue));
      pendingCssRef.current.clear();
      frameRef.current = null;
    });
  }, []);

  const applyPalette = useCallback((palette: ThemePalettes[ThemeMode]) => {
    themeTokens.forEach((token) => document.documentElement.style.setProperty(`--theme-${token}`, palette[token]));
  }, []);

  const schedulePersist = useCallback((nextPalettes: ThemePalettes) => {
    if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
    persistTimerRef.current = setTimeout(() => {
      const payload: ThemeBuilderStorage = { enabled: true, palettes: nextPalettes };
      window.localStorage.setItem(THEME_BUILDER_STORAGE_KEY, JSON.stringify(payload));
      persistTimerRef.current = null;
    }, PERSIST_DELAY);
  }, []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_BUILDER_STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (isThemeBuilderStorage(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setEnabledState(parsed.enabled);
          setPalettes({ light: { ...defaultThemePalettes.light, ...parsed.palettes.light }, dark: { ...defaultThemePalettes.dark, ...parsed.palettes.dark } });
        }
      }
    } catch {
      window.localStorage.removeItem(THEME_BUILDER_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    palettesRef.current = palettes;
  }, [palettes]);

  useEffect(() => {
    if (!hydrated) return;
    pendingCssRef.current.clear();
    themeTokens.forEach((token) => document.documentElement.style.removeProperty(`--theme-${token}`));
    if (enabled) {
      applyPalette(palettesRef.current[resolvedTheme === "dark" ? "dark" : "light"]);
      schedulePersist(palettesRef.current);
    } else {
      if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
      window.localStorage.removeItem(THEME_BUILDER_STORAGE_KEY);
    }
    // Palette changes use the ref plus the single-token animation-frame path.
  }, [enabled, hydrated, resolvedTheme, applyPalette, schedulePersist]);

  useEffect(() => () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
  }, []);

  const updateToken = useCallback((mode: ThemeMode, token: ThemeToken, value: string) => {
    setPalettes((current) => {
      const next = { ...current, [mode]: { ...current[mode], [token]: value } };
      if (enabled) {
        if (mode === (resolvedTheme === "dark" ? "dark" : "light")) scheduleCssToken(token, value);
        schedulePersist(next);
      }
      return next;
    });
  }, [enabled, resolvedTheme, scheduleCssToken, schedulePersist]);

  const resetToken = useCallback((mode: ThemeMode, token: ThemeToken) => {
    setPalettes((current) => {
      const next = { ...current, [mode]: { ...current[mode], [token]: defaultThemePalettes[mode][token] } };
      if (enabled) {
        if (mode === (resolvedTheme === "dark" ? "dark" : "light")) scheduleCssToken(token, next[mode][token]);
        schedulePersist(next);
      }
      return next;
    });
  }, [enabled, resolvedTheme, scheduleCssToken, schedulePersist]);

  const reset = useCallback(() => {
    const next = cloneThemePalettes(defaultThemePalettes);
    setPalettes(next);
    if (enabled) {
      applyPalette(next[resolvedTheme === "dark" ? "dark" : "light"]);
      schedulePersist(next);
    }
  }, [enabled, resolvedTheme, applyPalette, schedulePersist]);

  const setEnabled = useCallback((nextEnabled: boolean) => setEnabledState(nextEnabled), []);

  const value = useMemo<ThemeBuilderContextValue>(() => ({ enabled, setEnabled, palettes, updateToken, resetToken, reset }), [enabled, setEnabled, palettes, updateToken, resetToken, reset]);

  return <ThemeBuilderContext.Provider value={value}>{children}<ThemeBuilderWidget /></ThemeBuilderContext.Provider>;
}

export function useThemeBuilder() {
  const context = useContext(ThemeBuilderContext);
  if (!context) throw new Error("useThemeBuilder must be used inside ThemeBuilderProvider");
  return context;
}
