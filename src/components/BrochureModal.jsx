import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Printer, CheckCircle2, FileText } from 'lucide-react';
import { productsData } from '../data/products';

export const BrochureModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="apple-glass-card max-w-4xl w-full rounded-3xl p-6 sm:p-10 relative animate-fadeIn my-8 text-slate-900 dark:text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">Technical Product Specification Sheet</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-bold hover:bg-cyan-100 dark:hover:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="space-y-6">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-6 rounded-2xl gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm">H</span>
                <h1 className="text-2xl font-extrabold text-white tracking-tight">HESCO MINERAL WATER</h1>
              </div>
              <p className="text-xs text-cyan-400 font-mono font-semibold mt-1">Eau Minérale Naturelle • Cameroon Baptist Convention Health Services</p>
            </div>
            <div className="text-left sm:text-right text-xs font-mono text-slate-300">
              <div>Ref: HESCO-SPEC-2026</div>
              <div>Standards: ISO & ANOR</div>
            </div>
          </div>

          {/* Core Health & Origin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-200 dark:border-white/10 text-xs">
            <div>
              <h4 className="font-mono font-bold text-slate-900 dark:text-white mb-2 uppercase text-[11px] text-cyan-700 dark:text-cyan-400">Corporate Heritage</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Bottled under strict pharmaceutical cleanroom hygiene standards directly from natural volcanic mountain aquifers in Cameroon. Backed by the Cameroon Baptist Convention Health Services (CBCHS).
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold text-slate-900 dark:text-white mb-2 uppercase text-[11px] text-emerald-700 dark:text-emerald-400">Certified Laboratory Metrics</h4>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1.5 font-mono">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Purity Rating: 99.999%</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Total Dissolved Solids (TDS): &lt; 115 mg/L</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Natural pH Level: 7.4 Neutral</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Infant Formula Certification: Approved</li>
              </ul>
            </div>
          </div>

          {/* Product Specifications Table */}
          <div>
            <h4 className="font-mono font-bold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">Packaging & Wholesale Catalog</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse border border-slate-200 dark:border-white/10">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-white/10">
                    <th className="p-3 border-r border-slate-200 dark:border-white/10">Format</th>
                    <th className="p-3 border-r border-slate-200 dark:border-white/10">Volume</th>
                    <th className="p-3 border-r border-slate-200 dark:border-white/10">Units / Case</th>
                    <th className="p-3 border-r border-slate-200 dark:border-white/10">Case Price</th>
                    <th className="p-3">Primary Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/10 text-slate-700 dark:text-slate-300">
                  {productsData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/60">
                      <td className="p-3 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-white/10">{lang === 'fr' ? item.nameFr : item.nameEn}</td>
                      <td className="p-3 border-r border-slate-200 dark:border-white/10">{item.size}</td>
                      <td className="p-3 border-r border-slate-200 dark:border-white/10">{item.bottlesPerCase}</td>
                      <td className="p-3 font-bold text-cyan-700 dark:text-cyan-400 border-r border-slate-200 dark:border-white/10">{item.priceCrateFcfa.toLocaleString()} FCFA</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{lang === 'fr' ? item.suitableFr : item.suitableEn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="border-t border-slate-200 dark:border-white/10 pt-4 text-center text-xs font-mono text-slate-500 dark:text-slate-400">
            <p className="font-bold text-slate-900 dark:text-white">Commercial Directorship • HESCO Mineral Water</p>
            <p className="mt-1">Tel: +237 677 000 111 / +237 699 000 222 • Email: info@hescowater.cm</p>
          </div>

        </div>

      </div>
    </div>
  );
};
