/*
 * ALL OF YOUR CONTENT LIVES IN THIS FILE.
 * Replace the placeholder text below with your own details and projects.
 * You should not need to touch the HTML or the other scripts.
 */

const SITE = {
  logo: "EMMANUEL",                    // top-left wordmark (an accent dot is added)
  firstName: "Emmanuel",                    // hero line 1
  lastName: "Ajolore",                     // hero line 2 (grey)
  role: "Web Developer | Tech Support",
  tagline:
    "I design and build complete digital products. From polished user interfaces to reliable backends and the infrastructure behind them. Proficient in building responsive web products and providing technical assistance to users, adept at collaborating with cross-functional teams to deliver high quality solutions.",
  city: "Lagos, Nigeria",
  status: "Available for work",
  timezone: "WAT (UTC +1)",
  timezoneLong: "West Africa Time (UTC +1)",

  email: "emmriztech@gmail.com",
  phone: "+234 803 327 4304",           // shown on the contact page
  whatsapp: "2348033274304",            // digits only, with country code — used for wa.me links
  resume: "resume.pdf",                 // put your CV next to index.html, or use a full URL
  resumeNote: "PDF · Last updated 2026",
  photo: "images/emmriznew.jpg",                            // e.g. "images/me.jpg" — a placeholder shows until you set it

  // Leave any of these empty ("") to hide it everywhere.
  socials: {
    github: "https://github.com/Emmriz",
    linkedin: "https://www.linkedin.com/in/emmanuel-ajolore-44b41a128/",
    twitter: "https://x.com/emmanuelajolore",
    youtube: "",
  },

  /*
   * Contact form delivery. Paste a form endpoint here (for example one from
   * formspree.io) and messages are sent to it in the background. If left
   * empty, the form opens the visitor's email app with the message filled in.
   */
  formEndpoint: "",

  // The three numbers under the hero buttons.
  heroStats: [
    { value: "10+", label: "Projects Shipped" },
    { value: "3+", label: "Years Building" },
    { value: "5+", label: "Happy Clients" },
  ],

  // {count} is replaced with the number of projects.
  projectsIntro: "{count} projects across the web, mobile and beyond — each one shipped and in production.",
};

// "Recent Impact" — the numbers count up when scrolled into view.
const IMPACT = {
  intro: "Real software for real businesses — these are the highlights.",
  items: [
    { value: 10, suffix: "+", label: "Production Projects", text: "Shipped across SaaS, e-commerce, mobile and business websites" },
    { value: 5, suffix: "+", label: "Years Building", text: "Consistently delivering quality software across multiple stacks" },
    { value: 4, suffix: "+", label: "Industries Served", text: "Banking, Healthcare, E-commerce, and Technology" },
    { value: 20, suffix: "+", label: "Clients Served", text: "Nigeria, UK, Canada, South Africa, and the US" },
  ],
};

// Icons available: rocket, trending, coins, dashboard, smartphone, zap
const CAPABILITIES = [
  { icon: "rocket", title: "Launch Your Product Idea", text: "From zero to production. I help turn an idea into a working web or mobile app, ready for real users." },
  { icon: "trending", title: "Scale Your Existing Platform", text: "Add features, improve performance and modernise your stack without breaking what already works." },
  { icon: "coins", title: "Build Payment-Ready Platforms", text: "Checkout flows, wallets, subscriptions and the backend integrations that keep money moving safely." },
  { icon: "dashboard", title: "Create Your SaaS Product", text: "Subscription products with dashboards, user accounts, billing and the infrastructure to grow." },
  { icon: "smartphone", title: "Develop Mobile Experiences", text: "Cross-platform mobile apps with smooth, native-feeling interactions." },
  { icon: "zap", title: "Automate Business Workflows", text: "Custom scripts, integrations and AI-assisted tools that save your team hours every week." },
];

const EXPERIENCE = {
  heading: ["3+ years", "building software"],
  intro: "A short summary of your career so far — the kind of companies you have worked with and what you built for them.",
  items: [
    {
      title: "Senior Role Title",
      company: "Company Name",
      type: "Full-time",
      period: "2025 — Present",
      summary: "One or two sentences about what you are responsible for in this role.",
      points: [
        "A concrete thing you built or improved.",
        "Another achievement, ideally with a result.",
        "How you worked with the rest of the team.",
      ],
    },
    {
      title: "Previous Role Title",
      company: "Freelance & Contract",
      type: "Freelance",
      period: "2023 — 2025",
      summary: "What kind of projects you took on and for whom.",
      points: [
        "Shipped X projects across Y and Z.",
        "Technologies and tools you worked with.",
        "Deployment, hosting or support you handled.",
      ],
    },
    {
      title: "First Role Title",
      company: "Company Name",
      type: "Contract",
      period: "2023",
      summary: "Where you started and what you learned there.",
      points: ["A responsibility you owned.", "A problem you solved."],
    },
  ],
};

