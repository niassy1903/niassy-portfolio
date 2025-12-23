
import { Project, SkillCategory, ExperienceItem, EducationItem, Service } from './types';

export const PERSONAL_INFO = {
  name: "Mouhamadou Lamine Niassy",
  title: "Développeur Fullstack | Spécialiste IoT",
  bio: "Architecte de solutions numériques, je fusionne le développement web de pointe et l'intelligence des objets connectés. Mon approche repose sur la performance, l'évolutivité et une expérience utilisateur sans compromis.",
  phone: "+221 70 461 1894",
  email: "niassy.lamine10@gmail.com",
  address: "Keur Massar, Cité Ainoumady, Dakar, Sénégal",
  socials: {
    github: "https://github.com/niassy1903",
    linkedin: "https://www.linkedin.com/feed/",
    instagram: "https://www.instagram.com/niassy_lamine/",
    twitter: "https://twitter.com/niassy_lamine",
    discord: "https://discord.com/channels/@me"
  },
  quote: "L'innovation n'est pas une destination, c'est un voyage continu où chaque ligne de code dessine le futur."
};

export const SERVICES: Service[] = [
  {
    title: "Développement Web",
    description: "Conception d'écosystèmes web robustes avec React, Angular et Laravel, focalisés sur la conversion et la vitesse.",
    icon: "Layout",
    color: "bg-blue-600"
  },
  {
    title: "Ingénierie IoT",
    description: "Développement de systèmes embarqués intelligents et connectés, du capteur au tableau de bord cloud.",
    icon: "Cpu",
    color: "bg-indigo-600"
  },
  {
    title: "Infrastructure Réseau",
    description: "Optimisation et sécurisation de parcs informatiques pour une haute disponibilité et une sécurité maximale.",
    icon: "Globe",
    color: "bg-emerald-600"
  },
  {
    title: "Design de Marque",
    description: "Création d'interfaces (UI) et d'expériences (UX) mémorables qui captivent et retiennent vos utilisateurs.",
    icon: "Smartphone",
    color: "bg-rose-600"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "Angular", "Ionic", "JavaScript/TS", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "Laravel (PHP)", "Java", "Python", "MySQL", "MongoDB Atlas", "Docker"]
  },
  {
    title: "IoT & Systèmes",
    skills: ["Arduino", "Raspberry Pi", "Automatisme Siemens", "MQTT", "Protocoles Réseaux"]
  },
  {
    title: "Outils & Méthodes",
    skills: ["Git/GitHub", "Figma", "Méthodes Agiles", "CI/CD", "Trello"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Expertise Fullstack & IoT",
    institution: "SIMPLON SENEGAL",
    year: "2024 - 2025",
    description: "Spécialisation avancée en développement d'applications connectées et scalables."
  },
  {
    degree: "Licence Systèmes Réseaux & Télécoms",
    institution: "Université Alioune Diop de Bambey",
    year: "2020 - 2023",
    description: "Ingénierie des réseaux et télécommunications modernes."
  },
  {
    degree: "Baccalauréat Scientifique (S2)",
    institution: "Lycée de Keur Massar",
    year: "2018 - 2019"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Développeur Web & IoT",
    company: "SOLID AFRIQUE (SOLID SA)",
    period: "2025",
    description: [
      "Architecture d'applications web scalables.",
      "Implémentation de modules d'IA décisionnelle.",
      "Optimisation des flux de données IoT haute fréquence."
    ]
  },
  {
    title: "Concepteur de Solutions Digitales",
    company: "Projets Indépendants",
    period: "2024 - Présent",
    description: [
      "Création de plateformes Fintech (DjamonoPay).",
      "Développement de GAB virtuels et systèmes bancaires.",
      "Systèmes de monitoring temps réel pour l'industrie.",
      "Création de plateformes e-commerce complètes.",
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Yayou Baye Niass E-commerce",
    description: "Plateforme e-commerce complexe avec gestion de panier, paiements sécurisés et dashboard administrateur dynamique sur MongoDB Atlas.",
    image: "/assets/yayoub.jpeg",
    tags: ["React JS", "Node.js", "MongoDB Atlas"],
    github: "https://yayou-baye-niass.netlify.app/",
    demo: "https://yayou-baye-niass.netlify.app/",
    githubPrivate: false
  },
  {
    id: 2,
    title: "DjamonoPay",
    description: "Plateforme bancaire complète intégrant la gestion de comptes, transactions sécurisées et reporting financier précis.",
    image: "/assets/jamano.png",
    tags: ["Laravel", "Fintech", "MySQL"],
    github: "https://github.com/ndiawar/DjamonoPay.git",
    githubPrivate: false
  },
  {
    id: 3,
    title: "IoT Safe Traffic",
    description: "Dispositif intelligent de gestion du trafic routier avec détection d'infractions et alertes en temps réel.",
    image: "/assets/logo.png",
    tags: ["React", "IoT", "Node.js", "Laravel", "Raspberry Pi"],
    github: "https://github.com/niassy1903/karangue_trafic.git",
    githubPrivate: false
  },
  {
    id: 4,
    title: "Smart School Management System",
    description: "Système de gestion académique centralisé automatisant les inscriptions, les notes et le suivi des parents.",
    image: "/assets/school.jpeg",
    tags: ["PHP", "MySQL", "Dashboard"],
    github: "https://github.com/KingOuze/gestion-ecole.git",
    githubPrivate: false
  },
  {
    id: 5,
    title: "Arrosage Intelligent IoT",
    description: "Système d'arrosage automatisé basé sur les données environnementales pour une agriculture durable.",
    image: "/assets/smart-home.png",
    tags: ["IoT", "Laravel", "Angular", "Raspberry Pi", "MongoDB"],
    github: "https://github.com/niassy1903/SUNU_ARROSAGE.git",
    githubPrivate: false
  },
  {
    id: 6,
    title: "Système de Gestion Temperature Magasin",
    description: "Plateforme de monitoring de la température en temps réel pour la conservation des produits sensibles.",
    image: "/assets/temperature.jpeg",
    tags: ["Angular", "Node.js", "MongoDB"],
    github: "https://github.com/khadimethiam/2em_test_yakar.git",
    githubPrivate: false
  }
];