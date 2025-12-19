import { ExperienceItem, PersonalProfile, ProjectItem, ServiceItem, LinkedInArticle } from './types';

export const INITIAL_PROFILE: PersonalProfile = {
  name: { en: "Robin Hsu", zh: "許羅賓" },
  title: { en: "Senior Tech Lead & Product Director", zh: "資深技術總監 & 產品總監" },
  tagline: { 
    en: "Architecting Digital Ecosystems & Agile Teams", 
    zh: "打造數位生態系與敏捷團隊的架構師" 
  },
  yearsExperience: 20,
  about: [
    { en: "20+ Years of IT Software Experience", zh: "20+ 年軟體開發經驗" },
    { en: "Specialized in Agile Team Building", zh: "專精於敏捷團隊建構" },
    { en: "Cloud Solutions (AWS/GCP) Expert", zh: "雲端解決方案 (AWS/GCP) 專家" },
  ],
  phone: "0919-309-709",
  email: "robin.hsu@example.com",
  linkedin: "linkedin.com/in/robinhsu",
  certifications: [
    { name: "CSM", issuer: "Agile Expert" },
    { name: "PMP", issuer: "Project Management" },
    { name: "AWS Pro", issuer: "Amazon" },
  ]
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: { en: "Digital Transformation", zh: "數位轉型" },
    description: { 
      en: "Guiding enterprises through system modernization and ERP integration.", 
      zh: "引導企業進行系統現代化與 ERP 整合，實現無痛轉型。" 
    },
    icon: "CloudLightning"
  },
  {
    id: "s2",
    title: { en: "Agile Team Building", zh: "敏捷團隊建構" },
    description: { 
      en: "Rebuilding R&D teams, implementing Scrum/Kanban, and mentoring talents.", 
      zh: "重組研發團隊，導入 Scrum/Kanban 流程，並培育技術人才。" 
    },
    icon: "Users"
  },
  {
    id: "s3",
    title: { en: "System Architecture", zh: "系統架構設計" },
    description: { 
      en: "Designing high-concurrency architectures and microservices.", 
      zh: "設計高併發架構、解耦單體系統，並實作微服務架構。" 
    },
    icon: "Layers"
  }
];

export const INITIAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    company: "91APP",
    role: { en: "Director / Product Development", zh: "產品開發總監" },
    period: "2022 - Present",
    type: "full-time",
    description: { 
      en: "Leading digital transformation for a top retail software company.", 
      zh: "帶領頂尖零售軟體公司的數位轉型與內部系統重構。" 
    },
    techStack: ["C#.NET", "GCP", "Oracle Cloud"],
    achievements: [
      { en: "Completed ERP parallel migration.", zh: "完成 ERP 平行轉移工程。" },
      { en: "Implemented AI RPA automation.", zh: "導入 AI RPA 自動化流程。" },
      { en: "Optimized inventory across channels.", zh: "優化跨通路庫存管理系統。" }
    ]
  },
  {
    id: "exp2",
    company: "EZTABLE",
    role: { en: "VP of Engineering", zh: "工程副總" },
    period: "2020 - 2022",
    type: "full-time",
    description: { 
      en: "Rebuilt core systems for a reservation platform.", 
      zh: "重構訂位平台核心系統並重建工程團隊。" 
    },
    techStack: ["Node.js", "React", "AWS"],
    achievements: [
      { en: "Reduced infra costs by 40%.", zh: "降低 40% 基礎設施成本。" },
      { en: "Handled 700k req/min traffic.", zh: "成功承載每分鐘 70 萬次請求。" },
      { en: "Introduced SRE practices.", zh: "導入 SRE 網站可靠性工程。" }
    ]
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: { en: "AI Customer Service", zh: "AI 智能客服" },
    category: "AI Integration",
    image: "https://picsum.photos/600/400?random=1",
    description: { 
      en: "Hybrid chatbot using Google NotebookLM and Zendesk.", 
      zh: "結合 Google NotebookLM 與 Zendesk 的混合式聊天機器人。" 
    },
    tags: ["Python", "OpenAI", "Zendesk"]
  },
  {
    id: "p2",
    title: { en: "Booking Engine", zh: "高流量訂位引擎" },
    category: "System Architecture",
    image: "https://picsum.photos/600/400?random=2",
    description: { 
      en: "Re-architected legacy engine for flash sales.", 
      zh: "為搶購活動重新架構的舊版訂位引擎。" 
    },
    tags: ["AWS Lambda", "Redis"]
  }
];

export const LINKEDIN_ARTICLES: LinkedInArticle[] = [
  {
    id: "a1",
    title: "The Future of AI in Retail",
    excerpt: "How we used RPA to automate 3,000+ steps...",
    date: "2023-10-15",
    readCount: 1240,
    url: "#",
    isFeatured: true,
    imageUrl: "https://picsum.photos/800/400?random=10"
  },
  {
    id: "a2",
    title: "From Chaos to Scrum",
    excerpt: "Rebuilding Engineering Culture...",
    date: "2023-08-22",
    readCount: 850,
    url: "#",
    isFeatured: true,
    imageUrl: "https://picsum.photos/800/400?random=11"
  },
  {
    id: "a3",
    title: "Handling 700k Requests per Minute",
    excerpt: "Lessons from EZTABLE architecture...",
    date: "2024-01-05",
    readCount: 2100,
    url: "#",
    isFeatured: false
  }
];

export const fetchLatestArticles = (): Promise<LinkedInArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LINKEDIN_ARTICLES);
    }, 800);
  });
};