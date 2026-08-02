import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/types";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <RevealItem>
      <Card>
        <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-base font-semibold">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.company}</p>
          </div>
          <p className="text-sm text-muted-foreground">{item.period}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{item.summary}</p>

          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <details className="group/details border-t pt-3">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
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
        </CardContent>
      </Card>
    </RevealItem>
  );
}
