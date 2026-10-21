import React, { useState } from 'react';
import { HelpCircle, ChevronDown, FileCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function SEOSection({ onOpenRFQ }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // Structured Data FAQ Schema for Search Engine SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": COMPANY_INFO.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-stone-50/70 border-b border-stone-200">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-petrol-800 bg-petrol-50 px-3.5 py-1 rounded-full border border-petrol-200 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-petrol-600" />
            Engineering & Procurement Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Technical answers regarding our pharmaceutical filling machinery, cGMP compliance, FAT/SAT qualification, and export shipping.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {COMPANY_INFO.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-petrol-500 shadow-md ring-1 ring-petrol-500/20' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-petrol-700 bg-petrol-50 px-2 py-1 rounded border border-petrol-200 shrink-0">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-petrol-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed space-y-3">
                    <p>{faq.a}</p>
                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-petrol-800">
                      <FileCheck className="w-4 h-4 text-emerald-600" />
                      <span>Compliant with US-FDA, WHO-GMP & Schedule M guidelines</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-200">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Have a custom technical requirement?</h4>
              <p className="text-xs text-stone-500">Talk directly with our senior packaging machinery engineers.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-4 py-2.5 rounded-lg transition-colors"
            >
              Call {COMPANY_INFO.phones[0].number}
            </a>
            <button
              onClick={() => onOpenRFQ(null)}
              className="bg-petrol-600 hover:bg-petrol-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Request Custom RFQ
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
