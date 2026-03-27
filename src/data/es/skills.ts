import type { SkillsData } from '../types';

export const skillsData: SkillsData = {
  title: "Habilidades Técnicas",
  categories: [
    {
      name: "Frontend & Mobile",
      skills: [
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "Astro", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "Vue.js", level: 65 },
        { name: "React", level: 50 },
        { name: "Angular", level: 50 }
      ]
    },
    {
      name: "Backend & Core",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "Spring Boot", level: 70 },
        { name: "C", level: 65 },
        { name: "Scala", level: 60 },
        { name: "Django", level: 50 }
      ]
    },
    {
      name: "Bases de Datos & GIS",
      skills: [
        { name: "GeoServer / GeoNode", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 65 },
        { name: "Oracle", level: 60 }
      ]
    },
    {
      name: "Herramientas & Entorno",
      skills: [
        { name: "Git", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Dart", level: 70 },
        { name: "Docker", level: 65 }
      ]
    }
  ]
};