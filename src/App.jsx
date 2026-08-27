import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { MineralPurity } from './components/MineralPurity';
import { PurificationProcess } from './components/PurificationProcess';
import { ProductShowcase } from './components/ProductShowcase';
import { DistributorPortal } from './components/DistributorPortal';
import { StoreLocator } from './components/StoreLocator';
import { NewsUpdates } from './components/NewsUpdates';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BrochureModal } from './components/BrochureModal';
import { Footer } from './components/Footer';
import { X, Send, ShoppingBag } from 'lucide-react';

function MainApp() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [sampleProduct, setSampleProduct] = useState(null);
  const [sampleFormSent, setSampleFormSent] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#080C14] text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar onOpenBrochure={() => setBrochureOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenBrochure={() => setBrochureOpen(true)} />

      {/* CBCHS Origin & Health Mission Story */}
      <OriginStory />

      {/* Low-TDS & Mineral Purity Comparator */}
      <MineralPurity />

      {/* 5-Stage Pharmaceutical Purification Pipeline */}
      <PurificationProcess />

      {/* Packaging & Products Showcase */}
      <ProductShowcase
        onOpenBrochure={() => setBrochureOpen(true)}
        onSelectProductForSample={(item) => {
          setSampleProduct(item);
          setSampleFormSent(false);
        }}
      />

      {/* B2B Commercial Distributor Portal & ROI Calculator */}
      <DistributorPortal />

      {/* Retail Store & Approved Depot Locator */}
      <StoreLocator />

      {/* News, Updates & Health Articles */}
      <NewsUpdates />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact & Support Section */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenBrochure={() => setBrochureOpen(true)} />

      {/* Downloadable Spec Sheet Brochure Modal */}
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />

      {/* Sample Request Modal */}
      {sampleProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="apple-glass-card max-w-lg w-full rounded-3xl p-8 relative animate-fadeIn space-y-4 text-slate-900 dark:text-slate-100">
            
            <button
              onClick={() => setSampleProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4" />
              <span>Wholesale Sample Request</span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Request Sample: {sampleProduct.nameEn}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
              Case size: {sampleProduct.bottlesPerCase} bottles • Price: {sampleProduct.priceCrateFcfa.toLocaleString()} FCFA
            </p>

            {sampleFormSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-center space-y-2">
                <div className="text-emerald-700 dark:text-emerald-400 font-bold text-base">Sample Request Logged</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Our Commercial Director will dispatch a representative to your business location.</p>
                <button
                  onClick={() => setSampleProduct(null)}
                  className="mt-4 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 underline"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSampleFormSent(true);
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Your Business / Hotel / Pharmacy Name"
                  className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (WhatsApp)"
                  className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Delivery Address / City"
                  className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-500 text-white dark:text-slate-950 font-extrabold text-xs py-3.5 rounded-2xl shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Sample Order</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
