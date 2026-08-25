"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { additionalSkills, featuredSkills } from "@/lib/site-config";

const MAX_VISIBLE_SKILLS = 10;
const badgeColors = [
  "theme-badge-accent",
  "theme-badge-primary",
  "theme-badge-border",
  "theme-badge-secondary",
];

export function SkillsSection() {
  const [isCoreExpanded, setIsCoreExpanded] = useState(false);
  const [isAdditionalExpanded, setIsAdditionalExpanded] = useState(false);

  return (
    <section id="skills" tabIndex={-1} className="border-b border-border/70 bg-secondary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="section-heading font-heading text-xl font-semibold uppercase tracking-wide text-primary sm:text-2xl">
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
              <div className="border-b px-6 py-8 sm:px-8 md:border-r md:py-14">
                <p className="text-sm font-medium text-muted-foreground">01</p>
                <h3
                  id="core-stack-heading"
                  className="mt-4 font-display text-2xl font-medium tracking-tight"
                >
                  Core stack
                </h3>
              </div>
              <div className="border-b px-6 py-8 sm:px-8 md:border-b">
                <ul
                  id="core-stack-list"
                  className="flex flex-wrap gap-2"
                  aria-labelledby="core-stack-heading"
                >
                  {featuredSkills.slice(0, MAX_VISIBLE_SKILLS).map((skill, index) => (
                    <li key={skill}>
                      <Badge
                        variant="outline"
                        className={"h-9 border px-3 text-sm " + badgeColors[index % badgeColors.length]}
                      >
                        {skill}
                      </Badge>
                    </li>
                  ))}
                  <AnimatePresence initial={false}>
                    {isCoreExpanded &&
                      featuredSkills.slice(MAX_VISIBLE_SKILLS).map((skill, index) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Badge
                            variant="outline"
                            className={"h-9 border px-3 text-sm " + badgeColors[(index + MAX_VISIBLE_SKILLS) % badgeColors.length]}
                          >
                            {skill}
                          </Badge>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>
                {featuredSkills.length > MAX_VISIBLE_SKILLS && (
                  <button
                    type="button"
                    onClick={() => setIsCoreExpanded((expanded) => !expanded)}
                    className="mt-7 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-expanded={isCoreExpanded}
                    aria-controls="core-stack-list"
                  >
                    {isCoreExpanded ? "Show less" : "Show more"}
                    <ChevronDown className={"ml-1 inline-block size-4 transition-transform duration-200 " + (isCoreExpanded ? "rotate-180" : "")} aria-hidden="true" />
                  </button>
                )}
              </div>
              <div className="border-b px-6 py-8 sm:px-8 md:border-r md:border-b-0 md:py-14">
                <p className="text-sm font-medium text-muted-foreground">02</p>
                <h3
                  id="additional-skills-heading"
                  className="mt-4 font-display text-2xl font-medium tracking-tight"
                >
                  Additional skills
                </h3>
              </div>
              <div className="px-6 py-8 sm:px-8 md:py-8">
                <ul
                  id="additional-skills-list"
                  className="flex flex-wrap gap-2"
                  aria-labelledby="additional-skills-heading"
                >
                  {additionalSkills.slice(0, MAX_VISIBLE_SKILLS).map((skill, index) => (
                    <li key={skill}>
                      <Badge
                        variant="outline"
                        className={"h-9 border px-3 text-sm " + badgeColors[(index + featuredSkills.length) % badgeColors.length]}
                      >
                        {skill}
                      </Badge>
                    </li>
                  ))}
                  <AnimatePresence initial={false}>
                    {isAdditionalExpanded &&
                      additionalSkills.slice(MAX_VISIBLE_SKILLS).map((skill, index) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Badge
                            variant="outline"
                            className={"h-9 border px-3 text-sm " + badgeColors[(index + MAX_VISIBLE_SKILLS + featuredSkills.length) % badgeColors.length]}
                          >
                            {skill}
                          </Badge>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>
                {additionalSkills.length > MAX_VISIBLE_SKILLS && (
                  <button
                    type="button"
                    onClick={() =>
                      setIsAdditionalExpanded((expanded) => !expanded)
                    }
                    className="mt-7 text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    aria-expanded={isAdditionalExpanded}
                    aria-controls="additional-skills-list"
                  >
                    {isAdditionalExpanded ? "Show less" : "Show more"}
                    <ChevronDown className={"ml-1 inline-block size-4 transition-transform duration-200 " + (isAdditionalExpanded ? "rotate-180" : "")} aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
      </div>
    </section>
  );
}
