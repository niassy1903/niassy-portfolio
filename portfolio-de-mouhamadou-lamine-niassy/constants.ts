
import { Project, SkillCategory, ExperienceItem, EducationItem, Service } from './types';

export const PERSONAL_INFO = {
  name: "Mouhamadou Lamine Niassy",
  title: "Développeur Fullstack | Réseaux, vidéosurveillance & IoT",
  bio: "Développeur fullstack et technicien réseaux, télécoms et vidéosurveillance. Je conçois des applications web et mobiles, et j’interviens sur les systèmes connectés, les infrastructures réseau et l’installation ou le dépannage de caméras.",
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
    title: "Développement Web & Mobile",
    description: "Applications web fullstack avec React, Angular, Laravel et Node.js, ainsi que des applications mobiles multiplateformes avec Flutter.",
    icon: "Layout",
    color: "bg-blue-600"
  },
  {
    title: "Réseaux & systèmes",
    description: "Configuration de routeurs, commutateurs et serveurs, résolution de problèmes réseau et mise en place de services DNS, DHCP et Proxy.",
    icon: "Cpu",
    color: "bg-indigo-600"
  },
  {
    title: "Vidéosurveillance",
    description: "Installation, configuration, entretien et dépannage de caméras de surveillance, avec intervention sur site chez les clients.",
    icon: "Globe",
    color: "bg-emerald-600"
  },
  {
    title: "IoT & systèmes connectés",
    description: "Prototypes et systèmes connectés autour d’ESP32, Arduino, Raspberry Pi et MQTT, avec capteurs et tableaux de bord temps réel.",
    icon: "Smartphone",
    color: "bg-rose-600"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & mobile",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular", "Flutter"]
  },
  {
    title: "Backend & bases de données",
    skills: ["PHP / Laravel", "Node.js / Express.js", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Réseaux & systèmes",
    skills: ["TCP/IP", "DNS", "DHCP", "Proxy", "Routage", "Routeurs & commutateurs", "VPN", "Windows Server", "Active Directory", "Ubuntu Server"]
  },
  {
    title: "Télécoms & sécurité réseau",
    skills: ["VoIP", "Asterisk", "Audit de sécurité", "Kali Linux", "Cryptage réseau"]
  },
  {
    title: "IoT, déploiement & outils",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "Capteurs", "MQTT", "Docker", "Vercel", "Netlify", "Render", "Git / GitHub", "Trello", "Figma", "Canva"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Certificat professionnel de spécialisation en développement web fullstack et IoT",
    institution: "SIMPLON SENEGAL",
    year: "2024 - 2025",
    description: "Formation professionnelle en développement fullstack et conception de solutions connectées."
  },
  {
    degree: "Licence Systèmes Réseaux & Télécoms",
    institution: "Université Alioune Diop de Bambey",
    year: "2020 - 2023",
    description: "Travaux pratiques en DNS, DHCP, Proxy, serveurs Windows et Ubuntu, VoIP avec Asterisk, sécurité réseau, routeurs et commutateurs."
  },
  {
    degree: "Certifications en développement web et design",
    institution: "SIMPLON SENEGAL",
    year: "2019 - 2020"
  },
  {
    degree: "Baccalauréat Scientifique (S2)",
    institution: "Lycée de Keur Massar",
    year: "2018 - 2019"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Technicien réseaux, vidéosurveillance & IoT · Missions",
    company: "ESP — Efficace Sécurité Pro",
    period: "2025 - Aujourd’hui",
    description: [
      "Installation, configuration et entretien préventif de caméras de surveillance.",
      "Dépannage et remise en service des installations chez les clients.",
      "Interventions sur chantier et maintenance des équipements."
    ]
  },
  {
    title: "Stagiaire en développement web & IoT",
    company: "SOLID AFRIQUE (SOLID SA)",
    period: "Avril 2025 - Juillet 2025",
    description: [
      "Développement et maintenance d’applications web.",
      "Intégration de fonctionnalités d’intelligence artificielle.",
      "Collaboration avec l’équipe et documentation des travaux."
    ]
  },
  {
    title: "Projets fullstack & IoT",
    company: "SIMPLON SENEGAL",
    period: "2024 - 2025",
    description: [
      "Application GAB en C et application bancaire DjamonoPay avec Laravel et MySQL.",
      "Application de gestion d’école en PHP et MySQL.",
      "Système de pointage avec Angular, Laravel, Node.js, MongoDB et MySQL.",
      "Arrosage automatique connecté : ESP32, MQTT, capteurs et tableau de bord temps réel."
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
    github: "https://djamonopay.onrender.com/",
    demo: "https://djamonopay.onrender.com/",
    githubPrivate: false
  },
  {
    id: 3,
    title: "IoT Safe Traffic",
    description: "Dispositif intelligent de gestion du trafic routier avec détection d'infractions et alertes en temps réel.",
    image: "/assets/logo.png",
    tags: ["React", "IoT", "Node.js", "Laravel", "Raspberry Pi"],
    github: "https://karangue-trafic.netlify.app/",
    demo: "https://karangue-trafic.netlify.app/",
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
  },
  {
    id: 7,
    title: "Minipos",
    description: "Gestion d'une boutique vente produit stockes",
    image: "/assets/minipos.png",
    tags: ["Node.js", "React", "MongoDB"],
    github: "https://minipos-2idd.onrender.com/",
    demo: "https://minipos-2idd.onrender.com/",
    githubPrivate: false
  },
  {
    id: 8,
    title: "NiassyTontine",
    description: "Gestion des tontines dahira, associations des jeunes, GIE et autres",
    image: "/assets/niassy-tontine.png",
    tags: ["Node.js", "React", "MongoDB"],
    github: "https://niassy-tontine.onrender.com/",
    demo: "https://niassy-tontine.onrender.com/",
    githubPrivate: false
  },
  {
    id: 9,
    title: "Cotiz",
    description: "Application web progressive pour la gestion transparente et sécurisée des membres, cotisations, paiements et dépenses des dahiras, tontines et associations. Construite avec React 19, TypeScript, Vite et Tailwind CSS 4, elle est connectée à une API Laravel 13.",
    image: "/assets/cotiz.png",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Laravel 13"],
    github: "https://cotiz-one.vercel.app/",
    demo: "https://cotiz-one.vercel.app/",
    githubPrivate: false
  }
];
