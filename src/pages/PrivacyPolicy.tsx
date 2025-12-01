import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import TawkWidget from "../components/TawkWidget";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1 bg-white">
        <section className="pt-8 lg:pt-12 pb-12 lg:pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <h6 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Agreement</h6>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <ul className="space-y-4">
                  <li className="text-gray-700">
                    <strong className="text-gray-900">Commitment to Privacy:</strong> Wishden Hotel Gboko is committed to protecting the privacy and security of our guests, visitors, and website users. This policy explains how we collect, use, disclose, and safeguard your information when you interact with us — whether in person, via telephone, email, or online.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Information We Collect:</strong> We may collect personal details (name, address, email, phone, payment information), booking and stay information (room preferences, special requests), business/corporate details for group bookings, and technical data such as IP address and browser type if you book online.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">How We Use Your Information:</strong> Your data is used for processing bookings and payments, providing personalized hospitality services, sending booking confirmations and invoices, managing event bookings, improving services, and complying with laws.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Data Sharing & Disclosure:</strong> We never sell guest data. Information may be shared only with authorized staff, secure payment processors, or as required by law, court order, or government request.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Data Security:</strong> We maintain physical, technical, and administrative safeguards, including secure electronic room keys, restricted access to guest data, and multiple power sources for uninterrupted services.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Data Retention:</strong> Guest records are retained only as long as necessary for providing services, meeting accounting obligations, and resolving disputes.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Your Rights:</strong> Guests may access, correct, or request deletion of their personal information. You may also withdraw consent for non-essential usage or request a copy of the data we hold about you.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Cookies & Online Bookings:</strong> If our website uses cookies, they are strictly for improving booking efficiency and user experience. Cookies may be disabled in your browser at any time.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Contact:</strong> For privacy-related inquiries, please contact us at{" "}
                    <a href="mailto:wishdenhotels@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                      wishdenhotels@gmail.com
                    </a>{" "}
                    or <span className="font-medium text-gray-900">07019151382 / 09132286117</span>.
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link to="/" className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors">
                    I agree with the terms
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
