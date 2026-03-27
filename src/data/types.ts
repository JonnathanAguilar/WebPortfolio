export interface HeroData {
  name: string;
  title: string;
  description: string;
  image: string;
  contact: string;
  cv: string;
  cvLink: string;
}

export interface AboutData {
  title: string;
  greeting: string;
  description1: string;
  description2: string;
  description3: string;
  basicInfo: {
    email: string;
    phone: string;
    address: string;
    languages: string;
    orcid: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  link?: string;
}

export interface ExperienceData {
  title: string;
  experiences: ExperienceItem[];
}

export interface Project {
  title: string;
  description: string;
  tech: string;
  image: string;
  link: string;
  type: "github" | "external";
}

export interface PortfolioData {
  title: string;
  projects: Project[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: "university" | "technical";
}

export interface EducationData {
  title: string;
  education: EducationItem[];
}

export interface Certification {
  name: string;
  hours: string | null;
  date: string;
  issuer: string;
  link: string | null;
}

export interface CertificationsData {
  title: string;
  certifications: Certification[];
}

export interface Publication {
  title: string;
  journal: string;
  authors: string;
  doi: string;
  link: string;
}

export interface PublicationsData {
  title: string;
  publications: Publication[];
}

export interface Reference {
  name: string;
  role: string;
  institution: string;
  email: string;
  phone: string;
  image: string;
}

export interface ReferencesData {
  title: string;
  references: Reference[];
}