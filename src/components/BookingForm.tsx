import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { bookingStorage, CreateBookingDTO } from '../services/bookingStorage';
import { whatsappService } from '../services/whatsappService';
import { BookingRequest, TripType, VehiclePreference } from '../types';
import { 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  MapPin, 
  Users, 
  Car, 
  Phone, 
  User, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  ShieldAlert, 
  RefreshCw, 
  ArrowRight,
  Info
} from 'lucide-react';

interface BookingFormProps {
  initialValues?: {
    pickup?: string;
    destination?: string;
    tripType?: TripType;
    date?: string;
    vehicle?: VehiclePreference;
  };
  onSuccess?: (booking: BookingRequest) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialValues, onSuccess }) => {
  const { t, language } = useLanguage();

  const todayStr = new Date().toISOString().split('T')[0];

  // Form Fields State
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tripType, setTripType] = useState<TripType>(initialValues?.tripType || 'outstation');
  const [pickupLocation, setPickupLocation] = useState(initialValues?.pickup || 'Amalner');
  const [destinationLocation, setDestinationLocation] = useState(initialValues?.destination || '');
  const [travelDate, setTravelDate] = useState(initialValues?.date || todayStr);
  const [travelTime, setTravelTime] = useState('07:00');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState<number>(4);
  const [vehiclePreference, setVehiclePreference] = useState<VehiclePreference>(initialValues?.vehicle || 'any');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<BookingRequest | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  // Sync initial values if provided
  useEffect(() => {
    if (initialValues?.destination) setDestinationLocation(initialValues.destination);
    if (initialValues?.pickup) setPickupLocation(initialValues.pickup);
    if (initialValues?.tripType) setTripType(initialValues.tripType);
    if (initialValues?.date) setTravelDate(initialValues.date);
    if (initialValues?.vehicle) setVehiclePreference(initialValues.vehicle);
  }, [initialValues]);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!customerName.trim()) {
      newErrors.customerName = t.bookingForm.errors.nameRequired;
    } else if (customerName.trim().length < 3) {
      newErrors.customerName = t.bookingForm.errors.nameTooShort;
    }

    // Phone validation (10 digits starting with 6,7,8,9)
    const cleanPhone = phone.replace(/\D/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone.trim()) {
      newErrors.phone = t.bookingForm.errors.phoneRequired;
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = t.bookingForm.errors.phoneInvalid;
    }

    // Pickup validation
    if (!pickupLocation.trim()) {
      newErrors.pickupLocation = t.bookingForm.errors.pickupRequired;
    }

    // Destination validation
    if (!destinationLocation.trim()) {
      newErrors.destinationLocation = t.bookingForm.errors.destinationRequired;
    }

    // Travel Date validation
    if (!travelDate) {
      newErrors.travelDate = t.bookingForm.errors.travelDateRequired;
    } else if (travelDate < todayStr) {
      newErrors.travelDate = t.bookingForm.errors.travelDatePast;
    }

    // Return Date validation (Conditional on round-trip)
    if (tripType === 'round-trip') {
      if (!returnDate) {
        newErrors.returnDate = t.bookingForm.errors.returnDateRequired;
      } else if (returnDate < travelDate) {
        newErrors.returnDate = t.bookingForm.errors.returnDateBeforeTravel;
      }
    }

    // Passengers validation
    if (!passengers || passengers < 1 || passengers > 30) {
      newErrors.passengers = t.bookingForm.errors.passengersInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validateForm()) {
      // Scroll to top of form to view errors
      const formEl = document.getElementById('booking-request-form');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setIsSubmitting(true);

    try {
      const dto: CreateBookingDTO = {
        customerName: customerName.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        tripType,
        pickupLocation: pickupLocation.trim(),
        destinationLocation: destinationLocation.trim(),
        travelDate,
        travelTime: travelTime.trim() || undefined,
        returnDate: tripType === 'round-trip' ? returnDate : undefined,
        passengers: Number(passengers),
        vehiclePreference,
        additionalNotes: additionalNotes.trim() || undefined
      };

      const result = await bookingStorage.create(dto);
      
      // Successfully saved
      setSubmittedBooking(result);
      if (onSuccess) onSuccess(result);

      // Scroll into view of success card
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } catch (err) {
      console.error('Booking submission error:', err);
      setGeneralError(t.bookingForm.errors.generalFailure);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForNew = () => {
    setSubmittedBooking(null);
    setDestinationLocation('');
    setAdditionalNotes('');
    setErrors({});
  };

  const currentPayloadForWhatsApp: Partial<CreateBookingDTO> = {
    customerName: customerName || undefined,
    phone: phone || undefined,
    pickupLocation,
    destinationLocation,
    tripType,
    travelDate,
    travelTime,
    returnDate: tripType === 'round-trip' ? returnDate : undefined,
    passengers,
    vehiclePreference,
    additionalNotes: additionalNotes || undefined
  };

  const whatsappLink = whatsappService.createBookingEnquiryUrl(currentPayloadForWhatsApp, language);

  return (
    <section id="booking-section" className="py-14 sm:py-20 bg-slate-100 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-amber-500/20">
            <span>{t.bookingForm.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.bookingForm.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.bookingForm.subtitle}
          </p>
        </div>

        {/* SUCCESS CONFIRMATION SCREEN */}
        {submittedBooking ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95">
            {/* Top Success Banner */}
            <div className="bg-emerald-600 px-6 py-6 text-white text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                {t.bookingForm.successTitle}
              </h3>
              <div className="mt-2 inline-flex items-center gap-2 bg-emerald-700/60 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono tracking-wider">
                <span>{t.bookingForm.trackingCodeLabel}:</span>
                <span className="font-bold text-amber-300">{submittedBooking.trackingCode}</span>
              </div>
            </div>

            {/* MANDATORY DISCLAIMER BOX */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4.5 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm">
                      Important Confirmation Policy:
                    </h4>
                    <p className="mt-1 text-sm font-medium text-amber-950 leading-relaxed">
                      "{t.bookingForm.disclaimerNotice}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Trip Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
                  Trip Request Summary
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-slate-500 block text-xs">Customer Name:</span>
                    <span className="font-semibold text-slate-800">{submittedBooking.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Contact Phone:</span>
                    <span className="font-semibold text-slate-800">{submittedBooking.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Route:</span>
                    <span className="font-semibold text-slate-800">
                      {submittedBooking.pickupLocation} → {submittedBooking.destinationLocation}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Trip Type:</span>
                    <span className="font-semibold text-slate-800">
                      {t.tripTypes[submittedBooking.tripType]}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Travel Date:</span>
                    <span className="font-semibold text-slate-800">
                      {submittedBooking.travelDate} {submittedBooking.travelTime ? `at ${submittedBooking.travelTime}` : ''}
                    </span>
                  </div>
                  {submittedBooking.returnDate && (
                    <div>
                      <span className="text-slate-500 block text-xs">Return Date:</span>
                      <span className="font-semibold text-slate-800">{submittedBooking.returnDate}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-500 block text-xs">Passengers:</span>
                    <span className="font-semibold text-slate-800">{submittedBooking.passengers} Pax</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Vehicle Preference:</span>
                    <span className="font-semibold text-slate-800">
                      {t.vehicles[submittedBooking.vehiclePreference]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Next Steps Explanation */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-2.5">
                <h4 className="font-bold text-slate-900 text-sm">
                  {t.bookingForm.nextStepsTitle}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span>{t.bookingForm.nextStep1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span>{t.bookingForm.nextStep2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span>{t.bookingForm.nextStep3}</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-center shadow-md flex items-center justify-center gap-2 text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Request to WhatsApp Immediately</span>
                </a>

                <button
                  onClick={handleResetForNew}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3.5 px-5 rounded-xl text-sm transition-colors"
                >
                  {t.bookingForm.submitAnotherBtn}
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* BOOKING REQUEST FORM */
          <div id="booking-request-form" className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Top header bar */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-white">
                  Trip Booking Request Form
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Direct submission to Unique Tours & Travels team in Amalner
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-medium">
                  Amalner 425401
                </span>
              </div>
            </div>

            {/* General Error Banner */}
            {generalError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6 text-red-800 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <span>{generalError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
              
              {/* SECTION 1: CUSTOMER DETAILS */}
              <div>
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {t.bookingForm.customerDetailsHeading}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.bookingForm.fullName} <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (errors.customerName) setErrors({ ...errors, customerName: '' });
                      }}
                      placeholder={t.bookingForm.fullNamePlaceholder}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.customerName 
                          ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                          : 'border-slate-300 focus:ring-amber-500 focus:bg-white'
                      }`}
                    />
                    {errors.customerName && (
                      <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.customerName}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.bookingForm.phone} <span className="text-red-500">*</span></span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-slate-500 pointer-events-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPhone(val);
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder={t.bookingForm.phonePlaceholder}
                        className={`w-full bg-slate-50 border rounded-xl pl-12 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all font-mono ${
                          errors.phone 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-amber-500 focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-slate-500">
                        {t.bookingForm.phoneHelper}
                      </p>
                    )}
                  </div>

                  {/* Optional Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.bookingForm.email}</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.bookingForm.emailPlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                </div>
              </div>

              {/* SECTION 2: TRIP & ROUTE DETAILS */}
              <div>
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {t.bookingForm.tripDetailsHeading}
                  </h4>
                </div>

                <div className="space-y-5">
                  
                  {/* Trip Type Select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.bookingForm.tripType} <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {(['outstation', 'round-trip', 'one-way', 'pilgrimage', 'airport', 'local'] as TripType[]).map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setTripType(type)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            tripType === type
                              ? 'border-amber-500 bg-amber-500/10 text-slate-950 font-bold shadow-sm'
                              : 'border-slate-200 bg-slate-50/80 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span className="text-xs sm:text-sm block">
                            {t.tripTypes[type]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pickup and Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Pickup */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.bookingForm.pickupLocation} <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        value={pickupLocation}
                        onChange={(e) => {
                          setPickupLocation(e.target.value);
                          if (errors.pickupLocation) setErrors({ ...errors, pickupLocation: '' });
                        }}
                        placeholder={t.bookingForm.pickupPlaceholder}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.pickupLocation 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-amber-500 focus:bg-white'
                        }`}
                      />
                      {errors.pickupLocation && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.pickupLocation}</span>
                        </p>
                      )}
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.bookingForm.destinationLocation} <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        value={destinationLocation}
                        onChange={(e) => {
                          setDestinationLocation(e.target.value);
                          if (errors.destinationLocation) setErrors({ ...errors, destinationLocation: '' });
                        }}
                        placeholder={t.bookingForm.destinationPlaceholder}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.destinationLocation 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-amber-500 focus:bg-white'
                        }`}
                      />
                      {errors.destinationLocation && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.destinationLocation}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Travel Dates & Departure Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    
                    {/* Travel Date */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.bookingForm.travelDate} <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="date"
                        min={todayStr}
                        value={travelDate}
                        onChange={(e) => {
                          setTravelDate(e.target.value);
                          if (errors.travelDate) setErrors({ ...errors, travelDate: '' });
                        }}
                        className={`w-full bg-slate-50 border rounded-xl px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.travelDate 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/20' 
                            : 'border-slate-300 focus:ring-amber-500 focus:bg-white'
                        }`}
                      />
                      {errors.travelDate && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.travelDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Departure Time */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t.bookingForm.departureTime}</span>
                      </label>
                      <input
                        type="time"
                        value={travelTime}
                        onChange={(e) => setTravelTime(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Return Date (CONDITIONAL: Only required for Round Trip) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>
                          {t.bookingForm.returnDate}
                          {tripType === 'round-trip' ? (
                            <span className="text-red-500"> *</span>
                          ) : (
                            <span className="text-slate-400 text-[10px] font-normal"> (Round Trip Only)</span>
                          )}
                        </span>
                      </label>
                      <input
                        type="date"
                        disabled={tripType !== 'round-trip'}
                        min={travelDate || todayStr}
                        value={returnDate}
                        onChange={(e) => {
                          setReturnDate(e.target.value);
                          if (errors.returnDate) setErrors({ ...errors, returnDate: '' });
                        }}
                        className={`w-full border rounded-xl px-3.5 py-3 text-sm transition-all ${
                          tripType !== 'round-trip'
                            ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                            : errors.returnDate
                              ? 'bg-red-50/20 border-red-400 focus:ring-red-400 text-slate-900'
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:bg-white'
                        }`}
                      />
                      {errors.returnDate && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.returnDate}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Passengers & Vehicle Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Passengers */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.bookingForm.passengers} <span className="text-red-500">*</span></span>
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(Number(e.target.value))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all font-semibold"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 17, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Passenger' : 'Passengers'}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Vehicle Preference */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.bookingForm.vehiclePreference}</span>
                      </label>
                      <select
                        value={vehiclePreference}
                        onChange={(e) => setVehiclePreference(e.target.value as VehiclePreference)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                      >
                        <option value="any">{t.vehicles['any']}</option>
                        <option value="sedan">{t.vehicles['sedan']}</option>
                        <option value="suv-ertiga">{t.vehicles['suv-ertiga']}</option>
                        <option value="innova">{t.vehicles['innova']}</option>
                        <option value="tempo">{t.vehicles['tempo']}</option>
                      </select>
                    </div>

                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.bookingForm.notes}
                    </label>
                    <textarea
                      rows={3}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder={t.bookingForm.notesPlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    />
                  </div>

                </div>
              </div>

              {/* MANDATORY SUBMISSION DISCLAIMER NOTICE */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Booking Request Notice:</span> Submitting this request allows our Amalner dispatch office to check vehicle availability and prepare an honest price quote for you. Reservations are confirmed only after our mutual agreement.
                </p>
              </div>

              {/* SUBMIT BUTTONS */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] disabled:opacity-70 text-slate-950 font-bold py-4 px-6 rounded-xl shadow-lg shadow-amber-500/20 text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>{t.bookingForm.submittingButton}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.bookingForm.submitButton}</span>
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Alternative Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  title="Enquire on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.bookingForm.whatsappDirectButton}</span>
                </a>
              </div>

            </form>

            {/* Bottom Form Footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 text-center">
              <p className="text-xs text-slate-500">
                Unique Tours & Travels • Station Road / Bus Stand, Amalner, Maharashtra — 425401
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
