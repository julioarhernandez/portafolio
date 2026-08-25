"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { GithubIcon } from "@/components/layout/brand-icons";
import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function FeaturedProjectCard({ project }: { project: Project }) {
  const primaryHref = project.demoUrl ?? project.repoUrl;

  return (
    <RevealItem>
      <div className="gradient-border relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl ring-1 ring-foreground/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8px 8px, color-mix(in srgb, var(--primary-foreground) 25%, transparent) 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(to left, black, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10 lg:p-12">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-foreground/70 uppercase">
              Featured case study
            </span>
            <h3 className="font-display mt-3 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/80 sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-5 text-sm font-medium">
              {primaryHref && (
                <Link
                  href={primaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-primary-foreground transition-opacity hover:opacity-80"
                >
                  View case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <GithubIcon className="size-4" />
                  Repo
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-card p-5 text-card-foreground shadow-2xl ring-1 ring-foreground/10 sm:p-6">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Key engineering decisions
              </p>
              <ul className="mt-4 space-y-3">
                {project.keyDecisions.map((decision) => (
                  <li key={decision} className="flex gap-2.5 text-sm">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="absolute -right-4 -bottom-4 -z-10 size-24 rounded-2xl bg-accent/60 sm:-right-6 sm:-bottom-6 sm:size-32"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </RevealItem>
  );
}
