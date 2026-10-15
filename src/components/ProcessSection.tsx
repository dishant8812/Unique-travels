import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FileEdit, 
  PhoneCall, 
  CheckCircle, 
  Car, 
  ArrowRight 
} from 'lucide-react';

interface ProcessSectionProps {
  onStartBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartBooking }) => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      icon: <FileEdit className="w-6 h-6 text-amber-500" />,
      title: t.process.step1Title,
      desc: t.process.step1Desc
    },
    {
      num: '02',
      icon: <PhoneCall className="w-6 h-6 text-amber-500" />,
      title: t.process.step2Title,
      desc: t.process.step2Desc
    },
    {
      num: '03',
      icon: <CheckCircle className="w-6 h-6 text-amber-500" />,
      title: t.process.step3Title,
      desc: t.process.step3Desc
    },
    {
      num: '04',
      icon: <Car className="w-6 h-6 text-amber-500" />,
      title: t.process.step4Title,
      desc: t.process.step4Desc
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>{t.process.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-600">
                    {st.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Call to Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartBooking}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all inline-flex items-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <span>{t.hero.bookNowBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
