import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, ArrowUp, 
  MessageSquareText, FileText 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Footer({ onOpenRFQ, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 text-stone-700 relative border-t border-stone-300">
      
      {/* Pre-Footer Action Banner (Refined Petrol & Teal Gradient) */}
      <div className="bg-gradient-to-r from-petrol-800 via-petrol-700 to-petrol-900 text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-petrol-200 block mb-1">
              Custom Engineered Pharma Packaging Machinery
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Upgrade Your Packaging Line Efficiency?
            </h3>
            <p className="text-sm text-stone-200 mt-1 max-w-xl">
              Discuss your vial, bottle, or tube filling project with our Ahmedabad engineering team today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenRFQ(null)}
              className="bg-white text-slate-900 hover:bg-stone-100 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-petrol-700" />
              <span>Request Detailed Proposal (RFQ)</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Amba Corporation, I am viewing your website and would like to inquire about pharmaceutical machinery.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Summary Column with Original Company Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={COMPANY_INFO.logo} 
                onError={(e) => { e.currentTarget.src = COMPANY_INFO.logoFallback }} 
                alt="Amba Corporation" 
                className="h-12 w-auto object-contain max-w-[220px]"
              />
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Pioneering manufacturer and global exporter of high-speed vial washing, antibiotic powder filling, liquid syrup packaging, VTM diagnostic filling, and automatic sticker labelling machinery. Built to cGMP and US-FDA standards in Vatva GIDC, Ahmedabad.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-petrol-600 shrink-0 mt-0.5" />
                <span>56, Pushkar Mahadev Ind. Estate, Road E, Phase-1, Vatva-GIDC, Ahmedabad – 382445</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-petrol-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-petrol-700 font-medium">
                  {COMPANY_INFO.phones[0].number} / {COMPANY_INFO.phones[1].number}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-petrol-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="hover:text-petrol-700 font-medium">
                  {COMPANY_INFO.emails[0]}
                </a>
              </div>
              <div className="text-[11px] font-mono text-stone-600 pt-1">
                GSTIN: <span className="text-slate-900 font-bold">{COMPANY_INFO.gstNumber}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Machinery Silo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Injectable & Liquid Lines
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button onClick={() => onSelectCategory('injectables')} className="hover:text-petrol-700 transition-colors text-left">
                  Rotary Vial Washing Machines
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('injectables')} className="hover:text-petrol-700 transition-colors text-left">
                  Linear Tunnel Vial Washers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('injectables')} className="hover:text-petrol-700 transition-colors text-left">
                  Vacuum Wheel Powder Fillers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('injectables')} className="hover:text-petrol-700 transition-colors text-left">
                  Liquid Vial Filling & Stoppering
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('injectables')} className="hover:text-petrol-700 transition-colors text-left">
                  Rotary Vial Cap Sealing Machines
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('syrups')} className="hover:text-petrol-700 transition-colors text-left">
                  Air Jet Bottle Cleaning Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Diagnostic & Labelling */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Diagnostics & Labelling
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button onClick={() => onSelectCategory('diagnostics')} className="hover:text-petrol-700 transition-colors text-left">
                  VTM Tube Filling & Capping Lines
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('diagnostics')} className="hover:text-petrol-700 transition-colors text-left">
                  Cryovial & Tube Packaging
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('diagnostics')} className="hover:text-petrol-700 transition-colors text-left">
                  PFS & Dental Cartridge Labelling
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('labelling')} className="hover:text-petrol-700 transition-colors text-left">
                  OCV / OCR Vision Vial Labellers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('labelling')} className="hover:text-petrol-700 transition-colors text-left">
                  Rotary Ampoule & Vial Labelling
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('labelling')} className="hover:text-petrol-700 transition-colors text-left">
                  Double Side Flat Bottle Labellers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Compliance & Export
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>cGMP Compliant Manufacturing</span>
              </li>
              <li>ISO 9001:2015 Quality System</li>
              <li>21 CFR Part 11 Audit Trail Logic</li>
              <li>Full DQ / IQ / OQ Documentation</li>
              <li>FAT & SAT Qualification Protocols</li>
              <li>Seaworthy Vacuum Timber Packing</li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-petrol-700 hover:text-petrol-900 font-bold transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-6 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Amba Corporation. All Rights Reserved. Vatva GIDC, Ahmedabad, Gujarat, India.</p>
          <div className="flex items-center space-x-6 text-[11px] text-stone-500">
            <span>Pharmaceutical Filling Machines</span>
            <span>•</span>
            <span>Vial Washers</span>
            <span>•</span>
            <span>Sticker Labelling Systems</span>
          </div>
        </div>
      </div>

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Amba Corporation, I am viewing your website and would like a quote.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageSquareText className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
          Chat With Engineer
        </span>
      </a>

    </footer>
  );
}
