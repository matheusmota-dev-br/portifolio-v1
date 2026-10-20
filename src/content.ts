import type { NavItem, Project } from "@matheusmota-dev-br/ui";
import { skills } from "./resume";

export { experiences, education } from "./resume";

const img = (path: string) => `${import.meta.env.BASE_URL}img/${path}`;

export const profile = {
  name: "Matheus Mota",
  job: "Software Engineer",
  summary:
    "Software Engineer building large-scale education systems — assessment at scale, Item Response Theory and generative AI. Master's in Computer Science from the Aeronautics Technological Institute (ITA), with a Bachelor's in Aerospace Engineering completed with honors. I like to develop apps, intelligent systems and new ideas.",
  photoSrc: "https://github.com/matheusmota-dev-br.png",
  location: "BRAZIL",
  phone: "+55 (85) 99720-0622",
  email: "matheussilvamartins1714@gmail.com",
  phrase: {
    text: "Wherever your level of aspiration is, that's where you can be one day.",
    author: "Adilson Marques da Cunha",
  },
  cvEnHref: "https://matheusmota.dev.br/api/cv?lang=en-US",
  cvPtHref: "https://matheusmota.dev.br/api/cv?lang=pt-BR",
  cvOnlineHref: "https://matheusmota.dev.br/cv",
  researchHref: "https://research.matheusmota.dev.br",
  websiteHref: "https://matheusmota.dev.br",
  terminalHref: "https://matheusmota.dev.br/terminal",
};

/** Chaves do `iconMap` do design system. */
export const social = [
  { title: "Github", url: "https://github.com/matheusmota-dev-br", icon: "Github" },
  { title: "Linkedin", url: "https://www.linkedin.com/in/matheus-mota-44b21a17b/", icon: "Linkedin" },
  { title: "Instagram", url: "https://www.instagram.com/matheus_mota1714/", icon: "Instagram" },
  { title: "Medium", url: "https://medium.com/@matheusmota-dev-br", icon: "Medium" },
  { title: "Lattes", url: "http://lattes.cnpq.br/4944089934682851", icon: "Lattes" },
];

export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Workflow", href: "#workflow" },
  { name: "Projects", href: "#projects" },
  { name: "Interests", href: "#interests" },
  { name: "Lectures", href: "#lectures" },
  { name: "Awards", href: "#awards" },
];

export const footerPages: NavItem[] = [
  { name: "Website", href: profile.websiteHref },
  { name: "Research", href: profile.researchHref },
  { name: "CV", href: profile.cvOnlineHref },
];

export const toolSkills = skills(
  "Vue3JS",
  "React",
  "Typescript",
  "NodeJS",
  "NextJS",
  "NuxtJS",
  "NestJS",
  "PostgreSQL",
  "Python",
  "Django",
  "FastAPI",
  "Docker",
  "Flutter",
  "Dart",
  "GCP",
);

export const workflow = [
  "List my problems on features",
  "Create cards that I will resolve with my teams",
  "Cross Browser Testing & Debugging",
  "Agile Development & Scrum",
];

export const projects: Project[] = [
  { title: "Google Docs Clone", type: "Website", url: "https://github.com/matheusmota-dev-br/google-docs-clone", image: { src: img("projects/google-docs-clone.png") } },
  { title: "Barber Store", type: "Website", url: "https://github.com/matheusmota-dev-br/monorepo-barber-store", image: { src: img("projects/barber-store.png") } },
  { title: "Summary Finantial Transaction", type: "Website", url: "https://github.com/matheusmota-dev-br/summary-financial-transctions-app", image: { src: img("projects/summary-financial-transaction.png") } },
  { title: "URL Shortener", type: "Website", url: "https://github.com/matheusmota-dev-br/url-shortener-web", image: { src: img("projects/url-shortner.png") } },
  { title: "Daily Diet (API)", type: "Api", url: "https://github.com/matheusmota-dev-br/daily-diet-api", image: { src: img("projects/daily-diet-api.png") } },
  { title: "English Blog", type: "Website", url: "https://github.com/matheusmota-dev-br/english-study-website", image: { src: img("projects/english-blog.png") } },
  { title: "Speaking AI (Web)", type: "Website", url: "https://github.com/matheusmota-dev-br/speaking-ai-web", image: { src: img("projects/speaking-api.png") } },
  { title: "Translate SQL with AI", type: "Website", url: "https://github.com/matheusmota-dev-br/translate-sql-with-ai", image: { src: img("projects/ask-sql.png") } },
];

export const interests = {
  paragraphs: [
    "I like to develop web and mobile apps using React, Vue and Flutter. Sometimes I run app-programming training sessions at college, like the dingo_music project.",
    "My research interests span machine learning, natural language processing and data mining. In college I enjoy Data Science subjects, such as:",
  ],
  courses: [
    "CE-293 · Artificial Intelligence for Cyber Security",
    "PO-240 · Advanced Topics in Operational Process: Solving Problems via Mathematical Modeling",
    "CE-263 · Big Data Techniques",
    "PO-232 · Graph Algorithms",
  ],
};

export const lectures = {
  intro: "I like to pass on my knowledge on the internet. Here are some I've done.",
  items: [
    { title: "Business Application ITA", href: "https://medium.com/business-applications-ita", description: "Talks about technologies on the market and tips." },
    { title: "Matheus Mota AESP ITA", href: "https://medium.com/matheus-mota-aesp-ita", description: "I summarize the subjects I study." },
    { title: "Matheus Mota ITA T-22", href: "https://medium.com/matheus-mota-ita-t-22", description: "Comments about my time in college and the experiences I had." },
    { title: "Ranbookm", href: "https://medium.com/ranbookm", description: "My first blog. Comments on various subjects in the format of posts." },
    { title: "Dingo Music", href: "https://github.com/matheusmota-dev-br/dingo_music", description: "Music app tutorial. Training app for Business Applications." },
    { title: "Tutorials", href: "https://github.com/matheusmota-dev-br/Tutoriais", description: "Short HTML, CSS, Javascript and Django tutorials." },
  ],
};

export interface Award {
  title: string;
  href?: string;
  certificateHref?: string;
}

export const awards: Award[] = [
  { title: "Hackathon CCR 2020", href: "https://github.com/matheusmota-dev-br/hackathon-ccr", certificateHref: "https://drive.google.com/file/d/1oZrIRbplTxH2fAi7vVVZkZstw9fC0jH6/view?usp=sharing" },
  { title: "Hackathon Code in Quero 2019", href: "https://github.com/diegood12/vanelluschilensis" },
  { title: "ENEJ 2019", certificateHref: "https://drive.google.com/file/d/17kliLlY2xCGQOPDMcY6vsxX1HJt4NnnI/view?usp=sharing" },
  { title: "Gran Prinx 2019", certificateHref: "https://drive.google.com/file/d/0B7Ngs2EkQApoeXlHNmdrMk82NzJ5R2JwaXBEMjFkX0ZhX2Uw/view?usp=sharing&resourcekey=0-i821BOSrwRPiIbbdWRYJbg" },
  { title: "Workshop INTEL de Inteligência Artificial 2019", certificateHref: "https://drive.google.com/file/d/18H7CiudFPT4BETjoa8LtflFYbG83GQFh/view?usp=sharing" },
  { title: "Hackathon VTEX 2019" },
];
