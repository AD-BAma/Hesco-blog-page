import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Droplets, Phone, Globe, Menu, X, FileText, Award } from 'lucide-react';

export const Navbar = ({ onOpenBrochure }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#story', label: t.nav.story },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#purification', label: t.nav.purification },
    { href: '#products', label: t.nav.products },
    { href: '#distributor', label: t.nav.distributor },
    { href: '#locations', label: t.nav.locations },
    { href: '#news', label: t.nav.news },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                HESCO<span className="text-blue-600">.</span>
              </span>
              <span className="block text-[10px] font-bold tracking-widest uppercase text-blue-600">
                {t.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Brochure Trigger */}
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              {t.nav.brochure}
            </button>

            {/* Language Toggle Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-xs px-3 py-2 rounded-full transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Call Sales */}
            <a
              href="tel:+237677000111"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4.5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-xs font-bold border border-slate-200 text-slate-800 bg-slate-50"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-900 px-6 pt-6 pb-8 border-b border-slate-200 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-blue-600 py-1.5 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-800 text-sm font-bold py-3 rounded-xl border border-slate-200"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                {t.nav.brochure}
              </button>

              <a
                href="#distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 rounded-xl shadow-md"
              >
                <Award className="w-4 h-4" />
                {t.nav.distributor}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
