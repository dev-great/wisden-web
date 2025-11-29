// Import images
import logoLight from "../assets/images/new/logoW.png";
import paypal from "../assets/images/element/paypal.svg";
import visa from "../assets/images/element/visa.svg";
import mastercard from "../assets/images/element/mastercard.svg";
import expresscard from "../assets/images/element/expresscard.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12">
      <div className="container mx-auto px-4">
        {/* Row START */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Widget 1 START */}
          <div className="lg:col-span-3">
            <Link to="/">
              <img className="h-10" src={logoLight} alt="logo" />
            </Link>
            <p className="my-4 text-gray-400">Exceed guests' expectations by providing exceptional luxurious hospitality services.</p>
            <p className="mb-2">
              <a href="tel:+2349132286117" className="text-gray-400 hover:text-amber-500 transition-colors">
                <i className="bi bi-telephone mr-2"></i>+234 913-228-6117
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+2347019151382" className="text-gray-400 hover:text-amber-500 transition-colors">
                <i className="bi bi-telephone mr-2"></i>+234 701-915-1382
              </a>
            </p>
            <p className="mb-0">
              <a href="mailto:wishdenhotels@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                <i className="bi bi-envelope mr-2"></i>wishdenhotels@gmail.com
              </a>
            </p>
          </div>
          {/* Widget 1 END */}

          {/* Widget 2 START */}
          <div className="lg:col-span-8 lg:ml-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Link block */}
              <div>
                <h5 className="text-white font-semibold mb-2 md:mb-4">Page</h5>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="/about-us">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="/faq">
                      FAQ's
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Link block */}
              <div>
                <h5 className="text-white font-semibold mb-2 md:mb-4">Link</h5>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="/terms-of-service">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Link block */}
              <div>
                <h5 className="text-white font-semibold mb-2 md:mb-4">Global Site</h5>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="#newsletter">
                      Newsletters
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="#">
                      iOS Download
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-amber-500 transition-colors" to="#">
                      Android Download
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Link block */}
              <div>
                <h5 className="text-white font-semibold mb-2 md:mb-4">Enterprises</h5>
                <ul className="space-y-2">
                  <li>
                    <a className="text-gray-400 hover:text-amber-500 transition-colors" href="#">
                      <i className="fa-solid fa-fire mr-2"></i>Gas Station
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-amber-500 transition-colors" href="#">
                      <i className="fa-solid fa-gas-pump mr-2"></i>Petrol Station
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-amber-500 transition-colors" href="#">
                      <i className="fa-solid fa-water mr-2"></i>Water Company
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-amber-500 transition-colors" href="#">
                      <i className="fa-solid fa-industry mr-2"></i>Rice Milling
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 2 END */}
        </div>
        {/* Row END */}

        {/* Payment and Social */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-10">
          {/* Payment card */}
          <div>
            <h5 className="text-white font-semibold mb-2">Payment & Security</h5>
            <ul className="flex flex-wrap gap-3 mt-3">
              <li>
                <a href="#">
                  <img src={paypal} className="h-8" alt="paypal" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={visa} className="h-8" alt="visa" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={mastercard} className="h-8" alt="mastercard" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={expresscard} className="h-8" alt="express" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="sm:text-right">
            <h5 className="text-white font-semibold mb-2">Follow us on</h5>
            <ul className="flex flex-wrap gap-2 mt-3 sm:justify-end">
              <li>
                <a className="inline-flex items-center justify-center w-9 h-9 rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm" href="#">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center justify-center w-9 h-9 rounded bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 transition-opacity text-white text-sm" href="#">
                  <i className="fab fa-fw fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center justify-center w-9 h-9 rounded bg-sky-500 hover:bg-sky-600 transition-colors text-white text-sm" href="#">
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center justify-center w-9 h-9 rounded bg-blue-700 hover:bg-blue-800 transition-colors text-white text-sm" href="#">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-8 mb-0 border-gray-700" />

        {/* Bottom footer */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4">
            <div className="text-gray-400">
              Copyrights ©2025 Wishden Hotels. Built by{" "}
              <a href="https://linktr.ee/greatness_marshal" className="text-gray-400 hover:text-amber-500 transition-colors">
                Marshal Great
              </a>
              .
            </div>
            <div>
              <ul className="flex flex-wrap justify-center lg:justify-end gap-4">
                <li>
                  <Link className="text-gray-400 hover:text-amber-500 transition-colors text-sm" to="/privacy-policy">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-amber-500 transition-colors text-sm" to="/terms-of-service">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-amber-500 transition-colors text-sm" to="#">
                    Refund policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
