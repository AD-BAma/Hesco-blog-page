import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/products';
import { Package, ShoppingBag, MapPin, Sparkles, ChevronRight } from 'lucide-react';

export const ProductShowcase = ({ onOpenBrochure, onSelectProductForSample }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="products" className="py-28 lg:py-36 bg-[#080C14] text-slate-100 relative bg-grid-pattern border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-dark border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Package className="w-4 h-4 text-cyan-400" />
            <span>{t.products.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {t.products.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsData.map((item) => {
            const name = lang === 'fr' ? item.nameFr : item.nameEn;
            const badge = lang === 'fr' ? item.badgeFr : item.badgeEn;
            const suitable = lang === 'fr' ? item.suitableFr : item.suitableEn;

            return (
              <div
                key={item.id}
                className="apple-glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Size */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
                      {badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {item.size}
                    </span>
                  </div>

                  {/* Product Image Frame */}
                  <div className="h-60 flex items-center justify-center my-4 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 p-4 relative group-hover:border-cyan-500/30 transition-all">
                    <div className="absolute inset-0 bg-cyan-500/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={item.image}
                      alt={name}
                      className="relative z-10 max-h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-snug">{name}</h3>

                  {/* Pricing Breakdown */}
                  <div className="my-5 p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">{t.products.perCase}</span>
                      <span className="font-bold text-white">{item.bottlesPerCase}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Wholesale Case:</span>
                      <span className="font-extrabold text-cyan-400">{item.priceCrateFcfa.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Est. Unit Retail:</span>
                      <span className="font-bold text-emerald-400">{item.priceUnitFcfa.toLocaleString()} FCFA</span>
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="text-xs text-slate-400 font-normal mb-6 leading-relaxed">
                    <span className="font-mono font-semibold text-slate-300 block mb-1 uppercase tracking-wider text-[11px]">
                      {t.products.idealFor}
                    </span>
                    {suitable}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectProductForSample(item)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-extrabold text-xs py-3 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t.products.orderSample}</span>
                  </button>

                  <a
                    href="#locations"
                    className="w-full flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 font-semibold py-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
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
