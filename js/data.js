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
    { value: "5+", label: "Years Building" },
    { value: "20+", label: "Happy Clients" },
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
  heading: ["5+ years", "building software"],
  intro: "A short summary of your career so far — the kind of companies you have worked with and what you built for them.",
  items: [
    {
      title: "Web Developer | Tech Support (Team Lead)",
      company: "QServer Web Hosting",
      type: "Full-time",
      period: "2021 — Present",
      summary: "Web Development | Web Hosting & DNS Management | Technical Support.",
      points: [
        "Continous Developement, and maintaining responsive websites and web applications.",
        "Web Hosting (CPanel & Cloud environment)",
        "Database optimization & Management",
        "Maintaining web hosting environment in both a Linux and Windows environment.",
        "Migrating client files and databases between servers.",
        "Manage and handle user accounts via WHM and cPanel",
        "Resolving a diverse range of technical issues across multiple web servers (Linux) and applications for customers and end-users.",
        "Researching emerging web development trends and technologies, applying findings to ongoing projects.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "CodeClan Nigeria",
      type: "Freelance (Open Source)",
      period: "2019 — 2021",
      summary: "Web Development | Performance Monitoring | Technical Support.",
      points: [
        "Collaborated with other team members to build the community learning portal",
        "Technical Support officer for the virtual community learning platform",
        "Integrating UX / UI designs and backend APIs.",
        "Researching emerging web development trends and technologies, applying findings to ongoing projects.",
      ],
    },
    {
      title: "Digital Product Support Executive",
      company: "FirstBank Of Nigeria",
      type: "Contract",
      period: "2017 - 2019",
      summary: "Customer Support | Technical Support | Digital Banking | E-Business",
      points: ["First-level User Support officer for USSD, First Mobile, and Agency Banking Platform",
         "Participated in team meetings and contributed ideas for improving product design and functionality.",
        "Timely resolution of customer complaints.",
        "Agent Recruitment, Onboarding & Training.",
        "Account Opening and maintenance for customers.",
        ],
    },

    {
      title: "Web Developer & Technical Support (Intern)",
      company: "TECHBEAST (Formerly HYDRON DATA SYSTEMS)",
      type: "Internship",
      period: "2016 - 2017",
      summary: "Web Development | Technical Support | CMS Handling",
      points: ["Web development",
         "Website support (WordPress).",
        "Timely resolution of customer complaints.",
        "Participated in team meetings and contributed ideas for improving website design and functionality.",
        "Collaborated with the team to deliver a School Management System (Web application).",
        "Researching emerging web development trends and technologies, applying findings to ongoing projects.",
        ],
    },
  ],
};

