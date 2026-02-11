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
  profileImage: "/sana 1.jpeg", // Restore original image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
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
    name: "node-rest-api-typescript",
    category: "BACKEND",
    description:
      "**Problem:** Traditional APIs often suffer from performance bottlenecks and weak type safety.\n**Impact:** This leads to fragile codebases and poor developer experience.\n**Solution:** A scalable Node.js REST API built with TypeScript, featuring JWT-based authentication, MongoDB for data persistence, and Redis for caching. Dockerized for consistent deployment.",
    tech: ["Node.js", "TypeScript", "JWT", "Redis", "Docker", "MongoDB"],
    link: "",
    github: "https://github.com/codewithayana/node_rest-api-ts",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "#3178C6",
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
    image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=2070&auto=format&fit=crop",
    color: "#00FF94",
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
  

  // Add more education as needed
];
