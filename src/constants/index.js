// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  css,
  figma,
  git,
  html,
  javascript,
  materialui,
  next,
  project1,
  project2,
  project3,
  reactjs,
  redux,
  svelte,
  tailwind,
  typescript,
  web,
} from "../assets";

// Navbar Links
export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "projects",
    title: "Projects",
    link: "/project",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
  {
    id: "resume",
    title: "Resume",
    link: "/resume",
  },
];

// Services
const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Svelte Developer",
    icon: web,
  },
];

// Technologies
const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  { name: "Next JS", icon: next },
  { name: "Svelte", icon: svelte },

  { name: "Material UI", icon: materialui },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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

// Experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "TechStuff Pvt Ltd.",
    icon: "",
    iconBg: "#383E56",
    date: "June 2019 - Present",
    points: [
      "Develop captivating interfaces using React",
      "Guarantee consistent user experiences across all devices through responsive design",
      "Present information effectively through charts and graphs",
      "Conduct thorough testing to ensure consistent functionality across various browsers",
      "Enhance load times and responsiveness for optimal application performance",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Chandresh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chandresh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Chandresh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
const projects = [
  {
    name: "Renovate Craft",
    description: [
      "Created a renovation planning interface featuring a dashboard, layout tools, real-time budgeting, data visualization, responsive design, and collaboration features.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Shoutt App",
    description: [
      "Built a responsive renovation planning application featuring a comprehensive dashboard, customizable layout tools, real-time budgeting, data visualization, and collaboration features.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Smart Home Nexus",
    description: [
      "Designed a responsive Smart Home Control Panel with diverse data integration, real-time updates, secure authentication, cross-device accessibility, and advanced features.",
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "",
    live_site_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
