import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { Language } from '../types';
import { 
  Phone, 
  Menu, 
  X, 
  MapPin, 
  Car, 
  ShieldCheck, 
  MessageCircle,
  Globe
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'destinations', label: t.nav.destinations },
    { id: 'fleet', label: t.nav.fleet },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      {/* Top micro-bar */}
      <div className="bg-slate-950 px-4 py-1.5 text-xs text-slate-300 border-b border-slate-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{businessConfig.location.town}, {businessConfig.location.district} ({businessConfig.location.pincode})</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              {businessConfig.contact.hours[language]}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${businessConfig.contact.phone}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{businessConfig.contact.phoneDisplay}</span>
            </a>
            <button
              onClick={() => handleNavClick('admin')}
              className={`hover:text-amber-400 transition-colors text-[11px] px-2 py-0.5 rounded border ${
                currentView === 'admin' 
                  ? 'border-amber-500 text-amber-400 bg-amber-500/10' 
                  : 'border-slate-700 text-slate-400 hover:border-slate-500'
              }`}
            >
              {t.nav.admin}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo / Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                <span>{businessConfig.name}</span>
              </div>
              <p className="text-xs text-amber-400/90 font-medium flex items-center gap-1">
                <span>Amalner</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Maharashtra 425401</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === item.id
                    ? 'text-amber-400 bg-slate-800 shadow-inner'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Controls: Language Selector + Book Trip CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/80 rounded-lg p-1 border border-slate-700/80">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              {(['en', 'mr', 'hi'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                    language === lang
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title={lang === 'en' ? 'English' : lang === 'mr' ? 'मराठी' : 'हिंदी'}
                >
                  {lang === 'en' ? 'EN' : lang === 'mr' ? 'मराठी' : 'हिंदी'}
                </button>
              ))}
            </div>

            {/* Book Trip Primary CTA */}
            <button
              onClick={() => handleNavClick('booking')}
              className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <span>{t.nav.bookTrip}</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Compact language switcher on mobile */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              {(['en', 'mr', 'hi'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-[11px] font-semibold rounded ${
                    language === lang
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-300'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentView === item.id
                    ? 'text-amber-400 bg-slate-800 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => handleNavClick('admin')}
              className={`text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                currentView === 'admin'
                  ? 'text-amber-400 bg-slate-800'
                  : 'text-slate-400 hover:bg-slate-800/40'
              }`}
            >
              {t.nav.admin}
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-center shadow-md shadow-amber-500/20"
            >
              {t.nav.bookTrip}
            </button>

            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 border border-slate-700 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t.nav.callUs}: {businessConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
