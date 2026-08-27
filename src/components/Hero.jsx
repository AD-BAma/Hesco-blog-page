import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, FileText, CheckCircle2, ShieldCheck, Sparkles, Activity, Award } from 'lucide-react';

export const Hero = ({ onOpenBrochure }) => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [selectedSize, setSelectedSize] = useState('1.5L');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sizeInfo = {
    '0.5L': { 
      title: '0.5L Pocket Hydration', 
      desc: 'Compact single-serve bottle engineered for conferences, fitness, and luxury hospitality.', 
      case: '24 Bottles / Crate', 
      price: '150 FCFA / unit',
      tds: '< 45 mg/L'
    },
    '1.5L': { 
      title: '1.5L Standard Family Bottle', 
      desc: 'Pharmaceutical-grade purity recommended for daily hydration, infant formula, and hospital wards.', 
      case: '12 Bottles / Crate', 
      price: '300 FCFA / unit',
      tds: '< 48 mg/L'
    },
    '5.0L': { 
      title: '5.0L Ergonomic Kitchen Jug', 
      desc: 'Spacious high-volume jug designed for pure culinary preparation and domestic drinking water.', 
      case: '4 Jugs / Crate', 
      price: '500 FCFA / unit',
      tds: '< 50 mg/L'
    },
    '10.0L': { 
      title: '10.0L Commercial Dispenser Jug', 
      desc: 'Heavy-duty commercial jug featuring an integrated precision dispenser tap for executive offices & clinics.', 
      case: '2 Jugs / Crate', 
      price: '1,500 FCFA / unit',
      tds: '< 50 mg/L'
    }
  };

  return (
    <section className="relative bg-white dark:bg-[#080c14] text-slate-900 dark:text-slate-100 pt-32 pb-24 overflow-hidden bg-grid-pattern transition-colors duration-300">
      
      {/* Ambient Radial Background Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none animate-ambient"
        style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)` }}
      />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-sky-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-12">
        
        {/* Full-Bleed Captivating Product Showcase (Top Hero Feature) */}
        <div className="w-full relative flex justify-center">
          <div className="w-full apple-glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden group">
            
            {/* Top Quality Certification Floating Tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>ANOR STANDARDS CERTIFIED • CAMEROON</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-200 dark:border-cyan-500/20">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>CBCHS HEALTHCARE GRADE</span>
              </div>
            </div>

            {/* Captivating Full Hero Image Stage */}
            <div className="relative my-4 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-900 p-6 sm:p-12 border border-slate-200/80 dark:border-white/10 group-hover:border-cyan-400/40 transition-all duration-500 min-h-[380px] sm:min-h-[460px]">
              <div className="absolute inset-0 bg-cyan-400/5 dark:bg-cyan-500/10 rounded-2xl blur-2xl group-hover:bg-cyan-400/15 transition-all duration-700 pointer-events-none" />
              <img
                src="/images/hesco_range_hero.jpg"
                alt="HESCO Purified Mineral Water Complete Product Lineup (0.5L, 1.5L, 5L, 10L)"
                className="relative z-10 w-full max-h-[420px] sm:max-h-[500px] object-contain drop-shadow-[0_15px_30px_rgba(15,23,42,0.15)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Stage Sub-label */}
            <div className="mt-4 text-center">
              <span className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                COMPLETE HESCO PRODUCT RANGE • 0.5L POCKET • 1.5L FAMILY • 5.0L KITCHEN • 10.0L DISPENSER
              </span>
            </div>

          </div>
        </div>

        {/* Executive Headlines & Copy Aligned Beneath */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Health Network Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-50 dark:bg-slate-900 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-xs">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
              {t.hero.titlePrefix}{" "}
              <span className="text-gradient-cyan">{t.hero.titleHighlight}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          {/* Interactive Bottle Size Selector & Spec Card */}
          <div className="space-y-6 pt-4 max-w-2xl mx-auto">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Select Bottle Format for Technical Specifications:</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {['0.5L', '1.5L', '5.0L', '10.0L'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                    selectedSize === sz
                      ? 'bg-cyan-600 dark:bg-cyan-400 text-white dark:text-slate-950 shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:border-cyan-500/40'
                  }`}
                >
                  {sz} Format
                </button>
              ))}
            </div>

            {/* Dynamic Spec Card */}
            <div className="p-6 rounded-2xl apple-glass-card text-left transition-all">
              <div className="flex items-center justify-between text-slate-900 dark:text-white font-bold text-sm sm:text-base">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  {sizeInfo[selectedSize].title}
                </span>
                <span className="text-cyan-700 dark:text-cyan-400 font-mono font-extrabold">{sizeInfo[selectedSize].price}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                {sizeInfo[selectedSize].desc}
              </p>
              <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300 gap-2">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Packaging: {sizeInfo[selectedSize].case}</span>
                </div>
                <div className="text-cyan-700 dark:text-cyan-300 font-semibold">
                  TDS Rating: <span className="text-slate-900 dark:text-white">{sizeInfo[selectedSize].tds}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#distributor"
              className="flex items-center gap-2.5 bg-cyan-600 hover:bg-cyan-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-sky-500 dark:to-blue-600 dark:hover:from-cyan-300 text-white dark:text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ChevronRight className="w-5 h-5" />
            </a>

            <a
              href="#products"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base px-7 py-4 rounded-2xl border border-slate-200 dark:border-white/15 transition-all duration-300"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>

            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-medium text-xs sm:text-sm px-6 py-4 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t.hero.ctaBrochure}</span>
            </button>
          </div>

        </div>

        {/* Bottom Key Performance Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-slate-200 dark:border-white/10">
          
          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-cyan-700 dark:text-cyan-400 font-mono-num tracking-tight">
              {t.hero.stat1Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">
              {t.hero.stat1Label}
            </div>
          </div>

          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono-num tracking-tight">
              {t.hero.stat2Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">
              {t.hero.stat2Label}
            </div>
          </div>

          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono-num tracking-tight">
              {t.hero.stat3Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">
              {t.hero.stat3Label}
            </div>
          </div>

          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-sky-700 dark:text-sky-400 font-mono-num tracking-tight">
              {t.hero.stat4Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-2">
              {t.hero.stat4Label}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
