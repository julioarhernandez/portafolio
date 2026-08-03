export const THEME_BUILDER_STORAGE_KEY = "portfolio-theme-builder-v1";

export type ThemeMode = "light" | "dark";
export type ThemeToken =
  | "background" | "surface" | "foreground" | "muted-surface" | "muted-foreground"
  | "primary" | "primary-foreground" | "secondary" | "secondary-foreground"
  | "accent" | "accent-foreground" | "border" | "destructive" | "destructive-foreground" | "highlight";

export type ThemePalette = Record<ThemeToken, string>;
export type ThemePalettes = Record<ThemeMode, ThemePalette>;
export type ThemeBuilderStorage = { enabled: boolean; palettes: ThemePalettes };

export const themeTokenGroups: Array<{ label: string; tokens: Array<[ThemeToken, string]> }> = [
  { label: "Foundation", tokens: [["background","Background"],["surface","Surface"],["foreground","Foreground"],["muted-surface","Muted surface"],["muted-foreground","Muted text"],["border","Border"]] },
  { label: "Actions", tokens: [["primary","Primary"],["primary-foreground","Primary text"],["secondary","Secondary"],["secondary-foreground","Secondary text"],["accent","Accent"],["accent-foreground","Accent text"]] },
  { label: "Feedback", tokens: [["destructive","Destructive"],["destructive-foreground","Destructive text"],["highlight","Highlight"]] },
];

export const defaultThemePalettes: ThemePalettes = {
  light: { background:"#fbf7f1", surface:"#fffdfa", foreground:"#132d50", "muted-surface":"#f3ebe1", "muted-foreground":"#5c6570", primary:"#b84d2e", "primary-foreground":"#fffaf4", secondary:"#eadfce", "secondary-foreground":"#132d50", accent:"#d8794f", "accent-foreground":"#132d50", border:"#dfd2c5", destructive:"#a63c28", "destructive-foreground":"#fffaf4", highlight:"#f2c7a9" },
  dark: { background:"#000000", surface:"#1d3a5a", foreground:"#fffaf4", "muted-surface":"#244564", "muted-foreground":"#d8cbbb", primary:"#e17b56", "primary-foreground":"#132d50", secondary:"#b84d2e", "secondary-foreground":"#fffaf4", accent:"#d8794f", "accent-foreground":"#132d50", border:"#46627d", destructive:"#f2c7a9", "destructive-foreground":"#132d50", highlight:"#b84d2e" },
};

export const themePresets = [
  { label: "Citrus dusk", light: { background:"#fffaf0", surface:"#ffffff", foreground:"#25251f", primary:"#166534", "primary-foreground":"#f0fdf4", secondary:"#fef3c7", "secondary-foreground":"#713f12", accent:"#f59e0b", "accent-foreground":"#451a03", border:"#e7dfc6", highlight:"#fde68a" }, dark: { background:"#10130f", surface:"#1d2a1d", foreground:"#f7fee7", primary:"#86efac", "primary-foreground":"#14532d", secondary:"#365314", "secondary-foreground":"#ecfccb", accent:"#fbbf24", "accent-foreground":"#422006", border:"#3f5137", highlight:"#4d7c0f" } },
  { label: "Electric violet", light: { background:"#f8f7ff", surface:"#ffffff", foreground:"#211d38", primary:"#6d28d9", "primary-foreground":"#faf5ff", secondary:"#ede9fe", "secondary-foreground":"#4c1d95", accent:"#db2777", "accent-foreground":"#500724", border:"#ddd6fe", highlight:"#f5d0fe" }, dark: { background:"#100b1d", surface:"#251942", foreground:"#faf5ff", primary:"#c4b5fd", "primary-foreground":"#2e1065", secondary:"#4c1d95", "secondary-foreground":"#ede9fe", accent:"#f472b6", "accent-foreground":"#500724", border:"#5b3e86", highlight:"#86198f" } },
] satisfies Array<{ label: string; light: Partial<ThemePalette>; dark: Partial<ThemePalette> }>;

export function cloneThemePalettes(palettes: ThemePalettes): ThemePalettes {
  return { light: { ...palettes.light }, dark: { ...palettes.dark } };
}

export function serializeThemeVariables(palettes: ThemePalettes): string {
  const block = (mode: ThemeMode) => Object.entries(palettes[mode]).map(([token, value]) => "  --theme-" + token + ": " + value + ";").join("\n");
  return ":root {\n" + block("light") + "\n}\n\n.dark {\n" + block("dark") + "\n}";
}


export function isThemeBuilderStorage(value: unknown): value is ThemeBuilderStorage {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ThemeBuilderStorage>;
  return typeof candidate.enabled === "boolean" && !!candidate.palettes?.light && !!candidate.palettes?.dark;
}
