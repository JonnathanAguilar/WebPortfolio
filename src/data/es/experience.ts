import type { ExperienceData } from '../types';

export const experienceData: ExperienceData = {
  title: "Experiencia Laboral",
  experiences: [
    {
      title: "Personal de Apoyo",
      company: "Universidad de Cuenca",
      period: "Dic 2025 – Mar 2026",
      description: "Desarrollo de SIG para investigación urbana.",
      achievements: [
        "Desarrollo del Visor SIG de Gentrificación con integración de catálogos WMS y gestión dinámica de capas.",
        "Creación de interfaz interactiva para el procesamiento multicriterio de archivos GeoTIFF.",
        "Administración de GeoServer y configuración de entorno de despliegue automatizado con Docker y Nginx.",
        "Redacción de manuales técnicos y documentación para la administración del sistema."
      ],
      link: "https://geonode.ucuenca.edu.ec/gentrificacion/"
    },
    {
      title: "Desarrollador Web Freelance",
      company: "Consultorios Clínica España",
      period: "Feb 2026",
      description: "Desarrollo de plataforma corporativa médica.",
      achievements: [
        "Desarrollo frontend de alto rendimiento utilizando Astro y Tailwind CSS.",
        "Integración de Headless CMS (Contentful) para gestión autónoma de médicos, servicios y horarios.",
        "Configuración de CI/CD en Cloudflare Pages, garantizando alta disponibilidad y seguridad (SSL).",
        "Implementación de SEO local, incrementando la visibilidad orgánica de la clínica en la ciudad."
      ],
      link: "https://consultoriosclinicaespana.med.ec/"
    },
    {
      title: "Ayudante de Investigación",
      company: "Universidad de Cuenca",
      period: "Mar 2025 – Ago 2025",
      description: "Proyecto CLIAS - Aplicación de IA en la salud.",
      achievements: [
        "Desarrollo de módulos de geolocalización de centros de salud en la app móvil SISA.",
        "Implementación de interfaces web para la gestión descentralizada de datos geoespaciales.",
        "Diseño y construcción del sitio web oficial del proyecto (HTML, CSS, JS).",
        "Creación de la documentación técnica integral utilizando Docusaurus."
      ],
      link: "https://clias.ucuenca.edu.ec/"
    },
    {
      title: "Practicante - Proyecto NOVA",
      company: "Universidad de Cuenca",
      period: "Feb 2025 – Jun 2025",
      description: "Transformación Digital de la Gestión Académica.",
      achievements: [
        "Validación de integridad de datos migrados mediante scripts automatizados.",
        "Parametrización funcional del sistema académico institucional NOVA.",
        "Modelado de diagramas de flujo y documentación de procesos académicos.",
        "Aplicación de metodologías ágiles en el ciclo de vida del proyecto."
      ]
    },
    {
      title: "Ayudante de Investigación",
      company: "Universidad de Cuenca",
      period: "Sep 2024 – Feb 2025",
      description: "Planificación de Infraestructura de Salud con Telesalud.",
      achievements: [
        "Optimización de herramientas en MapStore para visualización y análisis geoespacial.",
        "Gestión de datos espaciales para apoyar la planificación de infraestructura.",
        "Desarrollo del marco metodológico aplicando principios de ingeniería de software para un proceso paso a paso perfecto."
      ]
    }
  ]
};