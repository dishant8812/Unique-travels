import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { confirmedServices, ServiceItem } from '../config/businessConfig';
import { TripType } from '../types';
import { 
  Car, 
  Compass, 
  Plane, 
  Route, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car className="w-6 h-6 text-amber-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-amber-500" />;
      case 'Plane': return <Plane className="w-6 h-6 text-amber-500" />;
      case 'Route': return <Route className="w-6 h-6 text-amber-500" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-500" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-500" />;
      default: return <Car className="w-6 h-6 text-amber-500" />;
    }
  };

  const filteredServices = confirmedServices.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200">
            <span>{t.servicesSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.servicesSection.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.servicesSection.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.servicesSection.allServices}
            </button>
            <button
              onClick={() => setActiveCategory('cabs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'cabs'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.servicesSection.cabsCategory}
            </button>
            <button
              onClick={() => setActiveCategory('tours')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'tours'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.servicesSection.toursCategory}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-400/80 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Popular badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.isPopular && (
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-800 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      Popular Choice
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title[language]}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description[language]}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                  {service.features[language].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full bg-white group-hover:bg-amber-500 text-slate-900 group-hover:text-slate-950 border border-slate-300 group-hover:border-amber-500 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>{t.servicesSection.requestQuoteForThis}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-600">
            {t.servicesSection.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
