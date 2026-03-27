import type { EducationData } from '../types';

export const educationData: EducationData = {
  title: "Formación Académica",
  education: [
    {
      degree: "Ingeniería en Ciencias de la Computación",
      institution: "Universidad de Cuenca – Facultad de Ingeniería",
      period: "Oct 2021 – Actualidad",
      description: "Noveno ciclo – En curso. Enfocado en desarrollo de software, inteligencia artificial, ciencias de datos y computación aplicada.",
      type: "university"  
    },
    {
      degree: "Bachiller Técnico en Instalaciones, Equipos y Máquinas Eléctricas",
      institution: "Unidad Educativa Fiscomisional Técnico Salesiano",
      period: "Sep 2018 – Jun 2021",
      description: "Formación técnica con énfasis en fundamentos eléctricos, automatización y mantenimiento industrial.",
      type: "technical"    
    }
  ]
};