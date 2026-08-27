import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, Sliders } from 'lucide-react';

export const PurificationProcess = () => {
  const { t } = useLanguage();

  const steps = [
    {
      stepNumber: "01",
      title: t.purification.step1Title,
      desc: t.purification.step1Desc,
      tag: "Deep Aquifer Hydro-Extraction"
    },
    {
      stepNumber: "02",
      title: t.purification.step2Title,
      desc: t.purification.step2Desc,
      tag: "5-Micron Multi-Layer Filtration"
    },
    {
      stepNumber: "03",
      title: t.purification.step3Title,
      desc: t.purification.step3Desc,
      tag: "Activated Carbon Adsorption"
    },
    {
      stepNumber: "04",
      title: t.purification.step4Title,
      desc: t.purification.step4Desc,
      tag: "Germicidal UV-C Sterilization"
    },
    {
      stepNumber: "05",
      title: t.purification.step5Title,
      desc: t.purification.step5Desc,
      tag: "HEPA Cleanroom Automated Bottling"
    }
  ];

  return (
    <section id="purification" className="py-28 lg:py-36 bg-[#0B101D] text-slate-100 relative border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-dark border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <span>{t.purification.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {t.purification.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.purification.subtitle}
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="apple-glass-card p-6 sm:p-7 rounded-3xl relative flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono-num">
                    {step.stepNumber}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                
                <h3 className="text-lg font-bold text-white leading-snug tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono font-semibold">
                <span className="text-cyan-400">{step.tag}</span>
                <span className="text-emerald-400">PASSED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
