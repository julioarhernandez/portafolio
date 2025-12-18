"use client";

import { memo, useState } from "react";

import { RenderHighlight } from "@/components/playground/render-highlight";
import { Button } from "@/components/ui/button";

function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);

  return (
    <RenderHighlight label={label}>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-semibold tabular-nums">{count}</span>
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c - 1)}>
          −
        </Button>
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </div>
    </RenderHighlight>
  );
}

function PlainChild({ label }: { label: string }) {
  return (
    <RenderHighlight label={label}>
      <p className="text-sm text-muted-foreground">
        No props changed, but I still re-render with my parent.
      </p>
    </RenderHighlight>
  );
}

const MemoChild = memo(function MemoChild({ label }: { label: string }) {
  return (
    <RenderHighlight label={label}>
      <p className="text-sm text-muted-foreground">
        Wrapped in React.memo — I skip re-rendering since my props didn&apos;t change.
      </p>
    </RenderHighlight>
  );
});

function LiftedState() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Parent count:</span>
        <span className="text-lg font-semibold tabular-nums">{count}</span>
        <Button size="sm" variant="outline" onClick={() => setCount((c) => c + 1)}>
          Re-render parent
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <PlainChild label="Plain child" />
        <MemoChild label="React.memo child" />
      </div>
    </div>
  );
}

export function ReactStateDemo() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-lg font-semibold">Independent state</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Each counter owns its own state. Clicking one only re-renders that component — watch the
          render counts and the highlight flash.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Counter label="Counter A" />
          <Counter label="Counter B" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Lifted state &amp; React.memo</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Re-rendering the parent re-renders every child by default — unless that child is wrapped
          in <code className="rounded bg-muted px-1 py-0.5 text-xs">React.memo</code> and its props
          haven&apos;t changed.
        </p>
        <div className="mt-4">
          <LiftedState />
        </div>
      </div>
    </div>
  );
}
