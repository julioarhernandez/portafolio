import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { GithubIcon } from "@/components/layout/brand-icons";
import { RevealItem } from "@/components/motion/reveal";
import { ProjectImagePlaceholder } from "@/components/projects/project-image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <RevealItem>
      <Card className="h-full py-0">
        <ProjectImagePlaceholder name={project.name} />
        <CardHeader className="mt-4">
          <CardTitle className="text-base">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{project.description}</p>

          <div>
            <p className="text-xs font-medium text-muted-foreground">Key engineering decisions</p>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm">
              {project.keyDecisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-1 text-sm">
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                Repo
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                Demo
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </RevealItem>
  );
}
