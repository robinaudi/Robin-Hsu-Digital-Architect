
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Server, Database, Cloud } from 'lucide-react';
import { MetricItem, SkillCategory, UIStrings } from '../types';

// --- IMPACT METRICS DIAGRAM ---
export const ImpactMetrics: React.FC<{ metrics: MetricItem[], theme: string, ui: UIStrings }> = ({ metrics, theme, ui }) => {
  const colors = ["bg-green-500", "bg-blue-500", "bg-purple-500", "bg-yellow-500"];
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-stone-900';
  const subTextColor = isDark ? 'text-gray-400' : 'text-stone-500';

  return (
    <div className={`flex flex-col p-8 rounded-xl shadow-sm border w-full ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-stone-200'}`}>
      <h3 className={`font-serif text-2xl mb-6 flex items-center gap-3 ${textColor}`}>
        <TrendingUp className="text-nobel-gold" /> {ui.headings.keyAchievements}
      </h3>
      
      <div className="space-y-8">
        {metrics.map((m, idx) => (
          <div key={idx} className="relative">
            <div className="flex justify-between items-end mb-2">
              <span className={`text-sm font-bold uppercase tracking-wider ${subTextColor}`}>{m.label}</span>
              <div className="text-right">
                <span className={`text-2xl font-serif font-bold ${textColor}`}>{m.value}</span>
                <span className={`text-sm font-medium ml-1 ${subTextColor}`}>{m.suffix}</span>
              </div>
            </div>
            
            <div className={`h-3 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-stone-100'}`}>
              <motion.div 
                key={`${theme}-${idx}`} // Force re-animation on theme change
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                transition={{ duration: 1.5, delay: idx * 0.2 }}
                className={`h-full rounded-full ${colors[idx % colors.length]}`}
              />
            </div>
            <p className={`mt-2 text-xs italic ${subTextColor}`}>{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SKILLS CLOUD ---
export const SkillsCloud: React.FC<{theme: string, skills: SkillCategory[], ui: UIStrings}> = ({theme, skills, ui}) => {
  const getIcon = (name: string) => {
      // Simple logic to match icons based on category index or name approximation
      if (name.includes("Leader") || name.includes("領導")) return <Users size={16} />;
      if (name.includes("Cloud") || name.includes("雲端")) return <Cloud size={16} />;
      if (name.includes("Development") || name.includes("軟體")) return <Server size={16} />;
      return <Database size={16} />;
  }

  const [activeCategory, setActiveCategory] = useState(0);
  const isDark = theme === 'dark';
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-[#F5F4F0] border-stone-200';
  const itemBg = isDark ? 'bg-white/10 border-white/5 text-gray-200' : 'bg-white border-stone-200 text-stone-700';

  return (
    <div className={`flex flex-col p-8 rounded-xl border w-full h-full min-h-[400px] ${cardBg}`}>
      <h3 className={`font-serif text-2xl mb-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>{ui.headings.technicalExpertise}</h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-stone-500'} text-sm mb-6`}>{ui.headings.expertiseSubtitle}</p>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {skills.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeCategory === idx 
                ? 'bg-nobel-gold text-white shadow-md' 
                : `${isDark ? 'bg-white/10 text-gray-400 hover:bg-white/20' : 'bg-white text-stone-500 border border-stone-200 hover:border-stone-400'}`
            }`}
          >
            {getIcon(cat.name)}
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex-1 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills[activeCategory]?.skills.map((skill, idx) => (
                <motion.div
                    key={`${activeCategory}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`${itemBg} p-4 rounded-lg border shadow-sm flex items-center gap-3`}
                >
                    <div className="w-2 h-2 rounded-full bg-nobel-gold"></div>
                    <span className="font-medium">{skill}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

// --- CERTIFICATIONS ---
export const CertificationGrid: React.FC = () => {
    const certs = [
        { code: "CSM", name: "Certified Scrum Master", org: "Scrum Alliance" },
        { code: "PMP", name: "Project Management Professional", org: "PMI" },
        { code: "MCPD", name: "Microsoft Certified Professional Developer", org: "Microsoft" },
        { code: "ITILv3", name: "Information Technology Infrastructure Library", org: "Axelos" },
        { code: "ITSMS", name: "IT Service Management System", org: "ISO/IEC 20000" },
        { code: "OCA", name: "Oracle Certified Associate", org: "Oracle" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certs.map((c, i) => (
                <div key={i} className="group p-4 bg-stone-800 border border-stone-700 rounded-lg hover:border-nobel-gold transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-nobel-gold text-lg">{c.code}</span>
                        <Award size={16} className="text-stone-500 group-hover:text-nobel-gold transition-colors" />
                    </div>
                    <div className="text-stone-300 text-sm font-medium leading-tight mb-1">{c.name}</div>
                    <div className="text-stone-500 text-xs">{c.org}</div>
                </div>
            ))}
        </div>
    )
}
