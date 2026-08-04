import { Calculator, LayoutDashboard, Component, Trophy } from "lucide-react";

import type { ProjectIcon } from "@/types";

function hashIndex(input: string) {
  let hash = 0;
  for (const char of input) hash = (hash * 31 + char.charCodeAt(0)) % 3;
  return hash;
}

const iconMap: Record<ProjectIcon, typeof Calculator> = {
  calculator: Calculator,
  component: Component,
  trophy: Trophy,
  "layout-dashboard": LayoutDashboard,
};

export function ProjectImagePlaceholder({ name, icon }: { name: string; icon: ProjectIcon }) {
  const gradientClass = [
    "project-gradient-primary-accent",
    "project-gradient-accent-border",
    "project-gradient-border-primary",
  ][hashIndex(name)];
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
