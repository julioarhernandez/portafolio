import type { EducationItem, ExperienceItem, NavItem, Project, SocialLink } from "@/types";

export const siteConfig = {
  name: "Julio Rodriguez",
  title: "Software Engineer",
  tagline:
    "I build scalable, accessible, and high-performance web applications, combining strong engineering foundations with thoughtful user experiences.",
  about: [
    "I feel incredibly fortunate to have grown alongside the web and experienced one of the most exciting periods in software history, from the early days of static websites to today's intelligent, AI-powered platforms.",
    "I began my career working with PHP, ASP.NET, MySQL, HTML, CSS, jQuery, and MooTools. Those early years gave me a strong understanding of how the web works from the ground up, including databases, server-side development, browser compatibility, user experience, and performance.",
    "As the industry evolved through AJAX, modern JavaScript, Node.js, React, APIs, cloud platforms, component-based architectures, and design systems, I evolved with it. I've always approached new technologies with curiosity and a genuine excitement for learning.",
    "I care deeply about the details users may not always see but definitely feel: performance, SEO, Core Web Vitals, Progressive Web Apps, accessibility, and reliability. Throughout my career, I've helped build booking, marketing, and customer-facing applications for airlines, cruise companies, and consumer brands.",
    "Having witnessed the web evolve from its earliest foundations into the AI-driven era has been an incredible journey, and I'm still just as excited about what comes next.",
  ],
  email: "julior@duck.com",
  location: "Broward, FL",
  resumeUrl: "/resume.pdf",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Playground", href: "/playground" },
  { label: "Blog", href: "/blog" }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/julioarhernandez", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/julioarhernandez", icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Norwegian Cruise Line Holdings (NCLH)",
    role: "Senior UI/UX Developer",
    period: "Jul 2018 - Present",
    summary:
      "Lead front-end development for NCLH's booking and marketing platforms, translating design-system mockups into production Vue.js components at scale.",
    responsibilities: [
      "Develop and maintain DRY, reusable components in **Vue.js** and **TypeScript** integrated with the Soy templating layer",
      "Author and manage content components in **Adobe Experience Manager (AEM)**, building reusable templates and dialogs for editorial teams",
      "Contribute to a hybrid web component architecture (**TypeScript**, **Java**/**OSGi** services) for scalable, modular site rendering",
      "Translate **Figma**, Adobe XD, Photoshop, and Sketch/InVision mockups into pixel-perfect, interactive modules",
      "Use **Webpack**, ES6, jQuery, **SASS**, and **BEM** to build and bundle production front-end features",
      "Optimize for **SEO** and performance across booking and marketing surfaces",
    ],
    technologies: [
      "Vue.js",
      "TypeScript",
      "ES6",
      "Webpack",
      "SASS",
      "jQuery",
      "Adobe Experience Manager",
      "Java",
      "OSGi",
      "Web Components",
      "Figma",
    ],
    achievements: [
      "Sole owner of a component system spanning multiple booking and marketing surfaces, keeping design and engineering consistent across a long-running, high-traffic platform",
    ],
  },
  {
    company: "PROS (formerly Everymundo)",
    role: "Front-End Developer",
    period: "Dec 2016 - Jul 2018",
    summary:
      "Built customer-facing booking experiences for airline clients, replacing legacy Twig modules with a documented, reusable React component library.",
    responsibilities: [
      "Translated airline client mockups into pixel-perfect, accessible, **SEO**-ready websites",
      "Built **React** components (booking flows, price calendars, flight accordions) matching each client's brand identity",
      "Created a customizable style guide in **Storybook**, replacing legacy Twig-based modules",
      "Wrote unit and integration tests with **Karma**, **Mocha**, and **Chai**",
      "Implemented **Progressive Web App** features to improve airline site performance and UX",
    ],
    technologies: ["React", "JavaScript (ES6)", "Bootstrap", "Less", "Karma", "Mocha", "Chai"],
    achievements: [
      "Replaced legacy Twig templating with a reusable, Storybook-documented React component library used across multiple airline clients",
      "Shipped PWA capabilities that measurably improved load performance and user experience for airline booking sites",
    ],
  },
  {
    company: "LVMH OnBoard.com",
    role: "Front-End Developer",
    period: "Nov 2015 - Dec 2016",
    summary:
      "Converted PSD designs into interactive features on a Drupal CMS, with a strong focus on responsive design, SEO, and email campaign delivery.",
    responsibilities: [
      "Brought PSD designs and interactive features to life on a **Drupal** CMS using **AJAX** and **AngularJS**",
      "Built responsive layouts with **Bootstrap 3** and validated site health with MOZ, Google Insights, YellowLab, and WebPageTest",
      "Developed email campaigns using **Mailchimp** and **Mandrill**",
      "Introduced **service workers** and push notification features to the site",
    ],
    technologies: ["AngularJS", "Drupal", "Bootstrap 3", "AJAX", "Mailchimp", "Mandrill"],
    achievements: [
      "Introduced service worker and push notification support, an early PWA feature for the platform",
    ],
  },
  {
    company: "Original Impressions",
    role: "Web Developer",
    period: "May 2015 - Nov 2015",
    summary:
      "Developed and maintained websites for national and regional brands, alongside marketing artwork production.",
    responsibilities: [
      "Built and maintained customer websites for brands including Burger King, Club Med, Pollo Tropical, Handtevy, MapaTravel Group, and Gibraltar Bank",
      "Built and customized **WordPress** websites for clients, including theme and plugin development",
      "Developed custom back-end features for select clients using **Laravel**",
      "Prepared and customized artwork for marketing and advertising campaigns using the **Adobe Suite**",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "Laravel", "Adobe Suite"],
    achievements: ["Delivered web updates across six concurrent client accounts without missing a deadline"],
  },
  {
    company: "Independent / Freelance",
    role: "Front-End Developer",
    period: "2005 - Present",
    summary:
      "Ongoing freelance web design and development practice, from WordPress customization to modern React side projects.",
    responsibilities: [
      "Design and build websites for individual and small-business clients, including bizmarketing.us, dealby.us, and apggraphics.com",
      "Customize **WordPress** themes and plugins, and optimize sites for **SEO** and email marketing",
      "Build **React** side projects using Hooks, Redux, and the Context API",
      "Build static and JAMstack sites with **11ty**, **Astro**, and **Gatsby** for clients and personal projects",
    ],
    technologies: [
      "React",
      "WordPress",
      "JavaScript",
      "SEO",
      "11ty",
      "Astro",
      "Gatsby",
      "Node.js",
      "PHP",
      "Python",
      "Shopify (Liquid)",
    ],
    achievements: [
      "Maintained a two-decade freelance practice alongside full-time roles, staying hands-on with new frameworks and tooling",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Postgraduate Courses in Computer Networks and Network Administration",
    institution: "Central University of Las Villas",
    location: "Santa Clara, Villa Clara, Cuba",
    period: "2005 - 2007",
  },
  {
    degree: "Bachelor of Science in Telecommunications and Electronic Engineering",
    institution: "Central University of Las Villas",
    location: "Santa Clara, Villa Clara, Cuba",
    period: "2001 - 2006",
  },
];

