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
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Engineering Playground
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A few small, interactive demos exploring how React, TypeScript, and the full stack
          actually behave — not just describing it.
        </p>
      </Reveal>
      <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {playgroundDemos.map((demo) => (
          <PlaygroundCard key={demo.slug} demo={demo} />
        ))}
      </Reveal>
    </section>
  );
}
