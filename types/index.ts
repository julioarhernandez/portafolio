export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  keyDecisions: string[];
  repoUrl?: string;
  demoUrl?: string;
};
