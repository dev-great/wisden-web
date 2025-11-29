import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import TawkWidget from "../components/TawkWidget";

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
  data: Room[];
}

type FilterType = "all" | "available" | "balcony";
type SortType = "price-low" | "price-high" | "capacity";

interface RoomCardProps {
  room: Room;
  onViewDetails: (roomId: string) => void;
}

const RoomCard = ({ room, onViewDetails }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Carousel */}
      <div className="relative h-56 bg-gray-200 overflow-hidden">
        {room.images.length > 0 ? (
          <>
            <img src={room.images[currentImageIndex]?.image} alt={room.images[currentImageIndex]?.caption || room.room_type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            {room.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100" aria-label="Previous image">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100" aria-label="Next image">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {room.images.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/60"}`} aria-label={`Go to image ${idx + 1}`} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Availability Badge */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${room.is_available ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"}`}>{room.is_available ? "Available" : "Booked"}</span>
          {room.has_balcony && <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/90 text-white backdrop-blur-sm">Balcony</span>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-base font-semibold text-gray-900">{room.room_type.name}</h3>
            <p className="text-[12px] text-gray-500">
              Room {room.room_number}
              {room.floor && ` • Floor ${room.floor}`}
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-600">{formatPrice(room.room_type.price_per_night)}</p>
            <p className="text-[12px] text-gray-500">per night</p>
          </div>
        </div>

        <p className="text-gray-600 text-normal mb-3 line-clamp-3">{room.description}</p>

        {/* Capacity & Features */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-base text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{room.room_type.capacity} guests</span>
          </div>

          {room.features.length > 0 && (
            <div className="flex items-center gap-1">
              {room.features.slice(0, 3).map((feature) => (
                <img key={feature.id} src={feature.icon} alt={feature.name} className="w-3.5 h-3.5 object-contain opacity-60" title={feature.name} />
              ))}
              {room.features.length > 3 && <span className="text-[10px] text-gray-500">+{room.features.length - 3}</span>}
            </div>
          )}
        </div>

        {/* Book Button */}
        <button
          disabled={!room.is_available}
          className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${room.is_available ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(room.id);
          }}
        >
          {room.is_available ? "Book Now" : "Not Available"}
        </button>
      </div>
    </div>
  );
};

const RoomSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
    <div className="h-56 bg-gray-200" />
    <div className="p-4">
      <div className="flex justify-between mb-2">
        <div>
          <div className="h-4 w-32 bg-gray-200 rounded mb-1.5" />
          <div className="h-3 w-20 bg-gray-200 rounded" />
        </div>
        <div className="text-right">
          <div className="h-5 w-20 bg-gray-200 rounded mb-1" />
          <div className="h-2 w-12 bg-gray-200 rounded ml-auto" />
        </div>
      </div>
      <div className="h-3 w-full bg-gray-200 rounded mb-1" />
      <div className="h-3 w-3/4 bg-gray-200 rounded mb-3" />
      <div className="flex justify-between mb-3">
        <div className="h-3 w-16 bg-gray-200 rounded" />
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-3.5 w-3.5 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
      <div className="h-8 w-full bg-gray-200 rounded-lg" />
    </div>
  </div>
);

export const Rooms = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("price-low");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://wishden-b34da88cdd66.herokuapp.com/api/v1/room/");
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const data: ApiResponse = await response.json();
        setRooms(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const filteredAndSortedRooms = rooms
    .filter((room) => {
      // Apply filter
      if (filter === "available" && !room.is_available) return false;
      if (filter === "balcony" && !room.has_balcony) return false;

      // Apply search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return room.room_type.name.toLowerCase().includes(query) || room.room_number.toLowerCase().includes(query) || room.description.toLowerCase().includes(query);
      }

      return true;
    })
    .sort((a, b) => {
      if (sort === "price-low") {
        return parseFloat(a.room_type.price_per_night) - parseFloat(b.room_type.price_per_night);
      }
      if (sort === "price-high") {
        return parseFloat(b.room_type.price_per_night) - parseFloat(a.room_type.price_per_night);
      }
      if (sort === "capacity") {
        return b.room_type.capacity - a.room_type.capacity;
      }
      return 0;
    });

  const handleViewDetails = (roomId: string) => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TawkWidget />
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title & Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Rooms</h1>
          <p className="text-gray-600">{loading ? "Loading rooms..." : `${filteredAndSortedRooms.length} room${filteredAndSortedRooms.length !== 1 ? "s" : ""} available`}</p>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <input type="text" placeholder="Search rooms..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter */}
            <div>
              <select value={filter} onChange={(e) => setFilter(e.target.value as FilterType)} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="all">All Rooms</option>
                <option value="available">Available Only</option>
                <option value="balcony">With Balcony</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortType)} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="capacity">Capacity</option>
              </select>
            </div>
          </div>
        </div>

        {/* Room Grid */}
        <div className="mb-16">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <RoomSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-white rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to load rooms</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Try Again
              </button>
            </div>
          ) : filteredAndSortedRooms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No rooms found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search query.</p>
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedRooms.map((room) => (
                <RoomCard key={room.id} room={room} onViewDetails={handleViewDetails} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