const SKILLS = {
  intro: "Comfortable across the full stack — from UI to infrastructure, web to mobile.",
  groups: [
    { name: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "WordPress", "TypeScript", "Angular", "TailwindCSS"] },
    { name: "Backend", items: ["Node.js", "PHP", "Laravel", "REST APIs"] },
    { name: "Infrastructure", items: ["Git", "CI/CD", "Nginx", "cPanel", "Linux", "DNS Management", "Database Management"] },
    { name: "AI & Automation", items: ["AI-assisted workflows", "Prompt Engineering", "Automation Scripts"] },
    { name: "Databases", items: ["MySQL", "PostgreSQL"] },
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
    slug: "baseus-nigeria",
    title: "Baseus Nigeria",
    category: "E-commerce",
    year: 2022,
    status: "Completed",
    featured: true,
    description: "Baseus Nigeria is an online store for mobile and computer accessories, including power banks, chargers, cables, audio devices, car accessories, and USB-C hubs. The site is tailored to Nigerian shoppers, with prices in naira and product descriptions focused on features, compatibility, and everyday use.",
    tech: ["WordPress", "PHP", "Tailwind", "MYSQL"],
    images: ["images/baseus1.png", "images/baseus2.png", "images/baseus3.png"],
    live: "https://baseus.com.ng",
    video: "https://baseus.com.ng",
    problem: "Customers in Nigeria needed an easier way to find and buy Baseus accessories, with clear product details and local pricing.",
    solution: "Built an online store organized by product category, with naira pricing, product descriptions, discounts, search, comparison, wishlists, and a shopping cart.",
    results: "The site gives shoppers a single place to discover and purchase Baseus products in Nigeria",
    about: "Baseus Nigeria is an e-commerce store for chargers, power banks, cables, audio devices, car accessories, and other tech essentials. The shopping experience centers on product discovery, clear feature information, and convenient purchasing tools.",
  },
  {
    slug: "pisgah-stores",
    title: "Pisgah Stores",
    category: "E-commerce",
    year: 2023,
    description: "Pisgah Stores is an electronics retailer located in Computer Village, Ikeja, Lagos. Its website presents a range of technology products, with a catalogue that includes HP laptops, desktop computers, monitors, and printers. The shopping experience combines category browsing and product details with tools for comparing items, saving favourites, and adding products to a cart.",
    tech: ["WordPress", "PHP", "Tailwind", "MYSQL"],
    images: ["images/pisgah1.png", "images/pisgah2.png", "images/pisgah3.png"],
    live: "https://pisgahstores.com",
    video: "https://pisgahstores.com",
    problem: "Customers looking for computers and office equipment needed a convenient way to browse available products, compare options, and check local prices before making a purchase. Pisgah Stores’ customers also needed an online channel to explore the retailer’s catalogue beyond its physical location in Computer Village, Ikeja.",
    solution: "Created an e-commerce storefront for Pisgah Stores, focused on making its electronics catalogue easier to explore. Products are organized into categories and listings show details such as pricing and availability. Shopping features—including search, quick view, product comparison, wishlists, and a cart—help customers move from browsing to purchase.",
    results: "The website gives customers an online way to explore Pisgah Stores’ computers and office equipment, including laptops, desktops, monitors, and printers. The catalogue displays prices in naira and supports online product selection. Specific sales, traffic, or conversion results were not available.",
    about: "Pisgah Stores is an electronics retailer located in Computer Village, Ikeja, Lagos. Its website presents a range of technology products, with a catalogue that includes HP laptops, desktop computers, monitors, and printers. The shopping experience combines category browsing and product details with tools for comparing items, saving favourites, and adding products to a cart.",
  },
{
    slug: "lightroom-counselling-services",
    title: "Lightroom Counselling Services",
    category: "Business",
    year: 2023,
    description: "Lightroom Counselling Services is an Oshawa, Ontario practice offering counselling, psychotherapy, and coaching for individuals, couples, and families. Visitors can explore services and resources, contact the practice, or follow an appointment link to book online.",
    tech: ["WordPress", "PHP", "Tailwind", "MYSQL"],
    images: ["images/light1.png", "images/light2.png", "images/light3.png"],
    live: "https://lightroomcounsellingservices.com/",
    video: "https://lightroomcounsellingservices.com/",
    problem: "People seeking counselling may find it difficult to identify the right support, understand what services are available, and take the first step toward booking. The practice needed a welcoming online presence that could explain its approach and make it easier for individuals, couples, and families to connect.",
    solution: "Created a website that introduces the practice, its therapist, counselling services, areas of focus, and therapeutic approaches. Clear navigation organizes information about individual, couples, family, premarital, Christian, and other counselling services. Appointment links, contact details, FAQs, and a client assessment form help visitors find the next step, while a free 15-minute phone consultation offers an initial point of contact.",
    results: "The website gives prospective clients a central place to learn about the practice and its services, access useful resources, and book appointments online. It also supports virtual and in-person sessions, subject to availability. Specific traffic or booking results were not available.",
    about: "Lightroom Counselling Services is an Oshawa, Ontario practice offering counselling, psychotherapy, and coaching for individuals, couples, and families. Its services cover concerns including anxiety, depression, grief, trauma, relationships, parenting, and life transitions, as well as support for immigrants and refugees. The site presents the practice’s client-centered approach and introduces founder Roseline Oduntan, a Registered Psychotherapist and Certified Trauma Professional. Visitors can explore services and resources, contact the practice, or follow an appointment link to book online.",
  },

  {
    slug: "chinese-nigerian-equipments",
    title: "Chinese Nigerian Equipments",
    category: "Landing Page",
    year: 2025,
    description: "Chinese Nigerian Equipments supplies heavy machinery for agricultural and construction work. Its website presents the business and its equipment to customers looking for machinery to support farm operations and construction projects. It serves as an online starting point for exploring the available options and getting in touch with the supplier.",
    tech: ["WordPress", "PHP", "Tailwind", "MYSQL"],
    images: ["images/chin1.png", "images/chin2.png", "images/chin3.png", "images/chin4.png"],
    live: "https://chinesenigerianequipments.com/",
    video: "https://chinesenigerianequipments.com/",
    problem: "Farmers and construction businesses need reliable access to heavy machinery suited to demanding work. Finding suitable equipment and a supplier in one place can make the purchasing process more difficult.",
    solution: "Created an online storefront for browsing heavy equipment for farming and construction. The site gives customers a place to explore available machinery and learn about the business before making an enquiry or purchase.",
    results: "The website helps prospective buyers discover the company’s agricultural and construction equipment online and provides a digital channel for connecting with the supplier.",
    about: "Chinese Nigerian Equipments is a company that supplies heavy machinery for agricultural and construction work. Its website presents the business and its equipment to customers looking for machinery to support farm operations and construction projects. It serves as an online starting point for exploring the available options and getting in touch with the supplier.",
  },

  {
    slug: "tenant-management-system",
    title: "Tenant Management System",
    category: "Web Application",
    year: 2024,
    featured: true,
    description: "The CTR Triangle TMO CRM is a web application designed to support tenant and housing management. It gives administrators a centralized platform for handling the organization’s housing-related records and workflows, with access through an admin login.",
    tech: ["PHP", "Laravel", "MySQL", "TailwindCSS"],
    images: ["images/tenan1.png", "images/tenan1.png"],
    live: "https://crm.ctrtriangletmo.org/admin/login",
    problem: "Managing tenants and housing operations can involve scattered records, repeated administrative work, and difficulty keeping track of property and tenant information. Staff need a central system to support day-to-day housing management.",
    solution: "Developed a web application for tenant and housing management, with a secure administrator login as the entry point. The CRM gives staff a central place to manage housing-related information and tenant administration.",
    results: "The application provides a dedicated digital workspace for the organization’s housing management operations. No usage or efficiency metrics were available..",
    about: "The CTR Triangle TMO CRM is a web application designed to support tenant and housing management. It gives administrators a centralized platform for handling the organization’s housing-related records and workflows, with access through an admin login.",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Web Application",
    year: 2025,
    featured: true,
    description: "The Hospital Management System is a web application designed to support the organization of hospital information and day-to-day administrative workflows. It gives staff a shared digital platform for managing hospital operations.",
    tech: ["PHP", "Laravel", "MySQL", "TailwindCSS"],
    images: ["images/medi1.png", "images/medi2.png", "images/medi3.png", "images/medi4.png", "images/medi5.png", "images/medi6.png"],
    live: "",
    problem: "Hospitals coordinate patient information and administrative tasks across multiple departments. When information is spread across separate processes, it can be harder for staff to keep records organized and manage daily operations efficiently.",
    solution: "Developed a hospital management system to bring key administrative and patient-related workflows into one digital platform. The system is designed to help staff manage information and coordinate routine hospital operations.",
    results: "The platform provides a centralized digital workspace for hospital management. Specific usage, time-saving, or patient service metrics were not provided.",
    about: "The Hospital Management System is a web application designed to support the organization of hospital information and day-to-day administrative workflows. It gives staff a shared digital platform for managing hospital operations.",
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
