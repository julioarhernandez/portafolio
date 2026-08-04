import { Calculator, LayoutDashboard, Component, Trophy } from "lucide-react";

import type { ProjectIcon } from "@/types";

const gradientClasses = [
  "project-gradient-primary-accent",
  "project-gradient-accent-border",
  "project-gradient-border-primary",
  "project-gradient-teal",
];

const iconMap: Record<ProjectIcon, typeof Calculator> = {
  calculator: Calculator,
  component: Component,
  trophy: Trophy,
  "layout-dashboard": LayoutDashboard,
};

export function ProjectImagePlaceholder({
  icon,
  index,
}: {
  icon: ProjectIcon;
  index: number;
}) {
  const gradientClass = gradientClasses[index % gradientClasses.length];
  const Icon = iconMap[icon];

  return (
    <div
      className={`${gradientClass} flex aspect-video items-center justify-start px-5`}
      aria-hidden="true"
    >
      <Icon className="size-10 text-primary-foreground/90" strokeWidth={1.75} />
    </div>
  );
}
