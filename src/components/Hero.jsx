import React from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Award, 
  Layers, ArrowUpRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Hero({ onOpenRFQ }) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-stone-100/70 via-white to-stone-50 text-slate-800 overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200">
      
      {/* Soft background subtle mesh */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-petrol-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 bg-petrol-50 border border-petrol-200 rounded-full px-3.5 py-1 text-xs font-semibold text-petrol-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-petrol-600 animate-pulse" />
            Vatva GIDC, Ahmedabad — Global Machinery Exporter
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-xs font-semibold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            cGMP & 21 CFR Part 11 Ready
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-amber-50/80 border border-amber-200/80 rounded-full px-3 py-1 text-xs font-semibold text-amber-900 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            4 Decades of Engineering Pedigree (Est. 1980s)
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Precision <span className="text-petrol-600">Pharmaceutical Packaging</span> Machinery
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Amba Corporation designs and manufactures turnkey parenteral and oral machinery: 
              <strong className="text-slate-900 font-semibold"> Injectable Vial Washing & Powder/Liquid Filling</strong>, 
              <strong className="text-slate-900 font-semibold"> Dry Syrup & Suspension Lines</strong>, 
              <strong className="text-slate-900 font-semibold"> VTM Tube Packaging</strong>, and 
              <strong className="text-slate-900 font-semibold"> High-Speed Automatic Sticker Labelling Machines</strong>.
            </p>

            {/* Checklist items in light theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-600 shrink-0" />
                <span>AISI 316L Contact Parts & Mirror Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-600 shrink-0" />
                <span>Complete FAT/SAT & DQ/IQ/OQ Validation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-600 shrink-0" />
                <span>Cleanroom Class 100 / LAF Isolator Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-600 shrink-0" />
                <span>Turnkey Solutions Exported to 25+ Countries</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenRFQ(null)}
                className="bg-petrol-600 hover:bg-petrol-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-petrol-600/25 transition-all flex items-center gap-2 text-sm hover:scale-[1.02] active:scale-95"
              >
                <span>Request Custom Machine Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#machinery-catalog"
                className="border border-stone-300 hover:border-petrol-500 bg-white hover:bg-stone-50 text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm flex items-center gap-2 shadow-sm"
              >
                <Layers className="w-4 h-4 text-petrol-600" />
                <span>Explore Featured Machinery</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Industrial Showcase Card (Refined Light Theme) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-petrol-200 via-stone-200 to-transparent shadow-xl">
              <div className="rounded-[15px] bg-white border border-stone-200 p-5 sm:p-6 shadow-sm">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">Actual Machine Showcase</span>
                  </div>
                  <span className="text-[11px] font-mono text-petrol-800 bg-petrol-50 px-2 py-0.5 rounded border border-petrol-200 font-bold">
                    cGMP SS 316L
                  </span>
                </div>

                {/* Hero Showcase Real Machine Image */}
                <div className="mt-4 relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-50 border border-stone-200 group">
                  <img 
                    src="./images/products/rotary-vial-washing.jpg" 
                    alt="Automatic Rotary Vial Washing Machine - Amba Corporation"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md rounded-lg p-2.5 border border-stone-200 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-petrol-700">
                          Automatic Rotary Vial Washer
                        </span>
                        <div className="text-xs font-bold text-slate-900">
                          Model AC-RVW-120
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        60 - 120 VPM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick specs highlights box (Light) */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200">
                    <div className="text-stone-500 text-[10px] font-semibold uppercase">Contact Metallurgy</div>
                    <div className="font-bold text-slate-800 mt-0.5">SS 316L Mirror Polished</div>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200">
                    <div className="text-stone-500 text-[10px] font-semibold uppercase">Automation & HMI</div>
                    <div className="font-bold text-slate-800 mt-0.5">Siemens / Allen Bradley</div>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200">
                    <div className="text-stone-500 text-[10px] font-semibold uppercase">Vision Inspection</div>
                    <div className="font-bold text-slate-800 mt-0.5">OCV / OCR Neural Cam</div>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200">
                    <div className="text-stone-500 text-[10px] font-semibold uppercase">Commissioning</div>
                    <div className="font-bold text-emerald-700 mt-0.5">On-site FAT / SAT</div>
                  </div>
                </div>

                {/* Fast contact pill */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                  <span>Direct Technical Desk:</span>
                  <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-petrol-700 font-bold hover:underline">
                    {COMPANY_INFO.phones[0].number}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Key Metrics Strip (Light Theme) */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-petrol-400 hover:shadow-md transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-petrol-600">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
