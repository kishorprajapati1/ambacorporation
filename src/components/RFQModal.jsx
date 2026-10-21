import React, { useState, useEffect } from 'react';
import { 
  X, Send, Phone, CheckCircle2, MessageSquareText, 
  Building2, User, Mail, Globe, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { PRODUCTS_DATA } from '../data/products';

export default function RFQModal({ initialProduct, onClose }) {
  const [selectedMachine, setSelectedMachine] = useState(initialProduct ? initialProduct.name : 'Complete Turnkey Line');
  const [containerType, setContainerType] = useState('Glass Vials (Injectable)');
  const [targetSpeed, setTargetSpeed] = useState('60 to 120 Units/min');
  const [fillRange, setFillRange] = useState('2ml - 30ml Liquid');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('India');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedMachine(initialProduct.name);
    }
  }, [initialProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Machinery RFQ / Inquiry - Amba Corporation*
• *Machine:* ${selectedMachine}
• *Container Type:* ${containerType}
• *Target Speed:* ${targetSpeed}
• *Fill Range:* ${fillRange}
• *Company:* ${companyName || 'Not specified'}
• *Contact Person:* ${contactName || 'Not specified'}
• *Phone/WhatsApp:* ${phone}
• *Email:* ${email}
• *Country/Location:* ${country}
• *Additional Requirements:* ${notes || 'Standard cGMP execution'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 to-petrol-950 text-white p-5 sm:p-6 flex items-start justify-between border-b border-stone-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-petrol-200 font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-petrol-400" />
              Direct Engineering Consultation
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Request for Quote (RFQ)
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Submit your packaging parameters for a tailored technical proposal, line layout, and commercial quote.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content / Form */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Inquiry Received!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{contactName || 'Valued Customer'}</strong>. An Amba Corporation technical application specialist will review your specifications and contact you within 24 business hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Send Direct via WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-stone-100 hover:bg-stone-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Machine Selection & Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Equipment / Line Required
                  </label>
                  <select
                    value={selectedMachine}
                    onChange={(e) => setSelectedMachine(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                  >
                    <option value="Complete Turnkey Line">Complete Turnkey Line (Custom Layout)</option>
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.model})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Container Type
                  </label>
                  <select
                    value={containerType}
                    onChange={(e) => setContainerType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                  >
                    <option value="Glass Vials (Injectable)">Glass Vials (Injectable 2ml - 100ml)</option>
                    <option value="Glass Ampoules">Glass Ampoules (1ml - 20ml)</option>
                    <option value="Dry Syrup Bottles">Dry Syrup Bottles (Glass/PET)</option>
                    <option value="Liquid Syrup Bottles">Oral Liquid Syrup Bottles (30ml - 1000ml)</option>
                    <option value="VTM Viral Transport Tubes">VTM Viral Transport Tubes (Conical/Flat)</option>
                    <option value="PFS Syringes / Cartridges">Prefilled Syringes (PFS) / Dental Cartridges</option>
                  </select>
                </div>
              </div>

              {/* Speed & Fill Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Target Output Speed
                  </label>
                  <select
                    value={targetSpeed}
                    onChange={(e) => setTargetSpeed(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                  >
                    <option value="30 to 60 Units/min (Entry/Pilot)">30 to 60 Units/min (Entry / Pilot)</option>
                    <option value="60 to 120 Units/min (Standard)">60 to 120 Units/min (Standard Commercial)</option>
                    <option value="120 to 200+ Units/min (High Speed)">120 to 200+ Units/min (High Speed Commercial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Dose / Volume Range
                  </label>
                  <input
                    type="text"
                    value={fillRange}
                    onChange={(e) => setFillRange(e.target.value)}
                    placeholder="e.g. 5ml - 30ml liquid, or 500mg powder"
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Company & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Laboratories Ltd"
                      className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Country / City *
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. India / Dubai"
                      className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="procurement@company.com"
                      className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                  Specific Requirements or Formulation Details (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention any custom cleanroom specs, nitrogen purging, 21 CFR Part 11 requirements, etc."
                  className="w-full bg-white border border-stone-300 rounded-lg p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:w-auto text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquareText className="w-4 h-4 text-emerald-600" />
                  <span>Send via WhatsApp (+91 72270 77623)</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 sm:w-auto bg-petrol-600 hover:bg-petrol-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit RFQ</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
