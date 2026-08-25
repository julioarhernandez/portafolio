"use client";

import { useState } from "react";

import { Collapse } from "@/components/motion/collapse";
import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/types";

function renderWithBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  return (
    <RevealItem className="relative pl-8 sm:pl-0">
      <span
        aria-hidden="true"
        className="absolute top-1 left-4 size-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_1px_var(--primary)] sm:left-[10.5rem]"
      />
      <article className="sm:flex sm:items-start sm:gap-6">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase sm:w-36 sm:shrink-0 sm:pt-1 sm:text-right sm:text-sm sm:normal-case sm:whitespace-nowrap">
          {item.period}
        </p>

        <div className="hidden sm:block sm:w-4 sm:shrink-0" aria-hidden="true" />

        <div className="mt-1 sm:mt-0 sm:w-36 sm:shrink-0 sm:pt-1">
          <span className="inline-block rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground">
            {item.company}
          </span>
        </div>

        <div className="mt-2 flex-1 sm:mt-0">
        <h3 className="text-base font-semibold leading-tight sm:text-lg">
          {item.role}
        </h3>

        <p className="mt-2 hidden max-w-5xl text-sm leading-6 text-muted-foreground sm:block">
          {item.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-secondary text-xs text-secondary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-4 border-t border-border/70 pt-3">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex w-fit items-center gap-1 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {open ? "Show less" : "Know more"}
            <ChevronDown className={"size-4 transition-transform duration-200 " + (open ? "rotate-180" : "")} />
          </button>

          <Collapse open={open}>
            <div className="space-y-4 pt-4">
              <p className="max-w-5xl text-sm leading-6 text-muted-foreground sm:hidden">
                {item.summary}
              </p>
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Responsibilities
                </h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{renderWithBold(responsibility)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Highlights
                </h4>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapse>
        </div>
        </div>
      </article>
    </RevealItem>
  );
}
