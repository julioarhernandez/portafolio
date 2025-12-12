function hashHue(input: string) {
  let hash = 0;
  for (const char of input) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return hash;
}

export function ProjectImagePlaceholder({ name }: { name: string }) {
  const hue = hashHue(name);

  return (
    <div
      className="flex aspect-video items-center justify-center text-4xl font-semibold text-white/90"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 45%), hsl(${(hue + 40) % 360} 70% 35%))`,
      }}
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
