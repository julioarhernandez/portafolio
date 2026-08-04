import type { ExperienceItem, NavItem, Project, SocialLink } from "@/types";

export const siteConfig = {
  name: "Julio Rodriguez",
  title: "Software Engineer",
  tagline:
    "I build scalable, accessible, and high-performance web applications, combining strong engineering foundations with thoughtful user experiences.",
  about: [
    "I feel incredibly fortunate to have experienced and participated in one of the most exciting periods in software history, watching the web evolve from its early foundations into the powerful, intelligent platforms we build today.",
    "My journey started during the transition from static websites to dynamic web applications, working with technologies like PHP, ASP.NET, MySQL, HTML, CSS2, and JavaScript libraries such as jQuery and MooTools. Those early years gave me a deep understanding of how the web works from the ground up, from databases and server-side development to browser compatibility, user experience, and performance.",
    "Over the years, I've had the opportunity to grow alongside the industry as the web transformed through AJAX, modern JavaScript, Node.js, React, component-based architectures, design systems, APIs, cloud platforms, and now AI-powered experiences. Each generation introduced new possibilities, and I've always enjoyed embracing those changes with curiosity, excitement, and a genuine passion for learning.",
    "Today, I specialize in turning high-fidelity designs into accessible, pixel-perfect, and reusable experiences. I enjoy bridging the gap between design and engineering by applying Atomic Design principles, building scalable component systems, and creating style guides that help teams stay aligned as products grow.",
    "Beyond the interface, I care deeply about the details that make applications successful, including performance, SEO, Core Web Vitals, Progressive Web App capabilities, and creating fast, reliable experiences for users. Throughout my career, I've worked on booking, marketing, and customer-facing applications for airlines, cruise companies, and consumer brands, helping deliver digital experiences used in real-world environments.",
    "I'm an active mentor and lifelong learner, always exploring new technologies and sharing what I learn with the teams I work with. From the early days of the web to today's AI-driven era, it has been an honor to witness this evolution firsthand and be part of a community that continues to redefine what is possible with software.",
  ],
  email: "julior@duck.com",
  location: "Broward, FL",
  resumeUrl: "/resume.pdf",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
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
      "Build UI/UX using Atomic Design patterns on top of Google Closure Templates (Soy)",
      "Develop and maintain DRY, reusable components in Vue.js integrated with the Soy templating layer",
      "Translate Adobe XD, Photoshop, and Sketch/InVision mockups into pixel-perfect, interactive modules",
      "Use Webpack, ES6, jQuery, and SASS to build and bundle production front-end features",
    ],
    technologies: ["Vue.js", "ES6", "Webpack", "SASS", "jQuery", "Google Closure Templates"],
    achievements: [
      "Sole owner of a component system spanning multiple booking and marketing surfaces, keeping design and engineering consistent across a long-running, high-traffic platform",
    ],
  },
  {
    company: "Everymundo",
    role: "Front-End Developer",
    period: "Dec 2016 - Jul 2018",
    summary:
      "Built customer-facing booking experiences for airline clients, replacing legacy Twig modules with a documented, reusable React component library.",
    responsibilities: [
      "Translated airline client mockups into pixel-perfect, accessible, SEO-ready websites",
      "Built React components (booking flows, price calendars, flight accordions) matching each client's brand identity",
      "Created a customizable style guide in Storybook, replacing legacy Twig-based modules",
      "Wrote unit and integration tests with Karma, Mocha, and Chai",
      "Implemented Progressive Web App features to improve airline site performance and UX",
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
      "Brought PSD designs and interactive features to life on a Drupal CMS using AJAX and AngularJS",
      "Built responsive layouts with Bootstrap 3 and validated site health with MOZ, Google Insights, YellowLab, and WebPageTest",
      "Developed email campaigns using Mailchimp and Mandrill",
      "Introduced service workers and push notification features to the site",
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
      "Prepared and customized artwork for marketing and advertising campaigns using the Adobe Suite",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Adobe Suite"],
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
      "Customize WordPress themes and plugins, and optimize sites for SEO and email marketing",
      "Build React side projects using Hooks, Redux, and the Context API",
    ],
    technologies: ["React", "WordPress", "JavaScript", "SEO"],
    achievements: [
      "Maintained a two-decade freelance practice alongside full-time roles, staying hands-on with new frameworks and tooling",
    ],
  },
];

export const featuredSkills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6)",
  "React (Hooks)",
  "Vue.js",
  "SASS",
  "LESS",
  "PWA",
  "Node.js",
  "Webpack",
  "Git",
  "WordPress",
  "Atomic Design",
  "GraphQL",
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
  "Svelte",
  "RedwoodJS",
  "Gatsby",
];
export const projects: Project[] = [
  {
    slug: "nclh-booking-components",
    name: "NCLH Booking & Marketing Components",
    description:
      "Reusable Vue.js component system for Norwegian Cruise Line's booking and marketing pages, built on Google Closure (Soy) templates and Atomic Design principles.",
    technologies: ["Vue.js", "Google Closure Templates", "SASS", "Webpack"],
    keyDecisions: [
      "Layered Vue.js on top of an existing Soy templating system so teams could adopt component-based UI incrementally",
      "Followed Atomic Design to keep booking-flow components consistent across dozens of marketing pages",
    ],
  },
  {
    slug: "airline-booking-react-components",
    name: "Airline Booking Component Library",
    description:
      "A Storybook-documented React component library (booking widgets, price calendars, flight accordions) used across multiple airline clients at Everymundo, replacing a legacy Twig-based system.",
    technologies: ["React", "Storybook", "Karma", "Mocha", "Chai"],
    keyDecisions: [
      "Designed components to be brand-configurable so a single library could serve many airline clients",
      "Backed components with Karma/Mocha/Chai tests to keep booking-critical UI regression-free",
    ],
  },
  {
    slug: "pwa-rollout",
    name: "Progressive Web App Rollout",
    description:
      "Introduced service workers and push notifications across airline and cruise line sites to improve repeat-visit performance and re-engagement.",
    technologies: ["Service Workers", "Push API", "Lighthouse", "WebPageTest"],
    keyDecisions: [
      "Prioritized caching strategies around booking-flow assets, the highest-traffic paths",
      "Validated improvements with Lighthouse, YellowLab, and WebPageTest before rollout",
    ],
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
    repoUrl: "https://github.com/julioarhernandez/portfolio",
  },
];
