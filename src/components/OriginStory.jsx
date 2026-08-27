import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

export const OriginStory = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-28 lg:py-36 bg-[#0B101D] text-slate-100 relative overflow-hidden border-y border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cleanroom Laboratory Photography */}
          <div className="lg:col-span-5 relative">
            <div className="apple-glass-card rounded-3xl p-3 border border-white/10 overflow-hidden group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/hesco_lab_facility.jpg"
                  alt="HESCO Automated Cleanroom Bottling Facility"
                  className="w-full h-96 sm:h-[420px] object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/30 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                      MEDICAL-GRADE CLEANROOM
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight">Pharmaceutical Microfiltration Plant</h4>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-900/90 rounded-2xl mt-3 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-200 mb-2">
                  <span>ANOR & ISO HYGIENE AUDIT</span>
                  <span className="text-emerald-400 font-extrabold">100% COMPLIANT</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Heritage Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-dark border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>{t.story.badge}</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t.story.title}
              </h2>
              <p className="text-lg sm:text-xl text-cyan-400 font-medium leading-relaxed">
                {t.story.subtitle}
              </p>
            </div>

            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>{t.story.paragraph1}</p>
              <p>{t.story.paragraph2}</p>
            </div>

            {/* Quality Seals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4.5 rounded-2xl apple-glass-card text-white text-xs sm:text-sm font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{t.story.pill1}</span>
              </div>
              <div className="p-4.5 rounded-2xl apple-glass-card text-white text-xs sm:text-sm font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{t.story.pill2}</span>
              </div>
              <div className="p-4.5 rounded-2xl apple-glass-card text-white text-xs sm:text-sm font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{t.story.pill3}</span>
              </div>
              <div className="p-4.5 rounded-2xl apple-glass-card text-white text-xs sm:text-sm font-semibold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{t.story.pill4}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
