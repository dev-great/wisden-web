import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { OfferSlider } from "../components/OfferSlider";
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
import { NewsLetters } from "../components/NewsLetters";
import CounterCard from "../components/CounterCard";

export const Home = () => {  
    return (
        <div>
            <div className="back-top"></div>
      <Header/>
        <main>
            <section className="pt-4 pt-sm-5">
            <div className="container pb-6">
                <div className="row">
                    <div className="col-lg-9 text-center mx-auto">
                        <h1>Discover Comfort & Elegance with
                            <span className="position-relative z-index-9"> Wishden Hotels
                                <span
                                    className="position-absolute top-50 start-50 translate-middle z-index-n1 d-none d-sm-block">
                                    <svg className="fill-info" width="356.55px" height="79.36px" viewBox="0 0 356.55 79.36">
                                        <path
                                            d="M0,56.76c13.15-11.68,37.75-14.87,47.45-15.62c20.85-1.62,41.75,1.22,62.2,5.16c43.41,8.37,85.85,20.68,129.83,26.22 c21.05,2.65,42.12,3.47,62.96-1.21c18.31-4.11,38.98-12.97,47.7-30.8C360.39,19.59,342.4,5,322.82,2.25 c-18.69-2.62-37.64,3.81-53.23,13.85c-2.82,1.82-5.87,4.32-8.53,5.85c12.91-10.62,28.31-18.89,45.01-21.3 c17.11-2.48,43.7,1.69,49.46,21.27c5.65,19.17-13.23,36.76-28.31,44.63c-18.02,9.41-39.47,13-59.65,12.81 c-44.06-0.42-88.81-11.18-131.38-21.67C97.79,48.21,42.36,30.73,0,56.76z" />
                                    </svg>
                                </span>
                            </span>
                        </h1>
                        <p className="mb-3">A secured abode with luxurious apartments. Efficiently managed by experienced personnels in hospitality and tourism services.</p>
                        <a href="#" className="btn btn-lg btn-primary-soft me-2 mb-0">Download Mobile App<i
                                className="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div> 
            </div>

            <div className="container-fluid overflow-hidden">
                <div className="row g-4 g-lg-3 justify-content-lg-between">

                    <div className="col-6 col-sm-4 position-relative ms-lg-n5">

                        <figure className="position-absolute top-0 end-0 me-n8 mt-4 z-index-1">
                            <svg width="222.93px" height="172.15px">
                                <path className="fill-primary"
                                    d="M0,152.3C25.31,99.13,142.25,26.36,187.95,4.96c21.41-10.03,48.53-5.45,27.23,19.21 c-11.03,12.77-28.92,28.13-37.16,35.18c-20.39,17.45-46.34,42.82-64.05,67.05c-13.98,19.11-10.02,14.46,6.64,0.11 c13.57-11.69,29.17-25.12,40.65-32.05c3.52-2.13,6.77-3.66,9.64-4.43c9.07-2.42,13,3.08,9.55,10.77 c-7.7,17.16-22.46,31.32-31.36,47.7c-4.97,9.14-13.24,28.13,7.7,16.79c3.8-2.05,7.36-4.37,9.99-5.45l0.79,1.35 c-2.43,0.88-36.48,26.3-27.52-3.45c5.4-17.94,19.83-32.81,29.27-48.73c5.34-9,8.21-13.61-3.32-6.64 c-10.7,6.46-26.03,19.67-39.37,31.15c-15.56,13.4-28.68,24.69-33.81,21.53c-11.43-7.04,27.26-51,35.01-59.53 c14.77-16.28,30.38-31.21,45.8-44.61c6.33-5.48,18.43-16.43,28.35-25.25c11.62-10.34,15.39-16.14-5.89-6.18 C152.63,39.83,42.78,111.18,18.54,162.1L0,152.3z" />
                            </svg>
                        </figure>

                        <div className="row g-xl-7 align-items-center">
                            <div className="col-6 d-none d-md-block">
                                <a data-glightbox data-gallery="gallery" href={new16}>
                                    <div className="card card-element-hover card-overlay-hover overflow-hidden">
                                     
                                        <img src={new16} className="rounded-3" style={{ height: "40vh", objectFit: "cover" }} alt=""/>
                                       
                                        <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 mt-lg-8">
                                
                                <a data-glightbox data-gallery="gallery" href={new15}>
                                    <div className="card card-element-hover card-overlay-hover overflow-hidden mb-4 mb-xl-7">
                                     
                                        <img src={new15} className="rounded-3" alt=""/>
                                       
                                        <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>

                                
                                <a data-glightbox data-gallery="gallery" href={new11}>
                                    <div className="card card-element-hover card-overlay-hover overflow-hidden">
                                     
                                        <img src={new11} className="rounded-3" alt=""/>
                                       
                                        <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                 
                    <div className="col-sm-4 position-relative order-2 order-sm-1 z-index-9">
                        
                        <a data-glightbox data-gallery="gallery" href={new18}>
                            <div className="card card-element-hover card-overlay-hover overflow-hidden">
                             
                                <img src={new18} className="rounded-3" style={{ height: "50vh", objectFit: "cover" }}   alt=""/>
                               
                                <div className="hover-element w-100 h-100">
                                    <i
                                        className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-sm-4 position-relative me-lg-n5 order-1">
                        <figure className="position-absolute end-0 top-0 d-none d-md-block">
                            <svg height="400" className="fill-primary opacity-2" viewBox="0 0 340 340">
                                <circle cx="194.2" cy="2.2" r="2.2"></circle>
                                <circle cx="2.2" cy="2.2" r="2.2"></circle>
                                <circle cx="218.2" cy="2.2" r="2.2"></circle>
                                <circle cx="26.2" cy="2.2" r="2.2"></circle>
                                <circle cx="242.2" cy="2.2" r="2.2"></circle>
                                <circle cx="50.2" cy="2.2" r="2.2"></circle>
                                <circle cx="266.2" cy="2.2" r="2.2"></circle>
                                <circle cx="74.2" cy="2.2" r="2.2"></circle>
                                <circle cx="290.2" cy="2.2" r="2.2"></circle>
                                <circle cx="98.2" cy="2.2" r="2.2"></circle>
                                <circle cx="314.2" cy="2.2" r="2.2"></circle>
                                <circle cx="122.2" cy="2.2" r="2.2"></circle>
                                <circle cx="338.2" cy="2.2" r="2.2"></circle>
                                <circle cx="146.2" cy="2.2" r="2.2"></circle>
                                <circle cx="170.2" cy="2.2" r="2.2"></circle>
                                <circle cx="194.2" cy="26.2" r="2.2"></circle>
                                <circle cx="2.2" cy="26.2" r="2.2"></circle>
                                <circle cx="218.2" cy="26.2" r="2.2"></circle>
                                <circle cx="26.2" cy="26.2" r="2.2"></circle>
                                <circle cx="242.2" cy="26.2" r="2.2"></circle>
                                <circle cx="50.2" cy="26.2" r="2.2"></circle>
                                <circle cx="266.2" cy="26.2" r="2.2"></circle>
                                <circle cx="74.2" cy="26.2" r="2.2"></circle>
                                <circle cx="290.2" cy="26.2" r="2.2"></circle>
                                <circle cx="98.2" cy="26.2" r="2.2"></circle>
                                <circle cx="314.2" cy="26.2" r="2.2"></circle>
                                <circle cx="122.2" cy="26.2" r="2.2"></circle>
                                <circle cx="338.2" cy="26.2" r="2.2"></circle>
                                <circle cx="146.2" cy="26.2" r="2.2"></circle>
                                <circle cx="170.2" cy="26.2" r="2.2"></circle>
                                <circle cx="194.2" cy="50.2" r="2.2"></circle>
                                <circle cx="2.2" cy="50.2" r="2.2"></circle>
                                <circle cx="218.2" cy="50.2" r="2.2"></circle>
                                <circle cx="26.2" cy="50.2" r="2.2"></circle>
                                <circle cx="242.2" cy="50.2" r="2.2"></circle>
                                <circle cx="50.2" cy="50.2" r="2.2"></circle>
                                <circle cx="266.2" cy="50.2" r="2.2"></circle>
                                <circle cx="74.2" cy="50.2" r="2.2"></circle>
                                <circle cx="290.2" cy="50.2" r="2.2"></circle>
                                <circle cx="98.2" cy="50.2" r="2.2"></circle>
                                <circle cx="314.2" cy="50.2" r="2.2"></circle>
                                <circle cx="122.2" cy="50.2" r="2.2"></circle>
                                <circle cx="338.2" cy="50.2" r="2.2"></circle>
                                <circle cx="146.2" cy="50.2" r="2.2"></circle>
                                <circle cx="170.2" cy="50.2" r="2.2"></circle>
                                <circle cx="194.2" cy="74.2" r="2.2"></circle>
                                <circle cx="2.2" cy="74.2" r="2.2"></circle>
                                <circle cx="218.2" cy="74.2" r="2.2"></circle>
                                <circle cx="26.2" cy="74.2" r="2.2"></circle>
                                <circle cx="242.2" cy="74.2" r="2.2"></circle>
                                <circle cx="50.2" cy="74.2" r="2.2"></circle>
                                <circle cx="266.2" cy="74.2" r="2.2"></circle>
                                <circle cx="74.2" cy="74.2" r="2.2"></circle>
                                <circle cx="290.2" cy="74.2" r="2.2"></circle>
                                <circle cx="98.2" cy="74.2" r="2.2"></circle>
                                <circle cx="314.2" cy="74.2" r="2.2"></circle>
                                <circle cx="122.2" cy="74.2" r="2.2"></circle>
                                <circle cx="338.2" cy="74.2" r="2.2"></circle>
                                <circle cx="146.2" cy="74.2" r="2.2"></circle>
                                <circle cx="170.2" cy="74.2" r="2.2"></circle>
                                <circle cx="194.2" cy="98.2" r="2.2"></circle>
                                <circle cx="2.2" cy="98.2" r="2.2"></circle>
                                <circle cx="218.2" cy="98.2" r="2.2"></circle>
                                <circle cx="26.2" cy="98.2" r="2.2"></circle>
                                <circle cx="242.2" cy="98.2" r="2.2"></circle>
                                <circle cx="50.2" cy="98.2" r="2.2"></circle>
                                <circle cx="266.2" cy="98.2" r="2.2"></circle>
                                <circle cx="74.2" cy="98.2" r="2.2"></circle>
                                <circle cx="290.2" cy="98.2" r="2.2"></circle>
                                <circle cx="98.2" cy="98.2" r="2.2"></circle>
                                <circle cx="314.2" cy="98.2" r="2.2"></circle>
                                <circle cx="122.2" cy="98.2" r="2.2"></circle>
                                <circle cx="338.2" cy="98.2" r="2.2"></circle>
                                <circle cx="146.2" cy="98.2" r="2.2"></circle>
                                <circle cx="170.2" cy="98.2" r="2.2"></circle>
                                <circle cx="194.2" cy="122.2" r="2.2"></circle>
                                <circle cx="2.2" cy="122.2" r="2.2"></circle>
                                <circle cx="218.2" cy="122.2" r="2.2"></circle>
                                <circle cx="26.2" cy="122.2" r="2.2"></circle>
                                <circle cx="242.2" cy="122.2" r="2.2"></circle>
                                <circle cx="50.2" cy="122.2" r="2.2"></circle>
                                <circle cx="266.2" cy="122.2" r="2.2"></circle>
                                <circle cx="74.2" cy="122.2" r="2.2"></circle>
                                <circle cx="290.2" cy="122.2" r="2.2"></circle>
                                <circle cx="98.2" cy="122.2" r="2.2"></circle>
                                <circle cx="314.2" cy="122.2" r="2.2"></circle>
                                <circle cx="122.2" cy="122.2" r="2.2"></circle>
                                <circle cx="338.2" cy="122.2" r="2.2"></circle>
                                <circle cx="146.2" cy="122.2" r="2.2"></circle>
                                <circle cx="170.2" cy="122.2" r="2.2"></circle>
                                <circle cx="194.2" cy="146.2" r="2.2"></circle>
                                <circle cx="2.2" cy="146.2" r="2.2"></circle>
                                <circle cx="218.2" cy="146.2" r="2.2"></circle>
                                <circle cx="26.2" cy="146.2" r="2.2"></circle>
                                <circle cx="242.2" cy="146.2" r="2.2"></circle>
                                <circle cx="50.2" cy="146.2" r="2.2"></circle>
                                <circle cx="266.2" cy="146.2" r="2.2"></circle>
                                <circle cx="74.2" cy="146.2" r="2.2"></circle>
                                <circle cx="290.2" cy="146.2" r="2.2"></circle>
                                <circle cx="98.2" cy="146.2" r="2.2"></circle>
                                <circle cx="314.2" cy="146.2" r="2.2"></circle>
                                <circle cx="122.2" cy="146.2" r="2.2"></circle>
                                <circle cx="338.2" cy="146.2" r="2.2"></circle>
                                <circle cx="146.2" cy="146.2" r="2.2"></circle>
                                <circle cx="170.2" cy="146.2" r="2.2"></circle>
                                <circle cx="194.2" cy="170.2" r="2.2"></circle>
                                <circle cx="2.2" cy="170.2" r="2.2"></circle>
                                <circle cx="218.2" cy="170.2" r="2.2"></circle>
                                <circle cx="26.2" cy="170.2" r="2.2"></circle>
                                <circle cx="242.2" cy="170.2" r="2.2"></circle>
                                <circle cx="50.2" cy="170.2" r="2.2"></circle>
                                <circle cx="266.2" cy="170.2" r="2.2"></circle>
                                <circle cx="74.2" cy="170.2" r="2.2"></circle>
                                <circle cx="290.2" cy="170.2" r="2.2"></circle>
                                <circle cx="98.2" cy="170.2" r="2.2"></circle>
                                <circle cx="314.2" cy="170.2" r="2.2"></circle>
                                <circle cx="122.2" cy="170.2" r="2.2"></circle>
                                <circle cx="338.2" cy="170.2" r="2.2"></circle>
                                <circle cx="146.2" cy="170.2" r="2.2"></circle>
                                <circle cx="170.2" cy="170.2" r="2.2"></circle>
                                <circle cx="194.2" cy="194.2" r="2.2"></circle>
                                <circle cx="2.2" cy="194.2" r="2.2"></circle>
                                <circle cx="218.2" cy="194.2" r="2.2"></circle>
                                <circle cx="26.2" cy="194.2" r="2.2"></circle>
                                <circle cx="242.2" cy="194.2" r="2.2"></circle>
                                <circle cx="50.2" cy="194.2" r="2.2"></circle>
                                <circle cx="266.2" cy="194.2" r="2.2"></circle>
                                <circle cx="74.2" cy="194.2" r="2.2"></circle>
                                <circle cx="290.2" cy="194.2" r="2.2"></circle>
                                <circle cx="98.2" cy="194.2" r="2.2"></circle>
                                <circle cx="314.2" cy="194.2" r="2.2"></circle>
                                <circle cx="122.2" cy="194.2" r="2.2"></circle>
                                <circle cx="338.2" cy="194.2" r="2.2"></circle>
                                <circle cx="146.2" cy="194.2" r="2.2"></circle>
                                <circle cx="170.2" cy="194.2" r="2.2"></circle>
                                <circle cx="194.2" cy="218.2" r="2.2"></circle>
                                <circle cx="2.2" cy="218.2" r="2.2"></circle>
                                <circle cx="218.2" cy="218.2" r="2.2"></circle>
                                <circle cx="26.2" cy="218.2" r="2.2"></circle>
                                <circle cx="242.2" cy="218.2" r="2.2"></circle>
                                <circle cx="50.2" cy="218.2" r="2.2"></circle>
                                <circle cx="266.2" cy="218.2" r="2.2"></circle>
                                <circle cx="74.2" cy="218.2" r="2.2"></circle>
                                <circle cx="290.2" cy="218.2" r="2.2"></circle>
                                <circle cx="98.2" cy="218.2" r="2.2"></circle>
                                <circle cx="314.2" cy="218.2" r="2.2"></circle>
                                <circle cx="122.2" cy="218.2" r="2.2"></circle>
                                <circle cx="338.2" cy="218.2" r="2.2"></circle>
                                <circle cx="146.2" cy="218.2" r="2.2"></circle>
                                <circle cx="170.2" cy="218.2" r="2.2"></circle>
                                <circle cx="194.2" cy="242.2" r="2.2"></circle>
                                <circle cx="2.2" cy="242.2" r="2.2"></circle>
                                <circle cx="218.2" cy="242.2" r="2.2"></circle>
                                <circle cx="26.2" cy="242.2" r="2.2"></circle>
                                <circle cx="242.2" cy="242.2" r="2.2"></circle>
                                <circle cx="50.2" cy="242.2" r="2.2"></circle>
                                <circle cx="266.2" cy="242.2" r="2.2"></circle>
                                <circle cx="74.2" cy="242.2" r="2.2"></circle>
                                <circle cx="290.2" cy="242.2" r="2.2"></circle>
                                <circle cx="98.2" cy="242.2" r="2.2"></circle>
                                <circle cx="314.2" cy="242.2" r="2.2"></circle>
                                <circle cx="122.2" cy="242.2" r="2.2"></circle>
                                <circle cx="338.2" cy="242.2" r="2.2"></circle>
                                <circle cx="146.2" cy="242.2" r="2.2"></circle>
                                <circle cx="170.2" cy="242.2" r="2.2"></circle>
                                <circle cx="194.2" cy="266.2" r="2.2"></circle>
                                <circle cx="2.2" cy="266.2" r="2.2"></circle>
                                <circle cx="218.2" cy="266.2" r="2.2"></circle>
                                <circle cx="26.2" cy="266.2" r="2.2"></circle>
                                <circle cx="242.2" cy="266.2" r="2.2"></circle>
                                <circle cx="50.2" cy="266.2" r="2.2"></circle>
                                <circle cx="266.2" cy="266.2" r="2.2"></circle>
                                <circle cx="74.2" cy="266.2" r="2.2"></circle>
                                <circle cx="290.2" cy="266.2" r="2.2"></circle>
                                <circle cx="98.2" cy="266.2" r="2.2"></circle>
                                <circle cx="314.2" cy="266.2" r="2.2"></circle>
                                <circle cx="122.2" cy="266.2" r="2.2"></circle>
                                <circle cx="338.2" cy="266.2" r="2.2"></circle>
                                <circle cx="146.2" cy="266.2" r="2.2"></circle>
                                <circle cx="170.2" cy="266.2" r="2.2"></circle>
                                <circle cx="194.2" cy="290.2" r="2.2"></circle>
                                <circle cx="2.2" cy="290.2" r="2.2"></circle>
                                <circle cx="218.2" cy="290.2" r="2.2"></circle>
                                <circle cx="26.2" cy="290.2" r="2.2"></circle>
                                <circle cx="242.2" cy="290.2" r="2.2"></circle>
                                <circle cx="50.2" cy="290.2" r="2.2"></circle>
                                <circle cx="266.2" cy="290.2" r="2.2"></circle>
                                <circle cx="74.2" cy="290.2" r="2.2"></circle>
                                <circle cx="290.2" cy="290.2" r="2.2"></circle>
                                <circle cx="98.2" cy="290.2" r="2.2"></circle>
                                <circle cx="314.2" cy="290.2" r="2.2"></circle>
                                <circle cx="122.2" cy="290.2" r="2.2"></circle>
                                <circle cx="338.2" cy="290.2" r="2.2"></circle>
                                <circle cx="146.2" cy="290.2" r="2.2"></circle>
                                <circle cx="170.2" cy="290.2" r="2.2"></circle>
                                <circle cx="194.2" cy="314.2" r="2.2"></circle>
                                <circle cx="2.2" cy="314.2" r="2.2"></circle>
                                <circle cx="218.2" cy="314.2" r="2.2"></circle>
                                <circle cx="26.2" cy="314.2" r="2.2"></circle>
                                <circle cx="242.2" cy="314.2" r="2.2"></circle>
                                <circle cx="50.2" cy="314.2" r="2.2"></circle>
                                <circle cx="266.2" cy="314.2" r="2.2"></circle>
                                <circle cx="74.2" cy="314.2" r="2.2"></circle>
                                <circle cx="290.2" cy="314.2" r="2.2"></circle>
                                <circle cx="98.2" cy="314.2" r="2.2"></circle>
                                <circle cx="314.2" cy="314.2" r="2.2"></circle>
                                <circle cx="122.2" cy="314.2" r="2.2"></circle>
                                <circle cx="338.2" cy="314.2" r="2.2"></circle>
                                <circle cx="146.2" cy="314.2" r="2.2"></circle>
                                <circle cx="170.2" cy="314.2" r="2.2"></circle>
                                <circle cx="194.2" cy="338.2" r="2.2"></circle>
                                <circle cx="2.2" cy="338.2" r="2.2"></circle>
                                <circle cx="218.2" cy="338.2" r="2.2"></circle>
                                <circle cx="26.2" cy="338.2" r="2.2"></circle>
                                <circle cx="242.2" cy="338.2" r="2.2"></circle>
                                <circle cx="50.2" cy="338.2" r="2.2"></circle>
                                <circle cx="266.2" cy="338.2" r="2.2"></circle>
                                <circle cx="74.2" cy="338.2" r="2.2"></circle>
                                <circle cx="290.2" cy="338.2" r="2.2"></circle>
                                <circle cx="98.2" cy="338.2" r="2.2"></circle>
                                <circle cx="314.2" cy="338.2" r="2.2"></circle>
                                <circle cx="122.2" cy="338.2" r="2.2"></circle>
                                <circle cx="338.2" cy="338.2" r="2.2"></circle>
                                <circle cx="146.2" cy="338.2" r="2.2"></circle>
                                <circle cx="170.2" cy="338.2" r="2.2"></circle>
                            </svg>
                        </figure>

                        <div className="row g-xl-7 position-relative">
                            <div className="col-md-6 mt-lg-8">
                                <a data-glightbox data-gallery="gallery" href={new13}>
                                    <div className="card overflow-hidden mb-4 mb-xl-7">
                                     
                                        <img src={new13} className="rounded-3" alt=""/>
                                       
                                         <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>

                                
                                <a data-glightbox data-gallery="gallery" href={new14}>
                                    <div className="card card-element-hover card-overlay-hover overflow-hidden">
                                     
                                        <img src={new14} className="rounded-3" alt=""/>
                                       
                                        <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 d-none d-md-block">
                                
                                <a data-glightbox data-gallery="gallery" href={new17}>
                                    <div className="card card-element-hover card-overlay-hover overflow-hidden mb-4 mb-xl-7">
                                     
                                        <img src={new17} className="rounded-3" alt=""/>
                                       
                                        <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>

                                
                                <a data-glightbox data-gallery="gallery" href={new19}>
                                    <div className="card card-element-hover card-overlay-hover overflow-hidden">
                                     
                                        <img src={new19} className="rounded-3" alt=""/>
                                       
                                        <div className="hover-element w-100 h-100">
                                            <i
                                                className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle new-dark rounded-1 p-2 lh-1"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
                </section>

            <section className="py-0 py-lg-7">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 pb-6 text-center">
                            <h2 className="pb-3">We always provide the best for our hotel visitors. We are happy to help you.</h2>
                            <p className="mb-0">At Wishden Hotel, we go beyond just offering a place to stay we create experiences that leave lasting memories. From the moment you arrive, our team is dedicated to providing unmatched comfort, attentive service, and a touch of elegance in every detail. Your comfort and happiness are our top priority.</p>
                        </div>
                    </div>

                        <div className="row g-4">
                            
                        <CounterCard/>

                       
                        <div className="col-md-6 col-xl-4">
                            <div className="card  overflow-hidden">
                                
                                <img src={new19} className="rounded-3" style={{ height: "30vh", objectFit: "cover" }}  alt=""/>
                                
                                <div className="w-100 h-100">
                                    <button className="btn btn-dark position-absolute top-50 start-50 translate-middle mb-0"
                                        data-bs-toggle="modal" data-bs-target="#map360">
                                        <i className="bi bi-bookmark-check me-2"></i>Book now
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-xl-4">
                            <ul className="list-group list-group-borderless">
                                <li className="list-group-item py-3">
                                    <h6 className="mb-0 fw-normal">
                                        <i className="bi bi-cash-coin fa-fw text-info me-2"></i>Best Rate Guaranteed
                                    </h6>
                                </li>

                                <li className="list-group-item py-3">
                                    <h6 className="mb-0 fw-normal">
                                        <i className="bi bi-credit-card-2-back fa-fw text-warning me-2"></i>Online Payment
                                    </h6>
                                </li>

                                <li className="list-group-item py-3">
                                    <h6 className="mb-0 fw-normal">
                                        <i className="bi bi-wallet fa-fw text-success me-2"></i>Exclusive Members Rewards
                                    </h6>
                                </li>

                                <li className="list-group-item py-3">
                                    <h6 className="mb-0 fw-normal">
                                        <i className="bi bi-wifi fa-fw text-danger me-2"></i>WIFI Access
                                    </h6>
                                </li>

                                <li className="list-group-item pt-3 pb-0">
                                    <h6 className="mb-0 fw-normal">
                                        <i className="bi bi-tags fa-fw text-orange me-2"></i>No Hidden Changes
                                    </h6>
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
            </section>
	


           <OfferSlider/>

            <section className="pb-0 pb-xl-5  pt-xl-9">
                <div className="container">
                    <div className="row g-4 justify-content-between align-items-center">
                        <div className="col-lg-5 position-relative">
                            <figure className="position-absolute top-0 start-0 translate-middle z-index-1 ms-4">
                                <svg className="fill-warning" width="77px" height="77px">
                                    <path
                                        d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
                                </svg>
                            </figure>

                            <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                                <svg height="400" className="fill-primary opacity-2" viewBox="0 0 340 340">
                                    <circle cx="194.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="2.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="26.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="50.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="74.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="98.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="122.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="146.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="170.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="194.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="218.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="242.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="266.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="290.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="314.2" r="2.2"></circle>
                                    <circle cx="194.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="2.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="218.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="26.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="242.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="50.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="266.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="74.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="290.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="98.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="314.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="122.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="338.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="146.2" cy="338.2" r="2.2"></circle>
                                    <circle cx="170.2" cy="338.2" r="2.2"></circle>
                                </svg>
                            </figure>

                           
                            <img src={about01} className="rounded-3 position-relative" style={{ height: "60vh", objectFit: "cover" }} alt=""/>

                           
                        </div>

                        <div className="col-lg-6">
                            <h2 className="mb-3 mb-lg-3">The Best Holidays Start Here!</h2>
                            <p className="mb-3 mb-lg-3">At Wishden Hotels, we blend world-class hospitality with modern comfort, ensuring every guest feels at home. From fine dining and secure facilities to elegant spaces designed for relaxation, your unforgettable experience begins here.</p>

                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="icon-lg new-success new-opacity-10 text-success rounded-circle"><i
                                            className="fa-solid fa-utensils"></i></div>
                                    <h5 className="mt-2">Dining Room & Bar</h5>
                                    <p className="mb-0 ">The restaurant is an ideal meeting place where both local and international guests alike enjoy meals in a cozy and relaxing atmosphere served in our lavishly furnished dining room. </p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="icon-lg new-danger new-opacity-10 text-danger rounded-circle"><i
                                            className="bi bi-lightbulb"></i></div>
                                    <h5 className="mt-2">Power Sources</h5>
                                    <p className="mb-0">The hotel has multiple options of power supply such as Solar, Generators and Public power supply (JED PLC). </p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="icon-lg new-orange new-opacity-10 text-orange rounded-circle"><i
                                            className="bi bi-shield-fill-check"></i></div>
                                    <h5 className="mt-2">Secured CCTV & electronic keys</h5>
                                    <p className="mb-0">The hotel has CCTV cameras and electronic keys on every floor making it super secured for guests.</p>
                                </div>
                                <div className="col-sm-6">
                                    <div className="icon-lg new-info new-opacity-10 text-info rounded-circle"><i
                                            className="bi bi-person-badge-fill"></i></div>
                                    <h5 className="mt-2">Trained Security Personnel</h5>
                                    <p className="mb-0">Wishden Hotel has a good number of security personnel safeguarding the gates and always on ground. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <NewsLetters/>

            <section className="new-light">
                <div className="container">
                    <div className="row g-4">


                        <div className="col-md-6 col-xxl-4">
                            <div className="new-body d-flex rounded-3 h-100 p-4">
                                <h3><i className="fa-solid fa-hand-holding-heart"></i></h3>
                                <div className="ms-3">
                                    <h5>24x7 Help</h5>
                                    <p className="mb-0">If we fall short of your expectation in any way, let us know</p>
                                </div>
                            </div>
                        </div>

    
                        <div className="col-md-6 col-xxl-4">
                            <div className="new-body d-flex rounded-3 h-100 p-4">
                                <h3><i className="fa-solid fa-hand-holding-usd"></i></h3>
                                <div className="ms-3">
                                    <h5>Payment Trust</h5>
                                    <p className="mb-0">All refunds come with no questions asked guarantee</p>
                                </div>
                            </div>
                        </div>

                                              <div className="col-lg-6 col-xl-5 col-xxl-3 ms-xxl-auto">
                            <h5 className="mb-4">Download app</h5>
                            <div className="row g-3">
                                <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                    <a href="#"> <img src={googlePlay} alt=""/> </a>
                                </div>
                                
                                <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                    <a href="#"> <img src={appStore} alt=""/> </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
        <Footer />
     </div>
    );
}