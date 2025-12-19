import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRANSLATIONS } from '../locales';

interface AdminGuardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ isOpen, onClose }) => {
  const { login, lang } = useApp();
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const t = TRANSLATIONS.admin;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(code);
    if (success) {
      onClose();
      setCode('');
      setError(false);
    } else {
      setError(true);
      // Shake animation trigger could go here
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950/80 backdrop-blur-sm px-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-sm bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800"
          >
            {/* Header */}
            <div className="bg-stone-100 dark:bg-stone-800 p-6 text-center relative">
              <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white">{t.loginTitle[lang]}</h3>
            </div>

            {/* Body */}
            <div className="p-8">
              <p className="text-sm text-stone-500 dark:text-stone-400 text-center mb-6 flex items-center justify-center gap-2">
                <Smartphone className="w-4 h-4" />
                {t.enterCode[lang]}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => {
                    setError(false);
                    setCode(e.target.value);
                  }}
                  maxLength={6}
                  placeholder={t.placeholder[lang]}
                  className={`w-full text-center text-3xl font-mono tracking-[0.5em] py-4 bg-stone-50 dark:bg-stone-950 border-2 rounded-xl focus:outline-none transition-all ${
                    error ? 'border-red-500 text-red-500' : 'border-stone-200 dark:border-stone-700 focus:border-primary-500 text-stone-900 dark:text-white'
                  }`}
                />
                {error && <p className="text-red-500 text-xs text-center">Invalid Code (Hint: 123456)</p>}
                
                <button 
                  type="submit" 
                  className="w-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 py-3 rounded-xl font-bold hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all shadow-lg active:scale-95"
                >
                  {t.verify[lang]}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdminGuard;
