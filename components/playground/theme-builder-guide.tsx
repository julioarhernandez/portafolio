"use client";

import { useThemeBuilder } from "@/components/layout/theme-builder-provider";
import { useState } from "react";

export function ThemeBuilderGuide() {
  const { enabled, setEnabled } = useThemeBuilder();
  const [checked, setChecked] = useState(enabled);
  const toggle = (next: boolean) => { setChecked(next); setEnabled(next); };

  return <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-pre:bg-muted">
    <h2>Activate the floating builder</h2>
    <p>Turn on the builder to add a compact palette launcher to every page. Changes apply to the active light or dark theme immediately and are saved in this browser.</p>
    <label className="not-prose flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm shadow-sm">
      <input type="checkbox" checked={checked} onChange={(event)=>toggle(event.target.checked)} className="size-4 accent-primary" />
      <span><span className="block font-medium">Activate Theme Builder widget</span><span className="block text-xs text-muted-foreground">The floating palette controls will remain available while you browse.</span></span>
    </label>
  </div>;
}
