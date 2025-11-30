import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { tns, type TinySliderInstance } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import { ArrowRight, Sparkles } from "lucide-react";
import offer1 from "../assets/images/new/hall.jpg";
import offer2 from "../assets/images/new/garden.jpg";
import offer3 from "../assets/images/new/book.jpg";
import offer4 from "../assets/images/new/bar.jpg";

interface Offer {
  img: string;
  title: string;
  subtitle: string;
  link: string;
  badge?: string;
}

const offers: Offer[] = [
  {
    img: offer1,
    title: "Unique Banquet Halls",
    subtitle: "Host your special occasions in style with our elegant venues",
    link: "#",
    badge: "Popular",
  },
  {
    img: offer2,
    title: "Private Garden & Lounge",
    subtitle: "Relax in an exclusive outdoor retreat surrounded by nature",
    link: "#",
    badge: "New",
  },
  {
    img: offer3,
    title: "Book & Enjoy",
    subtitle: "Save 20% on our best available rates when you book direct",
    link: "#",
    badge: "20% Off",
  },
  {
    img: offer4,
    title: "Exclusive Bar & Restaurant",
    subtitle: "Stay 3 nights, get extra perks and complimentary dining",
    link: "#",
    badge: "Best Value",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const OfferSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstance = useRef<TinySliderInstance | null>(null);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const timer = setTimeout(() => {
        if (sliderRef.current && !sliderInstance.current) {
          sliderInstance.current = tns({
            container: sliderRef.current,
            items: 3,
            slideBy: "page",
            autoplay: true,
            controls: false,
            nav: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            gutter: 24,
            speed: 500,
            autoplayTimeout: 4000,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1200: { items: 3 },
            },
          });
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        if (sliderInstance.current) {
          sliderInstance.current.destroy();
          sliderInstance.current = null;
        }
      };
    }
  }, []);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-gradient-to-r from-amber-500 to-orange-500";
      case "New":
        return "bg-gradient-to-r from-emerald-500 to-teal-500";
      case "20% Off":
        return "bg-gradient-to-r from-rose-500 to-pink-500";
      case "Best Value":
        return "bg-gradient-to-r from-blue-500 to-indigo-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-blue-600 text-sm font-medium mb-4 shadow-sm" whileHover={{ scale: 1.05 }}>
            <Sparkles size={16} className="text-amber-500" />
            <span>Limited Time Offers</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Special Offers & <span className="text-blue-600">Packages</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our exclusive deals and make your stay even more memorable</p>
        </motion.div>

        {/* Slider */}
        <motion.div className="offer-slider" dir="ltr" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div ref={sliderRef}>
            {offers.map((offer, i) => (
              <div key={i} className="px-2">
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  {/* Row Layout - Image Left, Content Right */}
                  <div className="flex flex-col sm:flex-row">
                    {/* Image - Left Side */}
                    <div className="relative sm:w-1/2 overflow-hidden">
                      <img src={offer.img} alt={offer.title} className="w-full h-48 sm:h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Badge */}
                      {offer.badge && <div className={`absolute top-3 left-3 px-2.5 py-1 ${getBadgeColor(offer.badge)} text-white text-xs font-semibold rounded-full shadow-lg`}>{offer.badge}</div>}
                    </div>

                    {/* Content - Right Side */}
                    <div className="sm:w-1/2 p-5 flex flex-col justify-center">
                      <h6 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        <a href={offer.link}>{offer.title}</a>
                      </h6>
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{offer.subtitle}</p>
                      <a href={offer.link} className="inline-flex items-center text-blue-600 font-semibold text-sm group/link w-fit">
                        Learn More
                        <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <motion.a href="#" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-blue-600" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            View All Offers
            <ArrowRight size={18} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
