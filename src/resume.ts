import type { ResumeItem, Skill } from "@matheusmota-dev-br/ui";

/** Pills de tecnologia a partir dos nomes (o id é o nome em slug). */
export function skills(...names: string[]): Skill[] {
  return names.map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name }));
}

export const experiences: ResumeItem[] = [
  {
    title: "Software Engineer",
    sub_title: "Maria Educação",
    years: "February 2025 - Present",
    details:
      "I work on the assessment and content-authoring domains of the company's education platform. I led the development of large-scale assessment for paper-based exams — optical mark recognition of answer sheets, automatic grading of objective questions, PDF typesetting of exams in student and teacher variants, and performance metrics by student, class and school — serving around 3,000 students in 3 schools. I also integrated Item Response Theory (IRT) into the assessment flow, with item-parameter calibration, proficiency by curricular component and automatic report generation, on top of an analytics layer that serves public SAEB microdata. On the content side, I built an AI-assisted authoring tool that generates lessons, workbooks, books and learning paths with large language models, using agent orchestration, streaming progress feedback and on-demand image generation.",
    skills: skills(
      "Python",
      "Django",
      "TemporalIO",
      "FastAPI",
      "Docker",
      "React",
      "NextJS",
      "Typescript",
      "PostgreSQL",
      "GCP",
      "Flutter",
      "Dart",
      "Drift",
    ),
  },
  {
    title: "Software Engineer",
    sub_title: "DEEP ESG",
    years: "February 2024 - January 2025",
    details:
      "I worked on structural solutions for all of the company's products. Among the most relevant experiences, I highlight the unification of login across 3 different products, allowing around 1,000 users to access every service with a single account, through credentials, one-time passwords (OTP) and federation with Google and Microsoft. This enabled the adoption of Single Sign-On (SSO) and significantly simplified access management, providing a more integrated and efficient experience for users.",
    skills: skills(
      "Vue3JS",
      "Typescript",
      "NodeJS",
      "NextJS",
      "NuxtJS",
      "NestJS",
      "PostgreSQL",
      "Keycloak",
      "GCP",
    ),
  },
  {
    title: "Analyst Developer",
    sub_title: "Hastings",
    years: "January 2022 - December 2023",
    details:
      "Development of robots for web scraping in the juridical area. Creation of neural networks to improve the quality of extracted information. Python development using an SQLServer database.",
    skills: skills("Python", "Selenium", "Neural Networks", "SQLServer"),
    links: [{ label: "Web Site", href: "http://www.hastings.com.br/" }],
  },
  {
    title: "Freelancer",
    sub_title: "Freelance",
    years: "January 2022 - December 2023",
    details:
      "Responsible for optimizing and developing automations for data extraction in legal platforms, including overcoming captchas, FTP transfers and table modeling. With refactorings that improved clarity and performance, I implemented structures that allowed the execution of multiple scripts on different platforms, resulting in more efficient and flexible automation.",
    skills: skills("Python", "Django", "Selenium", "Microsoft SQL Server"),
  },
  {
    title: "Intern",
    sub_title: "ITA Space Center (CEI)",
    years: "February 2023 - March 2023",
    details:
      "I worked on the planning and preliminary implementation of a Service-Oriented Architecture (SOA) focused on the integration of Ground Segment (GS) systems. This integration involved several components, such as antennas, simulators and IoT devices, ensuring greater interoperability and efficiency in the system's operation.",
    skills: skills("Python", "Javascript", "Virtual Box", "MQTT", "Docker", "SAO"),
  },
  {
    title: "Co-Founder",
    sub_title: "Business Application",
    years: "March 2021 - September 2021",
    details:
      "I worked on developing a Marketplace application using Flutter, Dart, and Firebase, and was responsible for planning UI/UX elements using Figma. Later, I gave training on creating applications aimed at beginning university students, including a song-lyrics search engine project and practical tutorials. We also taught early-stage students about creating Startups alongside experienced entrepreneurs.",
    skills: skills("Flutter", "Dart", "Firebase", "Figma"),
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/business-applications-ita/mycompany/",
      },
      { label: "Medium", href: "https://medium.com/business-applications-ita" },
    ],
  },
  {
    title: "Intern",
    sub_title: "Quero Education",
    years: "October 2019 - April 2020",
    details:
      "I developed software for the Academic Center (CASD) to automate and optimize manual processes, such as room scheduling, laundry scheduling, and issuing and monthly control of bills for students. I worked as a Full-Stack developer, covering everything from modeling and creating the database to developing an application for students and a management interface for administrators.",
    skills: skills("React", "React Native", "Material UI", "Flask", "NodeJS"),
    links: [
      {
        label: "Reference article about the project",
        href: "https://medium.com/techatquero/quero-e-ita-conhe%C3%A7a-o-programa-de-engenharia-que-uniu-esses-nomes-9900ab38720a",
      },
    ],
  },
  {
    title: "Full-stack Developer",
    sub_title: "ITA Junior",
    years: "September 2018 - October 2019",
    details:
      "I was responsible for several internal projects, including a customized ERP for a psychiatric hospital (process flowcharts, database and interfaces). I taught classes to new members covering basic and advanced web development, developed an e-commerce template working with cookies and online payments, and wrote tutorials on javascript, css, html, django, nodejs, MVC and REST. I also participated in ENEJ 2019.",
    skills: skills("HTML", "CSS", "Javascript", "NodeJS", "ReactJS", "SQLServer"),
    links: [
      {
        label: "More about ITA's initiatives",
        href: "https://medium.com/ranbookm/iniciativas-ita-f41a7631a3f1",
      },
    ],
  },
];

export const education: ResumeItem[] = [
  {
    title: "Master in Computer Science",
    sub_title: "Aeronautics Technological Institute (ITA)",
    years: "August 2023 - 2025",
    details:
      "Graduate Program in Electronic and Computer Engineering, Informatics area. Research in Artificial Intelligence focused on binary text classification of academic works for systematic literature reviews, evaluated against the ISO 23053 and 25010 standards. Thesis defended and approved in 2025, advised by Prof. Dr. Adilson Marques da Cunha.",
  },
  {
    title: "Bachelor of Aerospace Engineering",
    sub_title: "Aeronautics Technological Institute (ITA)",
    years: "January 2018 - December 2023",
    details:
      "Graduated with honors, with foundation in software development, data structures, algorithms, and systems engineering. Gained hands-on experience through diverse academic projects and internships at tech companies, showcasing a commitment to innovation and excellence in technology.",
  },
];
