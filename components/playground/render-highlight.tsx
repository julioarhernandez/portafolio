"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RenderHighlight({ children, label }: { children: ReactNode; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countLabelRef = useRef<HTMLSpanElement>(null);
  const renderCount = useRef(0);

  // Runs after every commit. Mutates refs and the DOM directly (not React
  // state) so re-renders here can't cascade into another render — exactly
  // the kind of imperative DOM sync effects are meant for.
  useEffect(() => {
    renderCount.current += 1;

    if (countLabelRef.current) {
      countLabelRef.current.textContent = `Renders: ${renderCount.current}`;
    }

    const el = containerRef.current;
    if (el && renderCount.current > 1) {
      el.classList.remove("animate-render-flash");
      void el.offsetWidth; // force reflow so the animation restarts
      el.classList.add("animate-render-flash");
    }
  });

  return (
    <div ref={containerRef} className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span ref={countLabelRef}>Renders: 0</span>
      </div>
      {children}
    </div>
  );
}
