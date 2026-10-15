import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Home, 
  Sparkles, 
  UserCheck, 
  FileText, 
  Compass, 
  Headphones,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const { t } = useLanguage();

  const points = [
    {
      icon: <Home className="w-6 h-6 text-amber-500" />,
      title: t.whyChooseUs.point1Title,
      desc: t.whyChooseUs.point1Desc
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: t.whyChooseUs.point2Title,
      desc: t.whyChooseUs.point2Desc
    },
    {
      icon: <UserCheck className="w-6 h-6 text-amber-500" />,
      title: t.whyChooseUs.point3Title,
      desc: t.whyChooseUs.point3Desc
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      title: t.whyChooseUs.point4Title,
      desc: t.whyChooseUs.point4Desc
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-500" />,
      title: t.whyChooseUs.point5Title,
      desc: t.whyChooseUs.point5Desc
    },
    {
      icon: <Headphones className="w-6 h-6 text-amber-500" />,
      title: t.whyChooseUs.point6Title,
      desc: t.whyChooseUs.point6Desc
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>{t.whyChooseUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.whyChooseUs.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/60 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                {pt.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                {pt.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
