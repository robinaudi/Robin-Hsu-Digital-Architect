import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppContextType, AppState, Language, Theme, PersonalProfile } from '../types';
import { INITIAL_EXPERIENCE, INITIAL_PROFILE, INITIAL_PROJECTS, INITIAL_SERVICES } from '../data';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState<Theme>('light');
  
  // Language State
  const [lang, setLang] = useState<Language>('en');

  // Auth State
  const [isAdmin, setIsAdmin] = useState(false);

  // Content State (Editable)
  const [profile, setProfile] = useState<PersonalProfile>(INITIAL_PROFILE);
  const [services] = useState(INITIAL_SERVICES);
  const [experience] = useState(INITIAL_EXPERIENCE);
  const [projects] = useState(INITIAL_PROJECTS);

  // Toggle Theme Class on Body
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const login = (code: string) => {
    // MOCK OTP VERIFICATION
    // In a real app, verify against a backend secret
    if (code === '123456') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const updateProfile = (key: keyof PersonalProfile, value: any) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const value = {
    theme,
    toggleTheme,
    lang,
    setLang,
    isAdmin,
    login,
    logout,
    profile,
    updateProfile,
    services,
    experience,
    projects
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
