import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Activity, ShieldAlert, HeartPulse, Check, Info } from 'lucide-react';

export const MineralPurity = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-28 lg:py-36 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.mineral.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.mineral.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.mineral.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          
          {/* Low TDS Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden group hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            <div className="text-sm font-extrabold uppercase tracking-widest text-blue-600 mb-3">
              Low Mineral Load
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t.mineral.tdsTitle}</h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">{t.mineral.tdsDesc}</p>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-700 font-bold text-sm">HESCO TDS Count:</span>
              <span className="text-blue-600 font-black text-2xl">&lt; 115 mg/L</span>
            </div>
          </div>

          {/* pH 7.4 Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden group hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            <div className="text-sm font-extrabold uppercase tracking-widest text-blue-600 mb-3">
              Optimal Alkalinity Balance
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t.mineral.phTitle}</h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">{t.mineral.phDesc}</p>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-700 font-bold text-sm">Natural pH Rating:</span>
              <span className="text-blue-700 font-black text-2xl">7.4 (Perfect Neutral)</span>
            </div>
          </div>

        </div>

        {/* Mineral Composition Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.mineral.tableTitle}</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">{t.mineral.idealFor}</p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>Certified Laboratory Analysis</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100/80 transition-colors">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.mineral.calcium}</div>
              <div className="text-2xl font-black text-blue-600 mt-3">24.5 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100/80 transition-colors">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.mineral.magnesium}</div>
              <div className="text-2xl font-black text-blue-700 mt-3">8.2 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100/80 transition-colors">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.mineral.bicarbonate}</div>
              <div className="text-2xl font-black text-emerald-600 mt-3">98.0 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100/80 transition-colors">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.mineral.sodium}</div>
              <div className="text-2xl font-black text-teal-600 mt-3">6.4 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100/80 transition-colors">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.mineral.potassium}</div>
              <div className="text-2xl font-black text-cyan-700 mt-3">2.1 mg/L</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-slate-100/80 transition-colors">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.mineral.silica}</div>
              <div className="text-2xl font-black text-indigo-600 mt-3">12.0 mg/L</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
