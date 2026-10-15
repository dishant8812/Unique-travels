import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { 
  ShieldCheck, 
  MapPin, 
  Compass, 
  Award, 
  CheckCircle,
  FileCheck
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about-section" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Story & Context */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            {t.about.lead}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed pt-2">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          {/* Operational Commitments */}
          <div className="pt-8 border-t border-slate-200">
            <h3 className="font-bold text-slate-950 text-lg mb-6">
              {t.about.valuesHeading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  {t.about.val1Title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.val1Desc}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  {t.about.val2Title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.val2Desc}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                  {t.about.val3Title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.about.val3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Configurable Business Detail Notice */}
          <div className="mt-8 bg-amber-50 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Business Verification & Configuration Notice:</span>
              <span>
                All business records, fleet vehicles, and official phone numbers can be centrally configured in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px]">src/config/businessConfig.ts</code>.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
