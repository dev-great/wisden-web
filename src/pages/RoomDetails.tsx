import { useState, useEffect, type JSX } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BookingModal } from "../components/BookingModal";
import { toast } from "react-toastify";
import { ChevronRight, ChevronLeft, X, Grid3X3, Share, Heart, Star, MapPin, Shield, Clock, Wind, CheckCircle } from "lucide-react";

interface Feature {
  id: string;
  name: string;
  icon: string;
}

interface RoomImage {
  id: string;
  image: string;
  caption: string;
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  price_per_night: string;
  capacity: number;
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

interface ApiResponse {
  status_code: number;
  message: string;
  data: Room;
}

export const RoomDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const fetchRoom = async (): Promise<void> => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await fetch(`https://wishden-b34da88cdd66.herokuapp.com/api/v1/room/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch room details");
        }

        const data: ApiResponse = await response.json();
        setRoom(data.data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const formatPrice = (price: string): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

  const handleBookRoom = (): void => {
    if (!isAuthenticated) {
      toast.info("Please login to book a room");
      navigate(`/login?redirect=/rooms/${id}`);
      return;
    }
    setShowBookingModal(true);
  };

  const handleShare = async (): Promise<void> => {
    try {
      await navigator.share({
        title: room?.room_type.name,
        text: `Check out this room at Wishden Hotels`,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleSave = (): void => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Removed from saved" : "Saved to wishlist");
  };

  const handlePrevImage = (): void => {
    if (room) {
      setCurrentImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
    }
  };

  const handleNextImage = (): void => {
    if (room) {
      setCurrentImageIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4" />
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[60vh] rounded-xl overflow-hidden">
              <div className="col-span-2 row-span-2 bg-gray-200" />
              <div className="bg-gray-200" />
              <div className="bg-gray-200" />
              <div className="bg-gray-200" />
              <div className="bg-gray-200" />
            </div>
            <div className="grid lg:grid-cols-3 gap-12 mt-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-32 bg-gray-200 rounded" />
              </div>
              <div className="h-64 bg-gray-200 rounded-xl" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !room) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
              <X className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Room Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">{error || "The room you're looking for doesn't exist or has been removed."}</p>
            <button onClick={() => navigate("/rooms")} className="px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
              Browse All Rooms
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Fill images array to have at least 5 images for the grid
  const displayImages = [...room.images];
  while (displayImages.length < 5) {
    displayImages.push(displayImages[0]);
  }

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-0">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{room.room_type.name}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-indigo-500 text-indigo-500" />
                <span className="font-medium">4.9</span>
                <span className="text-gray-500">(128 reviews)</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Gboko, Benue State</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Share className="w-4 h-4" />
              <span className="underline font-medium">Share</span>
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className={`w-4 h-4 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
              <span className="underline font-medium">Save</span>
            </button>
          </div>
        </div>

        {/* Image Grid - Airbnb Style */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 rounded-xl overflow-hidden h-[30vh] md:h-[60vh]">
            {/* Main large image */}
            <div
              className="md:col-span-2 md:row-span-2 relative cursor-pointer group"
              onClick={() => {
                setCurrentImageIndex(0);
                setShowAllPhotos(true);
              }}
            >
              <img src={displayImages[0]?.image} alt={displayImages[0]?.caption} className="w-full h-full object-cover group-hover:brightness-90 transition-all" />
            </div>

            {/* Smaller images - hidden on mobile */}
            {displayImages.slice(1, 5).map((image, idx) => (
              <div
                key={idx}
                className="hidden md:block relative cursor-pointer group"
                onClick={() => {
                  setCurrentImageIndex(idx + 1);
                  setShowAllPhotos(true);
                }}
              >
                <img src={image.image} alt={image.caption} className="w-full h-full object-cover group-hover:brightness-90 transition-all" />
              </div>
            ))}
          </div>

          {/* Show all photos button */}
          <button onClick={() => setShowAllPhotos(true)} className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow font-medium text-sm">
            <Grid3X3 className="w-4 h-4" />
            Show all photos
          </button>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${room.is_available ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{room.is_available ? "Available" : "Booked"}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-12 mt-10">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Host/Room Info Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Room {room.room_number} hosted by Wishden Hotels</h2>
                <div className="flex items-center gap-3 mt-1 text-gray-600">
                  <span>{room.room_type.capacity} guests</span>
                  <span>•</span>
                  <span>1 bedroom</span>
                  <span>•</span>
                  <span>1 bed</span>
                  <span>•</span>
                  <span>1 bathroom</span>
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">W</div>
            </div>

            {/* Highlights */}
            <div className="py-6 border-b border-gray-200 space-y-4">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Enhanced security</h3>
                  <p className="text-gray-500 text-sm">Electronic key cards and 24/7 security personnel</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Free cancellation within 24 hours</h3>
                  <p className="text-gray-500 text-sm">Get a full refund if you change your mind</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Self check-in</h3>
                  <p className="text-gray-500 text-sm">Check yourself in with the electronic keypad</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="py-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About this room</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{room.description}</p>
              <p className="text-gray-600 leading-relaxed mt-4">{room.room_type.description}</p>
            </div>

            {/* Amenities */}
            <div className="py-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-4">
                    <img src={feature.icon} alt={feature.name} className="w-6 h-6 object-contain" />
                    <span className="text-gray-700">{feature.name}</span>
                  </div>
                ))}
                {room.has_balcony && (
                  <div className="flex items-center gap-4">
                    <Wind className="w-6 h-6 text-gray-700" />
                    <span className="text-gray-700">Private balcony</span>
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="py-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Where you'll be</h2>
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6754!2d9.0011!3d7.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknMDAuMSJOIDnCsDAwJzA0LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map" />
              </div>
              <p className="mt-4 text-gray-600">
                <strong>Gboko, Benue State, Nigeria</strong>
              </p>
              <p className="text-gray-500 text-sm mt-1">Located in the Government Reserved Area of Gboko, close to the Nigeria Police Area Command. An hour's drive from Makurdi, the state capital.</p>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl border border-gray-200 shadow-lg p-6">
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-semibold text-gray-900">{formatPrice(room.room_type.price_per_night)}</span>
                <span className="text-gray-500">night</span>
              </div>

              {/* Quick Info */}
              <div className="border border-gray-300 rounded-xl mb-4">
                <div className="grid grid-cols-2 divide-x divide-gray-300">
                  <div className="p-3">
                    <p className="text-[10px] font-semibold uppercase text-gray-700">Room</p>
                    <p className="text-sm text-gray-900">{room.room_type.name}</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-semibold uppercase text-gray-700">Floor</p>
                    <p className="text-sm text-gray-900">{room.floor ? `Floor ${room.floor}` : "Ground Floor"}</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 p-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-700">Guests</p>
                  <p className="text-sm text-gray-900">
                    {room.room_type.capacity} guest
                    {room.room_type.capacity > 1 ? "s" : ""} maximum
                  </p>
                </div>
              </div>

              {/* Book Button */}
              <button disabled={!room.is_available} onClick={handleBookRoom} className={`w-full py-3 rounded-lg font-semibold text-base transition-all ${room.is_available ? "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}>
                {room.is_available ? "Reserve" : "Currently Unavailable"}
              </button>

              {room.is_available && <p className="text-center text-sm text-gray-500 mt-3">You won't be charged yet</p>}

              {/* Price Breakdown Preview */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span className="underline">{formatPrice(room.room_type.price_per_night)} x 1 night</span>
                  <span>{formatPrice(room.room_type.price_per_night)}</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total before taxes</span>
                  <span>{formatPrice(room.room_type.price_per_night)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* All Photos Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <button onClick={() => setShowAllPhotos(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
              <span className="text-sm text-gray-600">
                {currentImageIndex + 1} / {room.images.length}
              </span>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>
          </div>

          {/* Image Viewer */}
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="relative">
              <img src={room.images[currentImageIndex]?.image} alt={room.images[currentImageIndex]?.caption} className="w-full h-auto max-h-[70vh] object-contain mx-auto" />

              {/* Navigation Arrows */}
              {room.images.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <p className="text-center text-gray-600 mt-4">{room.images[currentImageIndex]?.caption}</p>

            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-2 mt-8 overflow-x-auto pb-4">
              {room.images.map((image, idx) => (
                <button key={image.id} onClick={() => setCurrentImageIndex(idx)} className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden ${currentImageIndex === idx ? "ring-2 ring-indigo-500" : "opacity-60 hover:opacity-100"} transition-all`}>
                  <img src={image.image} alt={image.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {room && <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} room={room} />}

      {/* Mobile Sticky Footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 z-40">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-gray-900">{formatPrice(room.room_type.price_per_night)}</span>
            <span className="text-gray-500"> night</span>
          </div>
          <button disabled={!room.is_available} onClick={handleBookRoom} className={`px-9 py-3 rounded-lg font-semibold transition-all ${room.is_available ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}>
            {room.is_available ? "Reserve" : "Unavailable"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
