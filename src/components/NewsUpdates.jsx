import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Newspaper, Calendar, ArrowRight, X } from 'lucide-react';

export const NewsUpdates = () => {
  const { t } = useLanguage();
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: t.news.n1Title,
      date: t.news.n1Date,
      category: t.news.n1Category,
      desc: t.news.n1Desc,
      fullContent: "As part of our commitment to public health under the Cameroon Baptist Convention Health Services (CBCHS), HESCO Mineral Water has expanded its direct donation and supply network to 50 additional primary healthcare facilities, maternal clinics, and pediatric wards across Douala, Yaoundé, and surrounding rural centers. Access to pure, low-TDS water reduces hospital-acquired infections and accelerates infant recovery."
    },
    {
      id: 2,
      title: t.news.n2Title,
      date: t.news.n2Date,
      category: t.news.n2Category,
      desc: t.news.n2Desc,
      fullContent: "Pediatric gastroenterologists emphasize that an infant's kidneys are still developing during the first 12 months of life. Water with high Total Dissolved Solids (TDS > 250 mg/L) forces delicate kidneys to work twice as hard to filter excess heavy minerals. HESCO's low-TDS formula (< 115 mg/L) preserves formula balance without mineral overload."
    },
    {
      id: 3,
      title: t.news.n3Title,
      date: t.news.n3Date,
      category: t.news.n3Category,
      desc: t.news.n3Desc,
      fullContent: "Following rigorous audits by national health inspectors and ANOR quality officers, HESCO's automated bottling plant achieved 100% compliance certification. Featuring HEPA-filtered cleanroom filling stations and 5-stage microfiltration, our facilities establish a new benchmark for bottled water safety in Central Africa."
    }
  ];

  return (
    <section id="news" className="py-28 lg:py-36 bg-slate-50 dark:bg-[#0B101D] text-slate-900 dark:text-slate-100 relative border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-50 dark:bg-slate-900 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>{t.news.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.news.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.news.subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="apple-glass-card rounded-3xl p-7 flex flex-col justify-between group hover:border-cyan-400 transition-all duration-300"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors tracking-tight">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {article.desc}
                </p>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 transition-colors"
                >
                  <span>{t.news.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Article Reading Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="apple-glass-card max-w-2xl w-full rounded-3xl p-8 sm:p-10 relative animate-fadeIn space-y-6 max-h-[85vh] overflow-y-auto text-slate-900 dark:text-slate-100">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 text-xs font-mono font-bold">
                {activeArticle.category} • {activeArticle.date}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-snug tracking-tight">{activeArticle.title}</h3>

              <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 font-normal">
                <p>{activeArticle.fullContent}</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
