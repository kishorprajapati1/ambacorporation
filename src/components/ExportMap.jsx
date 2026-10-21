import React, { useState } from 'react';
import { Globe, Plane, ShieldCheck, Box, Anchor } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ExportMap() {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = ['All', 'Middle East & Africa', 'Asia', 'Americas', 'Europe'];

  const filteredCountries = COMPANY_INFO.exportCountries.filter((c) => {
    if (selectedRegion === 'All') return true;
    if (selectedRegion === 'Asia') return c.region.includes('Asia');
    if (selectedRegion === 'Middle East & Africa') return c.region.includes('Middle East') || c.region.includes('Africa');
    if (selectedRegion === 'Americas') return c.region.includes('America');
    if (selectedRegion === 'Europe') return c.region.includes('Europe');
    return true;
  });

  return (
    <section id="export-footprint" className="py-20 bg-stone-50 text-slate-800 relative overflow-hidden border-b border-stone-200">
      
      {/* Background soft accents */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-petrol-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-petrol-800 bg-petrol-50 px-3.5 py-1 rounded-full border border-petrol-200 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-petrol-600" />
            Global Export & Installation Footprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted in Over 25+ Countries Worldwide
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From our advanced manufacturing hub in Vatva GIDC, Ahmedabad, Amba Corporation exports precision pharmaceutical packaging lines to regulated and semi-regulated markets across four continents.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedRegion === region
                  ? 'bg-petrol-600 text-white font-bold shadow-md shadow-petrol-600/20'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 shadow-sm'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Export Destinations Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCountries.map((country, idx) => (
            <div 
              key={idx}
              className="bg-white hover:bg-white border border-stone-200 hover:border-petrol-500/80 rounded-xl p-4 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl drop-shadow-sm">{country.flag}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-petrol-700 transition-colors">
                      {country.name}
                    </h4>
                    <span className="text-[11px] text-stone-500">{country.region}</span>
                  </div>
                </div>
                <Plane className="w-4 h-4 text-stone-400 group-hover:text-petrol-600 transition-colors" />
              </div>

              <div className="mt-3 pt-3 border-t border-stone-100 text-xs">
                <span className="text-stone-400 text-[10px] uppercase font-bold block">Key Machinery Deployed:</span>
                <span className="text-stone-700 font-semibold mt-0.5 block">{country.machines}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Export Guarantee & Standards Strip (Light Theme) */}
        <div className="mt-12 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-petrol-50 text-petrol-600 rounded-xl shrink-0 border border-petrol-200 shadow-sm">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Seaworthy Export Packing</h4>
                <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                  Vacuum barrier foil with ISPM-15 compliant heat-treated heavy timber crating for ocean and air freight protection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-petrol-50 text-petrol-600 rounded-xl shrink-0 border border-petrol-200 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Pre-Shipment FAT Testing</h4>
                <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                  Factory Acceptance Test (FAT) with actual container samples and product fluids conducted in Ahmedabad before export dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-petrol-50 text-petrol-600 rounded-xl shrink-0 border border-petrol-200 shadow-sm">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Port Logistics & Commissioning</h4>
                <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                  Expedited dispatch via Mundra / Nhava Sheva (JNPT) ports with CIF/FOB terms and global on-site commissioning engineer support.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
