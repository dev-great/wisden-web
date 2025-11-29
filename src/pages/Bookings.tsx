import { useState, useEffect, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { toast } from "react-toastify";
import { Calendar, Users, Download, Eye, Clock, CheckCircle, XCircle, AlertCircle, Loader2, FileText, CreditCard, Building, ChevronLeft, ChevronRight, X } from "lucide-react";
import jsPDF from "jspdf";

// Types
interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  image: string;
  phone_number: string;
  account_type: string | null;
  provider: string | null;
  is_verify: boolean;
  is_staff: boolean;
  is_superuser: boolean;
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  price_per_night: string;
  capacity: number;
}

interface RoomImage {
  id: string;
  image: string;
  caption: string;
}

interface Feature {
  id: string;
  name: string;
  icon: string;
}

interface Room {
  id: string;
  room_number: string;
  floor: number | null;
  has_balcony: boolean;
  is_available: boolean;
  is_clean: boolean;
  description: string;
  room_type: RoomType;
  features: Feature[];
  images: RoomImage[];
}

interface Booking {
  id: string;
  user: User;
  room: Room;
  booking_code: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: string;
  is_for_someone_else: boolean;
  guest_full_name: string | null;
  guest_email: string | null;
  guest_phone: string | null;
  booking_status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
  payment_status: "PENDING" | "PAID" | "CANCELLED" | "REFUNDED";
  special_requests: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  status_code: number;
  message: string;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    num_pages: number;
    results: Booking[];
  };
}

type StatusFilter = "ALL" | "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";

