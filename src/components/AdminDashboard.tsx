import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessConfig } from '../config/businessConfig';
import { bookingStorage } from '../services/bookingStorage';
import { BookingRequest, BookingStatus } from '../types';
import { 
  Lock, 
  LogOut, 
  Search, 
  Filter, 
  Phone, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Users, 
  Car, 
  CheckCircle, 
  Clock, 
  Download, 
  Trash2, 
  Eye, 
  X, 
  Save, 
  AlertCircle,
  ShieldCheck,
  ShieldAlert,
  ArrowUpDown
} from 'lucide-react';

const ADMIN_SESSION_KEY = 'utt_admin_authenticated';

export const AdminDashboard: React.FC = () => {
  const { t, language } = useLanguage();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    }
    return false;
  });
  const [accessKeyInput, setAccessKeyInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Bookings Data & Filters
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedBooking, setSelectedBooking] = useState<BookingRequest | null>(null);

  // Status Update Modal Form State
  const [modalStatus, setModalStatus] = useState<BookingStatus>('new');
  const [modalNotes, setModalNotes] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  const loadBookings = () => {
    const list = bookingStorage.getAll();
    setBookings(list);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadBookings();

      const handleUpdate = () => loadBookings();
      window.addEventListener('utt_bookings_updated', handleUpdate);
      return () => window.removeEventListener('utt_bookings_updated', handleUpdate);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessKeyInput.trim() === businessConfig.adminConfig.defaultAccessKey) {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      setLoginError(false);
      setAccessKeyInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  };

  const openModal = (booking: BookingRequest) => {
    setSelectedBooking(booking);
    setModalStatus(booking.status);
    setModalNotes(booking.adminNotes || '');
    setSaveSuccessMsg(false);
  };

  const closeModal = () => {
    setSelectedBooking(null);
  };

  const handleSaveStatus = async () => {
    if (!selectedBooking) return;
    const updated = await bookingStorage.updateStatus(selectedBooking.id, modalStatus, modalNotes);
    if (updated) {
      setSelectedBooking(updated);
      setSaveSuccessMsg(true);
      setTimeout(() => setSaveSuccessMsg(false), 2500);
      loadBookings();
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this booking request? This action cannot be undone.')) {
      await bookingStorage.delete(id);
      if (selectedBooking?.id === id) closeModal();
      loadBookings();
    }
  };

  const handleExportCSV = () => {
    const csvContent = bookingStorage.exportToCSV();
    if (!csvContent) {
      alert('No booking requests to export.');
      return;
    }
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `unique_tours_bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Status Badge Colors & Labels
  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'new':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">New</span>;
      case 'contacted':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">Contacted</span>;
      case 'quote_provided':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Quote Given</span>;
      case 'confirmed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Confirmed</span>;
      case 'completed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300">Completed</span>;
      case 'cancelled':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200">Cancelled</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">{status}</span>;
    }
  };

  // Filter & Search logic
  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      b.customerName.toLowerCase().includes(query) ||
      b.phone.includes(query) ||
      b.trackingCode.toLowerCase().includes(query) ||
      b.destinationLocation.toLowerCase().includes(query) ||
      b.pickupLocation.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  // Calculate summary counts
  const totalCount = bookings.length;
  const newCount = bookings.filter((b) => b.status === 'new').length;
  const confirmedCount = bookings.filter((b) => b.status === 'confirmed').length;

  // ----------------------------------------------------
  // LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] bg-slate-950 flex items-center justify-center px-4 py-16 text-white">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-5">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="text-2xl font-bold text-center text-white">
            {t.admin.loginTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 text-center mt-1.5 mb-6">
            {t.admin.loginSubtitle}
          </p>

          {loginError && (
            <div className="mb-4 bg-red-950/60 border border-red-500/50 rounded-xl p-3 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{t.admin.invalidKeyError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.admin.accessKeyLabel}
              </label>
              <input
                type="password"
                required
                value={accessKeyInput}
                onChange={(e) => setAccessKeyInput(e.target.value)}
                placeholder={t.admin.accessKeyPlaceholder}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Default key: <code className="bg-slate-800 text-amber-400 px-1 py-0.5 rounded">admin123</code> (Configurable in businessConfig.ts)
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              {t.admin.loginBtn}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-500">
              Unique Tours & Travels • Administrative Dispatch Portal
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // LOGGED-IN ADMIN DASHBOARD
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Bar with Title & Actions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                {t.admin.title}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {t.admin.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>{t.admin.exportCsvBtn}</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold border border-red-200 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-red-600" />
              <span>{t.admin.logoutBtn}</span>
            </button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              {t.admin.totalRequests}
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-slate-900">{totalCount}</span>
              <span className="text-xs text-slate-400">All submissions</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
              {t.admin.newRequests}
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-blue-600">{newCount}</span>
              <span className="text-xs text-blue-600/70 font-medium">Pending action</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block">
              {t.admin.confirmedRequests}
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-emerald-600">{confirmedCount}</span>
              <span className="text-xs text-emerald-600/70 font-medium">Driver assigned</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.admin.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {[
                { id: 'all', label: t.admin.filterAll },
                { id: 'new', label: t.admin.filterNew },
                { id: 'contacted', label: t.admin.filterContacted },
                { id: 'quote_provided', label: t.admin.filterQuoteProvided },
                { id: 'confirmed', label: t.admin.filterConfirmed },
                { id: 'completed', label: t.admin.filterCompleted },
                { id: 'cancelled', label: t.admin.filterCancelled }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    statusFilter === tab.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* BOOKINGS LIST */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {filteredBookings.length === 0 ? (
            <div className="py-16 text-center px-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 mx-auto flex items-center justify-center text-slate-400 mb-3">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-base">
                {t.admin.noBookingsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                {t.admin.noBookingsDesc}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4">{t.admin.tableHeaderCode}</th>
                    <th className="py-3 px-4">{t.admin.tableHeaderCustomer}</th>
                    <th className="py-3 px-4">{t.admin.tableHeaderRoute}</th>
                    <th className="py-3 px-4">{t.admin.tableHeaderDate}</th>
                    <th className="py-3 px-4">{t.admin.tableHeaderPassengers}</th>
                    <th className="py-3 px-4">{t.admin.tableHeaderStatus}</th>
                    <th className="py-3 px-4 text-right">{t.admin.tableHeaderActions}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Tracking Code */}
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-700">
                        {b.trackingCode}
                      </td>

                      {/* Customer Info */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">{b.customerName}</div>
                        <div className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{b.phone}</span>
                        </div>
                      </td>

                      {/* Route */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-900">
                          {b.pickupLocation} → {b.destinationLocation}
                        </div>
                        <span className="text-[11px] text-slate-500 capitalize">
                          {t.tripTypes[b.tripType]}
                        </span>
                      </td>

                      {/* Travel Date */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-slate-900">{b.travelDate}</div>
                        {b.travelTime && (
                          <div className="text-[11px] text-slate-500">{b.travelTime}</div>
                        )}
                        {b.returnDate && (
                          <div className="text-[11px] text-emerald-700 font-medium">
                            Ret: {b.returnDate}
                          </div>
                        )}
                      </td>

                      {/* Passengers & Vehicle */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-800">{b.passengers} Pax</div>
                        <div className="text-[11px] text-slate-500 truncate max-w-[140px]">
                          {t.vehicles[b.vehiclePreference]}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4">
                        {getStatusBadge(b.status)}
                      </td>

                      {/* Action buttons */}
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => openModal(b)}
                          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                        >
                          {t.admin.viewDetails}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* SECURITY & PRODUCTION NOTICE */}
        <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 border border-slate-800 text-xs leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Architecture & Security Note</span>
          </div>
          <p>
            This admin portal allows the Unique Tours & Travels team in Amalner to review incoming trip requests, call or WhatsApp customers directly, and record status updates. Booking data is securely saved with unique reference tracking codes.
          </p>
        </div>

      </div>

      {/* DETAIL & STATUS UPDATE MODAL */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {selectedBooking.trackingCode}
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mt-1">
                  Trip Request Details
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Feedback message */}
            {saveSuccessMsg && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-3 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{t.admin.statusUpdatedSuccess}</span>
              </div>
            )}

            {/* Quick Customer Communication Actions */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap gap-3 items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Customer Name:</span>
                <span className="font-bold text-slate-900 text-base">{selectedBooking.customerName}</span>
                <span className="text-xs text-slate-600 block">{selectedBooking.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedBooking.phone}`}
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-3 py-2 rounded-xl text-xs shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.admin.callCustomerBtn}</span>
                </a>

                <a
                  href={`https://wa.me/91${selectedBooking.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
                    `Hello ${selectedBooking.customerName}, this is Unique Tours & Travels Amalner regarding your trip request (${selectedBooking.trackingCode}) for ${selectedBooking.destinationLocation}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-2 rounded-xl text-xs shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t.admin.whatsappQuoteBtn}</span>
                </a>
              </div>
            </div>

            {/* Trip Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div>
                <span className="text-slate-500 text-xs block">Pickup:</span>
                <span className="font-semibold text-slate-900">{selectedBooking.pickupLocation}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Destination:</span>
                <span className="font-semibold text-slate-900">{selectedBooking.destinationLocation}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Travel Date:</span>
                <span className="font-semibold text-slate-900">{selectedBooking.travelDate} {selectedBooking.travelTime || ''}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Return Date:</span>
                <span className="font-semibold text-slate-900">{selectedBooking.returnDate || 'N/A (One Way)'}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Passengers:</span>
                <span className="font-semibold text-slate-900">{selectedBooking.passengers} Pax</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Vehicle:</span>
                <span className="font-semibold text-slate-900">{t.vehicles[selectedBooking.vehiclePreference]}</span>
              </div>
              {selectedBooking.additionalNotes && (
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-500 text-xs block">Customer Notes:</span>
                  <span className="text-slate-800 italic">{selectedBooking.additionalNotes}</span>
                </div>
              )}
            </div>

            {/* Status Update Form */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Update Booking Status
                </label>
                <select
                  value={modalStatus}
                  onChange={(e) => setModalStatus(e.target.value as BookingStatus)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold"
                >
                  <option value="new">New (Needs Initial Review)</option>
                  <option value="contacted">Contacted (Called / Messaged)</option>
                  <option value="quote_provided">Quote Provided (Awaiting Agreement)</option>
                  <option value="confirmed">Confirmed (Driver Allocated)</option>
                  <option value="completed">Completed (Trip Concluded)</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <p className="text-[11px] text-slate-500 mt-1">
                  {t.admin.statusDescriptions[modalStatus]}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.admin.adminNotesLabel}
                </label>
                <textarea
                  rows={3}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder={t.admin.adminNotesPlaceholder}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => handleDelete(selectedBooking.id)}
                className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 text-xs font-bold px-3 py-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveStatus}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{t.admin.saveStatusBtn}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
