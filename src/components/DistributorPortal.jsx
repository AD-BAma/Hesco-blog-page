import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Send, CheckCircle2 } from 'lucide-react';

export const DistributorPortal = () => {
  const { t } = useLanguage();

  const [region, setRegion] = useState('Littoral (Douala)');
  const [tier, setTier] = useState('tier2');

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: 'Supermarket',
    phone: '',
    email: '',
    city: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const getTierStats = () => {
    switch (tier) {
      case 'tier1':
        return { crates: 350, marginFcfa: 245000, roiPercent: '28%' };
      case 'tier3':
        return { crates: 2500, marginFcfa: 2250000, roiPercent: '42%' };
      case 'tier2':
      default:
        return { crates: 1000, marginFcfa: 800000, roiPercent: '35%' };
    }
  };

  const stats = getTierStats();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="distributor" className="py-28 lg:py-36 bg-slate-50 dark:bg-[#0B101D] text-slate-900 dark:text-slate-100 relative border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{t.distributor.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.distributor.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.distributor.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Commercial Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="apple-glass-card p-8 sm:p-10 rounded-3xl relative">
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center font-mono font-bold text-xl">
                  %
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{t.distributor.calcTitle}</h3>
                  <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-400 font-mono font-semibold mt-0.5">Commercial Revenue & ROI Simulator</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Region Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.distributor.regionSelect}
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none font-medium"
                  >
                    <option className="bg-white dark:bg-slate-950">Littoral (Douala & Environs)</option>
                    <option className="bg-white dark:bg-slate-950">Centre (Yaoundé & Environs)</option>
                    <option className="bg-white dark:bg-slate-950">North West (Bamenda)</option>
                    <option className="bg-white dark:bg-slate-950">West (Bafoussam)</option>
                    <option className="bg-white dark:bg-slate-950">North & Far North (Garoua / Maroua)</option>
                    <option className="bg-white dark:bg-slate-950">South (Kribi / Ebolowa)</option>
                  </select>
                </div>

                {/* Tier Volume Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    {t.distributor.tierSelect}
                  </label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setTier('tier1')}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                        tier === 'tier1' ? 'bg-cyan-50 dark:bg-cyan-500/15 border-cyan-500 text-slate-900 dark:text-white' : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{t.distributor.tier1}</span>
                      <span className="text-cyan-700 dark:text-cyan-400 font-mono font-bold">Small Depot</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTier('tier2')}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                        tier === 'tier2' ? 'bg-cyan-50 dark:bg-cyan-500/15 border-cyan-500 text-slate-900 dark:text-white' : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{t.distributor.tier2}</span>
                      <span className="text-amber-700 dark:text-amber-400 font-mono font-bold">Popular Commercial</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTier('tier3')}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                        tier === 'tier3' ? 'bg-cyan-50 dark:bg-cyan-500/15 border-cyan-500 text-slate-900 dark:text-white' : 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{t.distributor.tier3}</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-mono font-bold">Wholesale Tier</span>
                    </button>
                  </div>
                </div>

                {/* Simulation Output Card */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 grid grid-cols-2 gap-6 font-mono">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{t.distributor.estRevenue}</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-2 font-mono-num">
                      {stats.marginFcfa.toLocaleString()} FCFA
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-500 mt-1">EST. MONTHLY MARGIN</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{t.distributor.estRoi}</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-700 dark:text-cyan-400 mt-2 font-mono-num">
                      {stats.roiPercent}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-500 mt-1">ANNUALIZED YIELD</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic bg-slate-50 dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200 dark:border-white/10">
                  {t.distributor.supportIncluded}
                </p>

              </div>

            </div>
          </div>

          {/* Right Column: B2B Application Form */}
          <div className="lg:col-span-6">
            <div className="apple-glass-card p-8 sm:p-10 rounded-3xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{t.distributor.formTitle}</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Direct submission to HESCO Marketing & Sales Directorship</p>
              </div>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Application Received</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t.distributor.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 underline hover:text-cyan-700"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.fullName}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nyah Antoine"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.businessName}</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Antoine Commercial SARL"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.businessType}</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                      >
                        <option className="bg-white dark:bg-slate-950">{t.distributor.typeSupermarket}</option>
                        <option className="bg-white dark:bg-slate-950">{t.distributor.typeHotel}</option>
                        <option className="bg-white dark:bg-slate-950">{t.distributor.typeHospital}</option>
                        <option className="bg-white dark:bg-slate-950">{t.distributor.typePharmacy}</option>
                        <option className="bg-white dark:bg-slate-950">{t.distributor.typeWholesaler}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.phone}</label>
                      <input
                        type="tel"
                        required
                        placeholder="+237 670 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.city}</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Douala / Yaoundé"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.email}</label>
                    <input
                      type="email"
                      required
                      placeholder="partner@company.cm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">{t.distributor.notes}</label>
                    <textarea
                      rows={3}
                      placeholder="Specify monthly expected volume, warehouse footprint..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-3.5 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-500 text-white dark:text-slate-950 font-extrabold text-sm py-4 rounded-2xl shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.distributor.submitBtn}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
