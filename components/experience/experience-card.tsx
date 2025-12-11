import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {item.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>

          <ul className="list-disc space-y-1 pl-5 text-sm">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </RevealItem>
  );
}
