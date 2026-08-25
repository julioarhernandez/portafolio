"use client";

import { ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { GithubIcon } from "@/components/layout/brand-icons";
import { Collapse } from "@/components/motion/collapse";
import { RevealItem } from "@/components/motion/reveal";
import { ProjectMockImage, projectSurfaceClasses } from "@/components/projects/project-mock-image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const surfaceClass = projectSurfaceClasses[index % projectSurfaceClasses.length];
  const primaryHref = project.demoUrl ?? project.repoUrl;

  return (
    <RevealItem>
      <div
        className={`${surfaceClass} gradient-border flex h-full flex-col gap-6 rounded-2xl p-6 ring-1 ring-foreground/10 sm:flex-row sm:items-center`}
      >
        <div className="flex flex-1 flex-col">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Product
          </span>
          <h3 className="font-display mt-2 text-xl leading-tight font-semibold text-balance">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

          <div>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="mt-3 flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
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

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-card/90 text-foreground ring-1 ring-foreground/10"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4 text-sm">
            {primaryHref && (
              <Link
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground hover:opacity-80"
              >
                View project
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            )}
            {project.demoUrl && project.repoUrl && (
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
          </div>
        </div>

        <ProjectMockImage
          icon={project.icon}
          index={index}
          className="h-40 w-full sm:h-44 sm:w-36"
        />
      </div>
    </RevealItem>
  );
}
