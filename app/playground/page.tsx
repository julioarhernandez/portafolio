import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { PlaygroundCard } from "@/components/playground/playground-card";
import { playgroundDemos } from "@/lib/playground-config";

export const metadata: Metadata = {
  title: "Engineering Playground",
  description: "Interactive demos exploring React, TypeScript, and full-stack patterns.",
};

export default function PlaygroundPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Engineering Playground
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          A few small, interactive demos exploring how React, TypeScript, and the full stack
          actually behave — not just describing it.
        </p>
      </Reveal>
      <Reveal stagger className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {playgroundDemos.map((demo) => (
          <PlaygroundCard key={demo.slug} demo={demo} />
        ))}
      </Reveal>
    </section>
  );
}
