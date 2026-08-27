import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { storeLocations } from '../data/stores';
import { MapPin, Search, Phone, ShieldCheck } from 'lucide-react';

export const StoreLocator = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');

  const filteredStores = storeLocations.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCity = selectedCity === 'All' || store.city === selectedCity;

    return matchesSearch && matchesCity;
  });

  const cities = ['All', 'Douala', 'Yaoundé', 'Bamenda', 'Bafoussam', 'Kribi', 'Garoua'];

  return (
    <section id="locations" className="py-28 lg:py-36 bg-white dark:bg-[#080C14] text-slate-900 dark:text-slate-100 relative bg-grid-pattern border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-50 dark:bg-slate-900 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>{t.locations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.locations.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.locations.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="apple-glass-card p-6 sm:p-8 rounded-3xl mb-12 space-y-6">
          
          <div className="relative">
            <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600 dark:text-cyan-400" />
            <input
              type="text"
              placeholder={t.locations.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl pl-14 pr-6 py-4 text-sm text-slate-900 dark:text-white focus:border-cyan-500 outline-none"
            />
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? 'bg-cyan-600 dark:bg-cyan-400 text-white dark:text-slate-950 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-200'
                }`}
              >
                {city === 'All' ? t.locations.filterAll : city}
              </button>
            ))}
          </div>

        </div>

        {/* Store Grid */}
        {filteredStores.length === 0 ? (
          <div className="text-center py-20 apple-glass-card rounded-3xl">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-mono">No authorized depots found matching your query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="apple-glass-card p-6 rounded-3xl flex flex-col justify-between hover:border-cyan-400 transition-all"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                      {store.city} • {store.region}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug tracking-tight">{store.name}</h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{store.address}</p>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  <a
                    href={`tel:${store.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold py-3 rounded-xl transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{t.locations.callDepot}</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
