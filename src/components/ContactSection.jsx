import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, MessageSquareText, 
  Send, CheckCircle2, Building 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Website Inquiry - Amba Corporation*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Message:* ${formData.message}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-petrol-700 bg-petrol-50 px-3 py-1 rounded-full border border-petrol-200 mb-2">
            <Building className="w-3.5 h-3.5 text-petrol-600" />
            Manufacturing Facility & Global Sales
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Our Engineering Office
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Visit our state-of-the-art facility in Vatva GIDC, Ahmedabad, or get in touch for custom machinery proposals.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-petrol-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-petrol-600 text-white rounded-xl shrink-0 shadow-md shadow-petrol-600/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Works & Head Office
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {COMPANY_INFO.headquarters}
                  </p>
                  <span className="inline-block mt-2 font-mono text-[11px] bg-stone-200/80 text-stone-700 px-2 py-0.5 rounded">
                    GST: {COMPANY_INFO.gstNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-petrol-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-petrol-600 text-white rounded-xl shrink-0 shadow-md shadow-petrol-600/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Direct Phone Lines
                  </h4>
                  <div className="mt-1 space-y-1">
                    {COMPANY_INFO.phones.map((p, idx) => (
                      <div key={idx} className="text-xs sm:text-sm">
                        <span className="text-stone-500">{p.label}: </span>
                        <a href={`tel:${p.raw}`} className="font-semibold text-slate-900 hover:text-petrol-700">
                          {p.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-petrol-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-petrol-600 text-white rounded-xl shrink-0 shadow-md shadow-petrol-600/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Official Email Addresses
                  </h4>
                  <div className="mt-1 space-y-1">
                    {COMPANY_INFO.emails.map((em, idx) => (
                      <div key={idx} className="text-xs sm:text-sm">
                        <a href={`mailto:${em}`} className="font-semibold text-slate-900 hover:text-petrol-700">
                          {em}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Connect */}
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Amba Corporation, I would like to schedule an engineering discussion.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-between transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <MessageSquareText className="w-6 h-6" />
                <div>
                  <div className="font-bold text-sm">Direct WhatsApp Desk</div>
                  <div className="text-xs text-emerald-100">+91 72270 77623 (Instant Reply)</div>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full group-hover:bg-white/30 transition-colors">
                Chat Now
              </span>
            </a>

          </div>

          {/* Right Column: Direct Message Form & Google Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Inquiry Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send Us a Quick Message
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Fill in your details below and our packaging machinery team will respond promptly.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl text-center space-y-2 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs text-stone-600">Thank you for contacting Amba Corporation. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@company.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Machine Interest or Query</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe your machinery inquiry, speed requirement, or container type..."
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-petrol-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="bg-petrol-600 hover:bg-petrol-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Embedded Location Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-[16/7] relative bg-stone-100">
              <iframe 
                title="Amba Corporation Location Map"
                src="https://maps.google.com/maps?q=Pushkar%20Mahadev%20Industrial%20Estate,%20Road%20E,%20Phase-1,%20Vatva,%20Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
