import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Filter, Sun, Sparkles, Factory, Droplet } from 'lucide-react';

export const PurificationProcess = () => {
  const { t } = useLanguage();

  const steps = [
    {
      stepNumber: "01",
      title: t.purification.step1Title,
      desc: t.purification.step1Desc,
      tag: "Source Extraction"
    },
    {
      stepNumber: "02",
      title: t.purification.step2Title,
      desc: t.purification.step2Desc,
      tag: "Sediment Filtration"
    },
    {
      stepNumber: "03",
      title: t.purification.step3Title,
      desc: t.purification.step3Desc,
      tag: "Active Carbon Polish"
    },
    {
      stepNumber: "04",
      title: t.purification.step4Title,
      desc: t.purification.step4Desc,
      tag: "UV Disinfection"
    },
    {
      stepNumber: "05",
      title: t.purification.step5Title,
      desc: t.purification.step5Desc,
      tag: "Cleanroom Bottling"
    }
  ];

  return (
    <section id="purification" className="py-28 lg:py-36 bg-slate-50/50 text-slate-900 relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>{t.purification.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.purification.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.purification.subtitle}
          </p>
        </div>

        {/* 5-Step Process Horizontal / Vertical Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl relative group hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="text-4xl font-black text-blue-600 tracking-tighter">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-blue-700">{step.tag}</span>
                <span className="text-emerald-700">Passed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
