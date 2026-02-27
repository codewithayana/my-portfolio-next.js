// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Ayana Dinesh",
  title: "Full Stack Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "codewithayana@gmail.com",
  description: [
    "Hey! I'm Ayana Dinesh, a full stack developer passionate about creating secure and scalable web applications for both the frontend and backend. I enjoy breaking down complex problems and transforming ideas into efficient APIs and responsive user interfaces.",
    "I'm especially interested in secure authentication, RESTful API design, and building data-driven solutions. I aim to create full stack applications that are not just functional, but also maintainable, modern, and ready to scale.",
  ],
  profileImage: "/ayana 1 .jpg", // Restore original image
  profileGif: "/200.webp", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "codewithayana",
  leetcodeUsername: "ayanadinesh", // remove or keep blank if you don't have a LeetCode profile
  //   hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/codewithayana",
  linkedin: "https://www.linkedin.com/in/ayanadinesh/",
  // twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/ayanadinesh/",
  // peerlist: "https://peerlist.io/your-peerlist", // remove or keep blank if you don't have a Peerlist profile
  instagram: "",
  email: "mailto:codewithayana@gmail.com",
  // blog: "https://yourblog.com", // remove if you don't have a blog
  resume:
    "/Ayana Full Stack 2026.pdf",
  phone: "+91 81294 07173",
  whatsapp: "https://wa.me/918129407173",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = {
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "RESTful APIs",
    "JWT",
    "WebSocket",
    "Socket.io",
  ],
  databases: [
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Mongoose ODM",
    "Prisma ORM",
  ],
  cloudDevOps: [
    "AWS (Lambda, API Gateway, EC2, S3)",
    "Docker",
    "Nginx",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Render",
    "PM2",
    "Linux/Bash",
  ],
  testing: [
    "Jest",
    "Playwright",
    "Postman",
    "Supertest",
  ],
  tools: [
    "Git",
    "GitHub",
    "Swagger",
    "Figma",
    "VS Code",
    "Cursor",
    "Jira",
    "Notion",
    "ESLint",
    "Prettier",
    "Vite",
  ],
  "architecture Concepts": [
    "MVC",
    "SOLID Principles",
    "OOP",
    "Design Patterns",
    "Agile/Scrum",
    "System Design",
    "API Rate Limiting",
    "Load Balancing",
    "Data Structures & Algorithms",
  ],
};

export const PROJECTS = [
  
  {
    id: 1,
    name: "Modern portfolio",
    category: "Full Stack",
    description:
      "Engineered responsive portfolio with Next.js, TypeScript, and Tailwind CSS using server-side rendering, achieving 95+ Lighthouse score and 1.8-second page load time.\n Integrated GitHub and LeetCode APIs to display coding projects, contributions, and 100+ algorithmic solutions with automated real-time data synchronization.\nCrafted mobile-first UI with Tailwind CSS utility classes, achieving seamless responsiveness across all devices.\nLeveraged Next.js Image component and lazy loading strategies to reduce initial bundle size by 30%.",

    tech: ["Next.js ", "TypeScript", "Framer Motion", "Tailwind CSS", "GitHub API", "LeetCode API"],
    link: "",
    github: "https://github.com/codewithayana/my-portfolio-next.js",
    image:"/modern porfolio.png",
    color: "hsla(26, 54%, 98%, 1.00)",
  },
 {
    id: 2,
    name: "Lumina-Skin-ecommerce",
    category: "Full Stack",
    description:
      "Constructed a full stack skincare e-commerce platform using Node.js, Express.js,and Handlebars with server-side rendering and template-based content generation.\nEstablished JWT-based authentication with Admin and User dashboards, securing 100% of routes through role-based access control.\nArchitected product catalog management with CRUD operations, category filtering across 10+Categories, achieving sub-second query response times.\nStyled responsive interface using Bootstrap framework, achieving 98% cross-device compatibility and intuitive user experience.",

    tech: ["Node.js", "JavaScript", "Bootstrap 5", "Handlebars", "Express.js", "MongoDB"],
    link: "https://lumina-skin.onrender.com/",
    github: "https://github.com/codewithayana/Lumina-Skin-ecommerce",
    image: "/home page.png",
    color: "hsla(240, 54%, 43%, 1.00)",
  },
   {
    id: 3,
    name: "Node-Mongoose-JWT-APIs-TS",
    category: "BACKEND",
    description:
      "Designed scalable RESTful API using Node.js, Express.js, and TypeScript with modular architecture and industry-standard practices.\nImplemented JWT authentication with refresh token rotation, securing 100% of endpoints and reducing unauthorized access by 95%.\nStructured MongoDB collections and indexes to handle high-volume requests, achieving 50% faster query response times.\nApplied TypeScript interfaces and types throughout the codebase, reducing runtime errors by 60% and improving code maintainability.",
     
    tech: ["Node.js", "TypeScript", "JWT", "Redis", "Docker", "MongoDB"],
    link: "",
    github: "https://github.com/codewithayana/node_rest-api-ts",
    image: "https://imgs.search.brave.com/ZbqpwMOh6F6e3L5FqI-3reoSx6m2WuPxMHbzzVQSt-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQxLzY5Lzgy/LzM2MF9GXzU0MTY5/ODI3MV90cVNpYkxi/SjJpUGhjTjhockR5/OWNGRGpiZTk4Slli/US5qcGc",
    color: "#00FF94",
  },
];

export const EXPERIENCE = [
  {
    company: "codyinger Education",
    companyLink: "https://www.linkedin.com/in/codyingereducation/",
    role: "Full Stack Development Intern",
    period: "Sept 2025 - Mar 2026 ",
    location: "Onsite",
    description:
      "Built and shipped full-stack MERN applications end-to-end — handling everything from responsive React interfaces to secure, scalable Node.js backends. Designed and secured 150+ REST APIs using Express.js, Nest.js, and TypeScript with JWT authentication and role-based access control, ensuring zero unauthorized access. Optimized MongoDB and PostgreSQL performance through advanced indexing and query tuning, achieving 40% faster data retrieval. Deployed production applications on AWS, maintaining 90.5% uptime and 80%+ Jest test coverage across the codebase.",
    skills: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Nest.js",
      "Redis",
      "Docker",
      "REST APIs",
      "Backend Architecture",
    ],
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Social Work (BSW).",
    institution: " St.Joseph's College (Autonomous), Irinjalakuda",
    institutionLink: "https://stjosephs.edu.in/",
    period: "Aug 2022 - Mar 2025 ",
  },
  

    {
    degree: "Senior Secondary (Plus Two)",
    institution: " VHSS KARALAM",
    institutionLink: "",
    period: " Jul 2017 - Mar 2019 ",
  },

  {
    degree: "Secondary (SSLC)",
    institution: " VHSS KARALAM",
    institutionLink: "",
    period: " Jul 2016 - Mar 2017 ",
  },

  // Add more education as needed
];
