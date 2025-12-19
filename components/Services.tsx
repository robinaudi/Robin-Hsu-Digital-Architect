import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ service: ServiceItem; index: number; lang: 'en'|'zh' }> = ({ service, index, lang }) => {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-stone-50 dark:bg-stone-950 rounded-2xl flex items-center justify-center mb-6 text-stone-400 group-hover:text-primary-500 group-hover:scale-110 transition-all border border-stone-100 dark:border-stone-800">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors">
        {service.title[lang]}
      </h3>
      <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-sm">
        {service.description[lang]}
      </p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { services, lang } = useApp();
  const t = TRANSLATIONS.services;

  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950" id="services">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-2xl mx-auto"
        >
          <h2 className="text-xs font-bold text-primary-600 dark:text-primary-500 tracking-[0.2em] uppercase mb-4">{t.heading[lang]}</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-white">{t.subheading[lang]}</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;