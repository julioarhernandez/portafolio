export const playgroundDemos = [
  {
    slug: "react-state",
    title: "React State & Rendering",
    description: "useState, re-render behavior, and how React.memo changes what re-renders.",
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns",
    description: "Types, interfaces, generics, utility types, and inference — annotated examples.",
  },
  {
    slug: "crud-demo",
    title: "Full-Stack CRUD",
    description: "A minimal notes app: React UI → API route → Prisma → Postgres, visualized live.",
  },
] as const;

export type PlaygroundDemo = (typeof playgroundDemos)[number];
