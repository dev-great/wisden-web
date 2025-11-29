import { useState, useEffect, type ChangeEvent, type JSX } from "react";
import { X, Calendar, Users, User, Mail, Phone, MessageSquare, Upload, Check, Copy } from "lucide-react";
import { toast } from "react-toastify";

interface RoomType {
  name: string;
  price_per_night: string;
  capacity: number;
}

interface RoomImage {
  image: string;
}

interface Room {
  id: string;
  room_number: string;
  room_type: RoomType;
  images: RoomImage[];
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
}

type BookingStep = "booking" | "payment";

export const BookingModal = ({ isOpen, onClose, room }: BookingModalProps): JSX.Element | null => {
  const [step, setStep] = useState<BookingStep>("booking");
  const [loading, setLoading] = useState<boolean>(false);

  // Helper function to get today's date in YYYY-MM-DD format (local timezone)
  const getLocalDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Helper function to get tomorrow's date
  const getTomorrowDate = (): Date => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  };

  // Booking form state
  const [checkInDate, setCheckInDate] = useState<string>(() => {
    return getLocalDateString(new Date());
  });

  const [checkOutDate, setCheckOutDate] = useState<string>(() => {
    return getLocalDateString(getTomorrowDate());
  });

  const [guests, setGuests] = useState<string>("1");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [isForSomeoneElse, setIsForSomeoneElse] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>("");
  const [guestEmail, setGuestEmail] = useState<string>("");
  const [guestPhone, setGuestPhone] = useState<string>("");

  // Payment state
  const [bookingId, setBookingId] = useState<string>("");
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);

  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [numberOfNights, setNumberOfNights] = useState<number>(0);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep("booking");
      setCheckInDate(getLocalDateString(new Date()));
      setCheckOutDate(getLocalDateString(getTomorrowDate()));
      setGuests("1");
      setSpecialRequests("");
      setIsForSomeoneElse(false);
      setGuestName("");
      setGuestEmail("");
      setGuestPhone("");
      setBookingId("");
      setReceiptFile(null);
      setReceiptPreview(null);
    }
  }, [isOpen]);

  // Calculate total amount
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

      if (nights > 0) {
        setNumberOfNights(nights);
        const price = parseFloat(room.room_type.price_per_night);
        setTotalAmount(nights * price);
      } else {
        setNumberOfNights(0);
        setTotalAmount(0);
      }
    }
  }, [checkInDate, checkOutDate, room.room_type.price_per_night]);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getTodayDate = (): string => {
    return getLocalDateString(new Date());
  };

  const getMinCheckOutDate = (): string => {
    if (!checkInDate) return getTodayDate();
    const checkIn = new Date(checkInDate);
    checkIn.setDate(checkIn.getDate() + 1);
    return getLocalDateString(checkIn);
  };

  // Validate that check-in date is not in the past
  const validateDates = (): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkIn = new Date(checkInDate);
    checkIn.setHours(0, 0, 0, 0);

    const checkOut = new Date(checkOutDate);
    checkOut.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      toast.error("Check-in date cannot be in the past");
      return false;
    }

    if (checkOut <= checkIn) {
      toast.error("Check-out date must be after check-in date");
      return false;
    }

    return true;
  };

  const handleCheckInChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);

    // Auto-adjust check-out date if it's before or equal to new check-in date
    const newCheckIn = new Date(newCheckInDate);
    const currentCheckOut = new Date(checkOutDate);

    if (currentCheckOut <= newCheckIn) {
      const newCheckOut = new Date(newCheckInDate);
      newCheckOut.setDate(newCheckOut.getDate() + 1);
      setCheckOutDate(getLocalDateString(newCheckOut));
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }

      if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        toast.error("Only PNG and JPEG formats are allowed");
        return;
      }

      setReceiptFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setReceiptPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      toast.success("Receipt uploaded successfully");
    }
  };

  const handleCreateBooking = async (): Promise<void> => {
    // Validation
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    if (!validateDates()) {
      return;
    }

    if (!guests) {
      toast.error("Please select number of guests");
      return;
    }

    if (isForSomeoneElse && (!guestName || !guestEmail || !guestPhone)) {
      toast.error("Please fill in all guest details");
      return;
    }

    setLoading(true);

    try {
      const bookingData = {
        room_id: room.id,
        check_in: checkInDate,
        check_out: checkOutDate,
        guests: guests,
        total_price: totalAmount.toFixed(2),
        is_for_someone_else: isForSomeoneElse,
        ...(isForSomeoneElse && {
          guest_full_name: guestName,
          guest_email: guestEmail,
          guest_phone: guestPhone,
        }),
        special_requests: specialRequests,
      };

      const response = await fetch("https://wishden-b34da88cdd66.herokuapp.com/api/v1/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Booking created successfully!");
        setBookingId(result.data.id);
        setStep("payment");
      } else {
        toast.error(result.message || "Failed to create booking");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("An error occurred while creating the booking");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitPayment = async (): Promise<void> => {
    if (!receiptFile) {
      toast.error("Please upload payment receipt");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("receipt", receiptFile);
      formData.append("amount", totalAmount.toFixed(2));
      formData.append("booking_id", bookingId);

      const response = await fetch("https://wishden-b34da88cdd66.herokuapp.com/api/v1/payment/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Payment submitted successfully! Redirecting...");
        onClose();
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = "/booking";
        }, 1500);
      } else {
        toast.error(result.message || "Failed to submit payment");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An error occurred while submitting payment");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: string): void => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{step === "booking" ? "Confirm & Book" : "Make Payment"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Booking Step */}
        {step === "booking" && (
          <div className="p-6 space-y-6">
            {/* Room Info Card */}
            <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
              <img src={room.images[0]?.image} alt={room.room_type.name} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{room.room_type.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Room {room.room_number}</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-lg font-bold text-blue-600">{formatPrice(parseFloat(room.room_type.price_per_night))}</span>
                  <span className="text-sm text-gray-500">per night</span>
                </div>
              </div>
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="date" value={checkInDate} onChange={handleCheckInChange} min={getTodayDate()} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} min={getMinCheckOutDate()} disabled={!checkInDate} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed" />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                  {Array.from({ length: room.room_type.capacity }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Any special requirements..." rows={3} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
              </div>
            </div>

            {/* Booking for Someone Else Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Booking for someone else?</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isForSomeoneElse} onChange={(e) => setIsForSomeoneElse(e.target.checked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {/* Guest Details (if booking for someone else) */}
            {isForSomeoneElse && (
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-gray-900">Guest Details</h4>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Full Name" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} placeholder="Email Address" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="tel" value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
            )}

            {/* Total Summary */}
            {numberOfNights > 0 && (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">
                    {formatPrice(parseFloat(room.room_type.price_per_night))} × {numberOfNights} night{numberOfNights > 1 ? "s" : ""}
                  </span>
                  <span className="font-medium">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-blue-600">{formatPrice(totalAmount)}</span>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <button onClick={handleCreateBooking} disabled={loading || !checkInDate || !checkOutDate} className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Confirm & Proceed to Payment"}
            </button>
          </div>
        )}

        {/* Payment Step */}
        {step === "payment" && (
          <div className="p-6 space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">Your booking has been successfully created. To proceed, make payment to the account details below. Once payment is made, upload your payment receipt using the button below.</p>
            </div>

            {/* Bank Details */}
            <div className="space-y-3 bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bank Name:</span>
                <span className="font-semibold">Zenith Bank PLC</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Name:</span>
                <span className="font-semibold">Wishden Enterprises</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">1012487195</span>
                  <button onClick={() => copyToClipboard("1012487195", "Account number")} className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Copy size={16} className="text-blue-600" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-blue-600">{formatPrice(totalAmount)}</span>
                  <button onClick={() => copyToClipboard(totalAmount.toFixed(2), "Amount")} className="p-1 hover:bg-gray-200 rounded transition-colors">
                    <Copy size={16} className="text-blue-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Receipt Upload */}
            {receiptPreview ? (
              <div className="space-y-3">
                <div className="relative">
                  <img src={receiptPreview} alt="Receipt preview" className="w-full h-48 object-cover rounded-lg border-2 border-green-500" />
                  <button
                    onClick={() => {
                      setReceiptFile(null);
                      setReceiptPreview(null);
                    }}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <Check size={16} />
                  <span>Receipt uploaded successfully</span>
                </div>
              </div>
            ) : (
              <label className="block">
                <input type="file" accept="image/png,image/jpeg,image/jpg" onChange={handleFileSelect} className="hidden" />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 cursor-pointer transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium mb-1">Upload Payment Receipt</p>
                  <p className="text-sm text-gray-500">PNG or JPEG, max 5MB</p>
                </div>
              </label>
            )}

            <p className="text-xs text-red-600">The uploaded image should be in .png or .jpeg format and not more than 5MB.</p>

            {/* Submit Button */}
            <button onClick={handleSubmitPayment} disabled={loading || !receiptFile} className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Submit Payment"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
