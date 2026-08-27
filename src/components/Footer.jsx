import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Droplets, ShieldCheck, Heart, FileText, Phone, Mail } from 'lucide-react';

export const Footer = ({ onOpenBrochure }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">HESCO<span className="text-blue-600">.</span></span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
              <Heart className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-normal font-normal">{t.footer.affiliation}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#story" className="hover:text-blue-600 transition-colors">{t.nav.story}</a></li>
              <li><a href="#why-us" className="hover:text-blue-600 transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#purification" className="hover:text-blue-600 transition-colors">{t.nav.purification}</a></li>
              <li><a href="#products" className="hover:text-blue-600 transition-colors">{t.nav.products}</a></li>
              <li><a href="#distributor" className="hover:text-blue-600 transition-colors">{t.nav.distributor}</a></li>
              <li><a href="#locations" className="hover:text-blue-600 transition-colors">{t.nav.locations}</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Contact Hotlines</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+237 677 000 111</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+237 699 000 222</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>info@hescowater.cm</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBrochure}
                  className="flex items-center gap-1.5 text-xs text-blue-600 hover:underline font-bold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Spec Sheet</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quality Seals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{t.footer.legal}</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.footer.cert}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>CBCHS Health Approved</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-normal">
          <p>{t.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
};
