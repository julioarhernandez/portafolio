export const playgroundDemos = [
  { slug: "react-state", title: "React State & Rendering", description: "useState, re-render behavior, and how React.memo changes what re-renders." },
  { slug: "typescript-patterns", title: "TypeScript Patterns", description: "Types, interfaces, generics, utility types, and inference - annotated examples." },
  { slug: "crud-demo", title: "Full-Stack CRUD", description: "A minimal notes app: React UI -> API route -> Prisma -> Postgres, visualized live." },
  { slug: "theme-builder", title: "Theme Builder", description: "Tune light and dark semantic colors and watch a portfolio UI update in real time." },
] as const;

export type PlaygroundDemo = (typeof playgroundDemos)[number];
