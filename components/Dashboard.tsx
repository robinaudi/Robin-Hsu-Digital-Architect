
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { X, Save, LogOut } from 'lucide-react';
import { ContentData } from '../types';

interface DashboardProps {
    isOpen: boolean;
    onClose: () => void;
    content: ContentData;
    onUpdate: (newContent: ContentData) => void;
    onLogout: () => void;
    user: any;
}

export const Dashboard: React.FC<DashboardProps> = ({ isOpen, onClose, content, onUpdate, onLogout, user }) => {
    if (!isOpen) return null;

    const handleChange = (section: keyof ContentData, field: string, value: string | string[]) => {
        const newContent = { ...content };
        // @ts-ignore
        if (typeof newContent[section] === 'object' && !Array.isArray(newContent[section])) {
             // @ts-ignore
            newContent[section][field] = value;
        }
        onUpdate(newContent);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex justify-end">
            <div className="w-full md:w-[500px] bg-white h-full shadow-2xl overflow-y-auto animate-slide-in-right">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 sticky top-0 z-10">
                    <div>
                         <h2 className="text-xl font-bold text-gray-800">Content Editor</h2>
                         <p className="text-xs text-green-600 font-mono">Logged in as {user?.email || 'Admin'}</p>
                    </div>
                    <div className="flex gap-2">
                         <button onClick={onLogout} className="p-2 text-red-500 hover:bg-red-50 rounded-full" title="Logout">
                            <LogOut size={20} />
                         </button>
                         <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-200 rounded-full">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-8">
                    {/* Hero Section */}
                    <section>
                        <h3 className="text-sm font-bold uppercase text-gray-400 mb-4 tracking-wider">Hero Section</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Name (EN)</label>
                                <input 
                                    type="text" 
                                    value={content.hero.name} 
                                    onChange={(e) => handleChange('hero', 'name', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Title</label>
                                <input 
                                    type="text" 
                                    value={content.hero.title} 
                                    onChange={(e) => handleChange('hero', 'title', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
                                />
                            </div>
                             <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Subtitle</label>
                                <input 
                                    type="text" 
                                    value={content.hero.subtitle} 
                                    onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="pt-6 border-t border-gray-100">
                        <h3 className="text-sm font-bold uppercase text-gray-400 mb-4 tracking-wider">About Section</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Quote</label>
                                <textarea 
                                    value={content.about.quote} 
                                    onChange={(e) => handleChange('about', 'quote', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none min-h-[60px]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Summary</label>
                                <textarea 
                                    value={content.about.summary} 
                                    onChange={(e) => handleChange('about', 'summary', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none min-h-[100px]"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="p-4 bg-gray-50 border-t border-gray-200 sticky bottom-0">
                    <button onClick={onClose} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                        <Save size={18} /> Save & Close (Updates Cloud)
                    </button>
                </div>
            </div>
        </div>
    )
}
