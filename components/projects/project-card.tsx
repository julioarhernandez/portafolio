"use client";

import { ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { GithubIcon } from "@/components/layout/brand-icons";
import { Collapse } from "@/components/motion/collapse";
import { RevealItem } from "@/components/motion/reveal";
import { ProjectImagePlaceholder } from "@/components/projects/project-image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <RevealItem>
      <Card className="h-full py-0">
        <ProjectImagePlaceholder name={project.name} />
        <CardHeader className="mt-4">
          <CardTitle className="text-base">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col space-y-4 pb-5">
          <p className="text-sm text-muted-foreground">{project.description}</p>

          <div>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="underline underline-offset-2">Key engineering decisions</span>
              <ChevronDown
                className={"size-3.5 transition-transform duration-200 " + (open ? "rotate-180" : "")}
                aria-hidden="true"
              />
            </button>
            <Collapse open={open}>
              <ul className="list-disc space-y-1 pt-2 pl-5 text-sm">
                {project.keyDecisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </Collapse>
          </div>

          <div className="mt-auto space-y-4">
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
          </div>
        </CardContent>
      </Card>
    </RevealItem>
  );
}
