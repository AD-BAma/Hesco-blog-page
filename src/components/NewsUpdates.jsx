import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Newspaper, Calendar, ArrowRight, BookOpen, X } from 'lucide-react';

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
    <section id="news" className="py-28 lg:py-36 bg-slate-50/50 text-slate-900 relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.news.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.news.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.news.subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-5">
                
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {article.desc}
                </p>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>{t.news.readMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Article Reading Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full rounded-3xl p-10 border border-slate-200 shadow-2xl relative animate-fadeIn space-y-6 max-h-[85vh] overflow-y-auto text-slate-900">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
                {activeArticle.category} • {activeArticle.date}
              </div>

              <h3 className="text-3xl font-bold text-slate-900 leading-snug">{activeArticle.title}</h3>

              <div className="text-base text-slate-600 leading-relaxed space-y-4 font-normal">
                <p>{activeArticle.fullContent}</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
