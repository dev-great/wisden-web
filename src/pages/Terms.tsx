import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import TawkWidget from "../components/TawkWidget";

export const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1 bg-white">
        <section className="pt-8 lg:pt-12 pb-12 lg:pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <h6 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Agreement</h6>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms Of Service</h1>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <ul className="space-y-4">
                  <li className="text-gray-700">
                    <strong className="text-gray-900">No Damage to Facilities:</strong> Guests are expected to treat all hotel property with care. Any damage, intentional or accidental, to furniture, appliances, or fixtures within the hotel premises will attract repair or replacement charges as determined by management.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Payment Methods:</strong> The hotel accepts multiple modes of payment for guests' convenience, including cash, online payments, and direct bank transfers. Please ensure payments are confirmed before check-in.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Booking Cancellations:</strong> Cancellations are allowed; however, they attract a 10% service charge on the booking amount. Refunds (where applicable) will be processed within a reasonable period of time.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Guest Limit:</strong> Each apartment is designed to accommodate a maximum of two persons only. Additional guests beyond this limit are not permitted unless prior written approval is granted by management.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Check-out Policy:</strong> Standard check-out time is 12:00 noon daily. Guests who wish to extend their stay must contact the reception desk in advance to confirm availability and any applicable extra charges.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Respect for Others:</strong> Guests must maintain respect for other occupants and avoid conduct that could disturb or inconvenience others, including excessive noise, inappropriate behavior, or damage to shared property.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Safety Compliance:</strong> For the well-being of all guests, strict adherence to the hotel's safety rules and fire regulations is required at all times. Tampering with safety equipment is prohibited.
                  </li>

                  <li className="text-gray-700">
                    <strong className="text-gray-900">Room Allocation Rights:</strong> The hotel reserves the right to allocate rooms to guests based on availability and operational requirements. While efforts will be made to honor special requests, they cannot be guaranteed.
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link to="/" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
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
