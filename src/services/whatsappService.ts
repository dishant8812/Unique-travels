import { businessConfig } from '../config/businessConfig';
import { CreateBookingDTO } from './bookingStorage';

/**
 * Service to format and construct instant WhatsApp Enquiry Links
 */
export const whatsappService = {
  /**
   * Generates a pre-filled WhatsApp message URL for a trip enquiry
   */
  createBookingEnquiryUrl(bookingData: Partial<CreateBookingDTO>, language: 'en' | 'mr' | 'hi' = 'en'): string {
    const rawNumber = businessConfig.contact.whatsapp.replace(/[^0-9]/g, '');
    
    let message = '';

    if (language === 'mr') {
      message = `*नमस्कार युनिक टूर्स अँड ट्रॅव्हल्स (अमळनेर)*,
मला प्रवासासाठी गाडीच्या उपलब्धतेबाबत व दराबाबत चौकशी करायची आहे:

👤 *नाव:* ${bookingData.customerName || 'उपलब्ध नाही'}
📱 *फोन:* ${bookingData.phone || 'उपलब्ध नाही'}
📍 *पिकअप:* ${bookingData.pickupLocation || 'अमळनेर'}
🎯 *गंतव्य:* ${bookingData.destinationLocation || ''}
🚗 *प्रकार:* ${bookingData.tripType || 'Outstation'}
📅 *तारीख:* ${bookingData.travelDate || ''} ${bookingData.travelTime ? `(${bookingData.travelTime})` : ''}
${bookingData.returnDate ? `🔄 *परतीची तारीख:* ${bookingData.returnDate}\n` : ''}👥 *प्रवासी:* ${bookingData.passengers || 1}
🚙 *गाडीची पसंती:* ${bookingData.vehiclePreference || 'Any'}
${bookingData.additionalNotes ? `📝 *नोंद:* ${bookingData.additionalNotes}\n` : ''}
कृपया उपलब्ध गाडी व वाजवी कोटेशन सांगावे. धन्यवाद!`;
    } else if (language === 'hi') {
      message = `*नमस्ते यूनिक टूर्स एंड ट्रेवल्स (अमलनेर)*,
मुझे यात्रा हेतु वाहन उपलब्धता और किराए की जानकारी चाहिए:

👤 *नाम:* ${bookingData.customerName || 'उपलब्ध नहीं'}
📱 *फोन:* ${bookingData.phone || 'उपलब्ध नहीं'}
📍 *पिकअप:* ${bookingData.pickupLocation || 'अमलनेर'}
🎯 *गंतव्य:* ${bookingData.destinationLocation || ''}
🚗 *प्रकार:* ${bookingData.tripType || 'Outstation'}
📅 *तारीख:* ${bookingData.travelDate || ''} ${bookingData.travelTime ? `(${bookingData.travelTime})` : ''}
${bookingData.returnDate ? `🔄 *वापसी की तारीख:* ${bookingData.returnDate}\n` : ''}👥 *यात्री:* ${bookingData.passengers || 1}
🚙 *गाड़ी:* ${bookingData.vehiclePreference || 'Any'}
${bookingData.additionalNotes ? `📝 *नोट:* ${bookingData.additionalNotes}\n` : ''}
कृपया उचित कोटेशन प्रदान करें। धन्यवाद!`;
    } else {
      message = `*Hello Unique Tours & Travels (Amalner)*,
I would like to enquire about vehicle availability and tariff for my travel:

👤 *Name:* ${bookingData.customerName || 'N/A'}
📱 *Phone:* ${bookingData.phone || 'N/A'}
📍 *Pickup:* ${bookingData.pickupLocation || 'Amalner'}
🎯 *Destination:* ${bookingData.destinationLocation || ''}
🚗 *Trip Type:* ${bookingData.tripType || 'Outstation'}
📅 *Travel Date:* ${bookingData.travelDate || ''} ${bookingData.travelTime ? `(${bookingData.travelTime})` : ''}
${bookingData.returnDate ? `🔄 *Return Date:* ${bookingData.returnDate}\n` : ''}👥 *Passengers:* ${bookingData.passengers || 1}
🚙 *Vehicle Preference:* ${bookingData.vehiclePreference || 'Any'}
${bookingData.additionalNotes ? `📝 *Notes:* ${bookingData.additionalNotes}\n` : ''}
Please share availability and quote. Thank you!`;
    }

    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
  },

  /**
   * General quick inquiry URL
   */
  createGeneralEnquiryUrl(language: 'en' | 'mr' | 'hi' = 'en'): string {
    const rawNumber = businessConfig.contact.whatsapp.replace(/[^0-9]/g, '');
    let msg = "Hello Unique Tours & Travels, I need assistance with outstation cab booking from Amalner.";
    if (language === 'mr') {
      msg = "नमस्कार युनिक टूर्स अँड ट्रॅव्हल्स, मला अमळनेरहून गाडी बुकिंग संदर्भात माहिती हवी आहे.";
    } else if (language === 'hi') {
      msg = "नमस्ते यूनिक टूर्स एंड ट्रेवल्स, मुझे अमलनेर से कैब बुकिंग के संदर्भ में जानकारी चाहिए।";
    }
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(msg)}`;
  }
};
