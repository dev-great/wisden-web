import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { OfferSlider } from "../components/OfferSlider";
import { NewsLetters } from "../components/NewsLetters";
import CounterCard from "../components/CounterCard";
import { ArrowRight, Bookmark, DollarSign, CreditCard, Award, Wifi, Tag, Utensils, Lightbulb, ShieldCheck, UserCheck, Heart, HandCoins } from "lucide-react";

// Images
import googlePlay from "../assets/images/element/google-play.svg";
import appStore from "../assets/images/element/app-store.svg";
import new16 from "../assets/images/new/home1.jpg";
import new19 from "../assets/images/new/home2.jpg";
import new14 from "../assets/images/new/home3.jpg";
import new17 from "../assets/images/new/home4.jpg";
import new13 from "../assets/images/new/home5.jpg";
import new18 from "../assets/images/new/home6.jpg";
import new11 from "../assets/images/new/home7.jpg";
import new15 from "../assets/images/new/home8.jpg";
import about01 from "../assets/images/new/about.jpg";
import TawkWidget from "../components/TawkWidget";

export const Home = () => {
  const benefits = [
    { icon: DollarSign, label: "Best Rate Guaranteed", color: "text-blue-500" },
    { icon: CreditCard, label: "Online Payment", color: "text-blue-500" },
    { icon: Award, label: "Exclusive Members Rewards", color: "text-green-500" },
    { icon: Wifi, label: "WIFI Access", color: "text-red-500" },
    { icon: Tag, label: "No Hidden Changes", color: "text-orange-500" },
  ];

  const features = [
    {
      icon: Utensils,
      title: "Dining Room & Bar",
      description: "The restaurant is an ideal meeting place where both local and international guests alike enjoy meals in a cozy and relaxing atmosphere served in our lavishly furnished dining room.",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: Lightbulb,
      title: "Power Sources",
      description: "The hotel has multiple options of power supply such as Solar, Generators and Public power supply (JED PLC).",
      color: "bg-red-100 text-red-500",
    },
    {
      icon: ShieldCheck,
      title: "Secured CCTV & electronic keys",
      description: "The hotel has CCTV cameras and electronic keys on every floor making it super secured for guests.",
      color: "bg-orange-100 text-orange-500",
    },
    {
      icon: UserCheck,
      title: "Trained Security Personnel",
      description: "Wishden Hotel has a good number of security personnel safeguarding the gates and always on ground.",
      color: "bg-blue-100 text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Discover Comfort & Elegance with{" "}
                <span className="relative inline-block text-blue-500">
                  Wishden Hotels
                  <svg className="absolute -bottom-2 left-0 w-full fill-blue-200 -z-10 hidden sm:block" viewBox="0 0 356.55 79.36" preserveAspectRatio="none" height="20">
                    <path d="M0,56.76c13.15-11.68,37.75-14.87,47.45-15.62c20.85-1.62,41.75,1.22,62.2,5.16c43.41,8.37,85.85,20.68,129.83,26.22 c21.05,2.65,42.12,3.47,62.96-1.21c18.31-4.11,38.98-12.97,47.7-30.8C360.39,19.59,342.4,5,322.82,2.25 c-18.69-2.62-37.64,3.81-53.23,13.85c-2.82,1.82-5.87,4.32-8.53,5.85c12.91-10.62,28.31-18.89,45.01-21.3 c17.11-2.48,43.7,1.69,49.46,21.27c5.65,19.17-13.23,36.76-28.31,44.63c-18.02,9.41-39.47,13-59.65,12.81 c-44.06-0.42-88.81-11.18-131.38-21.67C97.79,48.21,42.36,30.73,0,56.76z" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">A secured abode with luxurious apartments. Efficiently managed by experienced personnels in hospitality and tourism services.</p>
              <Link to="#" className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-colors">
                Download Mobile App
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Left Column */}
              <div className="hidden sm:grid grid-cols-2 gap-4">
                <div className="hidden md:block">
                  <img src={new16} alt="Hotel" className="w-full h-48 object-cover rounded-xl" />
                </div>
                <div className="space-y-4">
                  <img src={new15} alt="Hotel" className="w-full h-28 object-cover rounded-xl" />
                  <img src={new11} alt="Hotel" className="w-full h-28 object-cover rounded-xl" />
                </div>
              </div>

              {/* Center Column */}
              <div>
                <img src={new18} alt="Hotel" className="w-full h-64 sm:h-80 object-cover rounded-xl" />
              </div>

              {/* Right Column */}
              <div className="hidden sm:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={new13} alt="Hotel" className="w-full h-28 object-cover rounded-xl" />
                  <img src={new14} alt="Hotel" className="w-full h-28 object-cover rounded-xl" />
                </div>
                <div className="hidden md:block space-y-4">
                  <img src={new17} alt="Hotel" className="w-full h-28 object-cover rounded-xl" />
                  <img src={new19} alt="Hotel" className="w-full h-28 object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We always provide the best for our hotel visitors. We are happy to help you.</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">At Wishden Hotel, we go beyond just offering a place to stay we create experiences that leave lasting memories. From the moment you arrive, our team is dedicated to providing unmatched comfort, attentive service, and a touch of elegance in every detail.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Counter Card */}
              <CounterCard />

              {/* Book Now Card */}
              <div className="relative rounded-xl overflow-hidden h-64">
                <img src={new19} alt="Hotel Room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Link to="/rooms" className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    <Bookmark size={18} className="mr-2" />
                    Book now
                  </Link>
                </div>
              </div>

              {/* Benefits List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className={`flex items-center ${index !== benefits.length - 1 ? "pb-4 border-b border-gray-100" : ""}`}>
                      <benefit.icon size={20} className={`${benefit.color} mr-3`} />
                      <span className="text-gray-700 font-medium">{benefit.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offer Slider */}
        <OfferSlider />

        {/* About Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative">
                <img src={about01} alt="About Wishden Hotels" className="w-full h-80 lg:h-[500px] object-cover rounded-xl" />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Best Holidays Start Here!</h2>
                <p className="text-gray-600 mb-6">At Wishden Hotels, we blend world-class hospitality with modern comfort, ensuring every guest feels at home. From fine dining and secure facilities to elegant spaces designed for relaxation, your unforgettable experience begins here.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index}>
                      <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-3`}>
                        <feature.icon size={22} />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h5>
                      <p className="text-gray-600 text-normal">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter">
          <NewsLetters />
        </section>

        {/* Help & Download Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* 24x7 Help */}
              <div className="rounded-xl p-6 flex items-start ">
                <div className="text-blue-500 mr-4">
                  <Heart size={32} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">24x7 Help</h5>
                  <p className="text-gray-600 text-base">If we fall short of your expectation in any way, let us know</p>
                </div>
              </div>

              {/* Payment Trust */}
              <div className=" rounded-xl p-6 flex items-start">
                <div className="text-blue-500 mr-4">
                  <HandCoins size={32} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Payment Trust</h5>
                  <p className="text-gray-600 text-base">All refunds come with no questions asked guarantee</p>
                </div>
              </div>

              {/* Download App */}
              <div className="md:col-span-2 xl:col-span-1">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Download app</h5>
                <div className="flex gap-4">
                  <a href="#" className="block">
                    <img src={googlePlay} alt="Google Play" className="h-12" />
                  </a>
                  <a href="#" className="block">
                    <img src={appStore} alt="App Store" className="h-12" />
                  </a>
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
