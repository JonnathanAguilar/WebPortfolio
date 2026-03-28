import type { ExperienceData } from '../types';

export const experienceData: ExperienceData = {
  title: "Work Experience",
  experiences: [
    {
      title: "Research Assistant",
      company: "University of Cuenca",
      period: "Dec 2025 – Mar 2026",
      description: "Development of GIS for urban research.",
      achievements: [
        "Development of the Gentrification GIS Viewer with WMS catalog integration and dynamic layer management.",
        "Creation of an interactive interface for multi-criteria processing of GeoTIFF files.",
        "GeoServer administration and configuration of automated deployment environment with Docker and Nginx.",
        "Writing of technical manuals and documentation for system administration."
      ],
      link: "https://geonode.ucuenca.edu.ec/gentrificacion/"
    },
    {
      title: "Freelance Web Developer",
      company: "Consultorios Clínica España",
      period: "Feb 2026",
      description: "Development of corporate medical platform.",
      achievements: [
        "High-performance frontend development using Astro and Tailwind CSS.",
        "Headless CMS (Contentful) integration for autonomous management of doctors, services, and schedules.",
        "CI/CD setup on Cloudflare Pages, ensuring high availability and security (SSL).",
        "Implementation of local SEO, increasing the clinic's organic visibility in the city."
      ],
      link: "https://consultoriosclinicaespana.med.ec/"
    },
    {
      title: "Research Assistant",
      company: "University of Cuenca",
      period: "Mar 2025 – Aug 2025",
      description: "CLIAS Project - AI application in healthcare.",
      achievements: [
        "Development of health center geolocation modules in the SISA mobile app.",
        "Implementation of web interfaces for decentralized geospatial data management.",
        "Design and development of the project's official website (HTML, CSS, JS).",
        "Creation of comprehensive technical documentation using Docusaurus."
      ],
      link: "https://clias.ucuenca.edu.ec/"
    },
    {
      title: "Intern - NOVA Project",
      company: "University of Cuenca",
      period: "Feb 2025 – Jun 2025",
      description: "Digital Transformation of Academic Management.",
      achievements: [
        "Validation of migrated data integrity using automated scripts.",
        "Functional parameterization of the institutional academic system NOVA.",
        "Flowchart modeling and documentation of academic processes.",
        "Application of agile methodologies throughout the project lifecycle."
      ]
    },
    {
      title: "Research Assistant",
      company: "University of Cuenca",
      period: "Sep 2024 – Feb 2025",
      description: "Healthcare Infrastructure Planning with Telehealth.",
      achievements: [
        "Optimization of MapStore tools for geospatial visualization and analysis.",
        "Spatial data management to support infrastructure planning.",
        "Development of the methodological framework applying software engineering principles for a seamless step-by-step process."
      ]
    }
  ]
};