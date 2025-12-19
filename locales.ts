import { LocalizedText } from "./types";

export const TRANSLATIONS = {
  nav: {
    services: { en: "Services", zh: "專業服務" },
    experience: { en: "Experience", zh: "經歷" },
    works: { en: "Works", zh: "作品集" },
    insights: { en: "Insights", zh: "觀點" },
    contact: { en: "Contact", zh: "聯絡我" },
    admin: { en: "Admin", zh: "管理後台" },
    logout: { en: "Logout", zh: "登出" },
  },
  hero: {
    available: { en: "Available for Consulting", zh: "接受顧問諮詢" },
    contactBtn: { en: "Contact Me", zh: "聯絡我" },
    cvBtn: { en: "Download CV", zh: "下載履歷" },
    years: { en: "Years Experience", zh: "年經驗" },
    architect: { en: "System Architect", zh: "系統架構師" },
  },
  services: {
    heading: { en: "Expertise", zh: "專業領域" },
    subheading: { en: "How I can help you", zh: "我能為您做什麼" },
  },
  experience: {
    heading: { en: "Career Journey", zh: "職涯歷程" },
    subheading: { en: "Technical leadership & impact", zh: "技術領導與商業影響力" },
  },
  portfolio: {
    heading: { en: "Portfolio", zh: "作品集" },
    subheading: { en: "Selected Works", zh: "精選專案" },
    viewGithub: { en: "View Github", zh: "查看 Github" },
  },
  blog: {
    heading: { en: "Insights", zh: "專業觀點" },
    subheading: { en: "Synced from LinkedIn", zh: "同步自 LinkedIn" },
    sync: { en: "Sync Now", zh: "同步更新" },
    recent: { en: "Recent Posts", zh: "最新文章" },
    featured: { en: "Featured", zh: "精選" },
    read: { en: "Read Article", zh: "閱讀文章" },
    reads: { en: "reads", zh: "次閱讀" },
    posted: { en: "Posted on LinkedIn", zh: "發佈於 LinkedIn" },
  },
  footer: {
    cta: { en: "Ready to scale your tech?", zh: "準備好擴展您的技術架構了嗎？" },
    subCta: { en: "Reach out for consulting.", zh: "歡迎洽談顧問合作" },
    rights: { en: "All rights reserved.", zh: "版權所有" },
  },
  admin: {
    loginTitle: { en: "Admin Access", zh: "管理員登入" },
    enterCode: { en: "Enter 6-digit Authenticator Code", zh: "輸入 6 位數驗證碼" },
    placeholder: { en: "000 000", zh: "000 000" },
    verify: { en: "Verify", zh: "驗證" },
    cancel: { en: "Cancel", zh: "取消" },
    editing: { en: "Editing Mode Active", zh: "編輯模式已啟用" },
  }
};

export const getTranslation = (lang: 'en' | 'zh', key: keyof typeof TRANSLATIONS) => {
  return TRANSLATIONS[key];
};