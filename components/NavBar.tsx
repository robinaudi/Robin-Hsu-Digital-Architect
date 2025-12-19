import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Languages, UserCog, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';
import AdminGuard from './AdminGuard';

const NavBar: React.FC = () => {
  const { theme, toggleTheme, lang, setLang, isAdmin, logout } = useApp();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const t = TRANSLATIONS.nav;

  const NavLinks = [
    { href: "#services", label: t.services[lang] },
    { href: "#experience", label: t.experience[lang] },
    { href: "#portfolio", label: t.works[lang] },
    { href: "#blog", label: t.insights[lang] },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="font-serif italic font-bold text-2xl text-stone-900 dark:text-white tracking-tighter">
            Robin<span className="text-primary-500 not-italic">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NavLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="p-2 text-stone-500 hover:text-primary-500 transition-colors" title="Switch Language">
              <Languages className="w-5 h-5" />
            </button>
            <button onClick={toggleTheme} className="p-2 text-stone-500 hover:text-primary-500 transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {isAdmin ? (
               <button onClick={logout} className="flex items-center gap-2 text-xs font-bold text-red-500 border border-red-500/30 px-3 py-1.5 rounded-full hover:bg-red-500/10">
                 <LogOut className="w-3 h-3" /> {t.logout[lang]}
               </button>
            ) : (
               <button onClick={() => setShowAdminLogin(true)} className="p-2 text-stone-500 hover:text-primary-500 transition-colors" title="Admin">
                 <UserCog className="w-5 h-5" />
               </button>
            )}

            <a href="#contact" className="ml-2 px-5 py-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-primary-600 dark:hover:bg-white/90 transition-colors">
              {t.contact[lang]}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-stone-900 dark:text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-stone-50 dark:bg-stone-950 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-center">
              {NavLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-serif text-stone-900 dark:text-white"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-stone-200 dark:border-stone-800 my-4" />
              
              <div className="flex justify-center gap-8">
                 <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="flex flex-col items-center gap-2 text-stone-500">
                    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-full">
                      <Languages className="w-6 h-6" />
                    </div>
                    <span className="text-xs">{lang.toUpperCase()}</span>
                 </button>
                 <button onClick={toggleTheme} className="flex flex-col items-center gap-2 text-stone-500">
                    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-full">
                      {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                    </div>
                    <span className="text-xs">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                 </button>
                 <button onClick={() => { setIsMobileOpen(false); setShowAdminLogin(true); }} className="flex flex-col items-center gap-2 text-stone-500">
                    <div className="p-3 bg-stone-200 dark:bg-stone-800 rounded-full">
                      <UserCog className="w-6 h-6" />
                    </div>
                    <span className="text-xs">Admin</span>
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdminGuard isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
    </>
  );
};

export default NavBar;