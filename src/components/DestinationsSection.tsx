import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { confirmedDestinations, DestinationRoute } from '../config/businessConfig';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (dest: DestinationRoute) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestination }) => {
  const { t, language } = useLanguage();
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="destinations-section" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.destinationsSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.destinationsSection.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            {t.destinationsSection.subtitle}
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {confirmedDestinations.map((route) => {
            const hasError = imgErrors[route.id];

            return (
              <div
                key={route.id}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-lg hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image with fallback */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    {!hasError ? (
                      <img
                        src={route.image}
                        alt={route.name[language]}
                        onError={() => handleImageError(route.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-slate-400 p-4">
                        <MapPin className="w-8 h-8 text-amber-400 mb-2" />
                        <span className="text-xs font-semibold">{route.name[language]}</span>
                      </div>
                    )}
                    
                    {/* Route distance badge */}
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-400 font-mono text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                      <Navigation className="w-3 h-3 text-amber-400" />
                      <span>{route.distanceKm} KM</span>
                    </div>

                    {/* Category pill */}
                    <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700/80 capitalize">
                      {route.category.replace('_', ' ')}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {route.name[language]}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                      {route.description[language]}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-700/60 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{route.estimatedHours}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Car className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{route.recommendedVehicle}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectDestination(route)}
                    className="w-full bg-slate-700/70 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-500"
                  >
                    <span>{t.destinationsSection.planThisTrip}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
