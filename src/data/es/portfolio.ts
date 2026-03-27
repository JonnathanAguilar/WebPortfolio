import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  title: "Proyectos Destacados",
  projects: [
    {
      title: "Algoritmos de Red",
      description: "Simulador interactivo para la enseñanza y análisis de algoritmos de redes y grafos.",
      tech: "Python, PyQt6",
      image: "/images/network-algorithms.jpg",
      link: "https://github.com/JonnathanAguilar/Network-Algorithms-Visualizer",
      type: "github"
    },
    {
      title: "BioMap Ecuador",
      description: "Plataforma interactiva para la visualización y análisis de la biodiversidad ecuatoriana.",
      tech: "JavaScript, HTML, CSS",
      image: "/images/biomapecuador.png",
      link: "https://jonnathanaguilar.github.io/BioMapEcuador-Website-Demo/",
      type: "external"
    }
  ]
};