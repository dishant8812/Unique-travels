import { BusinessConfig } from '../types';

/**
 * CENTRAL BUSINESS CONFIGURATION
 * 
 * Unique Tours & Travels — Amalner, Maharashtra (425401)
 * 
 * Edit this central configuration file to update the official business phone,
 * WhatsApp contact, office location, service details, and operational hours.
 * All components across the application consume values from this single source of truth.
 */
export const businessConfig: BusinessConfig = {
  name: "Unique Tours & Travels",
  tagline: {
    en: "Reliable Outstation Cabs & Tour Packages from Amalner",
    mr: "अमळनेर येथून खात्रीशीर आणि आरामदायी प्रवास सेवा",
    hi: "अमलनेर से भरोसेमंद आउटस्टेशन कैब और टूर सेवाएं"
  },
  location: {
    town: "Amalner",
    taluka: "Amalner",
    district: "Jalgaon",
    state: "Maharashtra",
    pincode: "425401",
    country: "India",
    fullAddress: "Unique Tours & Travels, Station Road / Bus Stand Area, Amalner, Dist. Jalgaon, Maharashtra — 425401",
    landmark: "Near Bus Station / Railway Station, Amalner"
  },
  contact: {
    // If official phone is confirmed, set isPhoneConfigured: true and put real number without spaces (e.g. "+919822XXXXXX")
    phone: "+919822000000",
    phoneDisplay: "+91 98220 00000",
    isPhoneConfigured: true,

    // WhatsApp number for one-click customer enquiry (format: country code + 10 digits without + or dashes)
    whatsapp: "919822000000",
    whatsappDisplay: "+91 98220 00000",
    isWhatsappConfigured: true,

    email: "contact@uniquetoursamalner.com",
    isEmailConfigured: true,

    hours: {
      en: "24/7 Booking Assistance & Outstation Travel Support",
      mr: "२४/७ बुकिंग सहाय्य आणि प्रवास मार्गदर्शन",
      hi: "२४/७ बुकिंग सहायता और यात्रा मार्गदर्शन"
    }
  },
  adminConfig: {
    // Default passkey for administrative dashboard login
    // Can be customized or connected to Firebase Auth when production credentials are provided
    defaultAccessKey: "admin123"
  },
  features: {
    enableOnlineBookingRequest: true,
    enableWhatsappDirectEnquiry: true,
    enableAdminDashboard: true
  }
};

/**
 * Confirmed Services List
 * Easily enable/disable or expand verified services
 */
export interface ServiceItem {
  id: string;
  category: string;
  title: {
    en: string;
    mr: string;
    hi: string;
  };
  description: {
    en: string;
    mr: string;
    hi: string;
  };
  features: {
    en: string[];
    mr: string[];
    hi: string[];
  };
  iconName: string;
  isPopular?: boolean;
}

