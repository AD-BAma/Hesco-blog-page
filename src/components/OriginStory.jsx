import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Stethoscope, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';

export const OriginStory = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-28 lg:py-36 bg-slate-50/50 text-slate-900 relative overflow-hidden border-y border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Res Lab Photography Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xl overflow-hidden group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/hesco_lab_facility.jpg"
                  alt="HESCO Automated Pharmaceutical Cleanroom Bottling Facility"
                  className="w-full h-96 object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                      Healthcare Grade Infrastructure
                    </span>
                    <h4 className="text-xl font-bold">Pharmaceutical Microfiltration Plant</h4>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl mt-3 border border-slate-200/80">
                <div className="flex items-center justify-between text-sm font-bold text-slate-800 mb-2">
                  <span>ANOR & ISO Hygiene Compliance</span>
                  <span className="text-emerald-700 font-extrabold">100% Certified</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>{t.story.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {t.story.title}
            </h2>

            <p className="text-xl text-blue-700 font-semibold leading-relaxed">
              {t.story.subtitle}
            </p>

            <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>{t.story.paragraph1}</p>
              <p>{t.story.paragraph2}</p>
            </div>

            {/* Quality Seals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-xs flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.story.pill1}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-xs flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.story.pill2}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-xs flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.story.pill3}</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm font-bold shadow-xs flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{t.story.pill4}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
