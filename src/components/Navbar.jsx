import React, { useState } from 'react';
import { 
  Phone, Mail, ShieldCheck, ChevronDown, 
  Menu, X, MessageSquareText, FileText 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Navbar({ onOpenRFQ, onSelectCategory, activeCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [machineryDropdownOpen, setMachineryDropdownOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Machinery', badge: '18+' },
    { id: 'injectables', label: 'Injectable Vial Lines', badge: 'Sterile' },
    { id: 'syrups', label: 'Oral Liquid & Dry Syrups', badge: 'Parenteral' },
    { id: 'diagnostics', label: 'VTM & Diagnostic Lines', badge: 'IVD / COVID' },
    { id: 'labelling', label: 'Automatic Sticker Labelling', badge: 'High Speed' },
  ];

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    setMachineryDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById('machinery-catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white/95 backdrop-blur border-b border-stone-200">
      {/* Top Bar - Contact & Regulatory */}
      <div className="bg-stone-100/80 text-stone-700 text-xs py-2 px-4 sm:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center space-x-6 flex-wrap">
            <span className="flex items-center text-stone-800 hover:text-petrol-700 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-petrol-600" />
              <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="font-semibold tracking-wide">
                {COMPANY_INFO.phones[0].number}
              </a>
              <span className="mx-2 text-stone-300">|</span>
              <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hidden md:inline hover:text-petrol-700">
                {COMPANY_INFO.phones[1].number}
              </a>
            </span>
            <span className="hidden sm:flex items-center text-stone-600 hover:text-petrol-700">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-petrol-600" />
              <a href={`mailto:${COMPANY_INFO.emails[0]}`}>{COMPANY_INFO.emails[0]}</a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-800 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
              cGMP & ISO 9001:2015 Certified
            </span>
            <span className="hidden lg:inline text-stone-500 font-medium">
              Vatva GIDC, Ahmedabad
            </span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Amba Corporation, I am inquiring about pharmaceutical filling and packaging machinery.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors shadow-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Original Company Logo */}
        <a href="#" className="flex items-center gap-3 py-1">
          <img 
            src={COMPANY_INFO.logo} 
            onError={(e) => { e.currentTarget.src = COMPANY_INFO.logoFallback }} 
            alt="Amba Corporation - Precision Pharmaceutical Machinery" 
            className="h-12 sm:h-14 w-auto object-contain max-w-[200px] sm:max-w-[240px]"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          <a href="#hero" className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors">
            Home
          </a>

          {/* Machinery Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setMachineryDropdownOpen(!machineryDropdownOpen)}
              onMouseEnter={() => setMachineryDropdownOpen(true)}
              className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors flex items-center gap-1"
            >
              Machinery Catalog
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${machineryDropdownOpen ? 'rotate-180 text-petrol-600' : ''}`} />
            </button>

            {machineryDropdownOpen && (
              <div 
                onMouseLeave={() => setMachineryDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-stone-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-4 py-2 border-b border-stone-100">
                  <span className="text-[11px] font-bold uppercase text-stone-400 tracking-wider">Product Categories</span>
                </div>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCategoryClick(c.id)}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-petrol-50 hover:text-petrol-800 flex items-center justify-between transition-colors"
                  >
                    <span>{c.label}</span>
                    <span className="text-[10px] font-semibold bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                      {c.badge}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors">
            About Heritage
          </a>
          <a href="#clients" className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors">
            Clients
          </a>
          <a href="#export-footprint" className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors">
            Global Footprint
          </a>
          <a href="#faq" className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors">
            FAQs
          </a>
          <a href="#contact" className="px-3 py-2 text-sm font-semibold text-stone-700 hover:text-petrol-700 transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenRFQ(null)}
            className="rounded-xl bg-petrol-600 hover:bg-petrol-700 text-white font-bold text-sm px-5 py-2.5 shadow-md shadow-petrol-600/20 transition-all flex items-center gap-2 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Request Quote (RFQ)</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenRFQ(null)}
            className="sm:hidden bg-petrol-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md"
          >
            RFQ
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4">
          <div className="space-y-1">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-stone-800 hover:bg-stone-100"
            >
              Home
            </a>
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-400">
              Machinery Categories
            </div>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleCategoryClick(c.id)}
                className="w-full text-left pl-6 pr-3 py-2 rounded-md text-sm font-medium text-stone-600 hover:bg-petrol-50 hover:text-petrol-800 flex justify-between items-center"
              >
                <span>{c.label}</span>
                <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-500">{c.badge}</span>
              </button>
            ))}
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-stone-800 hover:bg-stone-100"
            >
              About Heritage
            </a>
            <a 
              href="#clients" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-stone-800 hover:bg-stone-100"
            >
              Valued Clients
            </a>
            <a 
              href="#export-footprint" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-stone-800 hover:bg-stone-100"
            >
              Global Export Footprint
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-stone-800 hover:bg-stone-100"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ(null);
              }}
              className="w-full bg-petrol-600 text-white font-semibold py-2.5 rounded-lg text-sm flex justify-center items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Custom Proposal (RFQ)</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi Amba Corporation, I would like to get a quote for pharmaceutical machinery.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg text-sm flex justify-center items-center gap-2"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 72270 77623)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
