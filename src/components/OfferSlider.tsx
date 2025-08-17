import { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
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
    link: "#" 
  },
  { 
    img: offer2, 
    title: "Private Garden & Lounge", 
    subtitle: "Relax in an exclusive outdoor retreat", 
    link: "#" 
  },
  { 
    img: offer3, 
    title: "Book & Enjoy", 
    subtitle: "Save 20% on our best available rates", 
    link: "#" 
  },
  { 
    img: offer4, 
    title: "Exclusive Bar & Restaurant", 
    subtitle: "Stay 3 nights, get extra perks free", 
    link: "#" 
  },
];

export const OfferSlider = () => {
  useEffect(() => {
    tns({
      container: ".tiny-slider-inner",
      items: 3,
      slideBy: "page",
    autoplay: true,
    controls: false,   // Tiny Slider generates arrows
    nav: false,
    autoplayButton: false, // remove the play/pause buttons
    autoplayButtonOutput: false,
      gutter: 10,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
    });
  }, []);

  return (
    <section className="pb-4 pb-lg-6">
          <div className="container">
              
        <div className="tiny-slider arrow-round arrow-blur arrow-hover" dir="ltr">
          <div className="tiny-slider-inner">
            {offers.map((offer, i) => (
              <div key={i}>
                <div className="card border rounded-3 overflow-hidden">
                  <div className="row g-0 align-items-center">
                    <div className="col-sm-6">
                      <img src={offer.img} className="card-img rounded-0" alt="" />
                    </div>
                    <div className="col-sm-6">
                      <div className="card-body px-3">
                        <h6 className="card-title">
                          <a href={offer.link} className="stretched-link">{offer.title}</a>
                        </h6>
                        <p className="mb-0">{offer.subtitle}</p>
                      </div>
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
}
