"use client";

import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { additionalSkills, featuredSkills } from "@/lib/site-config";

const badgeColors = [
  "theme-badge-accent",
  "theme-badge-primary",
  "theme-badge-border",
  "theme-badge-secondary",
];

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Skills &amp; technology
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          A practical mix of front-end engineering, product tooling, and design
          systems.
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <Card>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[minmax(13rem,19rem)_1fr]">
              <div className="border-b md:border-r md:border-b-0">
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <p className="text-sm font-medium text-muted-foreground">
                    01
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">
                    Core stack
                  </h3>
                </div>
                <div className="border-t px-6 py-6 sm:px-8 sm:py-8">
                  <p className="text-sm font-medium text-muted-foreground">
                    02
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">
                    Additional skills
                  </h3>
                </div>
              </div>
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    01 Core stack
                  </h3>
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Core stack technologies"
                  >
                    {featuredSkills.map((skill, index) => (
                      <li key={skill}>
                        <Badge
                          variant="outline"
                          className={`h-9 border px-3 text-sm ${badgeColors[index % badgeColors.length]}`}
                        >
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 border-t pt-8">
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    02 Additional skills
                  </h3>
                  <div id="additional-skills-list" hidden={!isExpanded}>
                    <ul
                      className="mt-5 flex flex-wrap gap-2"
                      aria-label="Additional technologies and tools"
                    >
                      {additionalSkills.map((skill, index) => (
                        <li key={skill}>
                          <Badge
                            variant="outline"
                            className={`h-9 border px-3 text-sm ${badgeColors[(index + featuredSkills.length) % badgeColors.length]}`}
                          >
                            {skill}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                    className="mt-6 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-expanded={isExpanded}
                    aria-controls="additional-skills-list"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}
