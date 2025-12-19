export type Language = 'en' | 'zh';
export type Theme = 'light' | 'dark';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: LocalizedText;
  period: string;
  description: LocalizedText;
  techStack: string[];
  achievements: LocalizedText[]; // Changed to array of localized text
  type: 'full-time' | 'consulting';
}

export interface ServiceItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: LocalizedText;
  category: string;
  image: string;
  description: LocalizedText;
  tags: string[];
  link?: string;
}

export interface LinkedInArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readCount: number;
  url: string;
  isFeatured: boolean;
  imageUrl?: string;
}

export interface PersonalProfile {
  name: LocalizedText;
  title: LocalizedText;
  tagline: LocalizedText;
  yearsExperience: number;
  about: LocalizedText[];
  phone: string;
  email: string;
  linkedin: string;
  certifications: { name: string; issuer: string }[];
}

export interface AppState {
  lang: Language;
  theme: Theme;
  isAdmin: boolean;
  profile: PersonalProfile;
  services: ServiceItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export interface AppContextType extends AppState {
  setLang: (lang: Language) => void;
  toggleTheme: () => void;
  login: (code: string) => boolean;
  logout: () => void;
  updateProfile: (key: keyof PersonalProfile, value: any) => void;
}