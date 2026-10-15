import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fleetVehicles } from '../config/businessConfig';
import { VehiclePreference } from '../types';
import { 
  Users, 
  Luggage, 
  Wind, 
  Car, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface FleetSectionProps {
  onSelectVehicle: (vehicleId: VehiclePreference) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const { t, language } = useLanguage();

  return (
    <section id="fleet-section" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>{t.fleetSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.fleetSection.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.fleetSection.subtitle}
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetVehicles.map((veh) => (
            <div
              key={veh.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-500/60 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Header */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4 group-hover:bg-amber-500/10 group-hover:text-amber-600 transition-colors">
                  <Car className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-1">
                  {veh.name}
                </h3>
                <p className="text-xs text-amber-600 font-semibold mb-4">
                  {veh.models}
                </p>

                {/* Specs */}
                <div className="space-y-2.5 py-3 border-y border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.fleetSection.seatingCapacity}:</span>
                    </span>
                    <span className="font-semibold text-slate-900">{veh.capacity}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Luggage className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.fleetSection.luggageCapacity}:</span>
                    </span>
                    <span className="font-semibold text-slate-900">{veh.luggage}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Wind className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.fleetSection.cooling}:</span>
                    </span>
                    <span className="font-semibold text-emerald-600">{veh.ac}</span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mt-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {t.fleetSection.bestFor}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {veh.idealFor[language]}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectVehicle(veh.id as VehiclePreference)}
                  className="w-full bg-slate-100 hover:bg-amber-500 text-slate-800 hover:text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{t.fleetSection.bookVehicle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
