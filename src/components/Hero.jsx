import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, FileText, CheckCircle2, Heart, Award, Droplets, Sparkles, ShieldCheck } from 'lucide-react';

export const Hero = ({ onOpenBrochure }) => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [selectedSize, setSelectedSize] = useState('1.5L');

  // Parallax Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sizeInfo = {
    '0.5L': { title: '0.5L Pocket Hydration', desc: 'Compact on-the-go bottle for conferences, school, and sports', case: '24 Bottles / Crate', price: '150 FCFA / unit' },
    '1.5L': { title: '1.5L Standard Family Bottle', desc: 'Medical-grade purity for dining, baby formula & hospital wards', case: '12 Bottles / Crate', price: '300 FCFA / unit' },
    '5.0L': { title: '5.0L Ergonomic Kitchen Jug', desc: 'Spacious kitchen jug for cooking & family water supply', case: '4 Jugs / Crate', price: '900 FCFA / unit' },
    '10.0L': { title: '10.0L Commercial Dispenser Jug', desc: 'Heavy-duty jug with dispenser tap for offices & hotels', case: '2 Jugs / Crate', price: '2,250 FCFA / unit' }
  };

  return (
    <section className="relative min-h-[95vh] bg-gradient-to-b from-blue-50/60 via-white to-slate-50/40 text-slate-900 pt-36 pb-24 overflow-hidden flex items-center">
      
      {/* Dynamic Parallax Animated Water Caustic Background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        {/* Animated Water Caustics Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-cyan-200/40 via-blue-200/30 to-emerald-100/30 rounded-full blur-3xl animate-pulse-glow" />
        
        {/* Parallax Floating Water Droplets */}
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-cyan-300/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-60 right-[12%] w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Animated Water Waves SVG Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-25">
          <svg className="w-full h-full text-blue-400 fill-current animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Action Controls */}
          <div
            className="lg:col-span-6 space-y-8 text-center lg:text-left transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            
            {/* Minimalist Corporate Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
              <Droplets className="w-4 h-4 text-blue-600 animate-bounce" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
              {t.hero.titlePrefix}{" "}
              <span className="gradient-text">{t.hero.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Interactive Bottle Size Selector Pill Group */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Explore Complete HESCO Bottle Range (0.5L – 10L):
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {['0.5L', '1.5L', '5.0L', '10.0L'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 shadow-xs ${
                      selectedSize === sz
                        ? 'bg-blue-600 text-white shadow-md scale-105'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    {sz} Range
                  </button>
                ))}
              </div>

              {/* Dynamic Size Info Card */}
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-left max-w-lg transition-all animate-fadeIn">
                <div className="flex items-center justify-between text-slate-900 font-bold text-sm">
                  <span>{sizeInfo[selectedSize].title}</span>
                  <span className="text-blue-600 font-black">{sizeInfo[selectedSize].price}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{sizeInfo[selectedSize].desc}</p>
                <div className="mt-2 text-[11px] font-bold text-emerald-700 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Packaging: {sizeInfo[selectedSize].case}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#distributor"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="#products"
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base px-8 py-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>

              <button
                onClick={onOpenBrochure}
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-bold text-sm px-5 py-4 rounded-2xl border border-blue-200/80 bg-blue-50/60 hover:bg-blue-100/80 transition-all"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>{t.hero.ctaBrochure}</span>
              </button>
            </div>

          </div>

          {/* Right Column: 4-Bottle Lineup Parallax Showcase */}
          <div
            className="lg:col-span-6 relative flex justify-center transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="relative w-full">
              
              {/* Product Card Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden border border-slate-200/90 shadow-2xl group transition-all duration-300 hover:shadow-3xl">
                
                {/* Floating Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Complete Range: 0.5L, 1.5L, 5L & 10L</span>
                  </div>
                  <div className="text-xs font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    ANOR Certified
                  </div>
                </div>

                {/* 4-Bottle Group Lineup Image */}
                <div className="relative my-4 flex justify-center overflow-hidden rounded-2xl bg-slate-50/80 p-2 border border-slate-100 group">
                  <img
                    src="/images/hesco_range_hero.jpg"
                    alt="HESCO Mineral Water 4 Bottle Sizes (0.5L, 1.5L, 5L, 10L) Group Lineup"
                    className="w-full h-80 sm:h-96 object-contain rounded-xl drop-shadow-xl transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Full HESCO Product Family</h3>
                  <p className="text-xs sm:text-sm text-blue-600 font-semibold">
                    0.5L Pocket • 1.5L Family & Ward • 5.0L Kitchen Jug • 10.0L Dispenser
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Statistics Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-200/80">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
            <div className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight">{t.hero.stat1Number}</div>
            <div className="text-sm font-bold text-slate-700 mt-2">{t.hero.stat1Label}</div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
            <div className="text-4xl sm:text-5xl font-black text-blue-700 tracking-tight">{t.hero.stat2Number}</div>
            <div className="text-sm font-bold text-slate-700 mt-2">{t.hero.stat2Label}</div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">{t.hero.stat3Number}</div>
            <div className="text-sm font-bold text-slate-700 mt-2">{t.hero.stat3Label}</div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 text-center shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
            <div className="text-4xl sm:text-5xl font-black text-cyan-700 tracking-tight">{t.hero.stat4Number}</div>
            <div className="text-sm font-bold text-slate-700 mt-2">{t.hero.stat4Label}</div>
          </div>

        </div>

      </div>
    </section>
  );
};
