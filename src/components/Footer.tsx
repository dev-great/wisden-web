// Import images
import logoLight from "../assets/images/new/logoW.png";
import paypal from "../assets/images/element/paypal.svg";
import visa from "../assets/images/element/visa.svg";
import mastercard from "../assets/images/element/mastercard.svg";
import expresscard from "../assets/images/element/expresscard.svg";
import { Link } from "react-router-dom";

export  const Footer = () =>  {
  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        {/* Row START */}
        <div className="row g-4">
          {/* Widget 1 START */}
          <div className="col-lg-3">
            <Link to="/">
              <img className="h-40px" src={logoLight} alt="logo" />
            </Link>
            <p className="my-3 text-body-secondary">
              Exceed guests’ expectations by providing exceptional luxurious hospitality services.
            </p>
            <p className="mb-2">
              <a href="#" className="text-body-secondary text-primary-hover">
                <i className="bi bi-telephone me-2"></i>+234 913-228-6117
              </a>
            </p>
            <p className="mb-2">
              <a href="#" className="text-body-secondary text-primary-hover">
                <i className="bi bi-telephone me-2"></i>+234 701-915-1382
              </a>
            </p>
            <p className="mb-0">
              <a href="#" className="text-body-secondary text-primary-hover">
                <i className="bi bi-envelope me-2"></i>wishdenhotels@gmail.com
              </a>
            </p>
          </div>
          {/* Widget 1 END */}

          {/* Widget 2 START */}
          <div className="col-lg-8 ms-auto">
            <div className="row g-4">
              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Page</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/about-us">About us</Link></li>
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/faq">FAQ's</Link></li>
                </ul>
              </div>

              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Link</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/privacy-policy">Privacy Policy</Link></li>
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/terms-of-service">Terms & Conditions</Link></li>
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Global Site</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="/newsletter">Newsletters</Link></li>
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="#">iOS Download</Link></li>
                  <li className="nav-item"><Link className="nav-link text-body-secondary" to="#">Andriod Download</Link></li>
                </ul>
              </div>

              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Enterprices</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-fire me-2"></i>Gas Station</a></li>
                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-gas-pump me-2"></i>Petrol Station</a></li>
                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-water me-2"></i>Water Company</a></li>
                  <li className="nav-item"><a className="nav-link text-body-secondary" href="#"><i className="fa-solid fa-industry me-2"></i>Rice Milling</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 2 END */}
        </div>
        {/* Row END */}

       

        {/* Payment and Social */}
        <div className="row g-4 justify-content-between mt-0 mt-md-2">
          {/* Payment card */}
          <div className="col-sm-7 col-md-6 col-lg-4">
            <h5 className="text-white mb-2">Payment & Security</h5>
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item"><a href="#"><img src={paypal} className="h-30px" alt="paypal" /></a></li>
              <li className="list-inline-item"><a href="#"><img src={visa} className="h-30px" alt="visa" /></a></li>
              <li className="list-inline-item"><a href="#"><img src={mastercard} className="h-30px" alt="mastercard" /></a></li>
              <li className="list-inline-item"><a href="#"><img src={expresscard} className="h-30px" alt="express" /></a></li>
            </ul>
          </div>

          {/* Social media */}
          <div className="col-sm-5 col-md-6 col-lg-3 text-sm-end">
            <h5 className="text-white mb-2">Follow us on</h5>
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item"><a className="btn btn-sm px-2 bg-facebook mb-0" href="#"><i className="fab fa-fw fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-sm shadow px-2 bg-instagram mb-0" href="#"><i className="fab fa-fw fa-instagram"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-sm shadow px-2 bg-twitter mb-0" href="#"><i className="fab fa-fw fa-twitter"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-0" />

        {/* Bottom footer */}
        <div className="row">
          <div className="container">
            <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
              <div className="text-body-secondary text-primary-hover">
                Copyrights ©2025 Wishden Hotels. Build by{" "}
                <a href="https://linktr.ee/greatness_marshal" className="text-body-secondary">Marshal Great</a>.
              </div>
              <div className="nav mt-2 mt-lg-0">
                <ul className="list-inline text-primary-hover mx-auto mb-0">
                  <li className="list-inline-item me-0"><Link className="nav-link text-body-secondary py-1" to="/privacy-policy">Privacy policy</Link></li>
                  <li className="list-inline-item me-0"><Link className="nav-link text-body-secondary py-1" to="/terms-of-service">Terms and conditions</Link></li>
                  <li className="list-inline-item me-0"><Link className="nav-link text-body-secondary py-1 pe-0" to="#">Refund policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
