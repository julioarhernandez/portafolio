import { Code2, Globe, Rocket, Users } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { aboutQuote, aboutStats, siteConfig } from "@/lib/site-config";

const statIconMap = {
  code: Code2,
  rocket: Rocket,
  users: Users,
  globe: Globe,
} as const;

function DotGrid() {
  return (
    <div className="inline-grid grid-cols-6 gap-x-4 gap-y-2" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i} className="size-1.5 rounded-full bg-primary/40" />
      ))}
    </div>
  );
}

export function AboutSection() {
  const [before, after] = aboutQuote.text.split(aboutQuote.highlight);

  return (
    <section id="about" tabIndex={-1} className="relative overflow-hidden border-b border-border/70 bg-secondary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 -z-10 size-[26rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 -z-10 size-56 rounded-full bg-primary/15 blur-2xl"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">About Me</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          <Reveal className="relative">
            <blockquote className="font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl">
              &ldquo;{before}
              <span className="text-primary">{aboutQuote.highlight}</span>
              {after}&rdquo;
            </blockquote>
            <div className="mt-12">
              <DotGrid />
            </div>

            <Reveal className="mt-8 grid grid-cols-2 gap-4">
              {aboutStats.map((stat) => {
                const Icon = statIconMap[stat.icon];
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/70 bg-card/60 p-4"
                  >
                    <Icon className="size-5 text-primary" strokeWidth={1.75} />
                    <p className="mt-4 font-display text-2xl font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </Reveal>
          </Reveal>

          <div>
            <Reveal>
              <div className="max-w-xl space-y-4 text-muted-foreground">
                {siteConfig.about.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
