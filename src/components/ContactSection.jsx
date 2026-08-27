import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: t.contact.subjGeneral,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello HESCO Sales & Customer Support, I would like to inquire about HESCO Mineral Water products and distribution.`
  );

  return (
    <section id="contact" className="py-28 lg:py-36 bg-slate-50/50 text-slate-900 relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Triggers & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Action Box: WhatsApp & Call */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-5">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Instant Sales Hotlines</h3>

              <a
                href={`https://wa.me/237677000111?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-2xl shadow-md transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.contact.whatsappBtn}</span>
              </a>

              <a
                href="tel:+237677000111"
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-2xl shadow-md transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{t.contact.callBtn}</span>
              </a>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-8">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{t.contact.addressTitle}</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{t.contact.addressText}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{t.contact.emailTitle}</h4>
                  <p className="text-sm text-blue-700 font-bold mt-1">{t.contact.emailText}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Business Hours</h4>
                  <p className="text-sm text-slate-600 mt-1">Monday – Saturday: 7:30 AM – 6:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
              
              <h3 className="text-3xl font-bold text-slate-900 mb-8">{t.contact.formHeader}</h3>

              {sent ? (
                <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-bold text-slate-900">Thank You!</h4>
                  <p className="text-base text-slate-700">
                    Your inquiry has been sent to our customer relations team. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-bold text-blue-600 underline hover:text-blue-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.contact.name}</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.contact.email}</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.cm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.contact.phone}</label>
                      <input
                        type="tel"
                        placeholder="+237 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.contact.subject}</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none"
                      >
                        <option>{t.contact.subjGeneral}</option>
                        <option>{t.contact.subjB2B}</option>
                        <option>{t.contact.subjRetail}</option>
                        <option>{t.contact.subjMedia}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.contact.message}</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-900 focus:border-blue-600 focus:bg-white outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 rounded-2xl shadow-md transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t.contact.sendBtn}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
