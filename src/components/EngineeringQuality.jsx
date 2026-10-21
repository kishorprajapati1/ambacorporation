import React from 'react';
import { 
  History, ShieldCheck, CheckCircle2, 
  Factory 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function EngineeringQuality({ onOpenRFQ }) {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* About & Heritage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heritage Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-petrol-800 bg-petrol-50 px-3 py-1 rounded-full border border-petrol-200">
              <History className="w-3.5 h-3.5 text-petrol-600" />
              Four Decades of Engineering Pedigree
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pioneering Pharmaceutical Filling Technology Since the 1980s
            </h2>

            <div className="text-stone-600 text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                The journey of <strong className="text-slate-900">Amba Corporation</strong> began in the early 1980s under the vision of <strong className="text-slate-900">{COMPANY_INFO.founder}</strong> with the establishment of <em>Amba Engineers</em>. Driven by uncompromising dedication to machine tolerances and pharmaceutical reliability, the firm evolved into a premier packaging engineering powerhouse.
              </p>
              <p>
                Today, under the leadership of <strong className="text-slate-900">{COMPANY_INFO.leadership}</strong>, Amba Corporation operates an advanced manufacturing, design, and validation facility in <strong>Vatva GIDC, Ahmedabad</strong>. We specialize in precision parenteral sterile filling lines, diagnostic reagent filling, and ultra-high-speed labeling machinery.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Factory className="w-4 h-4 text-petrol-600" />
                  In-House CNC Fabrication
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  High-precision CNC turning, milling, and laser cutting ensuring micrometer-accurate fits for every star wheel and piston.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Full Qualification Dossier
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  Complete Design Qualification (DQ), Installation (IQ), and Operational (OQ) validation documentation provided.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Standards & Metallurgy Visual Card (Light Theme) */}
          <div className="lg:col-span-6">
            <div className="bg-stone-50 text-slate-800 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-petrol-100/50 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <span className="text-xs font-mono font-bold text-petrol-800 uppercase tracking-wide">
                  SPECIFICATION BENCHMARK
                </span>
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded border border-emerald-200">
                  cGMP US-FDA Standard
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-petrol-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Metallurgy Integrity:</strong> Contact parts fabricated strictly in <span className="text-petrol-700 font-bold">AISI Stainless Steel 316L</span>, electro-polished to mirror finish Ra &lt; 0.4 µm to prevent particulate adherence and biofilm.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-petrol-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">21 CFR Part 11 Automation:</strong> Siemens / Allen Bradley PLC controls with multi-level password security, audit trails, and batch recipe memory.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-petrol-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Cleanroom Aerodynamics:</strong> Sloped table-tops, laminar flow pass-through design, and silicone sanitary sealings preventing dust accumulation.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-petrol-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Zero Container Breakage:</strong> Gentle pocketed star wheels, torque slip clutches, and optical container presence interlocks (&quot;No Vial - No Fill&quot;).
                  </div>
                </div>
              </div>

              {/* Bottom facility stats */}
              <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                  <span className="text-xs text-stone-500">Manufacturing Facility</span>
                  <span className="font-bold text-sm text-slate-900 block mt-0.5">Vatva GIDC Phase-1</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                  <span className="text-xs text-stone-500">GST Registration</span>
                  <span className="font-mono text-xs text-petrol-800 font-bold block mt-0.5">{COMPANY_INFO.gstNumber}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Sectors Served Grid */}
        <div id="engineering" className="mt-20 pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Industries & Formulation Sectors We Serve
            </h3>
            <p className="text-stone-600 text-xs sm:text-base mt-1">
              Engineered to meet the stringent contamination control requirements across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_INFO.clienteleSectors.map((sec, idx) => (
              <div 
                key={idx}
                className="bg-stone-50 hover:bg-white rounded-xl p-5 border border-stone-200 hover:border-petrol-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-petrol-50 text-petrol-700 flex items-center justify-center font-bold text-xs mb-3 border border-petrol-200">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {sec.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
