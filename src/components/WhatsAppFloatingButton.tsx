import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { whatsappService } from '../services/whatsappService';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const { language, t } = useLanguage();
  const url = whatsappService.createGeneralEnquiryUrl(language);

  return (
    <aside aria-label="WhatsApp enquiry link" className="fixed bottom-6 right-6 z-40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
      >
        <MessageSquare className="w-6 h-6 fill-current text-white shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          {t.nav.whatsappUs}
        </span>
      </a>
    </aside>
  );
};