export const featuredSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6)",
  "TypeScript",
  "React (Hooks)",
  "Vue.js",
  "SASS",
  "Figma",
  "Adobe Experience Manager",
  "PWA",
  "Node.js",
  "Webpack",
  "Git",
  "Atomic Design",
  "Framer Motion",
];

export const additionalSkills = [
  "JSON",
  "BEM",
  "jQuery",
  "jQuery UI",
  "Bootstrap",
  "GSAP",
  "Handlebars",
  "Gulp",
  "Jekyll",
  "Google Analytics",
  "Google Insights",
  "Mailchimp",
  "Mandrill",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Sketch",
  "InVision",
  "Java",
  "OSGi",
  "Svelte",
  "Gatsby",
  "LESS",
  "WordPress",
  "Alpine.js",
  "React Transition Group",
];
export const projects: Project[] = [
  {
    slug: "mortgage-calculator",
    name: "Mortgage Calculator & Refinance Planner",
    description:
      "A React + TypeScript app for modeling mortgage amortization, extra-payment strategies, refinancing, and external loan arbitrage, with interactive charts and tables.",
    technologies: ["React", "TypeScript", "Vite", "Recharts"],
    keyDecisions: [
      "Modeled amortization, refinance, and arbitrage calculations as pure TypeScript utility functions, decoupled from the UI for easier testing and reuse",
      "Persisted form state to local storage per scenario (base loan, external loan, refinance) so users could return to in-progress comparisons",
    ],
    icon: "calculator",
    repoUrl: "https://github.com/julioarhernandez/mortgage",
    demoUrl: "https://mortgage.julioarhernandez.workers.dev/",
  },
  {
    slug: "howl-component-library",
    name: "Howl - React Component Library",
    description:
      "A Material Design-based React UI component library documented in Storybook, with unit tests written against react-test-renderer.",
    technologies: ["React", "Material-UI", "Storybook", "Jest"],
    keyDecisions: [
      "Documented every component in Storybook with interactive knobs so consumers could explore props without reading source",
      "Layered on Material-UI's primitives to keep styling consistent while still allowing component-level composition",
    ],
    icon: "component",
    repoUrl: "https://github.com/julioarhernandez/howl",
  },
  {
    slug: "kids-points",
    name: "Kids Points - Reward Tracker",
    description:
      "A React reward-point tracker using Redux for state management and React Transition Group for animated list transitions, persisted to local storage.",
    technologies: ["React", "Redux", "React Transition Group", "Local Storage"],
    keyDecisions: [
      "Used React Transition Group to animate point changes and list reordering without a heavier animation library",
      "Persisted state to local storage so the app worked fully offline with no back end",
    ],
    icon: "trophy",
    repoUrl: "https://github.com/julioarhernandez/kids-points",
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
    icon: "layout-dashboard",
    repoUrl: "https://github.com/julioarhernandez/portfolio",
  },
];
