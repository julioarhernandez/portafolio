import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/types";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <RevealItem className="relative pl-8 sm:pl-10">
      <span aria-hidden="true" className="absolute top-1 left-0 size-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_1px_var(--primary)]" />
      <article>
        <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-base font-semibold leading-tight sm:text-lg">{item.role}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
          </div>
          <p className="text-sm font-medium text-muted-foreground sm:shrink-0">{item.period}</p>
        </header>

        <p className="mt-2 max-w-5xl text-sm leading-6 text-muted-foreground">{item.summary}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-card text-xs text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>

        <details className="group/details mt-4 border-t border-border/70 pt-3">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1 text-sm font-medium text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <span className="group-open/details:hidden">Know more</span>
            <span className="hidden group-open/details:inline">Show less</span>
            <ChevronDown className="size-4 transition-transform group-open/details:rotate-180" />
          </summary>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Responsibilities
              </h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
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
        </details>
      </article>
    </RevealItem>
  );
}
