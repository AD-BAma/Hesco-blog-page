import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 }
  ];

  return (
    <section id="faq" className="py-28 lg:py-36 bg-white text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.faq.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-6">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden transition-all hover:border-blue-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-8 text-left flex items-center justify-between gap-6 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-lg sm:text-xl leading-snug">{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 text-base text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-6 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