export const confirmedServices: ServiceItem[] = [
  {
    id: "outstation",
    category: "cabs",
    title: {
      en: "Outstation Cabs & Round Trips",
      mr: "आउटस्टेशन कॅब आणि राउंड ट्रिप",
      hi: "आउटस्टेशन कैब और राउंड ट्रिप"
    },
    description: {
      en: "Comfortable and sanitized AC vehicles for one-way or round trips from Amalner to any destination across Maharashtra, Gujarat, and MP.",
      mr: "अमळनेरहून महाराष्ट्र, गुजरात आणि इतर राज्यांत एकमार्गी किंवा राउंड ट्रिपसाठी स्वच्छ व आरामदायी वातानुकूलित गाड्या.",
      hi: "अमलनेर से महाराष्ट्र, गुजरात और अन्य राज्यों के लिए सुरक्षित और स्वच्छ एसी गाड़ियों में एकतरफा या राउंड ट्रिप यात्रा।"
    },
    features: {
      en: ["Doorstep pickup & drop in Amalner", "Experienced local highway drivers", "Zero surge charges on pre-bookings", "Choice of Sedan, Ertiga & Innova"],
      mr: ["अमळनेरमध्ये दाराशी पिकअप व ड्रॉप", "अनुभवी आणि विश्वासू चालक", "अगोदर बुकिंगवर पारदर्शक दर", "सेडान, अर्टिगा आणि इनोव्हा पर्याय"],
      hi: ["अमलनेर में डोरस्टेप पिकअप और ड्रॉप", "अनुभवी हाईवे ड्राइवर", "पहले से बुकिंग पर पारदर्शी दरें", "सेडान, अर्टिगा और इनोवा विकल्प"]
    },
    iconName: "Car",
    isPopular: true
  },
  {
    id: "pilgrimage",
    category: "tours",
    title: {
      en: "Pilgrimage & Darshan Tours",
      mr: "तीर्थक्षेत्र दर्शन व देवदर्शन यात्रा",
      hi: "तीर्थयात्रा और दर्शन टूर"
    },
    description: {
      en: "Special devotional packages from Amalner to Shirdi Sai Baba, Trimbakeshwar Jyotirlinga, Grishneshwar, and Shegaon.",
      mr: "अमळनेरहून शिर्डी साईबाबा, त्र्यंबकेश्वर ज्योतिर्लिंग, घृष्णेश्वर, शेगाव आणि इतर पवित्र तीर्थक्षेत्रांसाठी विशेष दर्शन यात्रा.",
      hi: "अमलनेर से शिरडी साईं बाबा, त्र्यंबकेश्वर ज्योतिर्लिंग, घृष्णेश्वर, शेगांव दर्शन के लिए विशेष टूर सेवा।"
    },
    features: {
      en: ["Flexible darshan halting time", "Senior-citizen friendly driving", "Clean vehicle guaranteed", "Family group seating options"],
      mr: ["दर्शनासाठी पुरेसा वेळ", "ज्येष्ठ नागरिकांसाठी आरामदायी वेग", "स्वच्छ आणि सुरक्षित गाडी", "कुटुंबासाठी योग्य आसनव्यवस्था"],
      hi: ["दर्शन के लिए पर्याप्त समय", "वरिष्ठ नागरिकों के लिए आरामदायक सफर", "साफ-सुथरी गाड़ी", "परिवार के लिए उपयुक्त"]
    },
    iconName: "Compass",
    isPopular: true
  },
  {
    id: "airport",
    category: "cabs",
    title: {
      en: "Airport Drop & Pickup Transfers",
      mr: "विमानतळ पिकअप व ड्रॉप सेवा",
      hi: "एयरपोर्ट पिकअप और ड्रॉप"
    },
    description: {
      en: "Punctual airport transfers connecting Amalner with Nashik (Ozar), Pune, Mumbai (CSMIA), Surat, and Indore airports.",
      mr: "अमळनेरहून नाशिक, पुणे, मुंबई, सुरत आणि इंदूर विमानतळांसाठी वेळेवर आणि विश्वासू ड्रॉप व पिकअप सेवा.",
      hi: "अमलनेर से नासिक, पुणे, मुंबई, सूरत और इंदौर हवाई अड्डों के लिए समयनिष्ठ पिकअप और ड्रॉप सेवा।"
    },
    features: {
      en: ["Guaranteed on-time pickup", "Spacious luggage trunk capacity", "24/7 early morning / midnight slots", "Flight delay tracking assistance"],
      mr: ["वेळेवर पिकअपची खात्री", "सामान ठेवण्यासाठी मोठी जागा", "रात्री किंवा पहाटेच्या वेळेस सेवा", "सुलभ संपर्क"],
      hi: ["समय पर पिकअप की गारंटी", "सामान के लिए पर्याप्त बूट स्पेस", "दिन-रात किसी भी समय सेवा", "पारदर्शी शुल्क"]
    },
    iconName: "Plane",
    isPopular: false
  },
  {
    id: "one-way",
    category: "cabs",
    title: {
      en: "One-Way Intercity Drops",
      mr: "एकतर्फी इंटरसिटी ड्रॉप (One-Way)",
      hi: "वन-वे इंटरसिटी ड्रॉप (One-Way)"
    },
    description: {
      en: "Pay only for the one-way distance travelled. Popular for routes like Amalner to Pune, Mumbai, Nashik, or Dhule/Jalgaon.",
      mr: "फक्त जाण्याच्या अंतरासाठी योग्य भाडे. अमळनेर ते पुणे, मुंबई, नाशिक, धुळे किंवा जळगाव प्रवासासाठी आदर्श.",
      hi: "केवल एक तरफ की यात्रा के लिए उचित दरें। अमलनेर से पुणे, मुंबई, नासिक, धुले या जलगांव यात्रा के लिए उपयुक्त।"
    },
    features: {
      en: ["No return charge for selected routes", "Door-to-door direct transit", "Toll & state permit clarity", "Instant booking request"],
      mr: ["निवडक मार्गांवर परतीचे भाडे नाही", "दारापासून दारापर्यंत थेट प्रवास", "पारदर्शक टोल व कर तपशील", "त्वरित बुकिंग सहाय्य"],
      hi: ["चुनिंदा रूटों पर केवल एक तरफ का किराया", "घर से गंतव्य तक सीधा सफर", "टोल और टैक्स की स्पष्टता", "त्वरित बुकिंग सुविधा"]
    },
    iconName: "Route",
    isPopular: true
  },
  {
    id: "group-tours",
    category: "tours",
    title: {
      en: "Family & Wedding Group Travel",
      mr: "कौटुंबिक सहल व विवाह सोहळा प्रवास",
      hi: "पारिवारिक यात्रा और वैवाहिक टूर"
    },
    description: {
      en: "Multi-seater MPVs (Ertiga, Innova Crysta) and Tempo Travellers for marriage functions, family get-togethers, and vacations.",
      mr: "लग्न समारंभ, कौटुंबिक कार्यक्रम आणि सहलींसाठी अर्टिगा, इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलरची सुविधा.",
      hi: "विवाह समारोहों, पारिवारिक आयोजनों और छुट्टियों के लिए अर्टिगा, इनोवा क्रिस्टा और टेम्पो ट्रैवलर की व्यवस्था।"
    },
    features: {
      en: ["Spacious 6, 7, and 13-17 seaters", "High-roof AC coaches available", "Driver allowance included in quote", "Multi-day customized itineraries"],
      mr: ["६, ७ आणि १३-१७ सीटर वाहने", "वातानुकूलित उत्तम आसनव्यवस्था", "चालक भत्ता कोटेशनमध्ये स्पष्ट", "बहु-दिवसीय सहलींचे नियोजन"],
      hi: ["६, ७ और १३-१७ सीटर गाड़ियां", "आरामदायक एसी सीटें", "चालक शुल्क की स्पष्ट जानकारी", "बहु-दिवसीय यात्रा पैकेज"]
    },
    iconName: "Users",
    isPopular: false
  },
  {
    id: "local-rental",
    category: "cabs",
    title: {
      en: "Local City & District Rentals",
      mr: "स्थानिक व जिल्हा प्रवास सेवा",
      hi: "लोकल सिटी व जिला रेंटल"
    },
    description: {
      en: "Hourly or full-day taxi bookings for Amalner, Jalgaon, Dhule, Chopda, and nearby business or personal visits.",
      mr: "अमळनेर, जळगाव, धुळे, चोपडा परिसरातील कामांसाठी तासांनुसार किंवा पूर्ण दिवसासाठी टॅक्सी सेवा.",
      hi: "अमलनेर, जलगांव, धुले, चोपड़ा क्षेत्र में व्यक्तिगत व व्यावसायिक कार्यों के लिए घंटे या दिन के हिसाब से टैक्सी।"
    },
    features: {
      en: ["Flexible 4hr/40km or 8hr/80km packages", "Comfortable city runarounds", "Courteous drivers", "Immediate emergency availability"],
      mr: ["लवचिक तासांचे पॅकेज", "शहरातील कामांसाठी सोयीस्कर", "सभ्य व स्थानिक मार्ग माहिती असणारे चालक", "त्वरित उपलब्धता"],
      hi: ["लचीले घंटे आधारित पैकेज", "शहर में आरामदायक आवागमन", "सभ्य स्थानीय चालक", "त्वरित सेवा"]
    },
    iconName: "Clock",
    isPopular: false
  }
];

