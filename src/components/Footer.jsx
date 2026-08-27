import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Heart, FileText, Phone, Mail } from 'lucide-react';

export const Footer = ({ onOpenBrochure }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-[#080C14] text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/10 pt-16 pb-12 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white font-black text-lg flex items-center justify-center">
                H
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">HESCO WATER</span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
              <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-normal">{t.footer.affiliation}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><a href="#story" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{t.nav.story}</a></li>
              <li><a href="#why-us" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#purification" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{t.nav.purification}</a></li>
              <li><a href="#products" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{t.nav.products}</a></li>
              <li><a href="#distributor" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{t.nav.distributor}</a></li>
              <li><a href="#locations" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{t.nav.locations}</a></li>
            </ul>
          </div>

          {/* Contact Hotlines */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">Contact Desk</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>+237 677 000 111</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>+237 699 000 222</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>info@hescowater.cm</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBrochure}
                  className="flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400 hover:underline font-mono font-bold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Spec Sheet</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quality Seals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t.footer.legal}</h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.footer.cert}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>CBCHS Health Network</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-mono">
          <p>{t.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
