import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, Edit3 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';

const Hero: React.FC = () => {
  const { profile, lang, isAdmin } = useApp();
  const t = TRANSLATIONS.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-stone-100 to-transparent dark:from-stone-900/50 rounded-bl-[200px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            {t.available[lang]}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 dark:text-white leading-[0.9] mb-6 tracking-tight">
            {profile.name[lang]}
            <span className="text-primary-500">.</span>
          </h1>
          
          <div className="relative group">
             <h2 className="text-xl md:text-2xl text-stone-500 dark:text-stone-400 mb-8 font-light">
               {profile.title[lang]}
             </h2>
             {isAdmin && <button className="absolute -right-8 top-0 text-primary-500"><Edit3 className="w-4 h-4" /></button>}
          </div>

          <p className="text-stone-600 dark:text-stone-300 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            {profile.tagline[lang]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-primary-600 dark:hover:bg-white/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-stone-900/10">
              {t.contactBtn[lang]}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:border-stone-900 dark:hover:border-stone-100 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> {t.cvBtn[lang]}
            </button>
          </div>

          <div className="mt-12 flex justify-center md:justify-start gap-6 text-stone-400 dark:text-stone-600">
            <a href={`mailto:${profile.email}`} className="hover:text-primary-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Visual / Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md md:max-w-none"
        >
          <div className="relative aspect-[4/5] md:aspect-square">
            {/* Main 'Card' */}
            <div className="absolute inset-4 bg-stone-200 dark:bg-stone-800 rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
               {/* Abstract content mimicking a dashboard or profile */}
               <div className="h-full w-full bg-gradient-to-br from-stone-100 to-stone-300 dark:from-stone-800 dark:to-stone-900 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <span className="text-6xl font-serif font-bold text-stone-900/10 dark:text-white/10">20+</span>
                     <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white">
                        <span className="font-bold text-xl">R</span>
                     </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-2">{t.architect[lang]}</div>
                    <div className="text-2xl font-serif text-stone-800 dark:text-stone-200">
                      Creating scalable digital solutions.
                    </div>
                  </div>
               </div>
            </div>
            {/* Floater Element */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-800 flex flex-col gap-2 max-w-[200px]">
               <span className="text-xs text-stone-500 uppercase font-bold">Certifications</span>
               <div className="flex flex-wrap gap-2">
                  {profile.certifications.slice(0,3).map((c, i) => (
                    <span key={i} className="text-[10px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-2 py-1 rounded border border-stone-200 dark:border-stone-700">{c.name}</span>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;