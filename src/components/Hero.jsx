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
      price: '900 FCFA / unit',
      tds: '< 50 mg/L'
    },
    '10.0L': { 
      title: '10.0L Commercial Dispenser Jug', 
      desc: 'Heavy-duty commercial jug featuring an integrated precision dispenser tap for executive offices & clinics.', 
      case: '2 Jugs / Crate', 
      price: '2,250 FCFA / unit',
      tds: '< 50 mg/L'
    }
  };

  return (
    <section className="relative min-h-screen bg-[#080c14] text-slate-100 pt-36 pb-24 overflow-hidden flex items-center bg-grid-pattern">
      
      {/* Ambient Lighting Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-ambient"
        style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
      />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Executive Brand Headlines & Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Health Network Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-dark border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                {t.hero.titlePrefix}{" "}
                <span className="text-gradient-cyan">{t.hero.titleHighlight}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Interactive Bottle Size Selector */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>HESCO Bottled Range Spectrum (0.5L – 10L):</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {['0.5L', '1.5L', '5.0L', '10.0L'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4.5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                      selectedSize === sz
                        ? 'bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105'
                        : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-cyan-500/40 hover:text-white'
                    }`}
                  >
                    {sz} Series
                  </button>
                ))}
              </div>

              {/* Dynamic Spec Card */}
              <div className="p-5 rounded-2xl apple-glass-card text-left max-w-xl transition-all">
                <div className="flex items-center justify-between text-white font-bold text-sm sm:text-base">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    {sizeInfo[selectedSize].title}
                  </span>
                  <span className="text-cyan-400 font-mono font-extrabold">{sizeInfo[selectedSize].price}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {sizeInfo[selectedSize].desc}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-300 gap-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Packaging: {sizeInfo[selectedSize].case}</span>
                  </div>
                  <div className="text-cyan-300 font-semibold">
                    TDS Rating: <span className="text-white">{sizeInfo[selectedSize].tds}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#distributor"
                className="flex items-center gap-2.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="#products"
                className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm sm:text-base px-7 py-4 rounded-2xl border border-white/15 hover:border-cyan-500/40 transition-all duration-300"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>

              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-xs sm:text-sm px-5 py-4 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.ctaBrochure}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Apple-Style Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* Product Showcase Frame */}
              <div className="apple-glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ANOR STANDARDS VALIDATED</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    CBCHS HEALTH GRADE
                  </span>
                </div>

                {/* Product Family Image Container */}
                <div className="relative my-2 flex justify-center rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-4 border border-white/10 group-hover:border-cyan-500/30 transition-all">
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-xl group-hover:bg-cyan-500/20 transition-all" />
                  <img
                    src="/images/hesco_range_hero.jpg"
                    alt="HESCO Purified Mineral Water Complete Product Lineup"
                    className="relative z-10 w-full h-80 sm:h-96 object-contain rounded-xl drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Card Footer Info */}
                <div className="mt-6 text-center space-y-1.5">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">Complete HESCO Water Family</h3>
                  <p className="text-xs text-slate-400 font-medium">
                    0.5L Pocket • 1.5L Family • 5.0L Kitchen • 10.0L Dispenser
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Performance Metrics Strip */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-white/10">
          
          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-cyan-400 font-mono-num tracking-tight">
              {t.hero.stat1Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
              {t.hero.stat1Label}
            </div>
          </div>

          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-white font-mono-num tracking-tight">
              {t.hero.stat2Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
              {t.hero.stat2Label}
            </div>
          </div>

          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 font-mono-num tracking-tight">
              {t.hero.stat3Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
              {t.hero.stat3Label}
            </div>
          </div>

          <div className="apple-glass-card p-6 sm:p-8 rounded-2xl text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-sky-400 font-mono-num tracking-tight">
              {t.hero.stat4Number}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
              {t.hero.stat4Label}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
