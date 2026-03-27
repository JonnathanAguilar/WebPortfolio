import type { SkillsData } from '../types';

export const skillsData: SkillsData = {
  title: "Habilidades Profesionales",
  categories: [
    {
      name: "Lenguajes de Programación",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Dart", level: 70 },
        { name: "Scala", level: 65 },
        { name: "C", level: 70 }
      ]
    },
    {
      name: "Frameworks y Librerías",
      skills: [
        { name: "Spring Boot", level: 70 },
        { name: "React", level: 75 },
        { name: "Astro", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "Django", level: 50 },
        { name: "Vue.js", level: 65 },
        { name: "Angular", level: 60 }
      ]
    },
    {
      name: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 65 },
        { name: "Oracle", level: 60 }
      ]
    },
    {
      name: "Tecnologías y Herramientas",
      skills: [
        { name: "Docker", level: 65 },
        { name: "Git", level: 85 },
        { name: "GeoServer", level: 75 },
        { name: "GeoNode", level: 70 },
        { name: "MapStore", level: 75 },
        { name: "Linux", level: 80 }
      ]
    }
  ]
};