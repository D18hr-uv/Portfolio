// Single source of truth for personal/site content.

export const person = {
  name: "Dhruv Bhardwaj",
  firstName: "Dhruv",
  lastName: "Bhardwaj",
  location: "New Delhi, India",
  roles: [
    "Software Developer",
    "Backend Engineer",
    "AI / LLM Developer",
    "CS Graduate — NSUT",
  ],
  // TODO: replace with Dhruv's public contact email. Left blank so no placeholder ships by accident.
  email: "",
  bio: "I'm a Software Developer at Timestream Technologies and a Computer Science graduate from NSUT, New Delhi. I build backend and enterprise systems — APIs, databases and real production business workflows — while pushing my work toward AI-native development with LLMs, RAG and agents.",
};

export const socials = {
  github: "https://github.com/D18hr-uv",
  linkedin: "https://www.linkedin.com/in/dhruv-bhardwaj-a422481b1",
  instagram: "https://instagram.com/_d.bhardwaj18?igshid=NGExMmI2YTkyZg==",
};

export const experience = [
  {
    company: "Timestream Technologies (NuvertOS)",
    role: "Software Developer",
    note: "Software Engineer Intern → Software Developer",
    period: "Jan 2026 — Present",
    location: "Noida",
    stack: ["Golang", "Gin", "Angular", "Node.js", "MySQL", "REST APIs"],
    points: [
      "Build a large multi-tenant enterprise ERP/inventory platform — procurement, vendor POs, GRNs, invoicing, client returns and reporting.",
      "Designed a multi-approver Vendor PO approval system with approval slabs, sequential/parallel steps and transaction-level concurrency handling.",
      "Shipped statutory GST E-Way Bill compliance and a Non-Reference Client Return flow using a dummy-GRN structure to fit the existing inventory model.",
    ],
  },
  {
    company: "GoReach",
    role: "Backend Developer Intern",
    period: "Jun 2025 — Jul 2025",
    location: "Remote",
    stack: ["FastAPI", "Python", "LLMs", "Prompt Engineering"],
    points: [
      "Engineered 10+ FastAPI endpoints and integrated LLM inference pipelines for AI-driven content generation.",
      "Optimized model API latency and automated 1,000+ AI-powered content outputs.",
    ],
  },
];

export const education = {
  school: "Netaji Subhas University of Technology (NSUT)",
  degree: "B.Tech, Computer Science",
  period: "2022 — 2026",
  note: "CGPA 8.04",
};

export const highlights = [
  { value: "850+", label: "DSA & SQL problems solved" },
  { value: "Top 25", label: "Smart India Hackathon (national)" },
  { value: "120+", label: "Volunteers led — NSS President" },
];

export const languages = [
  "Golang",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "SQL",
  "C++",
];

export const tools = [
  "FastAPI",
  "Gin",
  "MySQL",
  "MongoDB",
  "LangChain",
  "PyTorch",
  "Git",
  "REST APIs",
];
