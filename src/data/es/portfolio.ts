import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  title: "Portafolio",
  projects: [
    {
      title: "Simulador de Algoritmos de Red",
      description: "Visualizador interactivo de algoritmos de redes y grafos",
      tech: "Python, PyQt6",
      image: "/images/network-algorithms.jpg",
      link: "https://github.com/JonnathanAguilar/Network-Algorithms-Visualizer",
      type: "github"
    },
    {
      title: "CLIAS - IA y Prevención de VPH",
      description: "Plataforma de investigación para detección temprana de VPH con IA",
      tech: "Spring Boot, Flutter, PostgreSQL",
      image: "/images/cliasweb.png",
      link: "https://clias.ucuenca.edu.ec/",
      type: "external"
    },
    {
      title: "BioMap Ecuador – Demo Web",
      description: "Visualización de biodiversidad ecuatoriana",
      tech: "JavaScript, HTML, CSS",
      image: "/images/biomapecuador.png",
      link: "https://jonnathanaguilar.github.io/BioMapEcuador-Website-Demo/",
      type: "github"
    },
    {
      title: "Consultorios Clínica España",
      description: "Plataforma corporativa para clínica médica",
      tech: "Astro, Tailwind CSS, Contentful",
      image: "/images/clinica-espana.jpg",
      link: "https://consultoriosclinicaespana.med.ec/",
      type: "external"
    }
  ]
};