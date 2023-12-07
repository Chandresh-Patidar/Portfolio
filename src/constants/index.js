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
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "work",
    title: "Work",
    link: "/work",
  },
  {
    id: "resume",
    title: "Resume",
    link: "/resume",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
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
      "- Designed an intuitive interface for easy renovation planning, including wireframes and mockups.",
      "- Developed a comprehensive project dashboard for tracking progress, budget, and timelines.",
      "- Implemented tools for customizable room layouts, furniture arrangement, and material selection.",
      "- Created a budgeting module with real-time calculations to ensure financial control.",
      "- Enhanced the user experience with Data visualization for previewing renovation ideas.",
      "- Ensured responsive design and integrated collaboration features for seamless user interaction.",
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
      "- Crafted visually appealing, responsive user interfaces with React",
      "- Developed modular, well-tested React components",
      "- Integrated real-time telemetry, UAV data feeds into UI",
      "- Created interactive maps, charts for UAV monitoring",
      "- Optimized React app for smooth user experience",
      "- JavaScript, ES6+, HTML, CSS, Redux expertise",
      "- Active in code reviews, excellent teamwork",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
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
      "- Designed a visually appealing, responsive interface for a Smart Home Control Panel",
      "- Integrated and displayed data from diverse smart home devices with interactive controls",
      "- Enabled real-time updates for instant feedback on device status.",
      "- Implemented secure user authentication and managed permissions.",
      "- Ensured cross-device accessibility and allowed user dashboard customization.",
      "- Incorporated features for energy monitoring, alerts, voice assistant integration, and documentation.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "",
    live_site_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