/**
 * Popular Confirmed Travel Corridors from Amalner
 */
export interface DestinationRoute {
  id: string;
  name: {
    en: string;
    mr: string;
    hi: string;
  };
  distanceKm: number;
  estimatedHours: string;
  category: "pilgrimage" | "major_city" | "transit" | "hill_station";
  description: {
    en: string;
    mr: string;
    hi: string;
  };
  recommendedVehicle: string;
  image: string;
}

export const confirmedDestinations: DestinationRoute[] = [
  {
    id: "shirdi",
    name: {
      en: "Shirdi Sai Baba Darshan",
      mr: "शिर्डी (श्री साईबाबा दर्शन)",
      hi: "शिरडी (श्री साईं बाबा दर्शन)"
    },
    distanceKm: 195,
    estimatedHours: "4.5 - 5 hrs",
    category: "pilgrimage",
    description: {
      en: "Direct scenic journey from Amalner via Malegaon-Kopargaon route for divine Sai Baba Samadhi darshan.",
      mr: "अमळनेरहून मालेगाव-कोपरगाव मार्गे थेट व सुखकर शिर्डी साईबाबा दर्शन प्रवास.",
      hi: "अमलनेर से मालेगांव-कोपरगांव मार्ग होते हुए शिरडी साईं बाबा समाधि दर्शन के लिए सुगम यात्रा।"
    },
    recommendedVehicle: "Ertiga / Sedan / Innova",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pune",
    name: {
      en: "Pune City",
      mr: "पुणे शहर",
      hi: "पुणे शहर"
    },
    distanceKm: 410,
    estimatedHours: "8 - 9 hrs",
    category: "major_city",
    description: {
      en: "Reliable outstation cab for IT professionals, students, and families travelling between Amalner and Pune.",
      mr: "अमळनेर आणि पुणे दरम्यान शिक्षण, नोकरी व कौटुंबिक कामांसाठी सुरक्षित व जलद टॅक्सी सेवा.",
      hi: "अमलनेर और पुणे के बीच नौकरी, अध्ययन और पारिवारिक कार्यों के लिए सुरक्षित कैब सेवा।"
    },
    recommendedVehicle: "Sedan / Innova Crysta",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mumbai",
    name: {
      en: "Mumbai (City & Airport)",
      mr: "मुंबई (शहर व विमानतळ)",
      hi: "मुंबई (शहर व एयरपोर्ट)"
    },
    distanceKm: 385,
    estimatedHours: "7.5 - 8.5 hrs",
    category: "major_city",
    description: {
      en: "Direct drop to Mumbai suburbs, business hubs, hospitals, and international airport via Samruddhi / Highway routes.",
      mr: "मुंबई उपनगरे, रुग्णालये, व्यापार केंद्र आणि आंतरराष्ट्रीय विमानतळासाठी थेट ड्रॉप सेवा.",
      hi: "मुंबई उपनगरों, अस्पतालों, व्यापार केंद्रों और इंटरनेशनल एयरपोर्ट के लिए सीधी कैब सेवा।"
    },
    recommendedVehicle: "Innova Crysta / Sedan",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nashik",
    name: {
      en: "Nashik & Trimbakeshwar",
      mr: "नाशिक व त्र्यंबकेश्वर ज्योतिर्लिंग",
      hi: "नासिक व त्र्यंबकेश्वर ज्योतिर्लिंग"
    },
    distanceKm: 215,
    estimatedHours: "4.5 - 5 hrs",
    category: "pilgrimage",
    description: {
      en: "Spiritual trip to holy Trimbakeshwar Jyotirlinga, Panchavati, and wine capital Nashik.",
      mr: "त्र्यंबकेश्वर ज्योतिर्लिंग, पंचवटी गोदावरी घाट आणि नाशिक शहरासाठी सुखकर प्रवास.",
      hi: "पवित्र त्र्यंबकेश्वर ज्योतिर्लिंग, पंचवटी और नासिक शहर के लिए आरामदायक यात्रा।"
    },
    recommendedVehicle: "Sedan / Ertiga",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "surat",
    name: {
      en: "Surat (Gujarat)",
      mr: "सुरत (गुजरात)",
      hi: "सूरत (गुजरात)"
    },
    distanceKm: 235,
    estimatedHours: "5 - 5.5 hrs",
    category: "major_city",
    description: {
      en: "Seamless intercity taxi connecting Amalner with Surat textile market, diamond city, and railway stations.",
      mr: "अमळनेरहून सुरत कापड बाजार आणि व्यावसायिक कामांसाठी थेट आंतरराज्य टॅक्सी.",
      hi: "अमलनेर से सूरत कपड़ा बाजार व व्यापारिक यात्रा के लिए सुगम अंतरराज्यीय कैब।"
    },
    recommendedVehicle: "Sedan / Ertiga",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "saputara",
    name: {
      en: "Saputara Hill Station",
      mr: "सापुतारा हिल स्टेशन",
      hi: "सापुतारा हिल स्टेशन"
    },
    distanceKm: 180,
    estimatedHours: "4 - 4.5 hrs",
    category: "hill_station",
    description: {
      en: "Popular weekend getaway tour from Amalner to the lush Sahyadri hills, lake, and ropeway.",
      mr: "अमळनेरहून सह्याद्रीच्या कुशीतील निसर्गरम्य सापुतारा तलाव व सनसेट पॉईंटची सुंदर सहल.",
      hi: "अमलनेर से सह्याद्रि की हरी-भरी वादियों, सापुतारा झील और सनसेट पॉइंट का आनंद लें।"
    },
    recommendedVehicle: "Ertiga / Innova",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  }
];

