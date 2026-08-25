import { Code2, Component, Lightbulb } from "lucide-react";

import { Reveal, RevealItem } from "@/components/motion/reveal";
import { capabilities } from "@/lib/site-config";

const capabilityIconMap = {
  lightbulb: Lightbulb,
  component: Component,
  code: Code2,
} as const;

const cardTints = [
  "bg-[color-mix(in_srgb,var(--primary)_8%,var(--card))]",
  "bg-[color-mix(in_srgb,var(--secondary)_70%,var(--card))]",
  "bg-[color-mix(in_srgb,var(--primary)_5%,var(--secondary))]",
] as const;

export function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="mb-2">
            <h2 className="section-heading font-heading text-xl font-semibold uppercase tracking-wide text-primary sm:text-2xl">
              Capabilities
            </h2>
            <span aria-hidden="true" className="mt-3 block h-1 w-10 bg-primary" />
          </div>
        </Reveal>

        <Reveal stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIconMap[capability.icon];
            return (
              <RevealItem
                key={capability.title}
                className={`relative flex flex-col rounded-3xl border border-border/60 p-8 ${cardTints[index % cardTints.length]}`}
              >
                <span className="font-display text-5xl font-semibold tracking-tight text-foreground/25 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-primary/60" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 flex size-16 items-center justify-center self-end rounded-full bg-card shadow-sm">
                  <Icon className="size-7 text-primary" strokeWidth={1.75} />
                </span>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
