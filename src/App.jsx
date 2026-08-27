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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
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
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-8 border border-slate-200 shadow-2xl relative animate-fadeIn space-y-4 text-slate-900">
            
            <button
              onClick={() => setSampleProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4" />
              <span>Wholesale Sample Request</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Request Sample: {sampleProduct.nameEn}
            </h3>

            <p className="text-xs text-slate-600">
              Case size: {sampleProduct.bottlesPerCase} bottles • Price: {sampleProduct.priceCrateFcfa.toLocaleString()} FCFA
            </p>

            {sampleFormSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="text-emerald-700 font-bold text-base">Sample Request Logged!</div>
                <p className="text-xs text-emerald-800">Our Commercial Director will dispatch a representative to your business location.</p>
                <button
                  onClick={() => setSampleProduct(null)}
                  className="mt-4 text-xs font-bold text-blue-600 underline"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (WhatsApp)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Delivery Address / City"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all"
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
