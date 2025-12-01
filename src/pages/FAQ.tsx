import { useState } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Search } from "lucide-react";
import TawkWidget from "../components/TawkWidget";

export const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "Where is Wishden Hotel located?",
      answer: "Wishden Hotel is situated in the heart of Gboko Town, just an hour's drive from Makurdi, the Benue State capital. It is located in the Government Reserved Area of Gboko, close to the Nigeria Police Area Command.",
    },
    {
      question: "What makes Wishden Hotel a secure choice?",
      answer: "Our hotel is equipped with secured electronic doors and trained security personnel who are always on ground, ensuring the safety of all guests at all times.",
    },
    {
      question: "Does Wishden Hotel provide constant electricity?",
      answer: "Yes. We have multiple sources of power supply including solar energy, generators, and public power supply (JED PLC) to guarantee uninterrupted electricity for our guests.",
    },
    {
      question: "What dining options are available?",
      answer: "Guests can enjoy meals in our lavishly furnished dining room, bar, or terrace/lounge. We offer full English breakfast, lunch, dinner, barbeque, charcoal-grilled meats, salads, fruits, and desserts served by professional staff.",
    },
    {
      question: "Does Wishden Hotel offer conference or event facilities?",
      answer: "Yes. We have conference halls with ultra-modern video and audio equipment, suitable for seminars, trainings, and events, with capacities ranging from 50 to 100 seats.",
    },
    {
      question: "What types of rooms are available?",
      answer: "We offer a variety of accommodations including Standard Singles, Standard Doubles, Studios, Deluxe, Executive Suites, and Luxury Suites — all equipped with modern amenities such as satellite TV, air conditioning, and spacious living areas.",
    },
    {
      question: "Do you offer discounts for organizations?",
      answer: "Yes. Corporate organizations enjoy a 5% discount on accommodation and hall rentals. We also allow up to two weeks for bill settlement after workshops or seminars.",
    },
    {
      question: "What are the hotel's check-in and check-out times?",
      answer: "Our official check-out time is 12:00 noon daily. Guests are advised to check out before this time to avoid additional charges.",
    },
    {
      question: "What extra services does Wishden Hotel provide?",
      answer: "For added comfort, we offer guest laundry, safety deposit boxes, projectors for presentations, and a well-equipped gymnasium for fitness.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <TawkWidget />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="pt-8 lg:pt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h1>
              <p className="text-gray-600 mb-6">Have questions? We're here to help you</p>

              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors" placeholder="Type search words" />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                  <h5 className="text-indigo-600 font-semibold">FAQs</h5>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {filteredFaqs.length > 0 ? (
                    <div className="space-y-6">
                      {filteredFaqs.map((faq, index) => (
                        <div key={index} className={index !== 0 ? "pt-6 border-t border-gray-100" : ""}>
                          <h6 className="text-gray-900 font-medium mb-2">{faq.question}</h6>
                          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No FAQs found matching "{searchQuery}"</p>
                    </div>
                  )}
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