export const Bookings = (): JSX.Element => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetchBookings();
  }, [currentPage]);

  const fetchBookings = async (): Promise<void> => {
    try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");

      if (!token) {
        toast.error("Please login to view your bookings");
        navigate("/login?redirect=/bookings");
        return;
      }

      const response = await fetch(`https://wishden-b34da88cdd66.herokuapp.com/api/v1/booking/bookings?page=${currentPage}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          toast.error("Session expired. Please login again");
          navigate("/login?redirect=/bookings");
          return;
        }
        throw new Error("Failed to fetch bookings");
      }

      const data: ApiResponse = await response.json();
      setBookings(data.data.results);
      setTotalPages(data.data.num_pages);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-NG", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatPrice = (price: string): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

  const getStatusColor = (status: string): { bg: string; text: string; icon: JSX.Element } => {
    switch (status) {
      case "CONFIRMED":
      case "PAID":
      case "COMPLETED":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          icon: <CheckCircle size={14} />,
        };
      case "PENDING":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          icon: <Clock size={14} />,
        };
      case "CANCELLED":
      case "REFUNDED":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          icon: <XCircle size={14} />,
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          icon: <AlertCircle size={14} />,
        };
    }
  };

  const calculateNights = (checkIn: string, checkOut: string): number => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const generateReceiptPDF = (booking: Booking): void => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Colors
    const primaryColor: [number, number, number] = [245, 158, 11]; // blue
    const darkColor: [number, number, number] = [31, 41, 55];
    const grayColor: [number, number, number] = [107, 114, 128];

    // Header background
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, pageWidth, 45, "F");

    // Hotel Name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("WISHDEN HOTELS", pageWidth / 2, 20, { align: "center" });

    // Subtitle
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Booking Receipt", pageWidth / 2, 30, { align: "center" });

    // Booking Code Badge
    doc.setFontSize(10);
    doc.text(`Booking Code: ${booking.booking_code}`, pageWidth / 2, 40, {
      align: "center",
    });

    // Reset for body content
    let yPos = 60;

    // Guest Information Section
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Guest Information", 20, yPos);

    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...grayColor);

    const guestName = booking.is_for_someone_else ? booking.guest_full_name : `${booking.user.first_name} ${booking.user.last_name}`;
    const guestEmail = booking.is_for_someone_else ? booking.guest_email : booking.user.email;
    const guestPhone = booking.is_for_someone_else ? booking.guest_phone : booking.user.phone_number;

    doc.text(`Name: ${guestName}`, 20, yPos);
    yPos += 6;
    doc.text(`Email: ${guestEmail}`, 20, yPos);
    yPos += 6;
    doc.text(`Phone: ${guestPhone || "N/A"}`, 20, yPos);

    // Room Information Section
    yPos += 15;
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Room Details", 20, yPos);

    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...grayColor);

    doc.text(`Room Type: ${booking.room.room_type.name}`, 20, yPos);
    yPos += 6;
    doc.text(`Room Number: ${booking.room.room_number}`, 20, yPos);
    yPos += 6;
    doc.text(`Floor: ${booking.room.floor ? booking.room.floor : "Ground Floor"}`, 20, yPos);
    yPos += 6;
    doc.text(`Capacity: Up to ${booking.room.room_type.capacity} guests`, 20, yPos);

    // Booking Details Section
    yPos += 15;
    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Booking Details", 20, yPos);

    yPos += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...grayColor);

    const nights = calculateNights(booking.check_in, booking.check_out);

    doc.text(`Check-in: ${formatDate(booking.check_in)}`, 20, yPos);
    yPos += 6;
    doc.text(`Check-out: ${formatDate(booking.check_out)}`, 20, yPos);
    yPos += 6;
    doc.text(`Number of Nights: ${nights}`, 20, yPos);
    yPos += 6;
    doc.text(`Number of Guests: ${booking.guests}`, 20, yPos);
    yPos += 6;
    doc.text(`Booking Status: ${booking.booking_status}`, 20, yPos);
    yPos += 6;
    doc.text(`Payment Status: ${booking.payment_status}`, 20, yPos);

    if (booking.special_requests) {
      yPos += 6;
      doc.text(`Special Requests: ${booking.special_requests}`, 20, yPos);
    }

    // Payment Summary Section
    yPos += 20;
    doc.setFillColor(249, 250, 251);
    doc.rect(15, yPos - 5, pageWidth - 30, 40, "F");

    doc.setTextColor(...darkColor);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Payment Summary", 20, yPos + 5);

    yPos += 15;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...grayColor);

    const pricePerNight = parseFloat(booking.room.room_type.price_per_night);
    doc.text(`${formatPrice(pricePerNight.toString())} x ${nights} night${nights > 1 ? "s" : ""}`, 20, yPos);
    doc.text(formatPrice(booking.total_price), pageWidth - 20, yPos, {
      align: "right",
    });

    yPos += 10;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, pageWidth - 20, yPos);

    yPos += 8;
    doc.setTextColor(...darkColor);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Total Amount", 20, yPos);
    doc.setTextColor(...primaryColor);
    doc.text(formatPrice(booking.total_price), pageWidth - 20, yPos, {
      align: "right",
    });

    // Footer
    yPos = 270;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, pageWidth - 20, yPos);

    yPos += 10;
    doc.setTextColor(...grayColor);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("Wishden Hotels - Government Reserved Area, Gboko, Benue State", pageWidth / 2, yPos, {
      align: "center",
    });
    yPos += 5;
    doc.text("Phone: +234 701 915 1382 | Email: wishdenhotels@gmail.com", pageWidth / 2, yPos, {
      align: "center",
    });
    yPos += 5;
    doc.text(`Generated on: ${new Date().toLocaleString()}`, pageWidth / 2, yPos, {
      align: "center",
    });

    // Save the PDF
    doc.save(`Wishden_Receipt_${booking.booking_code}.pdf`);
    toast.success("Receipt downloaded successfully!");
  };

  const filteredBookings = bookings.filter((booking) => {
    if (statusFilter === "ALL") return true;
    return booking.booking_status === statusFilter;
  });

  const openBookingDetails = (booking: Booking): void => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading your bookings...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-600 mt-1">View and manage your hotel reservations</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {(["ALL", "PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"] as StatusFilter[]).map((status) => (
                <button key={status} onClick={() => setStatusFilter(status)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${statusFilter === status ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {status === "ALL" ? "All Bookings" : status}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings List */}
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-600 mb-6">{statusFilter === "ALL" ? "You haven't made any bookings yet." : `No ${statusFilter.toLowerCase()} bookings found.`}</p>
              <button onClick={() => navigate("/rooms")} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Browse Rooms
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBookings.map((booking) => {
                const bookingStatus = getStatusColor(booking.booking_status);
                const paymentStatus = getStatusColor(booking.payment_status);
                const nights = calculateNights(booking.check_in, booking.check_out);

                return (
                  <div key={booking.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      {/* Room Image */}
                      <div className="md:w-48 h-48 md:h-auto flex-shrink-0">
                        <img src={booking.room.images[0]?.image} alt={booking.room.room_type.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Booking Details */}
                      <div className="flex-1 p-5">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{booking.room.room_type.name}</h3>
                            <p className="text-sm text-gray-500">
                              Room {booking.room.room_number} • Booking Code: <span className="font-mono font-medium text-blue-600">{booking.booking_code}</span>
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${bookingStatus.bg} ${bookingStatus.text}`}>
                              {bookingStatus.icon}
                              {booking.booking_status}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${paymentStatus.bg} ${paymentStatus.text}`}>
                              <CreditCard size={14} />
                              {booking.payment_status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar size={16} className="text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-400">Check-in</p>
                              <p className="font-medium">{formatDate(booking.check_in)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar size={16} className="text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-400">Check-out</p>
                              <p className="font-medium">{formatDate(booking.check_out)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock size={16} className="text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-400">Duration</p>
                              <p className="font-medium">
                                {nights} night{nights > 1 ? "s" : ""}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users size={16} className="text-gray-400" />
                            <div>
                              <p className="text-xs text-gray-400">Guests</p>
                              <p className="font-medium">{booking.guests}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                          <div>
                            <p className="text-xs text-gray-400">Total Amount</p>
                            <p className="text-xl font-bold text-blue-600">{formatPrice(booking.total_price)}</p>
                          </div>
                          <div className="flex gap-2">
                            <button onClick={() => openBookingDetails(booking)} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                              <Eye size={16} />
                              View Details
                            </button>
                            <button onClick={() => generateReceiptPDF(booking)} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                              <Download size={16} />
                              Download Receipt
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} disabled={currentPage === 1} className="p-2 rounded-lg bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <span className="px-4 py-2 text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Booking Details Modal */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Booking Details</h2>
                <p className="text-sm text-gray-500">Code: {selectedBooking.booking_code}</p>
              </div>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Room Info */}
              <div className="flex gap-4">
                <img src={selectedBooking.room.images[0]?.image} alt={selectedBooking.room.room_type.name} className="w-24 h-24 rounded-lg object-cover" />
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedBooking.room.room_type.name}</h3>
                  <p className="text-sm text-gray-600">
                    Room {selectedBooking.room.room_number}
                    {selectedBooking.room.floor && ` • Floor ${selectedBooking.room.floor}`}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedBooking.booking_status).bg} ${getStatusColor(selectedBooking.booking_status).text}`}>{selectedBooking.booking_status}</span>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedBooking.payment_status).bg} ${getStatusColor(selectedBooking.payment_status).text}`}>{selectedBooking.payment_status}</span>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <Users size={18} />
                  Guest Information
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Name</p>
                    <p className="font-medium">{selectedBooking.is_for_someone_else ? selectedBooking.guest_full_name : `${selectedBooking.user.first_name} ${selectedBooking.user.last_name}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{selectedBooking.is_for_someone_else ? selectedBooking.guest_email : selectedBooking.user.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium">{selectedBooking.is_for_someone_else ? selectedBooking.guest_phone : selectedBooking.user.phone_number || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Number of Guests</p>
                    <p className="font-medium">{selectedBooking.guests}</p>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar size={18} />
                  Stay Details
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Check-in</p>
                    <p className="font-medium">{formatDate(selectedBooking.check_in)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Check-out</p>
                    <p className="font-medium">{formatDate(selectedBooking.check_out)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium">{calculateNights(selectedBooking.check_in, selectedBooking.check_out)} nights</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Booked On</p>
                    <p className="font-medium">{formatDate(selectedBooking.created_at)}</p>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              {selectedBooking.special_requests && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Special Requests</h4>
                  <p className="text-sm text-gray-600">{selectedBooking.special_requests}</p>
                </div>
              )}

              {/* Payment Summary */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">
                    {formatPrice(selectedBooking.room.room_type.price_per_night)} × {calculateNights(selectedBooking.check_in, selectedBooking.check_out)} nights
                  </span>
                  <span className="font-medium">{formatPrice(selectedBooking.total_price)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">{formatPrice(selectedBooking.total_price)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    generateReceiptPDF(selectedBooking);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  <Download size={18} />
                  Download Receipt
                </button>
                <button onClick={() => navigate(`/rooms/${selectedBooking.room.id}`)} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  <Building size={18} />
                  View Room
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
