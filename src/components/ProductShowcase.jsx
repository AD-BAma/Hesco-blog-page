import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/products';
import { Package, CheckCircle2, ShoppingBag, MapPin, Sparkles } from 'lucide-react';

export const ProductShowcase = ({ onOpenBrochure, onSelectProductForSample }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="products" className="py-28 lg:py-36 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.products.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.products.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {productsData.map((item) => {
            const name = lang === 'fr' ? item.nameFr : item.nameEn;
            const badge = lang === 'fr' ? item.badgeFr : item.badgeEn;
            const suitable = lang === 'fr' ? item.suitableFr : item.suitableEn;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Top Badge & Size */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                      {badge}
                    </span>
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                      {item.size}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="h-56 flex items-center justify-center my-6 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-4">
                    <img
                      src={item.image}
                      alt={name}
                      className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{name}</h3>

                  {/* Pricing Breakdown */}
                  <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-slate-600 font-medium">{t.products.perCase}</span>
                      <span className="font-bold text-slate-900">{item.bottlesPerCase}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-slate-600 font-medium">Case Price:</span>
                      <span className="font-black text-blue-600">{item.priceCrateFcfa.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-slate-600 font-medium">Est. Retail Unit:</span>
                      <span className="font-bold text-emerald-700">{item.priceUnitFcfa.toLocaleString()} FCFA</span>
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="text-xs sm:text-sm text-slate-600 font-normal mb-8 leading-relaxed">
                    <span className="font-bold text-slate-800 block mb-1">{t.products.idealFor}</span>
                    {suitable}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => onSelectProductForSample(item)}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 rounded-2xl shadow-md transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t.products.orderSample}</span>
                  </button>

                  <a
                    href="#locations"
                    className="w-full flex items-center justify-center gap-2 text-xs text-slate-600 hover:text-blue-600 font-bold py-2 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{t.products.buyNow}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
