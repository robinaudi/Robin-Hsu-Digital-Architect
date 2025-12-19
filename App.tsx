import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import LinkedInFeed from './components/LinkedInFeed';
import NavBar from './components/NavBar';
import { AppProvider, useApp } from './context/AppContext';
import { TRANSLATIONS } from './locales';

const MainContent: React.FC = () => {
  const { profile, lang } = useApp();
  const t = TRANSLATIONS.footer;

  return (
    <div className="min-h-screen font-sans selection:bg-primary-500/30 selection:text-primary-900">
      <NavBar />

      <main>
        <Hero />
        <Services />
        <Experience />
        <Portfolio />
        <LinkedInFeed />
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 py-20" id="contact">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-white mb-2">{t.cta[lang]}</h2>
            <p className="text-stone-500">{t.subCta[lang]}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href={`mailto:${profile.email}`} className="text-xl font-bold text-stone-900 dark:text-white hover:text-primary-500 transition-colors">
              {profile.email}
            </a>
            <span className="text-stone-500">{profile.phone}</span>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-stone-200 dark:border-stone-900 text-center text-stone-400 text-sm">
          &copy; {new Date().getFullYear()} {profile.name[lang]}. {t.rights[lang]}
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;