export const fleetVehicles = [
  {
    id: "sedan",
    name: "Compact Sedan",
    models: "Swift Dzire / Toyota Etios",
    capacity: "4 Passengers + 1 Driver",
    luggage: "2 Large Bags + 2 Small Bags",
    ac: "Chilled AC",
    idealFor: {
      en: "Couples, small families, business & budget outstation travel",
      mr: "लहान कुटुंब, व्यावसायिक कामे आणि किफायतशीर प्रवास",
      hi: "छोटे परिवार, बिजनेस यात्रा और बजट आउटस्टेशन सफर"
    }
  },
  {
    id: "suv-ertiga",
    name: "Maruti Ertiga / XL6",
    models: "Maruti Suzuki Ertiga",
    capacity: "6 Passengers + 1 Driver",
    luggage: "3 Medium Bags",
    ac: "Dual AC Vents",
    idealFor: {
      en: "Medium families, Shirdi darshan, comfortable outstation trips",
      mr: "मध्यम कुटुंब, देवदर्शन यात्रा आणि लांब पल्ल्याचा प्रवास",
      hi: "मध्यम परिवार, दर्शन यात्रा और आरामदायक आउटस्टेशन ट्रिप"
    }
  },
  {
    id: "innova",
    name: "Toyota Innova Crysta",
    models: "Toyota Innova Crysta",
    capacity: "7 Passengers + 1 Driver",
    luggage: "4 Large Bags",
    ac: "Climate Control AC",
    idealFor: {
      en: "Executive comfort, long highway journeys, premium family travel",
      mr: "अतिशय आरामदायी, हायवे प्रवास आणि विशेष कौटुंबिक फेऱ्या",
      hi: "प्रीमियम कम्फर्ट, लंबी दूरी की यात्रा और विशिष्ट पारिवारिक सफर"
    }
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    models: "Force Urbania / Traveller",
    capacity: "13 to 17 Passengers + Driver",
    luggage: "Dedicated Luggage Carrier",
    ac: "High-Power AC",
    idealFor: {
      en: "Wedding parties, pilgrimage groups, school/office outings",
      mr: "विवाह वऱ्हाड, तीर्थयात्रा गट आणि सामूहिक कौटुंबिक सहली",
      hi: "विवाह समूह, तीर्थयात्रा ग्रुप और पारिवारिक पिकनिक"
    }
  }
];
