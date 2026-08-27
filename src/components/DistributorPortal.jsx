import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Calculator, Send, CheckCircle, TrendingUp, DollarSign, Building2, Phone, Mail, MapPin } from 'lucide-react';

export const DistributorPortal = () => {
  const { t } = useLanguage();

  // Calculator State
  const [region, setRegion] = useState('Littoral (Douala)');
  const [tier, setTier] = useState('tier2'); // tier1, tier2, tier3

  // Application Form State
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

  // ROI Math
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
    <section id="distributor" className="py-28 lg:py-36 bg-slate-50/50 text-slate-900 relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <span>{t.distributor.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.distributor.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.distributor.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Profit Margin & ROI Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xl">
                  %
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{t.distributor.calcTitle}</h3>
                  <p className="text-xs sm:text-sm text-blue-700 font-semibold mt-0.5">Live Cameroon Regional Commercial Simulation</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Region Selector */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">{t.distributor.regionSelect}</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                  >
                    <option>Littoral (Douala & Environs)</option>
                    <option>Centre (Yaoundé & Environs)</option>
                    <option>North West (Bamenda)</option>
                    <option>West (Bafoussam)</option>
                    <option>North & Far North (Garoua / Maroua)</option>
                    <option>South (Kribi / Ebolowa)</option>
                  </select>
                </div>

                {/* Tier Volume Selector */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">{t.distributor.tierSelect}</label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setTier('tier1')}
                      className={`w-full text-left p-4 rounded-2xl border text-sm font-bold flex items-center justify-between transition-all ${
                        tier === 'tier1' ? 'bg-blue-50 border-blue-500 text-slate-900 shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{t.distributor.tier1}</span>
                      <span className="text-blue-700 font-extrabold">Small Depot</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTier('tier2')}
                      className={`w-full text-left p-4 rounded-2xl border text-sm font-bold flex items-center justify-between transition-all ${
                        tier === 'tier2' ? 'bg-blue-50 border-blue-500 text-slate-900 shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{t.distributor.tier2}</span>
                      <span className="text-amber-700 font-extrabold">Popular Choice</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTier('tier3')}
                      className={`w-full text-left p-4 rounded-2xl border text-sm font-bold flex items-center justify-between transition-all ${
                        tier === 'tier3' ? 'bg-blue-50 border-blue-500 text-slate-900 shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{t.distributor.tier3}</span>
                      <span className="text-emerald-700 font-extrabold">Wholesale Tier</span>
                    </button>
                  </div>
                </div>

                {/* Calculation Results Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.distributor.estRevenue}</div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-700 mt-2">
                      {stats.marginFcfa.toLocaleString()} FCFA
                    </div>
                    <div className="text-xs text-slate-500 mt-1">per month</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.distributor.estRoi}</div>
                    <div className="text-2xl sm:text-3xl font-black text-blue-600 mt-2">
                      {stats.roiPercent}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">estimated annual yield</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {t.distributor.supportIncluded}
                </p>

              </div>

            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">{t.distributor.formTitle}</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">Direct submission to HESCO Marketing & Sales Directorship</p>
              </div>

              {submitted ? (
                <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Application Received!</h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {t.distributor.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-bold text-blue-600 underline hover:text-blue-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.fullName}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nyah Antoine"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.businessName}</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Antoine Commercial SARL"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.businessType}</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      >
                        <option>{t.distributor.typeSupermarket}</option>
                        <option>{t.distributor.typeHotel}</option>
                        <option>{t.distributor.typeHospital}</option>
                        <option>{t.distributor.typePharmacy}</option>
                        <option>{t.distributor.typeWholesaler}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.phone}</label>
                      <input
                        type="tel"
                        required
                        placeholder="+237 670 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.city}</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Douala / Yaoundé"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.email}</label>
                    <input
                      type="email"
                      required
                      placeholder="partner@company.cm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t.distributor.notes}</label>
                    <textarea
                      rows={3}
                      placeholder="Specify monthly expected order volume, current warehouse space, or transport fleet..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-2xl shadow-md transition-all"
                  >
                    <Send className="w-5 h-5" />
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
