import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { whatsappService } from '../services/whatsappService';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  ExternalLink 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();

  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderPhone) return;

    // Open WhatsApp with direct pre-filled enquiry or show feedback
    const text = `*New Contact Message - Unique Tours & Travels (Amalner)*
👤 Name: ${senderName}
📱 Phone: ${senderPhone}
💬 Message: ${message || 'I have a travel enquiry.'}`;

    const url = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
  };

  const whatsappGeneralUrl = whatsappService.createGeneralEnquiryUrl(language);

  // Google Maps search query link for Amalner, Maharashtra 425401
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Unique Tours & Travels, Amalner, Maharashtra 425401'
  )}`;

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Cards: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    {t.contact.officeLocation}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {businessConfig.location.fullAddress}
                  </p>
                  <p className="text-xs text-amber-700 font-medium mt-1">
                    {businessConfig.location.landmark}
                  </p>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 mt-3"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    {t.contact.phoneLabel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    Available for bookings, quotes, and highway inquiries.
                  </p>
                  <a
                    href={`tel:${businessConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{businessConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base mb-1">
                    {t.contact.whatsappLabel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    Quick messaging for instant availability and route estimates.
                  </p>
                  <a
                    href={whatsappGeneralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.contact.chatWhatsappBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex items-center gap-3 text-xs sm:text-sm text-slate-700">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="font-bold block text-slate-900">{t.contact.hoursLabel}:</span>
                <span className="text-slate-600">{businessConfig.contact.hours[language]}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Quick Message Box & Location Map Placeholder */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-1">
                {t.contact.quickEnquiryHeading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Send your question or itinerary directly to our desk in Amalner.
              </p>

              {sentSuccess ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-5 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold">Opening WhatsApp Chat...</p>
                    <p className="text-xs text-emerald-200/80 mt-0.5">
                      Thank you! Your enquiry has been redirected to the business WhatsApp.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleMessageSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Ramesh Patil"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={senderPhone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        placeholder="10-digit Mobile Number"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Message or Travel Query
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendMessageBtn}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Geographical Context & Local Service Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Geographic Operational Coverage</span>
              </h4>
              <p>
                Unique Tours & Travels operates primarily out of Amalner (PIN 425401) covering all major towns in Jalgaon and Dhule districts including Chopda, Parola, Dharangaon, Erandol, Shirpur, and Jalgaon City, connecting them to Pune, Mumbai, Nashik, Surat, and Indore.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
