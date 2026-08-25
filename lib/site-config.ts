import type { EducationItem, ExperienceItem, NavItem, Project, SocialLink } from "@/types";

export const siteConfig = {
  name: "Julio Rodriguez",
  title: "Software Engineer",
  tagline:
    "I build scalable, accessible, and high-performance web applications, combining strong engineering foundations with thoughtful user experiences.",
  about: [
  "I'm a Software Engineer focused on building reliable, scalable, and user-focused software for the web. My work today spans modern JavaScript, TypeScript, React, Vue.js, APIs, component architectures, and design systems.",
  "I enjoy working on the engineering problems behind great user experiences: application architecture, reusable components, performance, accessibility, maintainability, and the details that make software feel fast and intuitive. I'm comfortable across the full development lifecycle, from requirements and technical design to implementation, testing, optimization, and production delivery.",
  "Throughout my career, I've helped build booking, marketing, and customer-facing applications for airlines, cruise companies, and consumer brands, working closely with design, product, and engineering teams to turn ideas into reliable software.",
  "I've been building for the web since its earlier days, starting with technologies like PHP, ASP.NET, MySQL, HTML, CSS, jQuery, and MooTools. Those early years gave me a strong understanding of how the web works from the ground up and a foundation that continues to influence how I approach software today.",
  "I've had the opportunity to experience the web evolve from static pages to dynamic applications, cloud platforms, component-driven systems, and now AI-powered products. I'm still curious about what's next and genuinely excited about where software is heading."
],

  email: "julior@duck.com",
  location: "Broward, FL",
  resumeUrl: "/JULIO-RODRIGUEZ-RESUME.pdf",
} as const;

export const aboutQuote = {
  text: "I love solving complex problems and crafting interfaces people enjoy using every day.",
  highlight: "enjoy using",
} as const;

export const aboutIntro = [
  "I'm a software engineer who thrives at the intersection of product, design, and engineering, building reliable, accessible web applications with React, Vue, and modern JavaScript.",
  "I care about the engineering behind great experiences: component architecture, performance, accessibility, and the details that make software feel fast and intuitive.",
] as const;

export const aboutStats = [
  { icon: "code", value: "20+", label: "Years building for the web" },
  { icon: "rocket", value: "25+", label: "Successful projects" },
  { icon: "users", value: "15+", label: "Happy teams collaborated" },
  { icon: "globe", value: "20+", label: "Technologies worked with" },
] as const;

export const heroStats = [
  { icon: "lightbulb", value: "20+", label: "Years experience" },
  { icon: "target", value: "25+", label: "Projects shipped" },
  { icon: "smile", value: "100%", label: "Client satisfaction" },
  { icon: "infinity", value: "∞", label: "Curiosity & learning" },
] as const;

export const trustedBy = [
  { name: "Norwegian Cruise Line Holdings" },
  { name: "PROS" },
  { name: "LVMH OnBoard.com" },
  { name: "Original Impressions" },
] as const;

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
    role: "Senior Developer",
    period: "Jul 2018 - Present",
    summary:
  "Lead front-end development for NCLH's booking and marketing platforms, delivering scalable, reusable, and accessible customer-facing web experiences.",
responsibilities: [
  "Build reusable **Vue.js** and **TypeScript** components for a shared Design System, translating Figma designs into production-ready interfaces with reusable variants, interaction states, responsive behavior, and accessibility considerations",
  "Contribute to a shared Design System maintained in a separate repository, distributed as an npm package, and consumed across multiple applications",
  "Collaborate with product, design, and engineering teams to translate **UI/UX** requirements and design concepts into accessible, responsive, and high-performance experiences",
  "Integrate front-end applications with backend APIs and services supporting booking and marketing functionality, while contributing to component-driven architecture and reusable front-end standards",
  "Write unit and component tests to validate component behavior and prevent regressions across consuming applications",
  "Focus on performance, accessibility, **SEO**, Core Web Vitals, and overall user experience throughout the development lifecycle",
  "Leverage AI-assisted development tools to accelerate implementation, debugging, refactoring, testing, and documentation while maintaining engineering quality",
],
    technologies: [
      "Vue.js",
      "TypeScript",
      "ES6",
      "Webpack",
      "SASS",
      "Storybook",
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
    repoUrl: "https://github.com/julioarhernandez/portafolio",
  },
];
