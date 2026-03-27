import type { ExperienceData } from '../types';

export const experienceData: ExperienceData = {
  title: "Experiencia Laboral",
  experiences: [
    {
      title: "Técnico de Investigación",
      company: "Universidad de Cuenca",
      period: "Dic 2025 – Mar 2026",
      description: "Desarrollo y mantenimiento de sistemas de información geográfica para investigación urbana.",
      achievements: [
        "Desarrollo y mantenimiento del Visor SIG de Gentrificación, implementando funcionalidades avanzadas como catálogos WMS externos y gestión dinámica de capas.",
        "Creación de una interfaz tipo 'Wizard' para la carga y procesamiento de capas GeoTIFF multicriterio, optimizando el flujo de trabajo del modelo predictivo.",
        "Administración y actualización del servidor GeoServer (v2.24.3 a v2.27.4) y configuración del entorno de despliegue mediante Docker y Nginx.",
        "Elaboración de la documentación técnica y manuales de usuario para la administración del sistema SIG."
      ]
    },
    {
      title: "Desarrollador Web Freelance",
      company: "Consultorios Clínica España",
      period: "Feb 2026",
      description: "Desarrollo de plataforma web corporativa con tecnologías modernas.",
      achievements: [
        "Diseño y desarrollo integral de la plataforma web corporativa utilizando Astro y Tailwind CSS, logrando un rendimiento óptimo y una carga instantánea.",
        "Integración de un Headless CMS (Contentful) para permitir a la administración gestionar de forma autónoma el catálogo de especialistas, servicios y horarios de atención.",
        "Configuración del pipeline de despliegue continuo (CI/CD) en Cloudflare Pages, asegurando alta disponibilidad y seguridad mediante certificados SSL y optimización de red.",
        "Implementación de estrategias de SEO local y optimización de metadatos, incrementando la visibilidad digital de los consultorios en los motores de búsqueda para la ciudad de Cuenca."
      ],
      link: "https://consultoriosclinicaespana.med.ec/"
    },
    {
      title: "Ayudante de Investigación",
      company: "Universidad de Cuenca",
      period: "Mar 2025 – Ago 2025",
      description: "Proyecto CLIAS - IA en Promoción de Automuestreo para Detección Temprana de VPH.",
      achievements: [
        "Desarrollo de módulos de geolocalización y visualización de datos espaciales en la aplicación móvil SISA, mejorando el acceso a información sobre centros de salud.",
        "Implementación de interfaces web administrativas para la gestión descentralizada de datos geoespaciales, optimizando los flujos de actualización en tiempo real.",
        "Diseño y desarrollo del sitio web oficial del proyecto CLIAS utilizando HTML, CSS y JavaScript.",
        "Elaboración de la documentación técnica integral del sistema con Docusaurus, dirigida a equipos de desarrollo y usuarios institucionales."
      ],
      link: "https://clias.ucuenca.edu.ec/"
    },
    {
      title: "Practicante - Proyecto NOVA",
      company: "Universidad de Cuenca",
      period: "Feb 2025 – Jun 2025",
      description: "Transformación Digital de la Gestión Académica.",
      achievements: [
        "Validación de la integridad y consistencia de datos migrados entre sistemas académicos, desarrollando scripts de verificación y registros de incidencias para garantizar la calidad del proceso.",
        "Colaboración en la configuración y parametrización del sistema académico NOVA, incluyendo estructuras de datos, matrices de control y ejecución de pruebas funcionales.",
        "Elaboración de documentación técnica y diagramas de flujo de procesos académicos, utilizando herramientas de modelado para respaldar la transformación digital institucional.",
        "Participación en la planificación y seguimiento del proyecto de Transformación Digital de la Gestión Académica, aplicando metodologías ágiles en el ciclo de desarrollo y despliegue."
      ]
    },
    {
      title: "Ayudante de Investigación",
      company: "Universidad de Cuenca",
      period: "Sep 2024 – Feb 2025",
      description: "Propuesta Metodológica para Planificación de Infraestructura de Salud con Enfoque en Telesalud.",
      achievements: [
        "Desarrollo y optimización de herramientas en MapStore para la visualización y análisis de datos geoespaciales, garantizando la interoperabilidad con GeoNode y otras plataformas SIG.",
        "Implementación de metodologías de análisis y gestión de datos geoespaciales en entornos de ciudades inteligentes, apoyando la planificación de infraestructura de salud basada en datos.",
        "Colaboración en el desarrollo del marco metodológico del proyecto, aplicando tecnologías geoespaciales y principios de ingeniería de software."
      ]
    }
  ]
};