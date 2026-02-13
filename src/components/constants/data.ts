// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Ayana Dinesh",
  title: "Full Stack Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "codewithayana@gmail.com",
  description: [
    "Hey! I’m Ayana Dinesh, a Full Stack Developer who enjoys building secure and scalable backend systems. I like breaking down complex problems and turning ideas into clean, efficient APIs and applications.",
    "I’m especially interested in secure authentication, RESTful API design, and data-driven solutions. I aim to build backend systems that are not just functional, but also maintainable, modern, and ready to scale.",
  ],
  profileImage: "/ayana 1 .jpg", // Restore original image
  profileGif: "/200.webp", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "codewithayana",
  leetcodeUsername: "Ayana Dinesh", // remove or keep blank if you don't have a LeetCode profile
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
    "https://drive.google.com/file/d/1lf2eQpjK10k9CFMpI7HCLGmskxRb3hdT/view?usp=sharing",
  phone: "+91 8129407173",
  whatsapp: "https://wa.me/ 8129407173",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = {
  // Keep only the skills you want to showcase and remove the rest
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: ["Node.js", "Express.js", "Nest.js", "Prisma"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  languages: [
    "JavaScript",
    "TypeScript",
  ],
  cloudDevOps: ["AWS", "Docker", "Vercel", "Render", "Railway", "GitHub Actions"],
  tools: [
    "VS Code",
    "Cursor",
    "Git",
    "GitHub",
    "Postman",
    "Swagger",
    "PowerShell",
    "Figma",
    "Jest",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: "node-rest-api-ts",
    category: "BACKEND",
    description:
      "**Problem:** Traditional APIs often suffer from performance bottlenecks and weak type safety.\n**Impact:** This leads to fragile codebases and poor developer experience.\n**Solution:** A scalable Node.js REST API built with TypeScript, featuring JWT-based authentication, MongoDB for data persistence, and Redis for caching. Dockerized for consistent deployment.",
    tech: ["Node.js", "TypeScript", "JWT", "Redis", "Docker", "MongoDB"],
    link: "",
    github: "https://github.com/codewithayana/node_rest-api-ts",
    image: "https://imgs.search.brave.com/ZbqpwMOh6F6e3L5FqI-3reoSx6m2WuPxMHbzzVQSt-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzQxLzY5Lzgy/LzM2MF9GXzU0MTY5/ODI3MV90cVNpYkxi/SjJpUGhjTjhockR5/OWNGRGpiZTk4Slli/US5qcGc",
    color: "#00FF94",
  },
  {
    id: 2,
    name: "Lumina-Skin-ecommerce",
    category: "E-COMMERCE",
    description:
      "**Problem:** Many skincare e-commerce websites lack a premium aesthetic and a smooth, trustworthy shopping experience.\n**Impact:** This leads to high bounce rates, low customer confidence, and reduced conversions — especially in the competitive luxury skincare market.\n**Solution:** Lumina Skin is a luxury skincare e-commerce platform designed to deliver an elegant, seamless digital shopping journey. It features personalized wishlist management, a frictionless cart and checkout flow, and a powerful admin system for effortless product and inventory management — ensuring a refined experience for both customers and brand owners.",
    tech: ["Node.js", "JavaScript", "Bootstrap 5", "Handlebars", "Express.js", "MongoDB"],
    link: "https://lumina-skin.onrender.com/",
    github: "https://github.com/codewithayana/Lumina-Skin-ecommerce",
    image: "https://imgs.search.brave.com/7AubXD1cewzWJuzvnz9mLDABvx5y-rD5A4ya8O3gx70/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzc2/Mjg3Ny9wZXhlbHMt/cGhvdG8tMzc2Mjg3/Ny5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    color: "hsla(26, 54%, 98%, 1.00)",
  },
];

export const EXPERIENCE = [
  {
    company: "codyinger Education",
    companyLink: "https://www.linkedin.com/in/codyingereducation/",
    role: "Full Stack Development Intern",
    period: "Sept 2025 - Feb 2026 (Expected)",
    location: "Onsite",
    description:
      "Working on full-stack development with a focus on backend engineering. Building secure RESTful APIs, implementing caching and session management with Redis, designing scalable architectures, and integrating relational and NoSQL databases. Gaining hands-on experience with containerization, API performance optimization, and modern JavaScript development workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "React",
      "PostgreSQL",
      "MongoDB",
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
