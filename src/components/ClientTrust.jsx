import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';
import { Building2, Award } from 'lucide-react';

export default function ClientTrust() {
  return (
    <section id="clients" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 mb-1">
              <Award className="w-3.5 h-3.5 text-brand-600" />
              Trusted Pharmaceutical Industry Partners
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Leading Pharmaceutical & Healthcare Manufacturers We Serve
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Over 750+ Machinery Systems Installed Worldwide
          </span>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {COMPANY_INFO.clientLogos.map((client, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 hover:bg-white p-3 rounded-xl border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all flex items-center justify-center aspect-[3/2] group"
              title={client.name}
            >
              <img 
                src={client.file} 
                alt={client.name}
                loading="lazy"
                className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-85 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
