import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  title: "Featured Projects",
  projects: [
    {
      title: "Network Algorithms",
      description: "Interactive simulator for teaching and analyzing network and graph algorithms.",
      tech: "Python, PyQt6",
      image: "/images/network-algorithms.jpg",
      link: "https://github.com/JonnathanAguilar/Network-Algorithms-Visualizer",
      type: "github"
    },
    {
      title: "BioMap Ecuador",
      description: "Interactive platform for visualizing and analyzing Ecuadorian biodiversity.",
      tech: "JavaScript, HTML, CSS",
      image: "/images/biomapecuador.png",
      link: "https://jonnathanaguilar.github.io/BioMapEcuador-Website-Demo/",
      type: "external"
    }
  ]
};