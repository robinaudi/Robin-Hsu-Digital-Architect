
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useMemo } from 'react';
import { HeroScene, AbstractTechScene } from './components/QuantumScene';
import { ImpactMetrics, SkillsCloud, CertificationGrid } from './components/Diagrams';
import { Dashboard } from './components/Dashboard';
import { initialContent } from './content';
import { Theme, Language, ExperienceItem, LocalizedContent } from './types';
import { Menu, X, Linkedin, Mail, Phone, Briefcase, Globe, Palette, Settings, User, ExternalLink } from 'lucide-react';

// --- Types & Theme Config ---

const themeStyles: Record<Theme, string> = {
  light: 'bg-[#F9F8F4] text-stone-800',
  dark: 'bg-[#0f172a] text-slate-100', // Preserved as requested
  professional: 'bg-[#f3f2ef] text-[#191919]', // LinkedIn style
  hipster: 'bg-[#e6e2dd] text-[#5e5a55]',
};

interface ExperienceCardProps {
  item: ExperienceItem;
  delay: string;
  theme: Theme;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, delay, theme }) => {
    const isDark = theme === 'dark';
    const isProfessional = theme === 'professional';
    
    let cardClass = 'bg-white border-stone-200 hover:shadow-md'; // Default light
    let textClass = 'text-stone-600';
    let tagClass = 'bg-stone-100 text-stone-500';
    let highlightColor = 'border-l-nobel-gold';
    
    if (isDark) {
        cardClass = 'bg-white/5 border-white/10 hover:bg-white/10';
        textClass = 'text-gray-300';
        tagClass = 'bg-white/10 text-gray-300';
    } else if (isProfessional) {
        cardClass = 'bg-white border-gray-200 hover:shadow-lg';
        textClass = 'text-gray-600';
        tagClass = 'bg-blue-50 text-blue-700';
        highlightColor = 'border-l-[#0a66c2]';
    }

  return (
    <div className={`flex flex-col group animate-fade-in-up p-8 rounded-xl border shadow-sm transition-all duration-300 w-full border-l-4 ${highlightColor} ${cardClass}`} style={{ animationDelay: delay }}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className={`font-serif text-2xl mb-1 ${isDark ? 'text-white' : (isProfessional ? 'text-[#191919] font-sans font-semibold' : 'text-stone-900')}`}>{item.company}</h3>
            <p className={`${isProfessional ? 'text-[#0a66c2]' : 'text-nobel-gold'} font-bold uppercase tracking-widest text-xs mb-2`}>{item.role}</p>
          </div>
          <div className={`px-3 py-1 text-xs font-mono rounded-full whitespace-nowrap mt-2 md:mt-0 ${tagClass}`}>
            {item.period}
          </div>
      </div>
      
      <ul className="space-y-3 mb-6">
          {item.highlights.map((h, i) => (
              <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${textClass}`}>
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isProfessional ? 'bg-[#0a66c2]' : 'bg-stone-300'}`}></span>
                  {h}
              </li>
          ))}
      </ul>
      
      <div className={`mt-auto pt-4 border-t ${isDark ? 'border-white/10' : 'border-stone-100'}`}>
          <p className="text-xs text-stone-400 font-mono">
              <span className={`font-bold ${isProfessional ? 'text-[#0a66c2]' : 'text-nobel-gold'}`}>Tech:</span> {item.stack}
          </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // State for features
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark'); // Defaulted to Dark as preferred
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  
  // Content State (Editable)
  const [contentMap, setContentMap] = useState<LocalizedContent>(initialContent);
  
  // Derived current content
  const content = useMemo(() => contentMap[lang], [contentMap, lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Body Class for Theme
  useEffect(() => {
    document.body.className = themeStyles[theme];
  }, [theme]);

  const handleUpdateContent = (newSectionContent: any) => {
    setContentMap(prev => ({
        ...prev,
        [lang]: newSectionContent
    }));
  };

  const handleLogin = () => {
      // Simulation of Google Auth Flow with Authenticator 2FA
      const width = 450;
      const height = 650;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      
      const mockLogin = window.open('', 'Google Login', `width=${width},height=${height},top=${top},left=${left}`);
      
      if(mockLogin) {
          mockLogin.document.write(`
            <html>
                <head>
                    <title>Google Authenticator</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet">
                    <style>
                        body { font-family: 'Google Sans', 'Roboto', arial, sans-serif; margin: 0; background: #fff; color: #202124; display: flex; flex-direction: column; height: 100vh; justify-content: center; align-items: center; }
                        .container { padding: 48px 40px 36px; border: 1px solid #dadce0; border-radius: 8px; width: 100%; max-width: 450px; box-sizing: border-box; text-align: center; }
                        .logo { width: 75px; margin-bottom: 24px; }
                        h1 { font-size: 24px; font-weight: 400; margin: 0 0 10px; }
                        p { font-size: 16px; margin: 0 0 40px; }
                        .account { text-align: left; border: 1px solid #dadce0; border-radius: 4px; padding: 12px; margin-bottom: 20px; cursor: pointer; display: flex; align-items: center; }
                        .account:hover { background-color: #f7f8f8; }
                        .avatar { width: 28px; height: 28px; background: #e8f0fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; color: #1a73e8; font-weight: bold; }
                        .btn { background: #1a73e8; color: #fff; border: none; padding: 10px 24px; border-radius: 4px; font-weight: 500; cursor: pointer; float: right; }
                        .btn:hover { background: #1557b0; }
                        .input-group { text-align: left; margin-bottom: 30px; }
                        label { font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px; }
                        input { width: 100%; padding: 10px; border: 1px solid #dadce0; border-radius: 4px; font-size: 16px; box-sizing: border-box; letter-spacing: 2px; }
                        input:focus { outline: none; border-color: #1a73e8; border-width: 2px; padding: 9px; }
                        .hidden { display: none; }
                        
                        /* Authenticator Specific */
                        .auth-header { display: flex; align-items: center; justify-content: center; margin-bottom: 30px; gap: 12px; }
                        .auth-title { font-size: 22px; color: #3c4043; font-weight: 400; }
                        .auth-icon-lg { width: 40px; height: 40px; }
                        .code-display { font-size: 32px; letter-spacing: 4px; color: #1a73e8; font-family: monospace; text-align: center; margin-bottom: 10px; }
                        .timer-ring { width: 24px; height: 24px; border: 3px solid #dadce0; border-top: 3px solid #1a73e8; border-radius: 50%; animation: spin 30s linear infinite; margin: 0 auto 30px; }
                        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                    </style>
                </head>
                <body>
                    <!-- STEP 1: Choose Account -->
                    <div id="step1" class="container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" class="logo">
                        <h1>Sign in</h1>
                        <p>to continue to Robin's Portfolio</p>
                        
                        <div class="account" onclick="document.getElementById('step1').classList.add('hidden'); document.getElementById('step2').classList.remove('hidden');">
                            <div class="avatar">R</div>
                            <div>
                                <div style="font-weight: 500; color: #3c4043;">Robin Hsu</div>
                                <div style="font-size: 12px; color: #5f6368;">robin.lexus@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <!-- STEP 2: Google Authenticator -->
                    <div id="step2" class="container hidden">
                        <div class="auth-header">
                            <img src="https://upload.wikimedia.org/commons/thumb/6/6e/Google_Authenticator_for_Android_icon.svg/1024px-Google_Authenticator_for_Android_icon.svg.png" class="auth-icon-lg">
                            <div class="auth-title">Google Authenticator</div>
                        </div>
                        
                        <p style="margin-bottom: 24px; color: #5f6368;">Enter the 6-digit code from your Authenticator app</p>
                        
                        <div class="input-group">
                            <input type="text" placeholder="000 000" maxlength="6" style="text-align: center; font-size: 24px; letter-spacing: 4px; padding: 15px;">
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                            <a href="#" style="color: #1a73e8; text-decoration: none; font-size: 14px; font-weight: 500;">Try another way</a>
                            <button class="btn" onclick="window.opener.postMessage({type: 'LOGIN_SUCCESS', email: 'robin.lexus@gmail.com'}, '*'); window.close();">Verify</button>
                        </div>
                    </div>
                </body>
            </html>
          `);
      }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
        if (event.data?.type === 'LOGIN_SUCCESS') {
            setUser({ email: event.data.email });
            setIsEditorOpen(true);
        }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth"
        });
    }
  };

  // Helper for styles based on theme
  const isDark = theme === 'dark';
  const isProfessional = theme === 'professional';
  
  // Dynamic color classes
  const headingColor = isDark ? 'text-white' : (isProfessional ? 'text-[#191919]' : 'text-stone-900');
  const subHeadingColor = isDark ? 'text-gray-400' : 'text-stone-500';
  const textColor = isDark ? 'text-gray-300' : (isProfessional ? 'text-gray-700' : 'text-stone-600');
  const accentColor = isProfessional ? 'text-[#0a66c2]' : 'text-nobel-gold';
  
  const navBg = scrolled 
    ? (isDark ? 'bg-[#0f172a]/90' : (isProfessional ? 'bg-white/95 shadow-sm border-b border-gray-200' : 'bg-[#F9F8F4]/90')) 
    : 'bg-transparent';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeStyles[theme]} selection:bg-nobel-gold selection:text-white`}>
      
      {/* Admin Dashboard */}
      <Dashboard 
        isOpen={isEditorOpen} 
        onClose={() => setIsEditorOpen(false)} 
        content={content} 
        onUpdate={handleUpdateContent}
        onLogout={() => { setUser(null); setIsEditorOpen(false); }}
        user={user}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md shadow-sm transition-all duration-300 ${navBg}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-sm ${isDark ? 'bg-white/10 text-nobel-gold' : (isProfessional ? 'bg-[#0a66c2] text-white' : 'bg-stone-900 text-nobel-gold')}`}>RH</div>
            <span className={`font-serif font-bold text-lg tracking-wide ${headingColor}`}>
              ROBIN HSU
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
             {/* Main Links (Fully Localized) */}
            <div className={`flex gap-6 ${textColor}`}>
                <a href="#about" onClick={scrollToSection('about')} className={`hover:${accentColor} transition-colors`}>{content.ui.nav.about}</a>
                <a href="#experience" onClick={scrollToSection('experience')} className={`hover:${accentColor} transition-colors`}>{content.ui.nav.experience}</a>
                <a href="#skills" onClick={scrollToSection('skills')} className={`hover:${accentColor} transition-colors`}>{content.ui.nav.expertise}</a>
            </div>

            <div className={`h-4 w-px mx-2 bg-stone-300`}></div>

            {/* Controls */}
            <div className="flex items-center gap-3">
                {/* Language Switcher */}
                <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className={`flex items-center gap-1 hover:${accentColor}`} title="Switch Language">
                    <Globe size={16} /> <span className="uppercase">{lang}</span>
                </button>

                {/* Theme Switcher */}
                <div className="relative group">
                    <button className={`flex items-center gap-1 hover:${accentColor}`}>
                        <Palette size={16} />
                    </button>
                    <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all text-stone-800 border border-stone-100">
                        {(['light', 'dark', 'professional', 'hipster'] as Theme[]).map(t => (
                            <button key={t} onClick={() => setTheme(t)} className={`block w-full text-left px-4 py-2 text-xs uppercase hover:bg-stone-100 ${theme === t ? 'text-nobel-gold font-bold' : ''}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                 {/* Admin Login */}
                 {user ? (
                     <button onClick={() => setIsEditorOpen(true)} className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-full text-xs hover:bg-green-700">
                        <Settings size={12} /> Edit
                     </button>
                 ) : (
                     <button onClick={handleLogin} className={`flex items-center gap-1 hover:${accentColor}`} title={content.ui.nav.admin}>
                        <User size={16} />
                     </button>
                 )}
            </div>
          </div>

          <button className={`md:hidden p-2 ${headingColor}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Render Scene based on Theme */}
        <HeroScene />
        
        {/* Gradient Overlay based on Theme */}
        <div className={`absolute inset-0 z-0 pointer-events-none 
            ${isDark 
                ? 'bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#0f172a]' 
                : 'bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.85)_0%,rgba(249,248,244,0.4)_60%,rgba(249,248,244,0)_100%)]'
            }`} 
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`inline-block mb-4 px-4 py-1 border text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm 
            ${isDark 
                ? 'border-white/20 text-gray-300 bg-black/20' 
                : (isProfessional ? 'border-gray-300 text-gray-600 bg-white/60' : 'border-stone-300 text-stone-500 bg-white/40')
            }`}>
            {content.hero.experienceBadge}
          </div>
          <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 drop-shadow-sm ${headingColor}`}>
            {content.hero.name} {content.hero.nameZh && <span className="text-4xl md:text-6xl text-stone-400 font-light block md:inline mt-2 md:mt-0 opacity-80">{content.hero.nameZh}</span>}<br/>
            <span className={`font-normal text-2xl md:text-3xl block mt-6 font-sans tracking-tight ${subHeadingColor}`}>{content.hero.subtitle}</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-10 ${textColor}`}>
            {content.hero.title}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <a href="#experience" onClick={scrollToSection('experience')} className={`px-8 py-3 rounded-full transition-all shadow-lg text-sm font-bold tracking-widest uppercase 
                ${isDark 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : (isProfessional ? 'bg-[#0a66c2] text-white hover:bg-[#004182]' : 'bg-stone-900 text-white hover:bg-stone-800')
                }`}>
                {content.hero.cta}
             </a>
             <div className="flex gap-4 mt-4 md:mt-0">
                 <a href={`mailto:${content.contact.emailBtn === "聯絡我" ? "robin.lexus@gmail.com" : "robin.lexus@gmail.com"}`} className={`p-3 rounded-full transition-colors shadow-sm 
                    ${isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : (isProfessional ? 'bg-white text-[#0a66c2] border border-gray-200 hover:bg-blue-50' : 'bg-white text-stone-600 hover:text-nobel-gold border border-stone-200')
                    }`}><Mail size={20} /></a>
                 <a href="https://www.linkedin.com/in/robin-hsu-2b59a9a5/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-colors shadow-sm 
                    ${isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : (isProfessional ? 'bg-white text-[#0a66c2] border border-gray-200 hover:bg-blue-50' : 'bg-white text-stone-600 hover:text-nobel-gold border border-stone-200')
                    }`}><Linkedin size={20} /></a>
             </div>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section id="about" className={`py-24 ${isDark ? 'bg-transparent' : 'bg-white'}`}>
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className={`inline-block mb-3 text-xs font-bold tracking-widest uppercase ${accentColor}`}>Professional Profile</div>
              <h2 className={`font-serif text-4xl mb-6 leading-tight ${headingColor}`}>{content.about.title}</h2>
              <div className={`w-16 h-1 mb-6 ${isProfessional ? 'bg-[#0a66c2]' : 'bg-nobel-gold'}`}></div>
              <p className={`${subHeadingColor} italic`}>
                "{content.about.quote}"
              </p>
            </div>
            <div className={`md:col-span-8 text-lg leading-relaxed space-y-6 ${textColor}`}>
              <p>
                <span className={`text-5xl float-left mr-3 mt-[-8px] font-serif ${accentColor}`}>W</span>{content.about.summary.substring(1)}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                  {content.about.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Briefcase className={`${accentColor} mt-1 flex-shrink-0`} size={18} />
                        <span>{point}</span>
                      </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Impact & Skills */}
        <section id="skills" className={`py-24 border-t ${isDark ? 'border-white/10' : (isProfessional ? 'bg-gray-50 border-gray-200' : 'bg-[#F9F8F4] border-stone-200')}`}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ImpactMetrics metrics={content.metrics} theme={theme} ui={content.ui} />
                    <SkillsCloud theme={theme} skills={content.skills} ui={content.ui} />
                </div>
            </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`py-24 border-t ${isDark ? 'bg-transparent border-white/10' : 'bg-white border-stone-200'}`}>
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className={`inline-block mb-3 text-xs font-bold tracking-widest uppercase ${subHeadingColor}`}>{content.experience.subtitle}</div>
                    <h2 className={`font-serif text-4xl md:text-5xl mb-4 ${headingColor}`}>{content.experience.title}</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {content.experience.items.map((item, idx) => (
                        <ExperienceCard 
                            key={item.id}
                            item={item}
                            theme={theme}
                            delay={`${idx * 0.1}s`}
                        />
                    ))}
                </div>
             </div>
        </section>

        {/* Certifications & Education */}
        <section className={`py-24 overflow-hidden relative bg-stone-900`}>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
                 <AbstractTechScene />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                     <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border bg-stone-800 text-nobel-gold border-stone-700`}>
                            {content.ui.headings.credentials}
                        </div>
                        <h2 className={`font-serif text-4xl mb-6 text-white`}>{content.ui.headings.education}</h2>
                        
                        <div className="mb-10">
                             <h3 className={`text-xl font-serif mb-2 text-white`}>{content.ui.headings.educationSubtitle}</h3>
                             <div className={`p-4 border rounded-lg backdrop-blur-sm border-stone-700 bg-stone-800/50`}>
                                <div className={`font-bold text-nobel-gold`}>Tamkang University (淡江大學)</div>
                                <div className={`text-stone-300`}>EMBA, Information Management</div>
                             </div>
                        </div>

                        <CertificationGrid />
                     </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <section id="contact" className={`py-24 border-t ${isDark ? 'bg-transparent border-white/10' : 'bg-white border-stone-200'}`}>
             <div className="container mx-auto px-6 text-center">
                 <h2 className={`font-serif text-4xl mb-8 ${headingColor}`}>{content.ui.headings.contact}</h2>
                 <p className={`max-w-xl mx-auto mb-12 ${textColor}`}>
                    {content.ui.headings.contactSubtitle}
                 </p>
                 <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <a href="https://dada-fly.com/tw/mentors/robinhsu" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-colors border w-full md:w-auto justify-center group
                        ${isDark 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' 
                            : (isProfessional ? 'bg-white border-gray-200 hover:border-[#0a66c2] text-[#191919]' : 'bg-[#F9F8F4] border-stone-200 hover:bg-stone-100 text-stone-800')
                        }`}>
                        <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${isProfessional ? 'bg-[#0a66c2] text-white' : 'bg-stone-900 text-white'}`}>
                            DF
                        </div>
                        <span className="font-medium group-hover:text-[#0a66c2] transition-colors">Dada Fly Profile</span>
                        <ExternalLink size={16} className="opacity-50" />
                    </a>
                     <a href="mailto:robin.lexus@gmail.com" className={`flex items-center gap-3 px-6 py-4 rounded-lg transition-colors border w-full md:w-auto justify-center 
                        ${isDark 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' 
                            : (isProfessional ? 'bg-white border-gray-200 hover:border-[#0a66c2] text-[#191919]' : 'bg-[#F9F8F4] border-stone-200 hover:bg-stone-100 text-stone-800')
                        }`}>
                        <Mail size={20} className={accentColor} />
                        <span className="font-medium">{content.contact.emailBtn}</span>
                    </a>
                 </div>
             </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-xl mb-1">ROBIN HSU</div>
                <p className="text-xs text-stone-600 uppercase tracking-widest">Senior Technology Executive</p>
            </div>
            <div className="text-xs text-stone-600">
                © {new Date().getFullYear()} Robin Hsu. {content.ui.footer.rights}
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
