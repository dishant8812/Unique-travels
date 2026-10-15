/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { ServicesSection } from './components/ServicesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { FleetSection } from './components/FleetSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ServiceItem, DestinationRoute } from './config/businessConfig';
import { TripType, VehiclePreference } from './types';

function MainLayout() {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<string>('home');

  // Pre-fill parameters for Booking Form
  const [bookingPrefill, setBookingPrefill] = useState<{
    pickup?: string;
    destination?: string;
    tripType?: TripType;
    date?: string;
    vehicle?: VehiclePreference;
  }>({});

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const handleStartBookingFromHero = (params?: {
    pickup?: string;
    destination?: string;
    tripType?: TripType;
    date?: string;
  }) => {
    if (params) {
      setBookingPrefill((prev) => ({
        ...prev,
        pickup: params.pickup,
        destination: params.destination,
        tripType: params.tripType,
        date: params.date
      }));
    }
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectService = (service: ServiceItem) => {
    let mappedTripType: TripType = 'outstation';
    if (service.id === 'pilgrimage') mappedTripType = 'pilgrimage';
    else if (service.id === 'airport') mappedTripType = 'airport';
    else if (service.id === 'one-way') mappedTripType = 'one-way';
    else if (service.id === 'local-rental') mappedTripType = 'local';

    setBookingPrefill((prev) => ({
      ...prev,
      tripType: mappedTripType
    }));

    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectDestination = (dest: DestinationRoute) => {
    setBookingPrefill((prev) => ({
      ...prev,
      destination: dest.name.en,
      tripType: dest.category === 'pilgrimage' ? 'pilgrimage' : 'outstation'
    }));

    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectVehicle = (vehicleId: VehiclePreference) => {
    setBookingPrefill((prev) => ({
      ...prev,
      vehicle: vehicleId
    }));

    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Areas */}
      <main className="flex-1">
        {currentView === 'admin' ? (
          <AdminDashboard />
        ) : currentView === 'services' ? (
          <div className="py-6">
            <ServicesSection onSelectService={handleSelectService} />
            <BookingForm initialValues={bookingPrefill} />
          </div>
        ) : currentView === 'destinations' ? (
          <div className="py-6">
            <DestinationsSection onSelectDestination={handleSelectDestination} />
            <BookingForm initialValues={bookingPrefill} />
          </div>
        ) : currentView === 'fleet' ? (
          <div className="py-6">
            <FleetSection onSelectVehicle={handleSelectVehicle} />
            <BookingForm initialValues={bookingPrefill} />
          </div>
        ) : currentView === 'about' ? (
          <div>
            <AboutSection />
            <WhyChooseUsSection />
            <ContactSection />
          </div>
        ) : currentView === 'contact' ? (
          <div>
            <ContactSection />
            <FaqSection />
          </div>
        ) : currentView === 'booking' ? (
          <div className="py-8 bg-slate-100 min-h-[80vh]">
            <BookingForm initialValues={bookingPrefill} />
          </div>
        ) : (
          /* Default HOME View: Complete cohesive experience */
          <div>
            <Hero
              onStartBooking={handleStartBookingFromHero}
              onExploreServices={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <BookingForm initialValues={bookingPrefill} />

            <ServicesSection onSelectService={handleSelectService} />

            <DestinationsSection onSelectDestination={handleSelectDestination} />

            <FleetSection onSelectVehicle={handleSelectVehicle} />

            <WhyChooseUsSection />

            <ProcessSection
              onStartBooking={() => {
                const el = document.getElementById('booking-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <FaqSection />

            <ContactSection />

            <AboutSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
