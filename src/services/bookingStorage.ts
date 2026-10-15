import { BookingRequest, BookingStatus, TripType, VehiclePreference } from '../types';

const STORAGE_KEY = 'utt_booking_requests_v1';

export interface CreateBookingDTO {
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
}

/**
 * Generate human-readable reference tracking code:
 * Format: UTT-2026-XXXX (e.g. UTT-2026-7842)
 */
function generateTrackingCode(): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `UTT-2026-${randomSuffix}`;
}

export const bookingStorage = {
  /**
   * Retrieve all saved booking requests (chronological, newest first)
   */
  getAll(): BookingRequest[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];
      const parsed: BookingRequest[] = JSON.parse(data);
      return Array.isArray(parsed) 
        ? parsed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        : [];
    } catch (e) {
      console.error('Failed to parse saved bookings:', e);
      return [];
    }
  },

  /**
   * Save a new booking request
   */
  async create(dto: CreateBookingDTO): Promise<BookingRequest> {
    // Artificial small delay to simulate network latency for realistic UX feedback
    await new Promise((resolve) => setTimeout(resolve, 600));

    const id = 'req_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
    const trackingCode = generateTrackingCode();
    const now = new Date().toISOString();

    const newBooking: BookingRequest = {
      id,
      trackingCode,
      customerName: dto.customerName.trim(),
      phone: dto.phone.trim(),
      email: dto.email?.trim() || undefined,
      tripType: dto.tripType,
      pickupLocation: dto.pickupLocation.trim(),
      destinationLocation: dto.destinationLocation.trim(),
      travelDate: dto.travelDate,
      travelTime: dto.travelTime?.trim() || undefined,
      returnDate: dto.returnDate || undefined,
      passengers: Number(dto.passengers),
      vehiclePreference: dto.vehiclePreference,
      additionalNotes: dto.additionalNotes?.trim() || undefined,
      status: 'new',
      createdAt: now,
      updatedAt: now,
      adminNotes: ''
    };

    try {
      const current = this.getAll();
      const updated = [newBooking, ...current];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      // Dispatch custom event so any open admin panels or tabs react instantly
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('utt_bookings_updated', { detail: newBooking }));
      }

      return newBooking;
    } catch (error) {
      console.error('Error saving booking request:', error);
      throw new Error('Could not persist booking request');
    }
  },

  /**
   * Update status or admin notes for a specific request
   */
  async updateStatus(id: string, status: BookingStatus, adminNotes?: string): Promise<BookingRequest | null> {
    const list = this.getAll();
    const index = list.findIndex((b) => b.id === id);
    if (index === -1) return null;

    const existing = list[index];
    const updated: BookingRequest = {
      ...existing,
      status,
      adminNotes: adminNotes !== undefined ? adminNotes : existing.adminNotes,
      updatedAt: new Date().toISOString()
    };

    list[index] = updated;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('utt_bookings_updated', { detail: updated }));
    }

    return updated;
  },

  /**
   * Delete a booking request
   */
  async delete(id: string): Promise<boolean> {
    const list = this.getAll();
    const filtered = list.filter((b) => b.id !== id);
    if (filtered.length === list.length) return false;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('utt_bookings_updated'));
    }
    return true;
  },

  /**
   * Export all booking requests to CSV for offline spreadsheets
   */
  exportToCSV(): string {
    const bookings = this.getAll();
    if (bookings.length === 0) return '';

    const headers = [
      'Reference Code',
      'Created Date',
      'Customer Name',
      'Mobile Number',
      'Email',
      'Trip Type',
      'Pickup',
      'Destination',
      'Travel Date',
      'Departure Time',
      'Return Date',
      'Passengers',
      'Vehicle Preference',
      'Status',
      'Admin Notes',
      'Customer Notes'
    ];

    const rows = bookings.map((b) => [
      `"${b.trackingCode}"`,
      `"${new Date(b.createdAt).toLocaleString()}"`,
      `"${b.customerName.replace(/"/g, '""')}"`,
      `"${b.phone}"`,
      `"${(b.email || '').replace(/"/g, '""')}"`,
      `"${b.tripType}"`,
      `"${b.pickupLocation.replace(/"/g, '""')}"`,
      `"${b.destinationLocation.replace(/"/g, '""')}"`,
      `"${b.travelDate}"`,
      `"${b.travelTime || ''}"`,
      `"${b.returnDate || 'N/A'}"`,
      `"${b.passengers}"`,
      `"${b.vehiclePreference}"`,
      `"${b.status}"`,
      `"${(b.adminNotes || '').replace(/"/g, '""')}"`,
      `"${(b.additionalNotes || '').replace(/"/g, '""')}"`
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
};