const SKILLS = {
  intro: "Comfortable across the full stack — from UI to infrastructure, web to mobile.",
  groups: [
    { name: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "TailwindCSS"] },
    { name: "Backend", items: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"] },
    { name: "Mobile", items: ["React Native", "Expo"] },
    { name: "Infrastructure", items: ["Git", "CI/CD", "Nginx", "cPanel", "Linux", "DNS Management"] },
    { name: "AI & Automation", items: ["AI-assisted workflows", "Prompt Engineering", "Automation Scripts"] },
    { name: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  ],
};

// Replace with real quotes from people you have worked with (or empty the list to hide the section).
const TESTIMONIALS = [
  { quote: "Replace this with a real testimonial from a client or colleague.", name: "Client Name", role: "Their role, Company" },
  { quote: "A second testimonial goes here. Short and specific works best.", name: "Client Name", role: "Their role, Company" },
  { quote: "A third testimonial goes here.", name: "Client Name", role: "Their role, Company" },
];

const ABOUT = {
  headline: ["I build products that", "moves businesses forward"], // second part is grey
  // {name} is replaced with your full name in bold.
  paragraphs: [
    "My name is {name} — a software engineer based in Lagos, Nigeria. Replace this with a short introduction about who you are and who you work with.",
    "Use this second paragraph for your story: how you started, what you have built since, and the kind of clients you have worked for.",
  ],
  whatIDo: {
    title: "Not just a frontend dev",
    paragraphs: [
      "Explain how you approach projects — for example, that you can take an idea from wireframes and system design through to a deployed, production application.",
      "Then describe the breadth of your background and the kinds of teams you have worked with.",
    ],
    list: [
      "Build and ship complete web applications",
      "Design responsive, performant user interfaces",
      "Architect and build APIs and backend systems",
      "Develop mobile apps",
      "Integrate payment systems and third-party APIs",
      "Manage deployment, hosting and infrastructure",
      "Set up CI/CD pipelines and monitoring",
      "Apply AI tools to automate workflows",
    ],
  },
  values: [
    { title: "Outcomes over outputs", text: "I care about what the software does for your business, not just whether it runs." },
    { title: "Clarity in communication", text: "I explain technical decisions in plain language so you stay in control of your product." },
    { title: "Quality by default", text: "Clean code, sensible architecture and maintainable systems — as a baseline, not a bonus." },
    { title: "Fast without cutting corners", text: "I move quickly because I know the codebase deeply, not because I skip the important parts." },
  ],
};

const CONTACT = {
  intro: "Have a project in mind, need a technical consultant, or want to discuss an opportunity? I'd love to hear from you.",
  availability: "Open to new projects, consulting engagements and full-time remote opportunities. Response time is typically within 24 hours.",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM WAT (UTC +1)", open: true },
    { day: "Saturday", time: "10:00 AM – 4:00 PM WAT (UTC +1)", open: true },
    { day: "Sunday", time: "Closed", open: false },
  ],
};

/*
 * One object per project. Fields:
 *   slug         (required, unique) — used in the page address: project.html?slug=...
 *   title, category, description   (required)
 *   year         optional
 *   status       optional, e.g. "In Development" — shown on the detail page
 *   featured     optional true → "Featured" badge + shown in the home page showcase
 *   tech         optional list
 *   images       optional list of screenshot paths/URLs; the first is the cover.
 *                Without any, coloured placeholders are generated.
 *   live, video  optional URLs → "Live Site" / "Watch" links
 *   problem, solution, results, about   optional long text for the detail page
 */
const PROJECTS = [
  {
    slug: "BASEUS NIGERIA",
    title: "BASEUS NIGERIA",
    category: "E-commerce",
    year: 2026,
    status: "Completed",
    featured: true,
    description: "Baseus Nigeria is an online store for mobile and computer accessories, including power banks, chargers, cables, audio devices, car accessories, and USB-C hubs. The site is tailored to Nigerian shoppers, with prices in naira and product descriptions focused on features, compatibility, and everyday use.",
    tech: ["WordPress", "PHP", "Tailwind", "MYSQL"],
    images: [images/baseus1.png],
    live: "https://baseus.com.ng",
    video: "https://example.com",
    problem: "Describe the problem the client or users had before this product existed.\n\nYou can use several paragraphs — line breaks are kept.",
    solution: "Describe what you built and the key decisions you made along the way.",
    results: "Describe the outcome: users, revenue, time saved, or what the client said.",
    about: "A longer free-form write-up about the project, your role and anything else worth sharing.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Mobile App",
    year: 2026,
    description: "A short description of the app, the problem it solves, and your role in building it.",
    tech: ["React Native", "Expo", "TypeScript"],
    images: [],
    video: "https://example.com",
    about: "A longer write-up about the project.",
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "E-commerce",
    year: 2025,
    featured: true,
    description: "An online store with product search, cart, checkout and an admin dashboard.",
    tech: ["PHP", "Laravel", "MySQL", "TailwindCSS"],
    images: [],
    live: "https://example.com",
    problem: "The problem.",
    solution: "The solution.",
    results: "The results.",
  },
  {
    slug: "project-four",
    title: "Project Four",
    category: "Landing Page",
    year: 2025,
    featured: true,
    description: "Animated marketing page for a company or product launch.",
    tech: ["HTML5", "TailwindCSS", "JavaScript", "GSAP"],
    images: [],
    live: "https://example.com",
  },
  {
    slug: "project-five",
    title: "Project Five",
    category: "Web Application",
    year: 2024,
    featured: true,
    description: "Full-stack web application for managing inventory, orders and reporting.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Express", "Docker"],
    images: [],
    live: "https://example.com",
  },
  {
    slug: "project-six",
    title: "Project Six",
    category: "WordPress",
    year: 2024,
    description: "Custom WordPress theme and plugin work for a content-driven business site.",
    tech: ["WordPress", "PHP", "CSS3"],
    images: [],
    live: "https://example.com",
  },
  {
    slug: "project-seven",
    title: "Project Seven",
    category: "Landing Page",
    year: 2023,
    description: "A second landing page, so the “more projects in this category” section has something to show.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    images: [],
    live: "https://example.com",
  },
];
