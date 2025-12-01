import { useState } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Headset, Phone, Inbox, Mail, Globe, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import TawkWidget from "../components/TawkWidget";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="pt-8 md:pt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Let's connect. We'd Love to Hear From You</h1>
              <p className="text-lg text-gray-700">From bookings to special requests, our dedicated team is always ready to provide personalized assistance, ensuring your stay at Wishden Hotel is comfortable, memorable, and tailored to your needs.</p>
            </div>

            {/* Contact Cards - Same width as form */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Call Us Card */}
                <div className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center h-full border border-gray-100">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-3">
                    <Headset size={22} />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Call us</h5>
                  <p className="text-gray-600 text-sm mb-3">Our team is ready to help 24/7.</p>
                  <div className="flex flex-col gap-2 mt-auto w-full">
                    <a href="tel:+2347019151382" className="inline-flex items-center justify-center px-3 py-2 bg-amber-100 text-amber-700 rounded-md hover:bg-amber-200 transition-colors text-base font-medium">
                      <Phone size={12} className="mr-1.5" />
                      +(234) 701-915-1382
                    </a>
                    <a href="tel:+2349132286117" className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-base font-medium">
                      <Phone size={12} className="mr-1.5" />
                      +(234) 913-228-6117
                    </a>
                  </div>
                </div>

                {/* Email Us Card */}
                <div className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center h-full border border-gray-100">
                  <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-3">
                    <Inbox size={22} />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">Email us</h5>
                  <p className="text-gray-600 text-sm mb-3">We'll get back to you promptly.</p>
                  <a href="mailto:wishdenhotels@gmail.com" className="inline-flex items-center text-amber-600 hover:text-amber-700 underline underline-offset-4 mt-auto text-base">
                    <Mail size={14} className="mr-1.5" />
                    wishdenhotels@gmail.com
                  </a>
                </div>

                {/* Social Media Card */}
                <div className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center h-full relative overflow-hidden border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3 relative z-10">
                    <Globe size={22} />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1 relative z-10">Social media</h5>
                  <p className="text-gray-600 text-sm mb-3 relative z-10">Follow us for updates.</p>
                  <ul className="flex items-center gap-2 mt-auto relative z-10">
                    <li>
                      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                        <Facebook size={14} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 text-white transition-opacity">
                        <Instagram size={14} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-600 text-white transition-colors">
                        <Twitter size={14} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-indigo-700 hover:bg-indigo-800 text-white transition-colors">
                        <Linkedin size={14} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg border border-gray-100">
                {/* Decorative dots */}
                <svg className="absolute -bottom-4 -right-2 text-orange-400 opacity-50" width="104" height="95" viewBox="0 0 104.2 95.2" fill="currentColor">
                  <circle cx="2.6" cy="92.6" r="2.6" />
                  <circle cx="2.6" cy="77.6" r="2.6" />
                  <circle cx="2.6" cy="62.6" r="2.6" />
                  <circle cx="2.6" cy="47.6" r="2.6" />
                  <circle cx="2.6" cy="32.6" r="2.6" />
                  <circle cx="2.6" cy="17.6" r="2.6" />
                  <circle cx="2.6" cy="2.6" r="2.6" />
                  <circle cx="22.4" cy="92.6" r="2.6" />
                  <circle cx="22.4" cy="77.6" r="2.6" />
                  <circle cx="22.4" cy="62.6" r="2.6" />
                  <circle cx="22.4" cy="47.6" r="2.6" />
                  <circle cx="22.4" cy="32.6" r="2.6" />
                  <circle cx="22.4" cy="17.6" r="2.6" />
                  <circle cx="22.4" cy="2.6" r="2.6" />
                  <circle cx="42.2" cy="92.6" r="2.6" />
                  <circle cx="42.2" cy="77.6" r="2.6" />
                  <circle cx="42.2" cy="62.6" r="2.6" />
                  <circle cx="42.2" cy="47.6" r="2.6" />
                  <circle cx="42.2" cy="32.6" r="2.6" />
                  <circle cx="42.2" cy="17.6" r="2.6" />
                  <circle cx="42.2" cy="2.6" r="2.6" />
                  <circle cx="62" cy="92.6" r="2.6" />
                  <circle cx="62" cy="77.6" r="2.6" />
                  <circle cx="62" cy="62.6" r="2.6" />
                  <circle cx="62" cy="47.6" r="2.6" />
                  <circle cx="62" cy="32.6" r="2.6" />
                  <circle cx="62" cy="17.6" r="2.6" />
                  <circle cx="62" cy="2.6" r="2.6" />
                  <circle cx="81.8" cy="92.6" r="2.6" />
                  <circle cx="81.8" cy="77.6" r="2.6" />
                  <circle cx="81.8" cy="62.6" r="2.6" />
                  <circle cx="81.8" cy="47.6" r="2.6" />
                  <circle cx="81.8" cy="32.6" r="2.6" />
                  <circle cx="81.8" cy="17.6" r="2.6" />
                  <circle cx="81.8" cy="2.6" r="2.6" />
                  <circle cx="101.7" cy="92.6" r="2.6" />
                  <circle cx="101.7" cy="77.6" r="2.6" />
                  <circle cx="101.7" cy="62.6" r="2.6" />
                  <circle cx="101.7" cy="47.6" r="2.6" />
                  <circle cx="101.7" cy="32.6" r="2.6" />
                  <circle cx="101.7" cy="17.6" r="2.6" />
                  <circle cx="101.7" cy="2.6" r="2.6" />
                </svg>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Send us message</h3>

                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors" required />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number *</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors" required />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none" required />
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} className="mt-1 w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500 focus:ring-2" required />
                      <span className="text-sm text-gray-700">By submitting this form you agree to our terms and conditions.</span>
                    </label>
                  </div>

                  <button type="submit" className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Same width as form */}
        <section className="pb-12 lg:pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-64 md:h-80 grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.520607120732!2d8.989552257122687!3d7.334331351799426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105a3d69d2b6b089%3A0xa1f59060a1653b!2sWishden%20Hotels%20Gboko!5e0!3m2!1sen!2sng!4v1755375119408!5m2!1sen!2sng"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wishden Hotels Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
