import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Globe, Menu, X, FileText, ShieldCheck, Sun, Moon } from 'lucide-react';

export const Navbar = ({ onOpenBrochure }) => {
  const { lang, toggleLanguage, theme, toggleTheme, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'apple-glass-dark border-b border-slate-200/80 dark:border-white/10 py-3 shadow-md backdrop-blur-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white font-black text-xl shadow-sm group-hover:scale-105 transition-all">
              H
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  HESCO
                </span>
                <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                  PURE
                </span>
              </div>
              <span className="block text-[10px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                {t.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 px-6 py-2 rounded-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls, Theme & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Theme Switcher Toggle */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Brochure Trigger */}
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{t.nav.brochure}</span>
            </button>

            {/* Language Toggle Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 font-mono font-bold text-xs px-3.5 py-2 rounded-full transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Call Sales */}
            <a
              href="tel:+237677000111"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callUs}</span>
            </a>
          </div>

          {/* Mobile Hamburger & Theme Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-xs font-mono font-bold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-cyan-400 bg-slate-100 dark:bg-slate-900"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-bold border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 bg-slate-100 dark:bg-slate-900"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden apple-glass-dark text-slate-900 dark:text-slate-200 px-6 pt-6 pb-8 border-b border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-2 border-b border-slate-100 dark:border-white/5"
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
                className="flex items-center justify-center gap-2 w-full bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-bold py-3 rounded-xl border border-slate-200 dark:border-white/10"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                {t.nav.brochure}
              </button>

              <a
                href="#distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-600 to-sky-600 text-white text-xs font-extrabold py-3 rounded-xl shadow-md"
              >
                <ShieldCheck className="w-4 h-4" />
                {t.nav.distributor}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
