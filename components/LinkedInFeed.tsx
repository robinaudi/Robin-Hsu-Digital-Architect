import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, RefreshCw, Bookmark } from 'lucide-react';
import { fetchLatestArticles } from '../data';
import { LinkedInArticle } from '../types';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';

const LinkedInFeed: React.FC = () => {
  const { lang } = useApp();
  const t = TRANSLATIONS.blog;
  const [articles, setArticles] = useState<LinkedInArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchLatestArticles();
      setArticles(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const featured = articles.filter(a => a.isFeatured);
  const feed = articles.filter(a => !a.isFeatured);

  return (
    <section className="py-24 bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800" id="blog">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="bg-[#0077b5] p-3 rounded-xl shadow-lg shadow-blue-900/20">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
               <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">{t.heading[lang]}</h2>
               <p className="text-stone-500 text-sm">{t.subheading[lang]}</p>
            </div>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-primary-500 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            {t.sync[lang]}
          </button>
        </div>

        {/* Featured Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featured.map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative bg-white dark:bg-stone-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-stone-900/90 backdrop-blur text-stone-900 dark:text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                <Bookmark className="w-3 h-3 fill-primary-500 text-primary-500" /> {t.featured[lang]}
              </div>
              <div className="h-56 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-stone-400 text-xs mb-3 font-medium uppercase tracking-wider">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <span>{article.readCount} {t.reads[lang]}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-500 text-sm font-bold uppercase tracking-wide">
                  {t.read[lang]} <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Live Feed List */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-stone-900 dark:text-white font-bold mb-8 text-xl border-b border-stone-200 dark:border-stone-800 pb-4">{t.recent[lang]}</h3>
          <div className="space-y-4">
            {feed.map((article) => (
              <motion.a 
                key={article.id}
                href={article.url}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="block p-6 bg-white dark:bg-stone-950/50 border border-stone-200 dark:border-stone-800 rounded-2xl hover:border-primary-500/30 transition-colors group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                     <h4 className="text-lg font-bold text-stone-800 dark:text-stone-200 group-hover:text-primary-600 transition-colors mb-2">
                       {article.title}
                     </h4>
                     <p className="text-stone-500 text-sm line-clamp-2 mb-3">
                       {article.excerpt}
                     </p>
                     <div className="flex items-center gap-2 text-xs text-stone-400">
                        <Linkedin className="w-3 h-3" />
                        <span>{t.posted[lang]} • {article.date}</span>
                     </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-stone-300 group-hover:text-primary-500 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LinkedInFeed;