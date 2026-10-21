import React, { useState } from 'react';
import { 
  X, CheckCircle, FileText, ArrowUpRight, Gauge, 
  Cpu, Wrench, ShieldAlert, Download, Printer 
} from 'lucide-react';

export default function ProductSpecsModal({ product, onClose, onOpenRFQ }) {
  const [activeTab, setActiveTab] = useState('specs');

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-stone-900 to-petrol-950 text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs bg-petrol-600 px-2.5 py-0.5 rounded font-bold">
                {product.model}
              </span>
              <span className="text-xs bg-stone-800 text-emerald-400 px-2 py-0.5 rounded font-medium">
                {product.compliance}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              {product.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center border-b border-stone-200 bg-stone-50 px-6">
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'specs' 
                ? 'border-petrol-600 text-petrol-700 bg-white' 
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Technical Parameters & Utilities
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'features' 
                ? 'border-petrol-600 text-petrol-700 bg-white' 
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Key Design & cGMP Features
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top visual strip with real machine image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div className="md:col-span-4 aspect-[4/3] bg-white rounded-lg border border-stone-200 p-2 flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            <div className="md:col-span-8 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 font-medium block">Nominal Output</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5">{product.speed}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 font-medium block">Container Range</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5">{product.range}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 font-medium block">Filling Accuracy</span>
                <span className="font-bold text-petrol-700 text-sm mt-0.5">{product.accuracy}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 font-medium block">Power Rating</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5">{product.power}</span>
              </div>
            </div>
          </div>

          {activeTab === 'specs' && (
            <div className="space-y-6">
              {/* Detailed Specs Table */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-petrol-600" />
                  Engineering Specification Matrix
                </h4>
                <div className="overflow-x-auto border border-stone-200 rounded-xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-stone-100 text-slate-700 uppercase font-bold text-[11px] border-b border-stone-200">
                      <tr>
                        <th className="py-3 px-4 w-1/3">Parameter</th>
                        <th className="py-3 px-4">Standard Engineering Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                          <td className="py-2.5 px-4 font-semibold text-slate-700">{key}</td>
                          <td className="py-2.5 px-4 text-slate-800 font-mono text-xs sm:text-sm">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Compliance Note */}
              <div className="bg-petrol-50/70 p-4 rounded-xl border border-petrol-200 text-xs text-slate-700 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-petrol-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Validation Protocol Delivery: </strong>
                  Every machine supplied by Amba Corporation is accompanied by complete DQ (Design Qualification), IQ (Installation Qualification), OQ (Operational Qualification), and Calibration Certificates in compliance with US-FDA and WHO-GMP expectations.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-petrol-600" />
                  Core Engineering & Automation Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 text-slate-800 p-5 rounded-xl border border-stone-200 text-xs space-y-2">
                <div className="font-bold text-petrol-800 uppercase tracking-wider text-[11px]">
                  Metallurgy & Surface Finish Standards
                </div>
                <p className="text-stone-600">
                  • Contact Parts: AISI Stainless Steel 316L, Electro-polished (Mirror finish Ra &lt; 0.4 µm)<br />
                  • Non-Contact Parts & Cladding: AISI Stainless Steel 304 (Matt / Satin finish)<br />
                  • Gaskets & Seals: FDA compliant Silicon / PTFE (USP Class VI)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-stone-50 p-4 sm:p-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white border border-stone-300 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Specification Sheet</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-2"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFQ(product);
              }}
              className="bg-petrol-600 hover:bg-petrol-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Request Quotation for {product.model}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
