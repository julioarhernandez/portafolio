"use client";

import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { additionalSkills, featuredSkills } from "@/lib/site-config";

const badgeColors = [
  "border-accent/70 bg-accent/35 text-accent-foreground",
  "border-primary/45 bg-primary/10 text-primary",
  "border-border bg-muted text-foreground",
  "border-secondary bg-secondary text-secondary-foreground",
];

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const skills = isExpanded ? [...featuredSkills, ...additionalSkills] : featuredSkills;

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Skills &amp; technology
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          A practical mix of front-end engineering, product tooling, and design systems.
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`h-7 border px-3 text-sm ${badgeColors[index % badgeColors.length]}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              {!isExpanded && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-20 items-end justify-center bg-gradient-to-t from-card via-card/90 to-transparent pb-0">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(true)}
                    className="pointer-events-auto rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-expanded="false"
                  >
                    Show more
                  </button>
                </div>
              )}
            </div>
            {isExpanded && (
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="mt-6 text-sm font-medium text-muted-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-expanded="true"
              >
                Show less
              </button>
            )}
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
