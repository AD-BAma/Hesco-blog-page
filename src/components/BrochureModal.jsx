import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Download, Printer, ShieldCheck, CheckCircle2, FileText, Droplet } from 'lucide-react';
import { productsData } from '../data/products';

export const BrochureModal = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white text-slate-900 max-w-4xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl relative animate-fadeIn my-8 border border-slate-200">
        
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Official Product Specification Brochure</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-8">
          
          {/* Header Banner */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 rounded-2xl">
            <div>
              <div className="flex items-center gap-2">
                <Droplet className="w-7 h-7 text-cyan-400" />
                <h1 className="text-3xl font-black tracking-tight">HESCO MINERAL WATER</h1>
              </div>
              <p className="text-xs text-cyan-300 font-bold mt-1">Eau Minérale Naturelle • Cameroon Baptist Convention Health Services</p>
            </div>
            <div className="text-right text-xs text-slate-300 hidden sm:block">
              <div>Ref: HESCO-SPEC-2026</div>
              <div>Standards: ISO & ANOR</div>
            </div>
          </div>

          {/* Core Health & Origin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Corporate Heritage</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                HESCO is bottled under pharmaceutical hygiene standards directly from natural volcanic mountain springs in Cameroon. Initiated by the Cameroon Baptist Convention Health Services (CBCHS) to provide pristine water for infants, medical facilities, and the public.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Key Quality Metrics</h4>
              <ul className="text-xs text-slate-600 space-y-1">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Microbiological Purity: 99.99%</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Total Dissolved Solids (TDS): &lt; 115 mg/L</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> pH Level: 7.4 (Neutral Balance)</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Infant Formula Certification: Safe</li>
              </ul>
            </div>
          </div>

          {/* Product Specifications Table */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Packaging & Pricing Catalog</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-3 border-r border-slate-200">Format</th>
                    <th className="p-3 border-r border-slate-200">Volume</th>
                    <th className="p-3 border-r border-slate-200">Units / Case</th>
                    <th className="p-3 border-r border-slate-200">Wholesale Price (Case)</th>
                    <th className="p-3">Primary Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {productsData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="p-3 font-bold border-r border-slate-200">{lang === 'fr' ? item.nameFr : item.nameEn}</td>
                      <td className="p-3 border-r border-slate-200">{item.size}</td>
                      <td className="p-3 border-r border-slate-200">{item.bottlesPerCase}</td>
                      <td className="p-3 font-bold text-blue-700 border-r border-slate-200">{item.priceCrateFcfa.toLocaleString()} FCFA</td>
                      <td className="p-3 text-slate-600">{lang === 'fr' ? item.suitableFr : item.suitableEn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
            <p className="font-bold text-slate-800">Commercial & Wholesale Department • HESCO Mineral Water</p>
            <p>Tel: +237 677 000 111 / +237 699 000 222 • Email: info@hescowater.cm</p>
          </div>

        </div>

      </div>
    </div>
  );
};
