import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Users, Heart, Bell, Utensils, Lock, Zap, Shield, DoorOpen, Building, CheckCircle, ArrowRight } from "lucide-react";
import Element2 from "../assets/images/element/07.svg";
import JoinUs from "../assets/images/element/join-us.svg";
import About1 from "../assets/images/new/DSC8412.jpg";
import About3 from "../assets/images/new/DSC9025.jpg";
import TawkWidget from "../components/TawkWidget";

export const AboutUs = () => {
  const stats = [
    { icon: Users, label: "14K+ Global Customers" },
    { icon: Heart, label: "10K+ Happy Customers" },
    { icon: Bell, label: "1M+ Subscribers" },
  ];

  const apartments = ["Standard singles", "Standard double II", "Standard double I", "Studios", "Deluxe", "Executive suites", "Luxury suites", "Executive hall", "Conference hall"];

  const features = [
    {
      icon: Utensils,
      title: "Dining Room and Bar",
      description: "The restaurant is an ideal meeting place where both local and international guests alike enjoy meals in a cozy and relaxing atmosphere served in our lavishly furnished dining room.",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: Lock,
      title: "Secured doors with electronic keys",
      description: "The hotel has electronic keys making it secured for guests at all times.",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: Zap,
      title: "Power Sources",
      description: "The hotel has multiple options of power supply such as Solar, Generators and Public power supply (JED PLC). This enables the hotel with constant power supply for the comfort of our guests.",
      color: "bg-indigo-100 text-indigo-500",
    },
    {
      icon: Shield,
      title: "Trained Security Personnel",
      description: "Wishden Hotel has presence of good number of security personnel safeguarding the gates and always on ground.",
      color: "bg-gray-100 text-gray-500",
    },
    {
      icon: DoorOpen,
      title: "Conference Facilities",
      description: "Located within the hotel also is our conference hall with ultra-modern video and audio-visual equipment with varying capacities ranging from 50-100 sitting capacity. We organize/host conferences, seminars, training.",
      color: "bg-indigo-100 text-indigo-500",
    },
    {
      icon: Building,
      title: "Accommodation",
      description: "Wishden Hotel Gboko has 60 luxurious rooms and suites. All the apartments sizes are suitable for family holiday equipped with private sitting room, tastefully furnished for discerning mind who value quietude.",
      color: "bg-orange-100 text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="pt-8 lg:pt-12 pb-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Discover Comfort, Luxury, and Style With Us.</h1>
              <p className="text-lg text-gray-600 mb-6">Wishden Hotels is a secure abode with luxurious apartments stay. It is efficiently managed by experienced personnel in hospitality and tourism services.</p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="inline-flex items-center bg-white shadow-md rounded-lg py-2 px-4">
                    <stat.icon size={20} className="text-indigo-500 mr-2" />
                    <span className="text-gray-700 font-medium text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src={About1} alt="Wishden Hotel" className="w-full h-64 md:h-80 object-cover rounded-xl" />
              </div>
              <div>
                <img src={About3} alt="Wishden Hotel" className="w-full h-64 md:h-80 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Commitment to <span className="text-indigo-500">Excellence.</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  The hotel is situated in the heart of Gboko Town and an hour drive from Benue state capital Makurdi. It is located in the Government Reserved area of Gboko along access road and close to the Area Command of the Nigeria Police Force. It is built on multiple plots of land consisting of serene environment with lush green gardens making it a choice hotel conducive for both local guest, international guest and non-governmental organizations for conferences and workshops.
                </p>

                <Link to="/rooms" className="inline-flex items-center px-5 py-2.5 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200 transition-colors mb-6">
                  Book Now
                  <ArrowRight size={16} className="ml-2" />
                </Link>

                <h6 className="text-gray-900 font-medium mb-3">Categories of Apartments</h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {apartments.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <img src={JoinUs} alt="Join Us" className="max-w-full h-auto mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Experience More With Us.</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon size={24} />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h5>
                  <p className="text-gray-600 text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-indigo-100 rounded-2xl p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Experience Elegance Like Never Before!</h3>
                    <img src={Element2} alt="" className="h-10 ml-3 hidden sm:block" />
                  </div>
                  <p className="text-gray-700">Elevate your travel experience with a stay that combines style, comfort, and exceptional service. Reserve your stay today and treat yourself to the luxury you deserve.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/rooms" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    Book Today!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
