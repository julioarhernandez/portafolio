function hashIndex(input: string) {
  let hash = 0;
  for (const char of input) hash = (hash * 31 + char.charCodeAt(0)) % 3;
  return hash;
}

export function ProjectImagePlaceholder({ name }: { name: string }) {
  const gradientClass = [
    "project-gradient-primary-accent",
    "project-gradient-accent-border",
    "project-gradient-border-primary",
  ][hashIndex(name)];

  return (
    <div
      className={`${gradientClass} flex aspect-video items-center justify-start px-5 font-display text-5xl font-medium text-primary-foreground/90`}
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
