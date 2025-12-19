
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type Theme = 'light' | 'dark' | 'professional' | 'modern' | 'hipster';
export type Language = 'en' | 'zh';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  stack: string;
}

export interface MetricItem {
    label: string;
    value: string;
    suffix: string;
    desc: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface UIStrings {
  nav: {
    about: string;
    experience: string;
    expertise: string;
    contact: string;
    admin: string;
  };
  headings: {
    keyAchievements: string;
    technicalExpertise: string;
    expertiseSubtitle: string;
    credentials: string;
    education: string;
    educationSubtitle: string;
    contact: string;
    contactSubtitle: string;
  };
  footer: {
    rights: string;
  };
}

export interface ContentData {
  hero: {
    name: string;
    nameZh: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    quote: string;
    summary: string;
    points: string[];
  };
  metrics: MetricItem[];
  skills: SkillCategory[];
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailBtn: string;
  };
  ui: UIStrings;
}

export interface LocalizedContent {
  en: ContentData;
  zh: ContentData;
}
