export type Language = 'en' | 'mr' | 'hi';

export type TripType = 
  | 'one-way'
  | 'round-trip'
  | 'outstation'
  | 'local'
  | 'airport'
  | 'pilgrimage';

export type VehiclePreference =
  | 'sedan'
  | 'suv-ertiga'
  | 'innova'
  | 'tempo'
  | 'any';

export type BookingStatus =
  | 'new'
  | 'contacted'
  | 'quote_provided'
  | 'confirmed'
  | 'completed'
  | 'cancelled';

export interface BookingRequest {
  id: string;
  trackingCode: string;
  customerName: string;
  phone: string;
  email?: string;
  tripType: TripType;
  pickupLocation: string;
  destinationLocation: string;
  travelDate: string;
  travelTime?: string;
  returnDate?: string;
  passengers: number;
  vehiclePreference: VehiclePreference;
  additionalNotes?: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: {
    en: string;
    mr: string;
    hi: string;
  };
  location: {
    town: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    landmark?: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    isPhoneConfigured: boolean;
    whatsapp: string;
    whatsappDisplay: string;
    isWhatsappConfigured: boolean;
    email: string;
    isEmailConfigured: boolean;
    hours: {
      en: string;
      mr: string;
      hi: string;
    };
  };
  adminConfig: {
    defaultAccessKey: string;
  };
  features: {
    enableOnlineBookingRequest: boolean;
    enableWhatsappDirectEnquiry: boolean;
    enableAdminDashboard: boolean;
  };
}
