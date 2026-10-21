import React, { useState, useMemo } from 'react';
import { 
  Search, ArrowUpRight, Gauge, Layers, 
  CheckCircle, ChevronRight, Sparkles, Filter, 
  Eye, ArrowRight 
} from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS_DATA } from '../data/products';

export default function ProductFilterCatalog({ 
  activeCategory, 
  onSelectCategory, 
  onOpenRFQ, 
  onOpenSpecsModal 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(true);

  // If user selects a specific category or types in search, exit "only featured" mode
  const handleCategorySelect = (catId) => {
    onSelectCategory(catId);
    if (catId !== 'all') {
      setShowOnlyFeatured(false);
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim() !== '') {
      setShowOnlyFeatured(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      // If user hasn't selected a category or search and showOnlyFeatured is on
      if (showOnlyFeatured && activeCategory === 'all' && !searchQuery.trim()) {
        return item.featured;
      }
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.seoKeywords.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, showOnlyFeatured]);

  const turnkeyLines = [
    {
      id: 'injectables',
      name: 'Sterile Injectable Vial Lines',
      vessels: '2ml – 100ml Glass Vials',
      steps: 'Washing → Depyrogenation → Powder/Liquid Filling → Stoppering → Cap Sealing',
      badge: 'Sterile cGMP',
      image: './images/products/rotary-vial-washing.jpg'
    },
    {
      id: 'syrups',
      name: 'Oral Liquid & Dry Syrup Lines',
      vessels: '30ml – 1000ml Bottles',
      steps: 'Air Jet Cleaning → Auger Dosing → Volumetric Filling → Capping → Cup Placement',
      badge: 'High Output',
      image: './images/products/liquid-syrup-filling.jpg'
    },
    {
      id: 'diagnostics',
      name: 'VTM & Diagnostic Automation',
      vessels: 'Conical & Cryovials',
      steps: 'Micro-Volume Reagent Dispensing → Torque Capping → DataMatrix Code Labelling',
      badge: 'IVD Precision',
      image: './images/products/vtm-tube-filling-capping.jpg'
    },
    {
      id: 'labelling',
      name: 'High-Speed Sticker Labelling',
      vessels: 'Vials, Ampoules, Bottles',
      steps: 'Wrap-Around / Front-Back Application → OCV/OCR Camera Batch Verification',
      badge: 'Up to 300 BPM',
      image: './images/products/vial-labelling-ocv-ocr.jpg'
    }
  ];

  return (
    <section id="machinery-catalog" className="py-20 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-petrol-700 bg-petrol-50 px-3.5 py-1 rounded-full border border-petrol-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-petrol-600" />
              cGMP Turnkey Manufacturing Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pharmaceutical Packaging Machinery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Curated flagship systems engineered at our Vatva GIDC facility for parenteral injectables, oral syrups, diagnostics, and vision-verified labelling.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenRFQ(null)}
              className="bg-petrol-600 hover:bg-petrol-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md shadow-petrol-600/20 transition-all flex items-center gap-2"
            >
              <span>Request Custom Proposal (RFQ)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Turnkey Solutions Cards (4 Core Portfolios) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {turnkeyLines.map((line) => (
            <div 
              key={line.id}
              onClick={() => handleCategorySelect(line.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer group bg-white hover:shadow-md flex flex-col justify-between ${
                activeCategory === line.id && !showOnlyFeatured
                  ? 'border-petrol-600 ring-2 ring-petrol-500/20 shadow-sm'
                  : 'border-stone-200 hover:border-petrol-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200">
                    {line.badge}
                  </span>
                  <span className="text-xs font-semibold text-petrol-600 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    View Line <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-petrol-700 transition-colors">
                  {line.name}
                </h3>
                <div className="text-[11px] text-stone-500 mt-1 font-medium">
                  {line.vessels}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                {line.steps}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Navigation Bar */}
        <div className="mt-10 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-white p-2.5 rounded-2xl border border-stone-200 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {/* Featured toggle pill */}
            <button
              onClick={() => {
                setShowOnlyFeatured(true);
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                showOnlyFeatured && activeCategory === 'all' && !searchQuery
                  ? 'bg-petrol-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Systems (6)</span>
            </button>

            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = !showOnlyFeatured && activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-petrol-600 text-white shadow-sm' 
                      : 'text-slate-600 hover:bg-stone-100'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px] lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search model, speed, filling..."
              className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-petrol-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* View Mode Status Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-stone-500 px-1">
          <span>
            {showOnlyFeatured && activeCategory === 'all' && !searchQuery ? (
              <span className="font-medium text-slate-700">
                Displaying <strong>6 Flagship Machinery Systems</strong> (Curated Home Showcase)
              </span>
            ) : (
              <span>
                Showing <strong>{filteredProducts.length}</strong> machinery systems
              </span>
            )}
          </span>

          {showOnlyFeatured && activeCategory === 'all' && !searchQuery ? (
            <button
              onClick={() => {
                setShowOnlyFeatured(false);
                onSelectCategory('all');
              }}
              className="text-petrol-600 hover:text-petrol-800 font-bold hover:underline flex items-center gap-1"
            >
              <span>View All 18+ Machinery Systems in Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setShowOnlyFeatured(true);
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="text-stone-500 hover:text-slate-800 hover:underline"
            >
              Back to Flagship Showcase (6)
            </button>
          )}
        </div>

        {/* Machinery Cards Grid (Only 6 shown by default!) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl border border-stone-200/90 hover:border-petrol-500/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Header & Actual Image (Crisp Light Framing) */}
              <div className="relative aspect-[16/11] bg-white border-b border-stone-100 p-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = './images/products/rotary-vial-washing.jpg';
                  }}
                />
                
                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="bg-stone-900 text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded shadow-sm">
                    {product.model}
                  </span>
                  {product.featured && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-200">
                      Flagship
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2 right-2">
                  <span className="bg-petrol-50 text-petrol-800 border border-petrol-200 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    SS 316L Contact
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-petrol-700 transition-colors leading-snug">
                    {product.name}
                  </h4>
                  
                  <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Quick specs grid */}
                  <div className="mt-4 grid grid-cols-2 gap-2 bg-stone-50/80 p-3 rounded-xl border border-stone-200/80 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 block">Output Speed</span>
                      <span className="font-semibold text-slate-800">{product.speed}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 block">Container Range</span>
                      <span className="font-semibold text-slate-800">{product.range}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 block">Filling Accuracy</span>
                      <span className="font-bold text-petrol-700">{product.accuracy}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 block">Power Rating</span>
                      <span className="font-semibold text-slate-800">{product.power}</span>
                    </div>
                  </div>

                  {/* Highlights preview */}
                  <div className="mt-4 space-y-1.5">
                    {product.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-stone-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenSpecsModal(product)}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Tech Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenRFQ(product)}
                    className="flex-1 bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Instant RFQ</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner when showing Featured to explore all */}
        {showOnlyFeatured && activeCategory === 'all' && !searchQuery && (
          <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-bold text-slate-900 text-sm">Looking for specialized packaging equipment?</h4>
              <p className="text-xs text-stone-500">Explore all 18+ models including linear washers, dual augers, front/back labelers & cup placers.</p>
            </div>
            <button
              onClick={() => {
                setShowOnlyFeatured(false);
                onSelectCategory('all');
              }}
              className="bg-stone-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Explore All 18 Machinery Models</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
