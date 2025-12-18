
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}
