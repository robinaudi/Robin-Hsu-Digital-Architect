
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { LocalizedContent } from './types';

export const initialContent: LocalizedContent = {
  en: {
    ui: {
      nav: {
        about: "About",
        experience: "Experience",
        expertise: "Expertise",
        contact: "Contact",
        admin: "Login"
      },
      headings: {
        keyAchievements: "Key Achievements",
        technicalExpertise: "Technical Expertise",
        expertiseSubtitle: "20+ Years of hands-on and managerial experience.",
        credentials: "Credentials",
        education: "Education & Certifications",
        educationSubtitle: "Continuous learning and professional validation.",
        contact: "Ready to Collaborate?",
        contactSubtitle: "Available for consulting, speaking engagements, and senior leadership roles."
      },
      footer: {
        rights: "All rights reserved."
      }
    },
    hero: {
      name: "Robin Hsu",
      nameZh: "徐秉暉",
      title: "Senior Technology Executive",
      subtitle: "Business Strategy • Technical Leadership",
      cta: "View Work"
    },
    about: {
      title: "Architecture & Strategy",
      quote: "Standardization before Systematization.",
      summary: "With over two decades of experience in the software industry, I specialize in building and managing agile development teams and executing comprehensive technical roadmaps.",
      points: [
        "Horizontal Integration of Web/App, POS, CRM, EIS, and ERP systems.",
        "10+ years experience on both Client (甲方) and Vendor (乙方) sides.",
        "Expert in Cloud Solutions & Technical Debt Resolution.",
        "Successful migration of core financial systems."
      ]
    },
    metrics: [
      { label: "Cost Reduction", value: "100M", suffix: "+ NTD/Yr", desc: "Optimized one-click logistics & automated processes" },
      { label: "Efficiency Boost", value: "200", suffix: "%", desc: "ERP Finance module process automation" },
      { label: "IT Cost Savings", value: "40", suffix: "%", desc: "SRE Implementation & Cloud Optimization" },
      { label: "Team Growth", value: "80", suffix: "+", desc: "Managed large-scale R&D teams across regions" }
    ],
    skills: [
      { name: "Leadership", skills: ["Team Building (80+)", "Agile/Scrum", "Strategic Planning", "Digital Transformation", "Cross-functional Integration"] },
      { name: "Cloud & DevOps", skills: ["AWS", "GCP", "Azure", "SRE", "Docker/K8s", "CI/CD"] },
      { name: "Development", skills: ["C#.NET", "React.js", "Node.js", "React Native", "ASP.NET Core"] },
      { name: "Data & Systems", skills: ["Oracle NetSuite ERP", "MS-SQL", "Oracle DB", "CRM/POS Integration", "PowerAutomate"] }
    ],
    experience: {
      title: "Experience",
      subtitle: "Career Trajectory",
      items: [
        {
          id: "91app",
          company: "91APP",
          role: "Director / Product Development",
          period: "2022 - Present",
          highlights: [
            "Led digital transformation and internal system reconstruction.",
            "Implemented Oracle NetSuite ERP: Efficiency +200%.",
            "AI Integration: Introduced RPA reducing listing costs by 80%.",
            "Inventory Management: Optimized cross-platform allocation."
          ],
          stack: "C#.NET, MS-SQL, AWS, GCP"
        },
        {
          id: "eztable",
          company: "EZTABLE",
          role: "VP of Technology & Talent",
          period: "2020 - 2022",
          highlights: [
            "Rebuilt group operations and systems. Managed 20+ IT staff.",
            "Optimized Online Booking: Adopted AWS solutions.",
            "SRE Implementation: Reduced IT costs by 40%.",
            "B2B Backend: Solved high-traffic paralysis."
          ],
          stack: "React.js, Node.JS, AWS"
        },
        {
          id: "tutorabc",
          company: "TutorABC",
          role: "Senior R&D Manager",
          period: "2014 - 2020",
          highlights: [
            "Built and scaled teams (80+ staff).",
            "Social CRM: Integrated CTI with LINE OA, saving 2M/year.",
            "Digital Transformation: Achieved 'One-click' registration."
          ],
          stack: "C#.NET, MS-SQL, Alibaba Cloud"
        }
      ]
    },
    contact: {
      title: "Ready to Collaborate?",
      subtitle: "Available for consulting, speaking engagements, and senior leadership roles.",
      emailBtn: "Email Me"
    }
  },
  zh: {
    ui: {
      nav: {
        about: "關於我",
        experience: "經歷",
        expertise: "專業技能",
        contact: "聯絡資訊",
        admin: "登入"
      },
      headings: {
        keyAchievements: "主要成就",
        technicalExpertise: "技術專長",
        expertiseSubtitle: "20 年以上實戰與管理經驗",
        credentials: "專業證照",
        education: "學歷與證書",
        educationSubtitle: "持續進修與專業認證",
        contact: "準備好合作了嗎？",
        contactSubtitle: "提供顧問諮詢、演講邀約及高階管理職務洽談。"
      },
      footer: {
        rights: "版權所有"
      }
    },
    hero: {
      name: "Robin Hsu",
      nameZh: "徐秉暉",
      title: "資深技術高管",
      subtitle: "商業思維 • 技術領導",
      cta: "查看經歷"
    },
    about: {
      title: "架構與策略",
      quote: "先標準化，才系統化。",
      summary: "擁有超過20年的軟體產業經驗，擅長建置與管理敏捷開發團隊，並制定執行完整的技術藍圖。",
      points: [
        "橫向整合 Web/App、POS、CRM、EIS 至 ERP 等全架構系統。",
        "甲／乙方各十年實戰經驗，評估雲端/系統解決方案。",
        "擅長處理技術債與雲端架構優化。",
        "成功遷移企業核心財務系統，順利切換無縫接軌。"
      ]
    },
    metrics: [
      { label: "成本降低", value: "1億", suffix: "+ 年省", desc: "優化一鍵寄送與自動化流程" },
      { label: "效率提升", value: "200", suffix: "%", desc: "ERP 財務模組流程自動化" },
      { label: "IT 成本節省", value: "40", suffix: "%", desc: "SRE 導入與雲端優化" },
      { label: "團隊成長", value: "80", suffix: "+", desc: "管理跨區域大型研發團隊" }
    ],
    skills: [
      { name: "領導力", skills: ["團隊建立 (80+人)", "敏捷開發/Scrum", "策略規劃", "數位轉型", "跨部門整合"] },
      { name: "雲端與維運", skills: ["AWS", "GCP", "Azure", "SRE", "Docker/K8s", "CI/CD"] },
      { name: "軟體開發", skills: ["C#.NET", "React.js", "Node.js", "React Native", "ASP.NET Core"] },
      { name: "數據與系統", skills: ["Oracle NetSuite ERP", "MS-SQL", "Oracle DB", "CRM/POS 整合", "PowerAutomate"] }
    ],
    experience: {
      title: "經歷",
      subtitle: "職涯歷程",
      items: [
        {
          id: "91app",
          company: "91APP",
          role: "總監 / 產品發展處",
          period: "2022 - Present",
          highlights: [
            "主導數位轉型與內部系統重建。",
            "導入 Oracle NetSuite ERP：效率提升 200%。",
            "AI 導入：RPA 降低上架成本 80%，智能客服提升效率 50%。",
            "庫存管理：優化多平台配貨 (Momo, 蝦皮等)。"
          ],
          stack: "C#.NET, MS-SQL, AWS, GCP"
        },
        {
          id: "eztable",
          company: "EZTABLE",
          role: "技術暨人才副總",
          period: "2020 - 2022",
          highlights: [
            "重建集團營運與系統。管理 20+ IT 人員。",
            "優化線上訂位：導入 AWS 解決方案，解決技術債。",
            "SRE 導入：IT 費用節省 40%，維運節省 100%。",
            "B2B 後台：解決高流量系統癱瘓問題。"
          ],
          stack: "React.js, Node.JS, AWS"
        },
        {
          id: "tutorabc",
          company: "TutorABC",
          role: "資深研發經理",
          period: "2014 - 2020",
          highlights: [
            "建立與擴展團隊 (80+ 人)。",
            "Social CRM：整合 CTI 與 LINE OA，年省 200 萬。",
            "數位轉型：達成「一鍵註冊」、「一鍵成交」。"
          ],
          stack: "C#.NET, MS-SQL, Alibaba Cloud"
        }
      ]
    },
    contact: {
      title: "準備好合作了嗎？",
      subtitle: "提供顧問諮詢、演講邀約及高階管理職務洽談。",
      emailBtn: "聯絡我"
    }
  }
};
