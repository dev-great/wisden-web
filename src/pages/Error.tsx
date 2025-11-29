import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ErrorImg from "../assets/images/element/error.svg";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import TawkWidget from "../components/TawkWidget";

export const Error = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1 flex items-center justify-center bg-white">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Image */}
              <img src={ErrorImg} alt="Error 404" className="h-48 md:h-64 lg:h-80 mx-auto mb-6" />

              {/* 404 Text */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-blue-500 mb-2">404</h1>

              {/* Error Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Oh no, something went wrong!</h2>

              {/* Description */}
              <p className="text-gray-600 mb-6">Either something went wrong or this page doesn't exist anymore.</p>

              {/* Home Button */}
              <Link to="/" className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Take me to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
