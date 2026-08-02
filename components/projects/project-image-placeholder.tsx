function hashIndex(input: string) {
  let hash = 0;
  for (const char of input) hash = (hash * 31 + char.charCodeAt(0)) % 3;
  return hash;
}

export function ProjectImagePlaceholder({ name }: { name: string }) {
  const gradient = [
    ["#c84b31", "#a5c9ca"],
    ["#a5c9ca", "#d9bf77"],
    ["#d9bf77", "#c84b31"],
  ][hashIndex(name)];

  return (
    <div
      className="flex aspect-video items-center justify-center text-4xl font-semibold text-white/90"
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
