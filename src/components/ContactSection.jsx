import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Clock } from 'lucide-react';

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
    <section id="contact" className="py-28 lg:py-36 bg-[#0B101D] text-slate-100 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-dark border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Triggers & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Box: WhatsApp & Call */}
            <div className="apple-glass-card p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">Direct Communication Lines</h3>

              <a
                href={`https://wa.me/237677000111?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs py-3.5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappBtn}</span>
              </a>

              <a
                href="tel:+237677000111"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 text-slate-950 font-extrabold text-xs py-3.5 rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{t.contact.callBtn}</span>
              </a>
            </div>

            {/* Office Locations */}
            <div className="apple-glass-card p-8 rounded-3xl space-y-6 font-mono text-xs">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">{t.contact.addressTitle}</h4>
                  <p className="text-slate-400 mt-1 leading-relaxed font-sans">{t.contact.addressText}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">{t.contact.emailTitle}</h4>
                  <p className="text-cyan-400 font-bold mt-1 font-sans">{t.contact.emailText}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Operational Hours</h4>
                  <p className="text-slate-400 mt-1 font-sans">Monday – Saturday: 7:30 AM – 6:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="apple-glass-card p-8 sm:p-10 rounded-3xl">
              
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-6">{t.contact.formHeader}</h3>

              {sent ? (
                <div className="p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Your inquiry has been sent to our customer relations desk. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-mono font-bold text-cyan-400 underline hover:text-cyan-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">{t.contact.name}</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-cyan-500/50 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">{t.contact.email}</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.cm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-cyan-500/50 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">{t.contact.phone}</label>
                      <input
                        type="tel"
                        placeholder="+237 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-cyan-500/50 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">{t.contact.subject}</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-cyan-500/50 outline-none"
                      >
                        <option className="bg-slate-950">{t.contact.subjGeneral}</option>
                        <option className="bg-slate-950">{t.contact.subjB2B}</option>
                        <option className="bg-slate-950">{t.contact.subjRetail}</option>
                        <option className="bg-slate-950">{t.contact.subjMedia}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">{t.contact.message}</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:border-cyan-500/50 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-extrabold text-sm py-4 rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all"
                  >
                    <Send className="w-4 h-4" />
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
