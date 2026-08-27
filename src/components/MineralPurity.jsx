import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Activity, Award, CheckCircle2 } from 'lucide-react';

export const MineralPurity = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-28 lg:py-36 bg-[#080C14] text-slate-100 relative bg-grid-pattern border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-dark border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>{t.mineral.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {t.mineral.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.mineral.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Low TDS Card */}
          <div className="apple-glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3">
              LOW MINERAL LOAD (NEPHRO-PROTECTIVE)
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{t.mineral.tdsTitle}</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">{t.mineral.tdsDesc}</p>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/90 border border-white/10">
              <span className="text-slate-300 font-semibold text-xs sm:text-sm">HESCO TDS Count:</span>
              <span className="text-cyan-400 font-mono-num font-extrabold text-2xl sm:text-3xl">&lt; 115 mg/L</span>
            </div>
          </div>

          {/* pH 7.4 Card */}
          <div className="apple-glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3">
              OPTIMAL ALKALINITY BALANCE
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{t.mineral.phTitle}</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-normal">{t.mineral.phDesc}</p>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/90 border border-white/10">
              <span className="text-slate-300 font-semibold text-xs sm:text-sm">Natural pH Rating:</span>
              <span className="text-emerald-400 font-mono-num font-extrabold text-2xl sm:text-3xl">7.4 Neutral</span>
            </div>
          </div>

        </div>

        {/* Mineral Composition Table Card */}
        <div className="apple-glass-card rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{t.mineral.tableTitle}</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{t.mineral.idealFor}</p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Laboratory Specs</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 font-mono font-bold uppercase">{t.mineral.calcium}</div>
              <div className="text-xl sm:text-2xl font-mono-num font-extrabold text-white mt-3">24.5 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 font-mono font-bold uppercase">{t.mineral.magnesium}</div>
              <div className="text-xl sm:text-2xl font-mono-num font-extrabold text-white mt-3">8.2 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 font-mono font-bold uppercase">{t.mineral.bicarbonate}</div>
              <div className="text-xl sm:text-2xl font-mono-num font-extrabold text-emerald-400 mt-3">98.0 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 font-mono font-bold uppercase">{t.mineral.sodium}</div>
              <div className="text-xl sm:text-2xl font-mono-num font-extrabold text-cyan-400 mt-3">6.4 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 font-mono font-bold uppercase">{t.mineral.potassium}</div>
              <div className="text-xl sm:text-2xl font-mono-num font-extrabold text-sky-400 mt-3">2.1 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-center hover:border-cyan-500/30 transition-colors">
              <div className="text-xs text-slate-400 font-mono font-bold uppercase">{t.mineral.silica}</div>
              <div className="text-xl sm:text-2xl font-mono-num font-extrabold text-indigo-400 mt-3">12.0 mg/L</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
