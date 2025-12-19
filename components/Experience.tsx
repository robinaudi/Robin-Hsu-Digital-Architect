import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';

const Experience: React.FC = () => {
  const { experience, lang } = useApp();
  const t = TRANSLATIONS.experience;

  return (
    <section className="py-24 bg-stone-100 dark:bg-stone-900/50" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 dark:text-white mb-4">{t.heading[lang]}</h2>
          <p className="text-stone-500 dark:text-stone-400">{t.subheading[lang]}</p>
        </motion.div>

        <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-8 md:pl-0 border-l-2 border-stone-200 dark:border-stone-800 md:border-l-0"
              >
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-primary-500 transition-colors" />

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                   
                   {/* Left Side (Date & Company for Desktop) */}
                   <div className={`hidden md:block text-right ${index % 2 === 1 ? 'md:order-3 md:text-left' : ''}`}>
                      <h3 className="text-2xl font-bold text-stone-900 dark:text-white">{item.company}</h3>
                      <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-500 font-medium text-sm mt-1">
                         <Calendar className="w-4 h-4" /> {item.period}
                      </div>
                   </div>

                   {/* Center Line Dot */}
                   <div className="hidden md:flex flex-col items-center justify-center h-full">
                      <div className="w-4 h-4 rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-primary-500 transition-colors z-10" />
                      <div className="w-px h-full bg-stone-200 dark:bg-stone-800 absolute top-4 -z-0" />
                   </div>

                   {/* Right Side (Role & Content) */}
                   <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                      {/* Mobile Header show here */}
                      <div className="md:hidden mb-4">
                        <h3 className="text-2xl font-bold text-stone-900 dark:text-white">{item.company}</h3>
                        <div className="text-stone-500 text-sm">{item.period}</div>
                      </div>

                      <h4 className="text-xl font-serif text-stone-800 dark:text-stone-200 mb-4">{item.role[lang]}</h4>
                      <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-6">
                        {item.description[lang]}
                      </p>
                      
                      <div className={`space-y-2 ${index % 2 === 1 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                             <span>{ach[lang]}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`flex flex-wrap gap-2 mt-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                        {item.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white dark:bg-stone-800 text-[10px] font-bold uppercase tracking-wider text-stone-500 border border-stone-200 dark:border-stone-700 rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;