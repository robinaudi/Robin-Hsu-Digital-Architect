import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';

const Portfolio: React.FC = () => {
  const { projects, lang } = useApp();
  const t = TRANSLATIONS.portfolio;

  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
             <h2 className="text-xs font-bold text-primary-600 dark:text-primary-500 tracking-[0.2em] uppercase mb-4">{t.heading[lang]}</h2>
             <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">{t.subheading[lang]}</h3>
          </div>
          <button className="self-start md:self-auto px-6 py-2 border-b border-stone-300 dark:border-stone-700 hover:border-primary-500 text-stone-600 dark:text-stone-400 hover:text-primary-500 transition-colors">
            {t.viewGithub[lang]}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 relative bg-stone-200 dark:bg-stone-800">
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title[lang]} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <div className="text-xs font-bold text-primary-600 dark:text-primary-500 mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                  {project.title[lang]}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-4 line-clamp-2">
                  {project.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-stone-500 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded border border-stone-200 dark:border-stone-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;