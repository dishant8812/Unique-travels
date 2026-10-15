import { Language } from '../types';

export const translations = {
  en: {
    brand: "Unique Tours & Travels",
    locationTag: "Amalner, Maharashtra — 425401",
    tagline: "Your Trusted Travel Partner in Amalner for Outstation Cabs & Tours",
    
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      destinations: "Popular Routes",
      fleet: "Fleet",
      about: "About Us",
      contact: "Contact",
      bookTrip: "Book Your Trip",
      admin: "Admin Portal",
      callUs: "Call Directly",
      whatsappUs: "WhatsApp Enquiry"
    },

    // Hero
    hero: {
      badge: "Amalner's Trusted Car Rental & Travel Service",
      titleStart: "Comfortable Journeys Across",
      titleAccent: "Maharashtra & India",
      titleEnd: "Starting from Amalner",
      subtitle: "Experience punctuality, well-maintained AC vehicles, and courteous highway-experienced drivers. Book one-way drops, round trips, pilgrimage tours, or family vacations with transparent pricing.",
      bookNowBtn: "Request a Trip Quote",
      exploreServicesBtn: "Explore Services",
      verifiedBadge: "Doorstep Pickup in Amalner",
      driversBadge: "Disciplined Local Drivers",
      pricingBadge: "Clear & Fair Upfront Quotes"
    },

    // Quick Trip Bar
    quickTrip: {
      title: "Plan Your Journey",
      pickupPlaceholder: "Pickup Location (e.g. Amalner)",
      dropPlaceholder: "Destination (e.g. Pune, Shirdi)",
      dateLabel: "Travel Date",
      passengersLabel: "Passengers",
      tripTypeLabel: "Trip Type",
      quickSubmitBtn: "Check Availability"
    },

    // Trip Types
    tripTypes: {
      "one-way": "One-Way Drop",
      "round-trip": "Round Trip",
      "outstation": "Outstation Multi-Day",
      "local": "Local City Rental",
      "airport": "Airport Transfer",
      "pilgrimage": "Pilgrimage / Darshan"
    },

    // Vehicle Preferences
    vehicles: {
      "sedan": "Sedan (Swift Dzire / Etios — 4 Seater)",
      "suv-ertiga": "Maruti Ertiga / XL6 (6 Seater)",
      "innova": "Toyota Innova Crysta (7 Seater)",
      "tempo": "Tempo Traveller (13–17 Seater)",
      "any": "Any Available / Recommend for me"
    },

    // Services Section
    servicesSection: {
      badge: "What We Offer",
      title: "Comprehensive Travel & Taxi Services",
      subtitle: "Tailored to your itinerary, group size, and comfort requirements from Amalner, Jalgaon district.",
      allServices: "All Services",
      cabsCategory: "Cabs & Taxi",
      toursCategory: "Tours & Pilgrimage",
      requestQuoteForThis: "Request Quote for This Service",
      viewAllDetails: "View Details",
      disclaimer: "All quotes are customized based on current toll taxes, permit requirements, and seasonal routes."
    },

    // Destinations Section
    destinationsSection: {
      badge: "Frequent Routes",
      title: "Popular Journeys from Amalner",
      subtitle: "Reliable intercity transfers and devotional circuits across Maharashtra, Gujarat, and Madhya Pradesh.",
      approxDistance: "Distance",
      approxTime: "Est. Time",
      recommended: "Ideal for",
      planThisTrip: "Enquire for this Route",
      allRoutes: "All Corridors",
      viewRouteInfo: "Route Information"
    },

    // Fleet Section
    fleetSection: {
      badge: "Our Fleet Options",
      title: "Clean, Sanitized & Modern Vehicles",
      subtitle: "Every car in our network is thoroughly inspected for AC cooling, clean interiors, and complete road fitness.",
      seatingCapacity: "Capacity",
      luggageCapacity: "Luggage",
      cooling: "Air Conditioning",
      bestFor: "Recommended for",
      bookVehicle: "Select This Vehicle"
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Travel With Us",
      title: "Honest, Punctual & Safe Travel Standards",
      subtitle: "We believe in establishing lasting trust with families, executives, and pilgrims in Amalner.",
      point1Title: "Doorstep Pickup in Amalner",
      point1Desc: "We arrive at your home, railway station, or preferred landmark in Amalner right on scheduled time.",
      point2Title: "Clean & Maintained AC Cars",
      point2Desc: "Hygienic seat covers, functioning climate control, and fresh interiors for long-distance highway comfort.",
      point3Title: "Courteous & Verified Drivers",
      point3Desc: "Our drivers are respectful, familiar with state highways, and prioritize passenger safety above all else.",
      point4Title: "Transparent Upfront Quotes",
      point4Desc: "Clear breakdown of driver allowance, tolls, and distance so you never face unexpected surprises.",
      point5Title: "Flexible Halting & Darshan Time",
      point5Desc: "No rush during temple darshans, family breaks, or meal stops along Maharashtra's scenic expressways.",
      point6Title: "24/7 On-Trip Assistance",
      point6Desc: "Direct helpline with the business owner and coordination team throughout your round trip."
    },

    // Booking Process
    process: {
      badge: "How It Works",
      title: "Simple 4-Step Booking Process",
      subtitle: "Easy booking request with fast quote confirmation directly from our Amalner team.",
      step1Title: "1. Submit Trip Details",
      step1Desc: "Fill in your travel dates, destination, group size, and vehicle choice on our simple request form.",
      step2Title: "2. Prompt Availability & Quote",
      step2Desc: "Our team reviews the itinerary and contacts you via phone or WhatsApp with an exact, competitive quote.",
      step3Title: "3. Confirm Your Booking",
      step3Desc: "Confirm the quote to receive driver details, vehicle registration number, and pickup confirmation.",
      step4Title: "4. Enjoy Your Ride",
      step4Desc: "Your sanitized car arrives at your doorstep in Amalner on time for a smooth and pleasant journey."
    },

    // Booking Request Form
    bookingForm: {
      badge: "Direct Enquiry",
      title: "Trip Booking Request",
      subtitle: "Submit your travel itinerary below. Our team in Amalner will contact you promptly with vehicle availability and confirmed pricing.",
      customerDetailsHeading: "1. Customer Information",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Rahul Patil",
      phone: "Mobile Number",
      phonePlaceholder: "10-digit Indian Mobile Number",
      phoneHelper: "We will call/WhatsApp you on this number for your quote.",
      email: "Email Address (Optional)",
      emailPlaceholder: "e.g. rahul@example.com",
      
      tripDetailsHeading: "2. Journey & Route Details",
      tripType: "Trip Type",
      pickupLocation: "Pickup Location",
      pickupPlaceholder: "e.g. Amalner (Home/Station/Bus Stand)",
      destinationLocation: "Destination / Drop Location",
      destinationPlaceholder: "e.g. Shirdi, Pune, Mumbai, Nashik",
      travelDate: "Travel Date",
      departureTime: "Preferred Departure Time (Optional)",
      departureTimePlaceholder: "e.g. 06:00 AM",
      returnDate: "Return Date",
      passengers: "Number of Passengers",
      vehiclePreference: "Vehicle Preference",
      notes: "Additional Notes or Luggage Requirements (Optional)",
      notesPlaceholder: "e.g. Senior citizens travelling, require extra trunk space for 3 suitcases, specific route preference...",
      
      submitButton: "Submit Trip Request",
      submittingButton: "Submitting Request...",
      whatsappDirectButton: "Send Enquiry via WhatsApp",
      whatsappHelper: "Prefer direct WhatsApp chat? Click above to send your trip details immediately.",
      
      // Success State
      successTitle: "Trip Request Received Successfully!",
      trackingCodeLabel: "Request Reference ID",
      disclaimerNotice: "Your trip request has been submitted. The team will contact you to confirm availability and pricing. Your booking is not confirmed until the business confirms it.",
      nextStepsTitle: "What happens next?",
      nextStep1: "Our coordinator in Amalner will check driver and vehicle schedules for your requested date.",
      nextStep2: "You will receive a call or WhatsApp message with the exact quote including tolls and permits.",
      nextStep3: "Once you approve the quote, your reservation will be officially confirmed.",
      submitAnotherBtn: "Submit Another Trip Request",
      viewSummaryBtn: "View Request Summary",
      
      // Validation Errors
      errors: {
        nameRequired: "Please enter your full name.",
        nameTooShort: "Name must be at least 3 characters.",
        phoneRequired: "Please enter your 10-digit mobile number.",
        phoneInvalid: "Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).",
        pickupRequired: "Please specify your pickup location.",
        destinationRequired: "Please specify your destination.",
        travelDateRequired: "Please select your travel date.",
        travelDatePast: "Travel date cannot be in the past.",
        returnDateRequired: "Return date is required for round trips.",
        returnDateBeforeTravel: "Return date cannot be earlier than your travel date.",
        passengersInvalid: "Please select between 1 and 30 passengers.",
        generalFailure: "Failed to submit request. Please try again or reach out to us directly via phone or WhatsApp."
      }
    },

    // FAQs
    faq: {
      badge: "Questions Answered",
      title: "Frequently Asked Questions",
      subtitle: "Clear answers to common questions about outstation travel from Amalner.",
      q1: "How do I know my booking is confirmed?",
      a1: "Submitting the online request alerts our dispatch team in Amalner. We verify vehicle availability, prepare your transparent price quote, and contact you directly. Your booking is confirmed only after mutual agreement and confirmation from our team.",
      q2: "Are tolls, parking fees, and state border taxes included in the fare?",
      a2: "Our quotes clearly itemize whether toll and parking are included or payable as actuals at toll plazas. For inter-state trips (such as to Surat or Indore), state road taxes are discussed upfront so there are no surprises.",
      q3: "Can I book a vehicle for early morning or late night pickups?",
      a3: "Yes, our outstation services operate 24 hours a day with advance booking. Whether you need a 3:00 AM pickup for flight catch-up or midnight departure for Shirdi kakad aarti, we arrange punctual pickups.",
      q4: "What if my return date or schedule changes during a round trip?",
      a4: "For round trips and multi-day tours, your driver remains dedicated to your group. Please notify our team as early as possible if your plan changes, and extra kilometers or days are settled according to agreed standard rates.",
      q5: "Which vehicles are available in your fleet?",
      a5: "We offer comfortable 4-seater sedans (Swift Dzire, Etios), 6-seater MPVs (Maruti Ertiga), 7-seater premium SUVs (Innova Crysta), and 13 to 17-seater Tempo Travellers for larger families and wedding groups.",
      q6: "Where is your office located?",
      a6: "Our operations base is located in Amalner, Maharashtra — 425401 (near Station Road / Bus Stand area). We provide doorstep pickup across Amalner town and nearby villages."
    },

    // Contact Page
    contact: {
      badge: "Get In Touch",
      title: "Contact Unique Tours & Travels",
      subtitle: "Reach out to us for immediate car availability, custom tour packages, or emergency taxi requests in Amalner.",
      officeLocation: "Office & Operations Base",
      officeAddress: "Station Road / Bus Stand Area, Amalner, Dist. Jalgaon, Maharashtra — 425401",
      phoneLabel: "Phone Number",
      whatsappLabel: "WhatsApp Service",
      emailLabel: "Email Address",
      hoursLabel: "Operational Hours",
      hoursValue: "24/7 Booking Assistance for Outstation & Taxi Services",
      quickEnquiryHeading: "Send a Direct Message",
      messagePlaceholder: "How can we assist your travel plans?",
      sendMessageBtn: "Send Message",
      callNowBtn: "Call Now",
      chatWhatsappBtn: "Chat on WhatsApp",
      mapsNote: "Located in Amalner (425401), serving Jalgaon, Dhule, and North Maharashtra."
    },

    // About Page
    about: {
      badge: "About Unique Tours & Travels",
      title: "Your Dependable Local Travel Specialist",
      lead: "Based in Amalner (PIN 425401, District Jalgaon), Unique Tours & Travels is committed to delivering safe, punctual, and comfortable road journeys across Maharashtra and Western India.",
      p1: "Whether you are traveling for work to Pune or Mumbai, planning a sacred pilgrimage to Shirdi, Trimbakeshwar, or Shegaon, or coordinating family vehicles for a wedding in Khandesh, we ensure your journey is hassle-free from start to finish.",
      p2: "Our core principles are simple: well-maintained and spotless vehicles, disciplined drivers with thorough highway route knowledge, clear and honest communication without hidden charges, and respectful service for every customer.",
      valuesHeading: "Our Core Commitments",
      val1Title: "Safety & Reliability First",
      val1Desc: "Speed limits adhered to, routine vehicle inspections, and non-smoking drivers who prioritize your family's safety.",
      val2Title: "Absolute Price Transparency",
      val2Desc: "No arbitrary price hikes after confirmation. Every kilometer, toll guideline, and night allowance is stated upfront.",
      val3Title: "Deep Local Route Expertise",
      val3Desc: "Extensive familiarity with road conditions across Khandesh, Marathwada, Western Maharashtra, and Gujarat highways.",
      locationNotice: "Registered operations in Amalner, Maharashtra (425401)."
    },

    // Admin Dashboard
    admin: {
      title: "Booking Management Portal",
      subtitle: "Review incoming customer trip requests, update workflow statuses, and dispatch vehicles.",
      loginTitle: "Administrator Access",
      loginSubtitle: "Enter administrative access key to manage customer requests.",
      accessKeyLabel: "Access Key",
      accessKeyPlaceholder: "Enter admin passcode",
      loginBtn: "Access Dashboard",
      invalidKeyError: "Invalid access key. Please check your credentials.",
      logoutBtn: "Log Out",
      totalRequests: "Total Requests",
      newRequests: "New Requests",
      confirmedRequests: "Confirmed",
      searchPlaceholder: "Search by customer name, phone, or destination...",
      filterAll: "All Statuses",
      filterNew: "New",
      filterContacted: "Contacted",
      filterQuoteProvided: "Quote Provided",
      filterConfirmed: "Confirmed",
      filterCompleted: "Completed",
      filterCancelled: "Cancelled",
      tableHeaderCode: "Ref Code",
      tableHeaderCustomer: "Customer",
      tableHeaderRoute: "Route",
      tableHeaderDate: "Travel Date",
      tableHeaderPassengers: "Pax & Vehicle",
      tableHeaderStatus: "Status",
      tableHeaderActions: "Actions",
      noBookingsTitle: "No Booking Requests Found",
      noBookingsDesc: "When customers submit trip requests through the website, they will appear here in real time.",
      exportCsvBtn: "Export CSV",
      viewDetails: "View Details",
      updateStatusModalTitle: "Update Booking Status",
      customerPhoneLabel: "Customer Phone",
      callCustomerBtn: "Call Customer",
      whatsappQuoteBtn: "WhatsApp Customer",
      adminNotesLabel: "Internal Admin Notes",
      adminNotesPlaceholder: "Add notes regarding quoted price, driver assigned, or customer requests...",
      saveStatusBtn: "Save Changes",
      statusUpdatedSuccess: "Status updated successfully.",
      statusDescriptions: {
        new: "New submission — requires review and initial quote.",
        contacted: "Customer called or messaged with initial availability.",
        quote_provided: "Custom quote provided to customer, waiting for confirmation.",
        confirmed: "Customer confirmed; vehicle and driver allocated.",
        completed: "Journey successfully concluded.",
        cancelled: "Booking cancelled by customer or company."
      },
      securityDisclaimer: "Protected administrative area for Unique Tours & Travels team. Bookings are stored securely."
    },

    // Footer
    footer: {
      aboutCompany: "Unique Tours & Travels is an Amalner-based travel and car rental agency providing reliable outstation cabs, round trips, pilgrimage tours, and local taxi services.",
      quickLinks: "Quick Navigation",
      popularServices: "Services",
      popularRoutes: "Top Routes from Amalner",
      contactInfo: "Amalner Office",
      copyright: "© 2026 Unique Tours & Travels. All rights reserved.",
      disclaimer: "Disclaimer: Submitting a booking request does not constitute an instant confirmation. Final reservations are confirmed upon availability and tariff agreement.",
      amalnerPincode: "PIN: 425401, Maharashtra, India"
    }
  },

  mr: {
    brand: "युनिक टूर्स अँड ट्रॅव्हल्स",
    locationTag: "अमळनेर, महाराष्ट्र — ४२५४०१",
    tagline: "अमळनेरमधील आउटस्टेशन कॅब आणि देवदर्शन सहलींसाठी आपला विश्वासू भागीदार",
    
    // Navigation
    nav: {
      home: "मुख्यपृष्ठ",
      services: "सेवा",
      destinations: "प्रमुख मार्ग",
      fleet: "वाहने",
      about: "आमच्याबद्दल",
      contact: "संपर्क",
      bookTrip: "प्रवास बुक करा",
      admin: "अ‍ॅडमिन पोर्टल",
      callUs: "थेट फोन करा",
      whatsappUs: "व्हॉट्सअ‍ॅप चौकशी"
    },

    // Hero
    hero: {
      badge: "अमळनेरची विश्वासू टॅक्सी व ट्रॅव्हल्स सेवा",
      titleStart: "अमळनेरहून संपूर्ण महाराष्ट्र व भारतात",
      titleAccent: "आरामदायी व सुरक्षित प्रवास",
      titleEnd: "",
      subtitle: "वेळेचे अचूक पालन, स्वच्छ वातानुकूलित (AC) गाड्या आणि अनुभवी हायवे चालक. वन-वे ड्रॉप, राउंड ट्रिप, देवदर्शन किंवा कौटुंबिक सहलींसाठी पारदर्शक दरात बुकिंग करा.",
      bookNowBtn: "कोटेशनसाठी विनंती करा",
      exploreServicesBtn: "सर्व सेवा पहा",
      verifiedBadge: "अमळनेरमध्ये दाराशी पिकअप",
      driversBadge: "अनुभवी व सुरक्षित चालक",
      pricingBadge: "पारदर्शक व योग्य दर"
    },

    // Quick Trip Bar
    quickTrip: {
      title: "आपल्या प्रवासाचे नियोजन करा",
      pickupPlaceholder: "पिकअप ठिकाण (उदा. अमळनेर)",
      dropPlaceholder: "गंतव्य ठिकाण (उदा. पुणे, शिर्डी)",
      dateLabel: "प्रवासाची तारीख",
      passengersLabel: "प्रवासी संख्या",
      tripTypeLabel: "प्रवासाचा प्रकार",
      quickSubmitBtn: "उपलब्धता तपासा"
    },

    // Trip Types
    tripTypes: {
      "one-way": "एकतर्फी प्रवास (One-Way)",
      "round-trip": "राउंड ट्रिप (परतीसह)",
      "outstation": "आउटस्टेशन सहल",
      "local": "स्थानिक भाडेतत्त्वावर",
      "airport": "विमानतळ पिकअप/ड्रॉप",
      "pilgrimage": "तीर्थक्षेत्र देवदर्शन"
    },

    // Vehicle Preferences
    vehicles: {
      "sedan": "सेडान (स्विफ्ट डिझायर / इटिऑस — ४ सीटर)",
      "suv-ertiga": "मारुती अर्टिगा / XL6 (६ सीटर)",
      "innova": "टोयोटा इनोव्हा क्रिस्टा (७ सीटर)",
      "tempo": "टेम्पो ट्रॅव्हलर (१३ ते १७ सीटर)",
      "any": "उपलब्ध असलेली कोणतीही / योग्य सुचवा"
    },

    // Services Section
    servicesSection: {
      badge: "आमच्या सेवा",
      title: "प्रवासाच्या सर्वसमावेशक सेवा",
      subtitle: "अमळनेर, जळगाव जिल्ह्यांतून आपल्या प्रवासाच्या गरजेनुसार सर्व प्रकारच्या आरामदायी वाहनांची सोय.",
      allServices: "सर्व सेवा",
      cabsCategory: "कॅब व टॅक्सी",
      toursCategory: "देवदर्शन व सहली",
      requestQuoteForThis: "या सेवेसाठी दर विचारा",
      viewAllDetails: "तपशील पहा",
      disclaimer: "सर्व दर सध्याचे टोल, परमिट व हंगामानुसार विचारपूर्वक निश्चित केले जातात."
    },

    // Destinations Section
    destinationsSection: {
      badge: "नेहमीचे मार्ग",
      title: "अमळनेरहून लोकप्रिय प्रवास मार्ग",
      subtitle: "महाराष्ट्र, गुजरात आणि मध्य प्रदेशमधील शहरांसाठी सुरक्षित आणि वेळेवर आंतरशहर प्रवास.",
      approxDistance: "अंदाजे अंतर",
      approxTime: "लागणारा वेळ",
      recommended: "या वाहनासाठी योग्य",
      planThisTrip: "या मार्गासाठी चौकशी करा",
      allRoutes: "सर्व मार्ग",
      viewRouteInfo: "मार्गाचा तपशील"
    },

    // Fleet Section
    fleetSection: {
      badge: "उपलब्ध वाहने",
      title: "स्वच्छ, सॅनिटाईज्ड व आधुनिक वाहने",
      subtitle: "प्रत्येक वाहनाची संपूर्ण तपासणी, उत्कृष्ट वातानुकूलन (AC) आणि आरामदायक प्रवासाची खात्री.",
      seatingCapacity: "आसनक्षमता",
      luggageCapacity: "सामान क्षमता",
      cooling: "वातानुकूलन (AC)",
      bestFor: "यासाठी उत्तम",
      bookVehicle: "हे वाहन निवडा"
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "आम्हाला का निवडावे?",
      title: "विश्वासू, वेळेवर आणि सुरक्षित प्रवास",
      subtitle: "अमळनेरातील कुटुंबे, व्यावसायिक आणि भाविकांशी कायमस्वरूपी विश्वासाचे नाते जोडणे हेच आमचे ध्येय.",
      point1Title: "अमळनेरमध्ये घरापर्यंत पिकअप",
      point1Desc: "अमळनेर शहर किंवा परिसरातील कोणत्याही ठिकाणाहून नियोजित वेळेवर दाराशी गाडी हजर.",
      point2Title: "स्वच्छ व वातानुकूलित वाहने",
      point2Desc: "हायवेच्या लांब पल्ल्याच्या प्रवासात संपूर्ण ताजेतवाने वाटेल अशी स्वच्छ आसनव्यवस्था.",
      point3Title: "सभ्य व अनुभवी चालक",
      point3Desc: "महाराष्ट्रातील महामार्गांची उत्तम माहिती असणारे, संयमी व प्रवाशांच्या सुरक्षेला प्राधान्य देणारे चालक.",
      point4Title: "पारदर्शक दर, कोणतेही छुपे शुल्क नाही",
      point4Desc: "प्रवासाआधी चालक भत्ता, टोल आणि अंतराची स्पष्ट माहिती दिली जाते.",
      point5Title: "दर्शनासाठी व विश्रांतीसाठी वेळ",
      point5Desc: "देवदर्शनाच्या रांगेत किंवा जेवणाच्या थांब्यावर कोणतीही घाईगडबड केली जात नाही.",
      point6Title: "प्रवासादरम्यान २४/७ सहकार्य",
      point6Desc: "संपूर्ण प्रवासात थेट संपर्क व तत्पर मदत उपलब्ध."
    },

    // Booking Process
    process: {
      badge: "प्रक्रिया",
      title: "सोपी ४-टप्प्यांची बुकिंग प्रक्रिया",
      subtitle: "वेबसाईटवरून सहज विनंती पाठवा आणि आमच्या अमळनेर कार्यालयाकडून त्वरित दर व वाहन माहिती मिळवा.",
      step1Title: "१. प्रवासाची माहिती भरा",
      step1Desc: "तारीख, गंतव्य ठिकाण, प्रवासी संख्या आणि पसंतीची गाडी निवडून फॉर्म सबमिट करा.",
      step2Title: "२. त्वरित दर व वाहन माहिती",
      step2Desc: "आमची टीम आपल्या गरजेनुसार योग्य व वाजवी कोटेशन घेऊन फोन किंवा व्हॉट्सअ‍ॅपवर संपर्क करेल.",
      step3Title: "३. बुकिंगची निश्चिती",
      step3Desc: "दर पसंत पडल्यास गाडी नंबर व चालकाचा संपर्क देऊन बुकिंग निश्चित केले जाईल.",
      step4Title: "४. सुखकर प्रवास",
      step4Desc: "ठरलेल्या वेळेत अमळनेरमध्ये आपल्या दाराशी गाडी पोहोचेल आणि सुखद प्रवास सुरू होईल."
    },

    // Booking Request Form
    bookingForm: {
      badge: "थेट विनंती",
      title: "प्रवास बुकिंग विनंती फॉर्म",
      subtitle: "खाली आपल्या प्रवासाचा तपशील भरा. आमची टीम वाहनांची उपलब्धता व अचूक दर सांगण्यासाठी लगेच संपर्क करेल.",
      customerDetailsHeading: "१. ग्राहकाची माहिती",
      fullName: "पूर्ण नाव",
      fullNamePlaceholder: "उदा. राहुल पाटील",
      phone: "मोबाईल नंबर",
      phonePlaceholder: "१० अंकी मोबाईल नंबर",
      phoneHelper: "दर व माहिती देण्यासाठी आम्ही या नंबरवर फोन किंवा व्हॉट्सअ‍ॅप करू.",
      email: "ईमेल पत्ता (पर्यायी)",
      emailPlaceholder: "उदा. rahul@example.com",
      
      tripDetailsHeading: "२. प्रवासाचा तपशील व मार्ग",
      tripType: "प्रवासाचा प्रकार",
      pickupLocation: "पिकअप ठिकाण",
      pickupPlaceholder: "उदा. अमळनेर (घर / बस स्थानक / रेल्वे स्टेशन)",
      destinationLocation: "गंतव्य ठिकाण (कुठे जायचे आहे)",
      destinationPlaceholder: "उदा. शिर्डी, पुणे, मुंबई, नाशिक",
      travelDate: "प्रवासाची तारीख",
      departureTime: "निघण्याची वेळ (पर्यायी)",
      departureTimePlaceholder: "उदा. सकाळी ६:०० वाजता",
      returnDate: "परतीची तारीख",
      passengers: "प्रवासी संख्या",
      vehiclePreference: "गाडीची पसंती",
      notes: "काही विशेष आवश्यकता किंवा सामानाबाबत नोंद (पर्यायी)",
      notesPlaceholder: "उदा. वृद्ध व्यक्ती सोबत आहेत, ३ मोठ्या बॅगा आहेत, विशिष्ट मार्गाने जायचे आहे...",
      
      submitButton: "प्रवास विनंती सबमिट करा",
      submittingButton: "विनंती पाठवत आहे...",
      whatsappDirectButton: "व्हॉट्सअ‍ॅपवर थेट चौकशी पाठवा",
      whatsappHelper: "व्हॉट्सअ‍ॅपवरून थेट बोलायचे असल्यास वरील बटनावर क्लिक करा.",
      
      // Success State
      successTitle: "आपली प्रवास विनंती यशस्वीरित्या मिळाली आहे!",
      trackingCodeLabel: "विनंती संदर्भ क्रमांक (Reference ID)",
      disclaimerNotice: "आपली प्रवासाची विनंती प्राप्त झाली आहे. वाहनांची उपलब्धता आणि अंतिम दर निश्चित करण्यासाठी आमची टीम आपल्याशी त्वरित संपर्क करेल. कार्यालयाकडून निश्चिती मिळेपर्यंत बुकिंग कन्फर्म मानले जात नाही.",
      nextStepsTitle: "पुढील पायऱ्या:",
      nextStep1: "अमळनेर येथील आमचे समन्वयक आपल्या तारखेसाठी गाडी आणि चालकाची उपलब्धता तपासतील.",
      nextStep2: "आपल्याला योग्य दर (टोल व टॅक्ससह) फोन किंवा व्हॉट्सअ‍ॅपवर कळवला जाईल.",
      nextStep3: "आपण दरास सहमती दिल्यानंतर आपली बुकिंग अधिकृतपणे कन्फर्म केली जाईल.",
      submitAnotherBtn: "दुसऱ्या प्रवासाची विनंती करा",
      viewSummaryBtn: "विनंतीचा तपशील पहा",
      
      // Validation Errors
      errors: {
        nameRequired: "कृपया आपले पूर्ण नाव प्रविष्ट करा.",
        nameTooShort: "नाव किमान ३ अक्षरांचे असावे.",
        phoneRequired: "कृपया आपला १० अंकी मोबाईल नंबर प्रविष्ट करा.",
        phoneInvalid: "कृपया योग्य १० अंकी भारतीय मोबाईल नंबर टाका (६, ७, ८ किंवा ९ ने सुरू होणारा).",
        pickupRequired: "कृपया पिकअपचे ठिकाण लिहा.",
        destinationRequired: "कृपया प्रवासाचे गंतव्य ठिकाण लिहा.",
        travelDateRequired: "कृपया प्रवासाची तारीख निवडा.",
        travelDatePast: "प्रवासाची तारीख भूतकाळातील असू शकत नाही.",
        returnDateRequired: "राउंड ट्रिपसाठी परतीची तारीख निवडणे आवश्यक आहे.",
        returnDateBeforeTravel: "परतीची तारीख प्रवासाच्या तारखेपेक्षा आधीची असू शकत नाही.",
        passengersInvalid: "कृपया १ ते ३० दरम्यान प्रवासी संख्या निवडा.",
        generalFailure: "विनंती सबमिट करण्यात अडचण आली. कृपया पुन्हा प्रयत्न करा किंवा थेट फोन/व्हॉट्सअ‍ॅपवर संपर्क करा."
      }
    },

    // FAQs
    faq: {
      badge: "शंका व समाधान",
      title: "सतत विचारले जाणारे प्रश्न (FAQs)",
      subtitle: "अमळनेरहून प्रवासाबाबत ग्राहकांच्या नेहमीच्या प्रश्नांची उत्तरे.",
      q1: "माझी बुकिंग कन्फर्म झाली आहे हे कसे समजेल?",
      a1: "फॉर्म सबमिट केल्यावर आमची टीम वाहनांची उपलब्धता तपासून आपल्याला संपर्क करते. फोन किंवा व्हॉट्सअ‍ॅपवर दर आणि गाडी निश्चित झाल्यावरच बुकिंग कन्फर्म होते.",
      q2: "टोल, पार्किंग आणि इतर कर भाड्यात समाविष्ट असतात का?",
      a2: "आमच्या कोटेशनमध्ये टोल व पार्किंग समाविष्ट आहे की प्रत्यक्षात भरायचे आहे, हे आधीच स्पष्ट सांगितले जाते. त्यामुळे प्रवासात कोणतेही अनपेक्षित शुल्क लागत नाही.",
      q3: "पहाटे किंवा रात्री उशिरा पिकअप मिळू शकते का?",
      a3: "होय, आगाऊ बुकिंग केल्यास २४ तास सेवा उपलब्ध आहे. पहाटे ३ वाजता विमानतळासाठी किंवा रात्री शिर्डीसाठी निघायचे असल्यास गाडी वेळेवर हजर असते.",
      q4: "राउंड ट्रिपमध्ये परतीचा बेत अचानक बदलल्यास काय होईल?",
      a4: "राउंड ट्रिपमध्ये गाडी आपल्यासोबतच असते. वेळापत्रकात बदल झाल्यास कार्यालयाला आधी कल्पना द्यावी. अतिरिक्त किलोमीटर किंवा दिवसांचे भाडे ठरलेल्या नियमानुसार आकारले जाते.",
      q5: "आपल्याकडे कोणकोणत्या गाड्या उपलब्ध आहेत?",
      a5: "आपल्याकडे स्विफ्ट डिझायर, टोयोटा इटिऑस (४ सीटर), मारुती अर्टिगा (६ सीटर), टोयोटा इनोव्हा क्रिस्टा (७ सीटर) आणि मोठ्या कुटुंबासाठी टेम्पो ट्रॅव्हलर उपलब्ध आहेत.",
      q6: "आपले कार्यालय कुठे आहे?",
      a6: "आमचे मुख्य कार्यालय अमळनेर (पिन कोड ४२५४०१, जि. जळगाव) येथे स्टेशन रोड / बस स्थानक परिसरात आहे. संपूर्ण अमळनेर शहरात दाराशी पिकअप सेवा मिळते."
    },

    // Contact Page
    contact: {
      badge: "संपर्क साधा",
      title: "युनिक टूर्स अँड ट्रॅव्हल्स संपर्क",
      subtitle: "तातडीची गाडी उपलब्धता, विशेष टूर पॅकेज किंवा चौकशीसाठी आजच संपर्क करा.",
      officeLocation: "कार्यालय व कार्यक्षेत्र",
      officeAddress: "स्टेशन रोड / बस स्थानक परिसर, अमळनेर, जि. जळगाव, महाराष्ट्र — ४२५४०१",
      phoneLabel: "फोन नंबर",
      whatsappLabel: "व्हॉट्सअ‍ॅप सेवा",
      emailLabel: "ईमेल पत्ता",
      hoursLabel: "कामाची वेळ",
      hoursValue: "आउटस्टेशन व टॅक्सी प्रवासासाठी २४/७ बुकिंग सहाय्य उपलब्ध",
      quickEnquiryHeading: "थेट संदेश पाठवा",
      messagePlaceholder: "आपल्या प्रवासाविषयी आम्हाला सांगा...",
      sendMessageBtn: "संदेश पाठवा",
      callNowBtn: "आत्ताच फोन करा",
      chatWhatsappBtn: "व्हॉट्सअ‍ॅपवर बोला",
      mapsNote: "अमळनेर (४२५४०१) येथून जळगाव, धुळे आणि उत्तर महाराष्ट्रात सेवा."
    },

    // About Page
    about: {
      badge: "आमच्याविषयी",
      title: "आपला विश्वासू स्थानिक प्रवास साथीदार",
      lead: "अमळनेर (पिनकोड ४२५४०१, जिल्हा जळगाव) येथील युनिक टूर्स अँड ट्रॅव्हल्स ग्राहकांना सुरक्षित, आरामदायी आणि वेळेवर प्रवास सेवा देण्यासाठी सदैव कटिबद्ध आहे.",
      p1: "पुणे, मुंबईसारख्या महानगरांमध्ये नोकरी-व्यवसायासाठी जाणे असो, शिर्डी, त्र्यंबकेश्वर, शेगाव देवदर्शनाचा बेत असो किंवा खान्देशातील लग्नकार्यासाठी वाहनांची गरज असो; आम्ही सुरुवातीपासून शेवटपर्यंत सुखकर प्रवासाची हमी देतो.",
      p2: "आमचे नियम अगदी सोपे आहेत: स्वच्छ व व्यवस्थित गाड्या, महामार्गांची सखोल माहिती असलेले सभ्य चालक, कोणतेही छुपे शुल्क नसलेले प्रामाणिक दर आणि प्रवाशांच्या सुरक्षेला सर्वोच्च प्राधान्य.",
      valuesHeading: "आमची मुख्य मूल्ये",
      val1Title: "सुरक्षा व विश्वास प्रथम",
      val1Desc: "वेग मर्यादेचे पालन, गाड्यांची वेळोवेळी देखभाल आणि कुटुंबासाठी सुरक्षित वातावरण.",
      val2Title: "पारदर्शक दर आकारणी",
      val2Desc: "बुकिंगनंतर दरात कोणताही बदल नाही. सर्व नियम व दर आधीच स्पष्ट केले जातात.",
      val3Title: "स्थानिक व राज्य महामार्गांचा दांडगा अनुभव",
      val3Desc: "खान्देश, मराठवाडा, पश्चिम महाराष्ट्र आणि गुजरातच्या रस्त्यांची उत्तम जाण.",
      locationNotice: "नोंदणीकृत कार्यालय: अमळनेर, महाराष्ट्र (४२५४०१)."
    },

    // Admin Dashboard
    admin: {
      title: "बुकिंग व्यवस्थापन कक्ष (Admin)",
      subtitle: "ग्राहकांच्या प्रवास विनंत्यांची पाहणी करा, स्थिती अद्ययावत करा व नियोजन करा.",
      loginTitle: "व्यवस्थापक प्रवेश (Admin Login)",
      loginSubtitle: "बुकिंग विनंत्या पाहण्यासाठी अ‍ॅडमिन पासवर्ड टाका.",
      accessKeyLabel: "अ‍ॅक्सेस पासवर्ड",
      accessKeyPlaceholder: "पासवर्ड प्रविष्ट करा",
      loginBtn: "डॅशबोर्ड उघडा",
      invalidKeyError: "चुकीचा पासवर्ड. कृपया योग्य पासवर्ड टाका.",
      logoutBtn: "लॉग आऊट",
      totalRequests: "एकूण विनंत्या",
      newRequests: "नवीन विनंत्या",
      confirmedRequests: "निश्चित (Confirmed)",
      searchPlaceholder: "नाव, फोन नंबर किंवा ठिकाणाने शोधा...",
      filterAll: "सर्व स्थिती",
      filterNew: "नवीन (New)",
      filterContacted: "संपर्क साधला (Contacted)",
      filterQuoteProvided: "दर कळवला (Quote Given)",
      filterConfirmed: "निश्चित (Confirmed)",
      filterCompleted: "पूर्ण (Completed)",
      filterCancelled: "रद्द (Cancelled)",
      tableHeaderCode: "संदर्भ कोड",
      tableHeaderCustomer: "ग्राहक",
      tableHeaderRoute: "प्रवास मार्ग",
      tableHeaderDate: "तारीख",
      tableHeaderPassengers: "प्रवासी व गाडी",
      tableHeaderStatus: "स्थिती",
      tableHeaderActions: "कृती",
      noBookingsTitle: "अजून कोणतीही विनंती आलेली नाही",
      noBookingsDesc: "ग्राहकांनी वेबसाईटवरून प्रवास विनंती फॉर्म सबमिट केल्यावर ती येथे दिसेल.",
      exportCsvBtn: "CSV डाउनलोड",
      viewDetails: "तपशील",
      updateStatusModalTitle: "बुकिंग स्थिती बदला",
      customerPhoneLabel: "ग्राहकाचा फोन",
      callCustomerBtn: "ग्राहकाला कॉल करा",
      whatsappQuoteBtn: "व्हॉट्सअ‍ॅपवर बोला",
      adminNotesLabel: "कार्यालयीन नोंदी (Internal Notes)",
      adminNotesPlaceholder: "गाडी नंबर, चालकाचे नाव किंवा ठरलेला दर येथे नोंदवून ठेवा...",
      saveStatusBtn: "बदल सेव्ह करा",
      statusUpdatedSuccess: "स्थिती यशस्वीरित्या बदलली आहे.",
      statusDescriptions: {
        new: "नवीन विनंती — तपासणी व दर देणे बाकी आहे.",
        contacted: "ग्राहकाशी फोनवर किंवा मेसेजवर प्राथमिक बोलणे झाले आहे.",
        quote_provided: "दर सांगितला आहे, ग्राहकाच्या होकाराची वाट पाहत आहोत.",
        confirmed: "ग्राहकाने सहमती दिली; गाडी व चालक निश्चित केले आहेत.",
        completed: "प्रवास यशस्वीरित्या पूर्ण झाला आहे.",
        cancelled: "ग्राहकाने किंवा कार्यालयाने विनंती रद्द केली."
      },
      securityDisclaimer: "युनिक टूर्स अँड ट्रॅव्हल्ससाठी सुरक्षित व्यवस्थापन कक्ष. डेटा सुरक्षित साठवला जातो."
    },

    // Footer
    footer: {
      aboutCompany: "युनिक टूर्स अँड ट्रॅव्हल्स, अमळनेर ही स्थानिक व आउटस्टेशन प्रवास, देवदर्शन यात्रा आणि विश्वसनीय टॅक्सी सेवेसाठी ओळखली जाणारी संस्था आहे.",
      quickLinks: "महत्त्वाचे दुवे",
      popularServices: "सेवा",
      popularRoutes: "अमळनेरहून प्रमुख मार्ग",
      contactInfo: "अमळनेर कार्यालय",
      copyright: "© २०२६ युनिक टूर्स अँड ट्रॅव्हल्स. सर्व हक्क राखीव.",
      disclaimer: "सूचना: विनंती फॉर्म पाठवणे म्हणजे त्वरित बुकिंग कन्फर्मेशन नाही. अंतिम निश्चिती कार्यालयाशी बोलणी झाल्यावर होते.",
      amalnerPincode: "पिन कोड: ४२५४०१, महाराष्ट्र, भारत"
    }
  },

  hi: {
    brand: "यूनिक टूर्स एंड ट्रेवल्स",
    locationTag: "अमलनेर, महाराष्ट्र — 425401",
    tagline: "अमलनेर से आउटस्टेशन कैब और तीर्थयात्रा टूर के लिए आपका विश्वसनीय साथी",
    
    // Navigation
    nav: {
      home: "होम",
      services: "सेवाएं",
      destinations: "प्रमुख मार्ग",
      fleet: "वाहन",
      about: "हमारे बारे में",
      contact: "संपर्क",
      bookTrip: "यात्रा बुक करें",
      admin: "एडमिन पोर्टल",
      callUs: "सीधे कॉल करें",
      whatsappUs: "व्हाट्सएप पूछताछ"
    },

    // Hero
    hero: {
      badge: "अमलनेर की भरोसेमंद कार रेंटल व टैक्सी सेवा",
      titleStart: "अमलनेर से पूरे महाराष्ट्र व भारत में",
      titleAccent: "आरामदायक व सुरक्षित सफर",
      titleEnd: "",
      subtitle: "समय की पाबंदी, साफ-सुथरी वातानुकूलित (AC) गाड़ियां और अनुभवी हाईवे ड्राइवर। वन-वे ड्रॉप, राउंड ट्रिप, तीर्थयात्रा या पारिवारिक छुट्टियों के लिए पारदर्शी दरों में बुकिंग करें।",
      bookNowBtn: "कोटेशन के लिए अनुरोध करें",
      exploreServicesBtn: "सभी सेवाएं देखें",
      verifiedBadge: "अमलनेर में डोरस्टेप पिकअप",
      driversBadge: "अनुभवी और सुरक्षित चालक",
      pricingBadge: "पारदर्शी और उचित दरें"
    },

    // Quick Trip Bar
    quickTrip: {
      title: "अपनी यात्रा की योजना बनाएं",
      pickupPlaceholder: "पिकअप स्थान (उदा. अमलनेर)",
      dropPlaceholder: "गंतव्य स्थान (उदा. पुणे, शिरडी)",
      dateLabel: "यात्रा की तारीख",
      passengersLabel: "यात्री संख्या",
      tripTypeLabel: "यात्रा का प्रकार",
      quickSubmitBtn: "उपलब्धता जांचें"
    },

    // Trip Types
    tripTypes: {
      "one-way": "एकतरफा सफर (One-Way)",
      "round-trip": "राउंड ट्रिप (आना-जाना)",
      "outstation": "आउटस्टेशन टूर",
      "local": "लोकल सिटी रेंटल",
      "airport": "एयरपोर्ट पिकअप/ड्रॉप",
      "pilgrimage": "तीर्थयात्रा / दर्शन"
    },

    // Vehicle Preferences
    vehicles: {
      "sedan": "सेडान (स्विफ्ट डिजायर / इटिओस — ४ सीटर)",
      "suv-ertiga": "मारुति अर्टिगा / XL6 (६ सीटर)",
      "innova": "टोयोटा इनोवा क्रिस्टा (७ सीटर)",
      "tempo": "टेम्पो ट्रेवलर (१३ से १७ सीटर)",
      "any": "कोई भी उपलब्ध / उपयुक्त सुझाव दें"
    },

    // Services Section
    servicesSection: {
      badge: "हमारी सेवाएं",
      title: "व्यापक यात्रा और टैक्सी सेवाएं",
      subtitle: "अमलनेर, जलगांव जिले से आपकी सुविधा और बजट के अनुसार गाड़ियों की उत्कृष्ट व्यवस्था।",
      allServices: "सभी सेवाएं",
      cabsCategory: "कैब और टैक्सी",
      toursCategory: "तीर्थयात्रा और टूर",
      requestQuoteForThis: "इस सेवा के लिए दर पूछें",
      viewAllDetails: "विवरण देखें",
      disclaimer: "सभी दरें वर्तमान टोल, परमिट और रूट के आधार पर उचित रूप से तय की जाती हैं।"
    },

    // Destinations Section
    destinationsSection: {
      badge: "लोकप्रिय मार्ग",
      title: "अमलनेर से प्रमुख यात्रा मार्ग",
      subtitle: "महाराष्ट्र, गुजरात और मध्य प्रदेश के प्रमुख शहरों के लिए समय पर सुरक्षित आवागमन।",
      approxDistance: "अनुमानित दूरी",
      approxTime: "लगने वाला समय",
      recommended: "उपयुक्त गाड़ी",
      planThisTrip: "इस रूट के लिए पूछताछ करें",
      allRoutes: "सभी रूट",
      viewRouteInfo: "रूट की जानकारी"
    },

    // Fleet Section
    fleetSection: {
      badge: "गाड़ियों के विकल्प",
      title: "स्वच्छ, सैनिटाइज्ड और आधुनिक वाहन",
      subtitle: "लंबी दूरी की यात्रा में आपकी सुविधा के लिए प्रत्येक गाड़ी का एसी व स्वच्छता निरीक्षण किया जाता है।",
      seatingCapacity: "बैठने की क्षमता",
      luggageCapacity: "सामान रखने की जगह",
      cooling: "एयर कंडीशनिंग (AC)",
      bestFor: "इनके लिए उपयुक्त",
      bookVehicle: "यह गाड़ी चुनें"
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "हमें क्यों चुनें?",
      title: "विश्वसनीय, समयनिष्ठ और सुरक्षित सफर",
      subtitle: "अमलनेर के परिवारों, यात्रियों और व्यापारियों को उत्कृष्ट सेवा प्रदान करना हमारा संकल्प है।",
      point1Title: "अमलनेर में घर तक पिकअप",
      point1Desc: "अमलनेर शहर या आसपास के किसी भी स्थान पर तय समय पर गाड़ी आपके दरवाजे पर पहुंचेगी।",
      point2Title: "स्वच्छ व वातानुकूलित गाड़ियां",
      point2Desc: "साफ-सुथरी सीटें और उत्तम एसी व्यवस्था ताकि सफर में थकान महसूस न हो।",
      point3Title: "सभ्य व अनुभवी ड्राइवर",
      point3Desc: "राजमार्गों की पूरी जानकारी रखने वाले और यात्रियों की सुरक्षा को सर्वोच्च प्राथमिकता देने वाले चालक।",
      point4Title: "पारदर्शी दरें, कोई छुपा शुल्क नहीं",
      point4Desc: "सफर शुरू होने से पहले ही ड्राइवर भत्ता, टोल और दूरी की पूरी स्पष्टता।",
      point5Title: "दर्शन और भोजन के लिए पर्याप्त समय",
      point5Desc: "मंदिर दर्शन या रास्ते में विश्राम के लिए कोई जल्दबाजी नहीं की जाती।",
      point6Title: "यात्रा के दौरान 24/7 सहायता",
      point6Desc: "पूरी यात्रा में सीधी बातचीत और हर संभव सहयोग।"
    },

    // Booking Process
    process: {
      badge: "प्रक्रिया",
      title: "सरल ४-चरणीय बुकिंग प्रक्रिया",
      subtitle: "वेबसाइट से तुरंत अनुरोध भेजें और हमारे अमलनेर कार्यालय से उचित दर व गाड़ी की पुष्टि पाएं।",
      step1Title: "१. यात्रा विवरण भेजें",
      step1Desc: "तारीख, गंतव्य, यात्रियों की संख्या और मनपसंद गाड़ी चुनकर फॉर्म सबमिट करें।",
      step2Title: "२. त्वरित दर व उपलब्धता",
      step2Desc: "हमारी टीम आपके प्लान के अनुसार उचित कोटेशन लेकर फोन या व्हाट्सएप पर संपर्क करेगी।",
      step3Title: "३. बुकिंग की पुष्टि",
      step3Desc: "दर स्वीकृत होने पर गाड़ी नंबर व ड्राइवर का विवरण देकर बुकिंग कंफर्म की जाएगी।",
      step4Title: "४. सुखद सफर",
      step4Desc: "तय समय पर अमलनेर में गाड़ी आपके पास पहुंचेगी और आपकी यात्रा प्रारंभ होगी।"
    },

    // Booking Request Form
    bookingForm: {
      badge: "सीधा अनुरोध",
      title: "यात्रा बुकिंग अनुरोध फॉर्म",
      subtitle: "नीचे अपनी यात्रा का विवरण भरें। अमलनेर की हमारी टीम गाड़ी की उपलब्धता और अंतिम मूल्य के लिए तुरंत संपर्क करेगी।",
      customerDetailsHeading: "१. ग्राहक का विवरण",
      fullName: "पूरा नाम",
      fullNamePlaceholder: "उदा. राहुल पाटिल",
      phone: "मोबाइल नंबर",
      phonePlaceholder: "१० अंकों का मोबाइल नंबर",
      phoneHelper: "हम इसी नंबर पर आपको दर और उपलब्धता की जानकारी देंगे।",
      email: "ईमेल आईडी (वैकल्पिक)",
      emailPlaceholder: "उदा. rahul@example.com",
      
      tripDetailsHeading: "२. यात्रा और मार्ग विवरण",
      tripType: "यात्रा का प्रकार",
      pickupLocation: "पिकअप स्थान",
      pickupPlaceholder: "उदा. अमलनेर (घर / बस स्टैंड / रेलवे स्टेशन)",
      destinationLocation: "गंतव्य स्थान (कहाँ जाना है)",
      destinationPlaceholder: "उदा. शिरडी, पुणे, मुंबई, नासिक",
      travelDate: "यात्रा की तारीख",
      departureTime: "प्रस्थान का समय (वैकल्पिक)",
      departureTimePlaceholder: "उदा. सुबह ०६:०० बजे",
      returnDate: "वापसी की तारीख",
      passengers: "यात्रियों की संख्या",
      vehiclePreference: "गाड़ी की प्राथमिकता",
      notes: "कोई विशेष आवश्यकता या सामान से संबंधित नोट (वैकल्पिक)",
      notesPlaceholder: "उदा. बुजुर्ग साथ हैं, ३ बड़े बैग हैं, किसी खास मार्ग से जाना है...",
      
      submitButton: "यात्रा अनुरोध सबमिट करें",
      submittingButton: "अनुरोध भेजा जा रहा है...",
      whatsappDirectButton: "व्हाट्सएप पर सीधी पूछताछ भेजें",
      whatsappHelper: "सीधे व्हाट्सएप पर बात करने के लिए ऊपर दिए गए बटन पर क्लिक करें।",
      
      // Success State
      successTitle: "आपका यात्रा अनुरोध प्राप्त हो गया है!",
      trackingCodeLabel: "अनुरोध संदर्भ कोड (Reference ID)",
      disclaimerNotice: "आपका यात्रा अनुरोध सबमिट हो गया है। टीम उपलब्धता और मूल्य निर्धारण की पुष्टि के लिए आपसे संपर्क करेगी। जब तक व्यवसाय इसकी पुष्टि नहीं करता, आपकी बुकिंग कन्फर्म नहीं मानी जाती।",
      nextStepsTitle: "आगे क्या होगा:",
      nextStep1: "अमलनेर के हमारे समन्वयक आपकी तारीख के लिए गाड़ी व ड्राइवर की उपलब्धता देखेंगे।",
      nextStep2: "आपको फोन या व्हाट्सएप पर सभी टैक्स व टोल सहित सही कोटेशन दिया जाएगा।",
      nextStep3: "आपके स्वीकार करने के बाद बुकिंग आधिकारिक रूप से कंफर्म कर दी जाएगी।",
      submitAnotherBtn: "दूसरा यात्रा अनुरोध सबमिट करें",
      viewSummaryBtn: "अनुरोध का सारांश देखें",
      
      // Validation Errors
      errors: {
        nameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
        nameTooShort: "नाम कम से कम ३ अक्षरों का होना चाहिए।",
        phoneRequired: "कृपया १० अंकों का मोबाइल नंबर दर्ज करें।",
        phoneInvalid: "कृपया मान्य १० अंकों का भारतीय मोबाइल नंबर दर्ज करें (६, ७, ८ या ९ से शुरू)।",
        pickupRequired: "कृपया पिकअप का स्थान दर्ज करें।",
        destinationRequired: "कृपया गंतव्य स्थान दर्ज करें।",
        travelDateRequired: "कृपया यात्रा की तारीख चुनें।",
        travelDatePast: "यात्रा की तारीख पुरानी नहीं हो सकती।",
        returnDateRequired: "राउंड ट्रिप के लिए वापसी की तारीख चुनना आवश्यक है।",
        returnDateBeforeTravel: "वापसी की तारीख यात्रा की तारीख से पहले नहीं हो सकती।",
        passengersInvalid: "कृपया १ से ३० के बीच यात्री संख्या चुनें।",
        generalFailure: "अनुरोध सबमिट करने में असमर्थ। कृपया पुनः प्रयास करें या सीधे फोन/व्हाट्सएप करें।"
      }
    },

    // FAQs
    faq: {
      badge: "प्रश्नोत्तरी",
      title: "अक्सर पूछे जाने वाले सवाल (FAQs)",
      subtitle: "अमलनेर से यात्रा के संदर्भ में ग्राहकों के सामान्य प्रश्न।",
      q1: "मुझे कैसे पता चलेगा कि मेरी बुकिंग कंफर्म हो गई है?",
      a1: "फॉर्म सबमिट करने पर अमलनेर की टीम उपलब्धता देखकर आपसे संपर्क करती है। फोन या व्हाट्सएप पर अंतिम सहमति के बाद ही बुकिंग कंफर्म होती है।",
      q2: "क्या टोल और पार्किंग शुल्क किराए में शामिल हैं?",
      a2: "हम कोटेशन में पहले ही स्पष्ट कर देते हैं कि टोल और पार्किंग शामिल है या अलग से देय होगा। इससे यात्रा में कोई अतिरिक्त परेशानी नहीं होती।",
      q3: "क्या सुबह जल्दी या देर रात पिकअप मिल सकता है?",
      a3: "हाँ, पूर्व सूचना पर हमारी गाड़ियां २४ घंटे सेवा में रहती हैं। चाहे सुबह ३ बजे फ्लाइट पकड़नी हो या रात को शिरडी जाना हो, गाड़ी समय पर उपस्थित होगी।",
      q4: "राउंड ट्रिप में यदि योजना बदल जाए तो क्या होगा?",
      a4: "राउंड ट्रिप में गाड़ी आपके साथ ही रहती है। योजना में बदलाव होने पर हमें सूचित करें, और अतिरिक्त किलोमीटर या दिन का हिसाब तय दर पर किया जाएगा।",
      q5: "आपके पास कौन-कौन सी गाड़ियां उपलब्ध हैं?",
      a5: "हमारे पास स्विफ्ट डिजायर, इटिओस (४ सीटर), मारुति अर्टिगा (६ सीटर), टोयोटा इनोवा क्रिस्टा (७ सीटर) और बड़े समूह के लिए टेम्पो ट्रेवलर उपलब्ध हैं।",
      q6: "आपका ऑफिस कहाँ स्थित है?",
      a6: "हमारा मुख्य कार्यालय अमलनेर (पिन 425401, जिला जलगांव) में स्टेशन रोड / बस स्टैंड के पास है। अमलनेर शहर में घर तक पिकअप की सुविधा है।"
    },

    // Contact Page
    contact: {
      badge: "संपर्क करें",
      title: "यूनिक टूर्स एंड ट्रेवल्स से संपर्क",
      subtitle: "गाड़ी की तुरंत उपलब्धता, टूर पैकेज या पूछताछ के लिए आज ही संपर्क करें।",
      officeLocation: "कार्यालय व कार्यक्षेत्र",
      officeAddress: "स्टेशन रोड / बस स्टैंड क्षेत्र, अमलनेर, जिला जलगांव, महाराष्ट्र — 425401",
      phoneLabel: "फोन नंबर",
      whatsappLabel: "व्हाट्सएप सेवा",
      emailLabel: "ईमेल आईडी",
      hoursLabel: "सेवा का समय",
      hoursValue: "आउटस्टेशन और टैक्सी सेवाओं के लिए 24/7 बुकिंग सहायता उपलब्ध",
      quickEnquiryHeading: "सीधा संदेश भेजें",
      messagePlaceholder: "अपनी यात्रा के बारे में हमें बताएं...",
      sendMessageBtn: "संदेश भेजें",
      callNowBtn: "अभी कॉल करें",
      chatWhatsappBtn: "व्हाट्सएप पर बात करें",
      mapsNote: "अमलनेर (425401) से जलगांव, धुले और पूरे उत्तर महाराष्ट्र में सेवा।"
    },

    // About Page
    about: {
      badge: "परिचय",
      title: "आपका विश्वसनीय स्थानीय यात्रा साथी",
      lead: "अमलनेर (पिन कोड 425401, जिला जलगांव) स्थित यूनिक टूर्स एंड ट्रेवल्स सुरक्षित, समयनिष्ठ और आरामदायक सड़क यात्राएं प्रदान करने के लिए प्रतिबद्ध है।",
      p1: "चाहे पुणे या मुंबई की बिजनेस ट्रिप हो, शिरडी, त्र्यंबकेश्वर या शेगांव की पवित्र दर्शन यात्रा हो, या शादी समारोह के लिए गाड़ियों की व्यवस्था; हम शुरू से अंत तक सुगम सफर सुनिश्चित करते हैं।",
      p2: "हमारी नीति स्पष्ट है: साफ-सुथरी गाड़ियां, हाईवे के अनुभवी और विनम्र ड्राइवर, बिना किसी छुपे शुल्क के पारदर्शी दरें, और प्रत्येक यात्री की सुरक्षा को प्राथमिकता।",
      valuesHeading: "हमारी प्रतिबद्धताएं",
      val1Title: "सुरक्षा और विश्वसनीयता पहले",
      val1Desc: "नियमों का पालन, गाड़ियों का नियमित रखरखाव और पारिवारिक माहौल।",
      val2Title: "मूल्य निर्धारण में पूर्ण पारदर्शिता",
      val2Desc: "बुकिंग के बाद कोई अतिरिक्त मांग नहीं। सभी नियम व शुल्क पूर्व निर्धारित होते हैं।",
      val3Title: "स्थानीय व राजकीय मार्गों का गहरा अनुभव",
      val3Desc: "खानदेश, मराठवाड़ा, पश्चिम महाराष्ट्र और गुजरात के रास्तों की पूरी जानकारी।",
      locationNotice: "पंजीकृत कार्यालय: अमलनेर, महाराष्ट्र (425401)।"
    },

    // Admin Dashboard
    admin: {
      title: "बुकिंग प्रबंधन पोर्टल (Admin)",
      subtitle: "आने वाले यात्रा अनुरोधों की समीक्षा करें, स्थिति अपडेट करें और गाड़ियों का आवंटन करें।",
      loginTitle: "प्रशासक लॉगिन (Admin Login)",
      loginSubtitle: "बुकिंग प्रबंधित करने के लिए एडमिन पासवर्ड दर्ज करें।",
      accessKeyLabel: "एक्सेस पासवर्ड",
      accessKeyPlaceholder: "पासवर्ड दर्ज करें",
      loginBtn: "डैशबोर्ड खोलें",
      invalidKeyError: "गलत पासवर्ड। कृपया सही क्रेडेंशियल दर्ज करें।",
      logoutBtn: "लॉग आउट",
      totalRequests: "कुल अनुरोध",
      newRequests: "नए अनुरोध",
      confirmedRequests: "कन्फर्म",
      searchPlaceholder: "नाम, फोन या गंतव्य से खोजें...",
      filterAll: "सभी स्थितियां",
      filterNew: "नए (New)",
      filterContacted: "संपर्क किया गया (Contacted)",
      filterQuoteProvided: "कोटेशन दिया (Quote Given)",
      filterConfirmed: "कन्फर्म (Confirmed)",
      filterCompleted: "पूर्ण (Completed)",
      filterCancelled: "रद्द (Cancelled)",
      tableHeaderCode: "रेफरेंस कोड",
      tableHeaderCustomer: "ग्राहक",
      tableHeaderRoute: "रूट",
      tableHeaderDate: "तारीख",
      tableHeaderPassengers: "यात्री व गाड़ी",
      tableHeaderStatus: "स्थिति",
      tableHeaderActions: "कार्रवाई",
      noBookingsTitle: "कोई यात्रा अनुरोध नहीं मिला",
      noBookingsDesc: "वेबसाइट से ग्राहकों द्वारा अनुरोध सबमिट करने पर वे यहाँ दिखाई देंगे।",
      exportCsvBtn: "CSV डाउनलोड",
      viewDetails: "विवरण",
      updateStatusModalTitle: "बुकिंग स्थिति अपडेट करें",
      customerPhoneLabel: "ग्राहक का फोन",
      callCustomerBtn: "कॉल करें",
      whatsappQuoteBtn: "व्हाट्सएप करें",
      adminNotesLabel: "आंतरिक एडमिन नोट्स",
      adminNotesPlaceholder: "गाड़ी नंबर, ड्राइवर का नाम या तय दर यहाँ लिखें...",
      saveStatusBtn: "बदलाव सहेजें",
      statusUpdatedSuccess: "स्थिति सफलतापूर्वक अपडेट हो गई है।",
      statusDescriptions: {
        new: "नया अनुरोध — समीक्षा और दर बताना शेष है।",
        contacted: "ग्राहक से फोन या मैसेज पर बात हुई है।",
        quote_provided: "कोटेशन दे दिया गया है, पुष्टि की प्रतीक्षा है।",
        confirmed: "ग्राहक ने पुष्टि की; गाड़ी और ड्राइवर आवंटित।",
        completed: "यात्रा सफलतापूर्वक संपन्न हुई।",
        cancelled: "अनुरोध रद्द कर दिया गया।"
      },
      securityDisclaimer: "यूनिक टूर्स एंड ट्रेवल्स का सुरक्षित पोर्टल। डेटा सुरक्षित रखा जाता है।"
    },

    // Footer
    footer: {
      aboutCompany: "यूनिक टूर्स एंड ट्रेवल्स, अमलनेर आधारित ट्रेवल एजेंसी है जो विश्वसनीय आउटस्टेशन कैब, राउंड ट्रिप और तीर्थयात्रा सेवाएं प्रदान करती है।",
      quickLinks: "महत्वपूर्ण लिंक",
      popularServices: "सेवाएं",
      popularRoutes: "अमलनेर से प्रमुख रूट",
      contactInfo: "अमलनेर ऑफिस",
      copyright: "© 2026 यूनिक टूर्स एंड ट्रेवल्स। सर्वाधिकार सुरक्षित।",
      disclaimer: "सूचना: अनुरोध सबमिट करने से तत्काल बुकिंग पक्की नहीं होती। अंतिम पुष्टि कार्यालय से संपर्क के बाद ही होती है।",
      amalnerPincode: "पिन कोड: 425401, महाराष्ट्र, भारत"
    }
  }
};
