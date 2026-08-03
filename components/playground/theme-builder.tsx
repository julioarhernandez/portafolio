"use client";

import { Check, Clipboard, Palette, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useThemeBuilder } from "@/components/layout/theme-builder-provider";
import { useTheme } from "next-themes";
import { defaultThemePalettes, serializeThemeVariables, themeTokenGroups, type ThemeMode, type ThemeToken } from "@/lib/theme-builder";

const COLOR_DEBOUNCE_MS = 400;

export function ThemeBuilderWidget() {
  const { enabled, palettes, updateToken, resetToken, reset, setEnabled } = useThemeBuilder();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("light");
  const [copied, setCopied] = useState(false);
  const debounceTimers = useRef(new Map<string, ReturnType<typeof setTimeout>>());
  const colorInputs = useRef(new Map<string, HTMLInputElement>());

  const queueTokenUpdate = (token: ThemeToken, value: string) => {
    const key = mode + ":" + token;
    const existing = debounceTimers.current.get(key);
    if (existing) clearTimeout(existing);
    const timer = setTimeout(() => {
      updateToken(mode, token, value);
      debounceTimers.current.delete(key);
    }, COLOR_DEBOUNCE_MS);
    debounceTimers.current.set(key, timer);
  };

  const copyVariables = async () => {
    await navigator.clipboard.writeText(serializeThemeVariables(palettes));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const cancelTokenUpdate = (token: ThemeToken) => {
    const key = mode + ":" + token;
    const timer = debounceTimers.current.get(key);
    if (timer) clearTimeout(timer);
    debounceTimers.current.delete(key);
  };

  useEffect(() => {
    // Keep the editor tab aligned with the portfolio theme toggle.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (resolvedTheme === "light" || resolvedTheme === "dark") setMode(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    themeTokenGroups.forEach((group) => group.tokens.forEach(([token]) => {
      const input = colorInputs.current.get(mode + ":" + token);
      if (input) input.value = palettes[mode][token];
    }));
  }, [mode, palettes]);

  useEffect(() => () => {
    debounceTimers.current.forEach((timer) => clearTimeout(timer));
  }, []);

  if (!enabled) return null;

  return <div className="fixed right-4 bottom-4 z-[60] sm:right-6 sm:bottom-6">
    {open && <Card className="mb-3 w-[min( calc(100vw - 2rem), 360px)] max-h-[min(78vh,680px)] overflow-y-auto py-0 shadow-2xl">
      <CardHeader className="sticky top-0 z-10 border-b bg-card py-4 shadow-sm">
        <div className="flex items-start justify-between gap-3"><div><CardTitle className="flex items-center gap-2"><Palette className="size-4 text-primary"/> Theme Builder</CardTitle><p className="mt-1 text-xs text-muted-foreground">Updates apply after {COLOR_DEBOUNCE_MS}ms of quiet.</p></div><Button variant="ghost" size="icon" aria-label="Close theme builder" onClick={()=>setOpen(false)}><X/></Button></div>
        <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">{(["light","dark"] as const).map((m)=><button key={m} type="button" className={`rounded-md px-2 py-1.5 text-xs capitalize ${mode===m?"bg-card text-foreground shadow-sm":"text-muted-foreground"}`} onClick={()=>{setMode(m);setTheme(m);}}>{m}</button>)}</div>
      </CardHeader>
      <CardContent className="space-y-5 pt-4 pb-4">
        {themeTokenGroups.map((group)=><div key={group.label}><p className="mb-2 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">{group.label}</p><div className="space-y-2">
          {group.tokens.map(([token,label])=><div key={token} className="flex items-center gap-2">
            <input type="color" defaultValue={palettes[mode][token]} aria-label={label + " color"} className="size-8 cursor-pointer rounded-md border border-border p-0.5" ref={(node)=>{ const key = mode + ":" + token; if (node) colorInputs.current.set(key, node); else colorInputs.current.delete(key); }} onChange={(event)=>queueTokenUpdate(token as ThemeToken, event.currentTarget.value)}/>
            <span className="min-w-0 flex-1"><span className="block text-xs font-medium">{label}</span><span className="block truncate font-mono text-[10px] text-muted-foreground">--theme-{token}</span></span>
            <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">{palettes[mode][token] !== defaultThemePalettes[mode][token] && <span title="Modified from the original theme" aria-label="Modified from the original theme" className="size-2 shrink-0 rounded-full bg-primary" />}<span>{palettes[mode][token]}</span></span>
            <Button type="button" variant="ghost" size="icon-xs" aria-label={"Reset " + label} title={"Reset " + label} onClick={()=>{cancelTokenUpdate(token as ThemeToken);resetToken(mode, token as ThemeToken)}}><RotateCcw/></Button>
          </div>)}
        </div></div>)}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-4"><div className="flex gap-2"><Button variant="outline" size="sm" onClick={()=>{debounceTimers.current.forEach((timer)=>clearTimeout(timer));debounceTimers.current.clear();reset()}}><RotateCcw/> Reset</Button><Button variant="outline" size="sm" onClick={copyVariables}>{copied ? <Check/> : <Clipboard/>}{copied ? "Copied" : "Copy"}</Button></div><button type="button" className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground" onClick={()=>setEnabled(false)}>Disable widget</button></div>
      </CardContent>
    </Card>}
    <Button size="icon-lg" className="ml-auto rounded-full shadow-lg" aria-label={open ? "Close theme builder" : "Open theme builder"} onClick={()=>setOpen((value)=>!value)}><Palette/></Button>
  </div>;
}
