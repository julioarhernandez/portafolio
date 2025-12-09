// TODO: replace with your real info. This file is the single source of
// truth for the placeholder identity/content used across the site.
import type { ExperienceItem, NavItem, Project, SkillCategory, SocialLink } from "@/types";

export const siteConfig = {
  name: "Jane Doe",
  title: "Senior Software Engineer",
  tagline:
    "I build fast, accessible, and maintainable web applications — from React interfaces to the APIs and databases behind them.",
  about: [
    "I'm a software engineer with a decade of experience shipping production web applications, with a focus on the modern React/Next.js ecosystem and the full stack behind it.",
    "My day-to-day spans building accessible, performant frontends in React, TypeScript, and Tailwind, and designing the Node.js APIs, PostgreSQL schemas, and cloud infrastructure that support them.",
    "I care most about clean architecture, readable code, and building software that stays easy to change as requirements evolve — not just software that works today.",
  ],
  email: "hello@example.com",
  location: "Remote",
  resumeUrl: "/resume.pdf",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Playground", href: "/playground" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/your-username", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Acme Software Co.",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    summary:
      "Lead frontend architecture for a B2B SaaS platform, owning the migration from a legacy SPA to Next.js.",
    responsibilities: [
      "Design and build core product features end-to-end, from database schema to UI",
      "Own the Next.js App Router migration and the component library it's built on",
      "Mentor mid-level engineers through code review and architecture discussions",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    achievements: [
      "Cut median page load time by 40% after migrating to the App Router with streaming SSR",
      "Introduced a shared component library that reduced new-feature build time by ~30%",
    ],
  },
  {
    company: "Northwind Digital",
    role: "Software Engineer",
    period: "2019 — 2022",
    summary:
      "Full-stack engineer on a small team building customer-facing dashboards and internal tooling.",
    responsibilities: [
      "Built REST APIs and background jobs powering real-time analytics dashboards",
      "Implemented CI/CD pipelines to automate testing and deployment",
      "Partnered directly with design and product to scope and ship features",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
    achievements: [
      "Rebuilt the analytics pipeline, cutting dashboard load times from ~8s to under 1s",
      "Rolled out automated CI/CD, reducing deploy time from 45 minutes to 5",
    ],
  },
  {
    company: "Bright Labs",
    role: "Junior Developer",
    period: "2017 — 2019",
    summary: "Started my career building and maintaining marketing sites and internal tools.",
    responsibilities: [
      "Built responsive marketing pages from design mockups",
      "Maintained and extended an internal admin tool used by the operations team",
    ],
    technologies: ["JavaScript", "React", "CSS"],
    achievements: ["Became the go-to engineer for accessibility fixes across the marketing site"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "Cloud Platforms", "CI/CD"],
  },
  {
    title: "Architecture",
    skills: ["Component Design", "State Management", "Performance Optimization", "Clean Code"],
  },
];

export const projects: Project[] = [
  {
    slug: "realtime-dashboard",
    name: "Realtime Analytics Dashboard",
    description:
      "A customer-facing analytics dashboard with live-updating charts, built to replace a slow, polling-based legacy version.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    keyDecisions: [
      "Chose server-sent events over WebSockets for one-way data flow, simplifying the client",
      "Pre-aggregated metrics in Postgres materialized views to keep query latency low at scale",
    ],
    repoUrl: "https://github.com/your-username/realtime-dashboard",
    demoUrl: "https://example.com",
  },
  {
    slug: "design-system",
    name: "Component Design System",
    description:
      "An internal React component library and documentation site used across three product teams.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    keyDecisions: [
      "Built on top of unstyled primitives (Base UI) for accessibility, layering on a consistent design language",
      "Used CVA for variant styling so components stay type-safe and easy to extend",
    ],
    repoUrl: "https://github.com/your-username/design-system",
  },
  {
    slug: "task-tracker-api",
    name: "Task Tracker API",
    description:
      "A REST API for a small project-management tool, with auth, role-based permissions, and webhook support.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    keyDecisions: [
      "Modeled permissions as a small policy layer instead of scattering role checks through route handlers",
      "Containerized the app early so local dev matched production from day one",
    ],
    repoUrl: "https://github.com/your-username/task-tracker-api",
  },
  {
    slug: "portfolio-site",
    name: "This Portfolio Site",
    description:
      "This site: a Next.js portfolio with a live contact form, a full-stack CRUD demo, and an engineering playground.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion"],
    keyDecisions: [
      "Kept the whole stack file-based and dependency-light rather than reaching for a CMS or admin panel",
      "Used Route Handlers (not Server Actions) for the CRUD demo so the client → API → DB flow stays visible",
    ],
    repoUrl: "https://github.com/your-username/portfolio",
  },
];
