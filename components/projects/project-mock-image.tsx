import { Calculator, Component, LayoutDashboard, Trophy } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProjectIcon } from "@/types";

export const projectGradientClasses = [
  "project-gradient-primary-accent",
  "project-gradient-accent-border",
  "project-gradient-border-primary",
  "project-gradient-teal",
];

export const projectSurfaceClasses = [
  "project-surface-primary-accent",
  "project-surface-accent-border",
  "project-surface-border-primary",
  "project-surface-teal",
];

const iconMap: Record<ProjectIcon, typeof Calculator> = {
  calculator: Calculator,
  component: Component,
  trophy: Trophy,
  "layout-dashboard": LayoutDashboard,
};

/** Mock preview graphic — swap for a real project screenshot when available. */
export function ProjectMockImage({
  icon,
  index,
  className,
}: {
  icon: ProjectIcon;
  index: number;
  className?: string;
}) {
  const gradientClass = projectGradientClasses[index % projectGradientClasses.length];
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        gradientClass,
        "flex items-center justify-center rounded-2xl shadow-lg ring-1 ring-foreground/10",
        className
      )}
      aria-hidden="true"
    >
      <Icon className="size-10 text-primary-foreground/90" strokeWidth={1.5} />
    </div>
  );
}
