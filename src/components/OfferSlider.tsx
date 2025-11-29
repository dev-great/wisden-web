import { useEffect, useRef } from "react";
import { tns, type TinySliderInstance } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import offer1 from "../assets/images/new/hall.jpg";
import offer2 from "../assets/images/new/garden.jpg";
import offer3 from "../assets/images/new/book.jpg";
import offer4 from "../assets/images/new/bar.jpg";

interface Offer {
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

const offers: Offer[] = [
  {
    img: offer1,
    title: "Unique Banquet Halls",
    subtitle: "Host your special occasions in style",
    link: "#",
  },
  {
    img: offer2,
    title: "Private Garden & Lounge",
    subtitle: "Relax in an exclusive outdoor retreat",
    link: "#",
  },
  {
    img: offer3,
    title: "Book & Enjoy",
    subtitle: "Save 20% on our best available rates",
    link: "#",
  },
  {
    img: offer4,
    title: "Exclusive Bar & Restaurant",
    subtitle: "Stay 3 nights, get extra perks free",
    link: "#",
  },
];

export const OfferSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstance = useRef<TinySliderInstance | null>(null);

  useEffect(() => {
    // Check if slider container exists and has children
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      // Small delay to ensure DOM is fully ready
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
            gutter: 16,
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

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Special Offers</h2>
          <p className="text-gray-600">Discover our exclusive deals and packages</p>
        </div>

        {/* Slider */}
        <div className="offer-slider" dir="ltr">
          <div ref={sliderRef}>
            {offers.map((offer, i) => (
              <div key={i} className="px-2">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="sm:w-1/2">
                      <img src={offer.img} alt={offer.title} className="w-full h-48 sm:h-full object-cover" />
                    </div>
                    {/* Content */}
                    <div className="sm:w-1/2 p-4 flex flex-col justify-center">
                      <h6 className="text-lg font-semibold text-gray-900 mb-1">
                        <a href={offer.link} className="hover:text-amber-500 transition-colors">
                          {offer.title}
                        </a>
                      </h6>
                      <p className="text-gray-600 text-sm">{offer.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
