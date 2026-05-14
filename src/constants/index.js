import {
  mobile,
  backend,
 
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
 bootstrap,
  tailwind,
  c,
 java,
 dsa,
 sql,
  git,
  figma,
 
  
  
  twelth,
  graduate,
  carrent,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
   {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "DSA",
    icon: dsa,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
   {
    name: "Bootstrap",
    icon: bootstrap,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "SQL",
    icon: sql,
  },
 
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  
  {
    title: "Higher Secondary Certificater",
    company_name: "Vidyasthali Public School",
    icon: twelth,
    iconBg: "#E6DEDD",
    date: "2021-2022",
    points: [
      "Percentage: 92.2%",
      "Stream: Science (PCM).",
      "Board: CBSE",
      
    ],
  },
  {
    title: "Bachelor of Technology",
    company_name: "Birla institute of Technology,Mesra",
    icon: graduate,
    iconBg: "#383E56",
    date: "2023-2027",
    points: [
      "Branch:CSE", 
      "Duration: 4 Years",
      "CGPA: ",
    ],
  },
  
];


const projects = [
  {
    name: "Fintelli",
    description:
      "Developed a AI-powered finance platform using Next.js, Supabase, and Prisma, featuring transaction tracking, budget management, and AI-generated financial insights. Integrated Inngest for background job scheduling and ArcJet for rate limiting and bot protection. Built a responsive UI with Shadcn UI and Tailwind CSS.",
    tags: [
      {
        name: " Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "green-text-gradient",
      },
      {
        name: " Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "project2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      {
        name: " lorem",
        color: "blue-text-gradient",
      },
      {
        name: "lorem",
        color: "green-text-gradient",
      },
      {
        name: " lorem",
        color: "pink-text-gradient",
      },
      
      
    ],
    
    source_code_link: "https://github.com/",
  },
  {
    name: "Project3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    tags: [
      {
        name: "lorem",
        color: "blue-text-gradient",
      },
      {
        name: "lorem",
        color: "green-text-gradient",
      },
      {
        name: "lorem",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
