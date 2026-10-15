import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { TripType } from '../types';
import { 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Car, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare
} from 'lucide-react';

interface HeroProps {
  onStartBooking: (params?: { pickup?: string; destination?: string; tripType?: TripType; date?: string }) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartBooking, onExploreServices }) => {
  const { t, language } = useLanguage();

  const [pickup, setPickup] = useState('Amalner');
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState<TripType>('outstation');
  const [date, setDate] = useState(() => {
    // Tomorrow's date default
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const popularQuickDestinations = ['Shirdi', 'Pune', 'Mumbai', 'Nashik', 'Surat'];

  const handleSubmitQuickPlan = (e: React.FormEvent) => {
    e.preventDefault();
    onStartBooking({
      pickup,
      destination,
      tripType,
      date
    });
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-14 lg:py-20 border-b border-slate-800">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-500/10 via-indigo-500/5 to-amber-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Trust Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Local Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              {t.hero.titleStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                {t.hero.titleAccent}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onStartBooking()}
                className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 text-base"
              >
                <span>{t.hero.bookNowBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="bg-slate-800/90 hover:bg-slate-800 hover:text-amber-400 text-slate-200 font-semibold px-5 py-3.5 rounded-xl border border-slate-700 transition-all text-base"
              >
                {t.hero.exploreServicesBtn}
              </button>

              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>{businessConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Genuine Value Badges (No fake stats) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.verifiedBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.driversBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.pricingBadge}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Trip Request Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-base sm:text-lg">
                      {t.quickTrip.title}
                    </h2>
                    <p className="text-xs text-slate-400">
                      Amalner & Jalgaon District
                    </p>
                  </div>
                </div>
                <span className="text-[11px] bg-slate-800 text-amber-400 px-2.5 py-1 rounded-md font-medium border border-slate-700">
                  Quick Quote
                </span>
              </div>

              <form onSubmit={handleSubmitQuickPlan} className="mt-5 space-y-4">
                
                {/* Trip Type Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.quickTrip.tripTypeLabel}
                  </label>
                  <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value as TripType)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="outstation">{t.tripTypes['outstation']}</option>
                    <option value="round-trip">{t.tripTypes['round-trip']}</option>
                    <option value="one-way">{t.tripTypes['one-way']}</option>
                    <option value="pilgrimage">{t.tripTypes['pilgrimage']}</option>
                    <option value="airport">{t.tripTypes['airport']}</option>
                    <option value="local">{t.tripTypes['local']}</option>
                  </select>
                </div>

                {/* Pickup */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder={t.quickTrip.pickupPlaceholder}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Destination</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={t.quickTrip.dropPlaceholder}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />

                  {/* Quick Pick Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {popularQuickDestinations.map((dest) => (
                      <button
                        type="button"
                        key={dest}
                        onClick={() => setDestination(dest)}
                        className={`text-[11px] px-2 py-0.5 rounded-md border transition-colors ${
                          destination === dest
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-medium'
                            : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.quickTrip.dateLabel}</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Submit to Open Complete Form */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>{t.quickTrip.quickSubmitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                <p className="text-[11px] text-slate-400">
                  Direct inquiry • No advance payment needed for initial quote
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
