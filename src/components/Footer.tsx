import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Car, 
  Clock, 
  ShieldAlert, 
  Globe
} from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language, setLanguage } = useLanguage();

  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block">
                  {businessConfig.name}
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  Amalner, Maharashtra (425401)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.aboutCompany}
            </p>

            {/* Language quick switcher in footer */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <Globe className="w-4 h-4 text-slate-500" />
              <span className="text-slate-400">Language:</span>
              {(['en', 'mr', 'hi'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-0.5 rounded text-xs transition-colors ${
                    language === lang
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'English' : lang === 'mr' ? 'मराठी' : 'हिंदी'}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('destinations')} 
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  {t.nav.destinations}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('fleet')} 
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  {t.nav.fleet}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('admin')} 
                  className="hover:text-amber-400 transition-colors text-slate-500 text-xs"
                >
                  {t.nav.admin}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Corridors (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.popularRoutes}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Amalner ⇄ Shirdi Sai Baba (195 km)</li>
              <li>Amalner ⇄ Pune City (410 km)</li>
              <li>Amalner ⇄ Mumbai Suburbs (385 km)</li>
              <li>Amalner ⇄ Nashik / Trimbakeshwar (215 km)</li>
              <li>Amalner ⇄ Surat, Gujarat (235 km)</li>
              <li>Amalner ⇄ Saputara Hill Station (180 km)</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Station Road / Bus Stand Area, Amalner, Maharashtra — 425401</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${businessConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {businessConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${businessConfig.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {businessConfig.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-400 text-xs">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Outstation Booking Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <p>{businessConfig.location.town}, {businessConfig.location.district}, {t.footer.amalnerPincode}</p>
        </div>

      </div>
    </footer>
  );
};
