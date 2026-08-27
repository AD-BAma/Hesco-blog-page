import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { storeLocations } from '../data/stores';
import { MapPin, Search, Phone, Navigation, ShieldCheck, Filter } from 'lucide-react';

export const StoreLocator = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStores = storeLocations.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCity = selectedCity === 'All' || store.city === selectedCity;
    const matchesCategory = selectedCategory === 'All' || store.category === selectedCategory;

    return matchesSearch && matchesCity && matchesCategory;
  });

  const cities = ['All', 'Douala', 'Yaoundé', 'Bamenda', 'Bafoussam', 'Kribi', 'Garoua'];

  return (
    <section id="locations" className="py-28 lg:py-36 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.locations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.locations.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.locations.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md mb-12 space-y-6">
          
          <div className="relative">
            <Search className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.locations.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-14 pr-6 py-4 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
            />
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCity === city
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {city === 'All' ? t.locations.filterAll : city}
              </button>
            ))}
          </div>

        </div>

        {/* Store Grid */}
        {filteredStores.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-lg">No authorized depots found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {store.city} • {store.region}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{store.name}</h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{store.address}</p>

                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${store.phone}`}
                    className="flex items-center justify-center gap-2.5 w-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-3 rounded-2xl transition-all"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
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
