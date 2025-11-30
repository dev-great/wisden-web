import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { OfferSlider } from "../components/OfferSlider";
import { NewsLetters } from "../components/NewsLetters";
import CounterCard from "../components/CounterCard";
import { ArrowRight, Bookmark, DollarSign, CreditCard, Award, Wifi, Tag, Utensils, Lightbulb, ShieldCheck, UserCheck, Heart, HandCoins, Play, Star, MapPin, CheckCircle2 } from "lucide-react";

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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Home = () => {
  const benefits = [
    { icon: DollarSign, label: "Best Rate Guaranteed", color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: CreditCard, label: "Online Payment", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Award, label: "Exclusive Members Rewards", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Wifi, label: "WIFI Access", color: "text-purple-500", bg: "bg-purple-50" },
    { icon: Tag, label: "No Hidden Changes", color: "text-rose-500", bg: "bg-rose-50" },
  ];

  const features = [
    {
      icon: Utensils,
      title: "Dining Room & Bar",
      description: "The restaurant is an ideal meeting place where both local and international guests alike enjoy meals in a cozy and relaxing atmosphere.",
      color: "from-emerald-400 to-emerald-600",
      iconBg: "bg-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Power Sources",
      description: "The hotel has multiple options of power supply such as Solar, Generators and Public power supply (JED PLC).",
      color: "from-amber-400 to-amber-600",
      iconBg: "bg-amber-500",
    },
    {
      icon: ShieldCheck,
      title: "Secured CCTV & Keys",
      description: "The hotel has CCTV cameras and electronic keys on every floor making it super secured for guests.",
      color: "from-rose-400 to-rose-600",
      iconBg: "bg-rose-500",
    },
    {
      icon: UserCheck,
      title: "Trained Security",
      description: "Wishden Hotel has a good number of security personnel safeguarding the gates and always on ground.",
      color: "from-blue-400 to-blue-600",
      iconBg: "bg-blue-500",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Luxury Rooms" },
    { value: "10K+", label: "Happy Guests" },
    { value: "4.9", label: "Guest Rating", icon: Star },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <TawkWidget />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-8 sm:pt-12 pb-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40 -z-10"></div>

          <div className="container mx-auto px-4 pb-12">
            <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" animate="visible" variants={staggerContainer}>
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
                <MapPin size={16} />
                <span>Premium Hotel in City Center</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Comfort &{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Elegance</span>
                  <motion.svg className="absolute -bottom-2 left-0 w-full -z-10" viewBox="0 0 200 12" preserveAspectRatio="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                    <motion.path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#60A5FA" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                <br />
                with Wishden Hotels
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                A secured abode with luxurious apartments. Efficiently managed by experienced personnels in hospitality and tourism services.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/rooms" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  Book Your Stay
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-6 py-4 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center mr-3 group">
                    <Play size={18} className="text-blue-600 ml-1" />
                  </div>
                  Watch Video
                </button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-100">
                {stats.map((stat, index) => (
                  <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }}>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</span>
                      {stat.icon && <stat.icon size={20} className="text-amber-400 fill-amber-400" />}
                    </div>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div className="container mx-auto px-4 overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Left Column */}
              <motion.div variants={fadeInLeft} className="hidden sm:grid grid-cols-2 gap-4">
                <div className="hidden md:block">
                  <motion.img src={new16} alt="Hotel" className="w-full h-48 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                </div>
                <div className="space-y-4">
                  <motion.img src={new15} alt="Hotel" className="w-full h-28 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                  <motion.img src={new11} alt="Hotel" className="w-full h-28 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                </div>
              </motion.div>

              {/* Center Column - Main Image */}
              <motion.div variants={scaleIn} className="relative">
                <motion.img src={new18} alt="Hotel" className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} />
                {/* Floating card */}
                <motion.div className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl p-4 shadow-xl" {...floatAnimation}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-gray-900">
                        $99<span className="text-sm font-normal text-gray-500">/night</span>
                      </p>
                    </div>
                    <Link to="/rooms" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      View Rooms
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column */}
              <motion.div variants={fadeInRight} className="hidden sm:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.img src={new13} alt="Hotel" className="w-full h-28 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                  <motion.img src={new14} alt="Hotel" className="w-full h-28 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                </div>
                <div className="hidden md:block space-y-4">
                  <motion.img src={new17} alt="Hotel" className="w-full h-28 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                  <motion.img src={new19} alt="Hotel" className="w-full h-28 object-cover rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <motion.span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4" whileHover={{ scale: 1.05 }}>
                <CheckCircle2 size={16} />
                Our Services
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                We Always Provide the
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Best For Our Guests</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">At Wishden Hotel, we go beyond just offering a place to stay — we create experiences that leave lasting memories.</p>
            </motion.div>

            {/* Main Grid */}
            <motion.div className="grid grid-cols-1 lg:grid-cols-11 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {/* Counter Card - Takes 5 columns */}
              <motion.div variants={scaleIn} className="lg:col-span-4">
                <CounterCard />
              </motion.div>

              {/* Right Section - Takes 7 columns */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Book Now Card */}
                <motion.div variants={scaleIn} className="relative rounded-2xl overflow-hidden h-72 md:h-auto group cursor-pointer" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <img src={new19} alt="Hotel Room" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    {/* Floating badge */}
                    <motion.div className="absolute top-4 right-4 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/30" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      🔥 Hot Deal
                    </motion.div>

                    <p className="text-white/80 text-sm mb-1">Limited Time Offer</p>
                    <p className="text-white text-2xl font-bold mb-4">
                      Save up to <span className="text-amber-400">30%</span> Today
                    </p>
                    <Link to="/rooms" className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-blue-50 transition-all group/btn">
                      <Bookmark size={18} className="mr-2" />
                      Book Now
                      <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </Link>
                  </div>
                </motion.div>

                {/* Benefits Card */}
                <motion.div variants={scaleIn} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">Why Choose Us</h3>
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">5 Reasons</span>
                  </div>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.li key={index} className={`flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group ${index !== benefits.length - 1 ? "" : ""}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ x: 5 }}>
                        <div className={`w-11 h-11 ${benefit.bg} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                          <benefit.icon size={20} className={benefit.color} />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-800 font-semibold text-sm block">{benefit.label}</span>
                          <span className="text-gray-400 text-xs">{benefit.description}</span>
                        </div>
                        <ArrowRight size={16} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Offer Slider */}
        <OfferSlider />

        {/* About Section */}
        <section className="py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
                <div className="relative z-10">
                  <motion.img src={about01} alt="About Wishden Hotels" className="w-full h-80 lg:h-[500px] object-cover rounded-2xl shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} />

                  {/* Experience badge */}
                  <motion.div className="absolute -right-6 -bottom-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl" {...floatAnimation}>
                    <p className="text-4xl font-bold">15+</p>
                    <p className="text-sm opacity-90">
                      Years of
                      <br />
                      Excellence
                    </p>
                  </motion.div>
                </div>

                {/* Background decoration */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
              </motion.div>

              {/* Content */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
                <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-600 text-sm font-semibold rounded-full mb-4">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Best Holidays
                  <br />
                  <span className="text-blue-600">Start Here!</span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">At Wishden Hotels, we blend world-class hospitality with modern comfort, ensuring every guest feels at home. From fine dining and secure facilities to elegant spaces designed for relaxation.</p>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={staggerContainer}>
                  {features.map((feature, index) => (
                    <motion.div key={index} className="group p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer" variants={fadeInUp} whileHover={{ y: -5 }}>
                      <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <feature.icon size={24} className="text-white" />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter">
          <NewsLetters />
        </section>

        {/* Help & Download Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {/* 24x7 Help */}
              <motion.div variants={fadeInUp} className="flex items-start p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors" whileHover={{ y: -5 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-2">24x7 Help</h5>
                  <p className="text-gray-400">If we fall short of your expectation in any way, let us know</p>
                </div>
              </motion.div>

              {/* Payment Trust */}
              <motion.div variants={fadeInUp} className="flex items-start p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors" whileHover={{ y: -5 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <HandCoins size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-2">Payment Trust</h5>
                  <p className="text-gray-400">All refunds come with no questions asked guarantee</p>
                </div>
              </motion.div>

              {/* Download App */}
              <motion.div variants={fadeInUp} className="md:col-span-2 xl:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700" whileHover={{ scale: 1.02 }}>
                <h5 className="text-xl font-semibold mb-2">Download Our App</h5>
                <p className="text-blue-100 text-sm mb-4">Get exclusive deals and manage your bookings on the go</p>
                <div className="flex gap-4">
                  <motion.a href="#" className="block hover:opacity-90 transition-opacity" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img src={googlePlay} alt="Google Play" className="h-12" />
                  </motion.a>
                  <motion.a href="#" className="block hover:opacity-90 transition-opacity" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img src={appStore} alt="App Store" className="h-12" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
