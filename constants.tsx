import React from "react";
// Fix: Import the Skill type.
import type { Project, Service, Skill } from "./types";

// Icons for Nav Items
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 mb-2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);
const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 mb-2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 mb-2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 mb-2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const NAV_ITEMS = [
  {
    id: "about",
    title: "About",
    icon: <StarIcon />,
    color: "bg-panel-about",
    bgImage: "/react-portfolio/assets/about.jpg",
  },
  {
    id: "services",
    title: "Services",
    icon: <BriefcaseIcon />,
    color: "bg-panel-services",
    bgImage: "/react-portfolio/assets/service.jpg",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    icon: <HeartIcon />,
    color: "bg-panel-portfolio",
    bgImage: "/react-portfolio/assets/portfolio.jpg",
  },
  {
    id: "contact",
    title: "Contact",
    icon: <MapPinIcon />,
    color: "bg-panel-contact",
    bgImage: "/react-portfolio/assets/contact.jpg",
  },
];

const MobileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications using modern technologies like React, Node.js, and TypeScript.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-brand-primary"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "Hybrid Mobile App Development",
    description:
      "Crafting beautiful, high-performance mobile apps for both iOS and Android from a single codebase, delivering a native-like experience.",
    icon: <MobileIcon />,
    isPremium: true,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces that provide an excellent user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-brand-primary"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
];

// Fix: Add SKILLS constant which was missing.
const ReactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
  </svg>
);
const NodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <path d="M20 16.5v-11a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v11m16 0v2a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-2m16 0h-16"></path>
  </svg>
);
const JsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);
const HtmlIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <path d="m10 16-4-4 4-4"></path>
    <path d="m14 12 4 4-4 4"></path>
  </svg>
);
const CssIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m14.31 8 5.74 9.94"></path>
    <path d="m9.69 8-5.74 9.94"></path>
    <path d="M2 12h20"></path>
  </svg>
);
const MongoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-brand-primary"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export const SKILLS: Skill[] = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "HTML5", icon: <HtmlIcon /> },
  { name: "CSS3", icon: <CssIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
];

export const PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, a shopping cart, and a checkout process. Built with the MERN stack.",
    imageUrl: "/react-portfolio/assets/project1.jpg",
    projectUrl: "#",
    sourceUrl: "#",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application that allows users to create, organize, and track their tasks through different stages.",
    imageUrl: "/react-portfolio/assets/project2.jpg",
    projectUrl: "#",
    sourceUrl: "#",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website, built to showcase my skills and projects in a clean, modern, and responsive design.",
    imageUrl: "/react-portfolio/assets/project3.jpg",
    projectUrl: "#",
    sourceUrl: "#",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A simple and elegant weather dashboard that provides current weather conditions and a 5-day forecast for any city.",
    imageUrl: "/react-portfolio/assets/project4.jpg",
    projectUrl: "#",
    sourceUrl: "#",
    tags: ["JavaScript", "API", "HTML", "CSS"],
  },
];
