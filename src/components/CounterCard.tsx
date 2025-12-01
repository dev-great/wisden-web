import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Hotel, Users, Heart, Star } from "lucide-react";

export const CounterCard = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  const counters = [
    {
      icon: Hotel,
      end: 60,
      duration: 2,
      label: "Luxury Rooms",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-200",
    },
    {
      icon: Users,
      end: 50,
      duration: 2,
      label: "Expert Staff",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-200",
    },
    {
      icon: Heart,
      end: 5000,
      duration: 3,
      label: "Happy Guests",
      color: "text-rose-600",
      bgColor: "bg-rose-100",
      borderColor: "border-rose-200",
    },
    {
      icon: Star,
      end: 4.9,
      duration: 2,
      decimals: 1,
      label: "Guest Rating",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200",
      noPlus: true,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-50 rounded-full opacity-50"></div>

      {/* Header */}
      <div className="mb-6 relative z-10">
        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-2">Our Achievements</span>
        <h3 className="text-gray-900 text-xl font-bold">Numbers That Speak</h3>
      </div>

      {/* Counters */}
      <div className="grid grid-cols-1 gap-4 relative z-10">
        {counters.map((counter, index) => (
          <motion.div key={index} className={`bg-gray-50 rounded-xl p-4 border ${counter.borderColor} hover:shadow-md transition-all cursor-pointer group flex items-center gap-4`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -3 }}>
            {/* Icon */}
            <div className={`w-10 h-10 ${counter.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <counter.icon size={20} className={counter.color} />
            </div>

            {/* Counter + Label in a row */}
            <div className="flex items-center gap-2 flex-1">
              <div className="flex items-baseline gap-1">
                <h3 className="purecounter text-2xl font-bold text-gray-900" data-purecounter-start="0" data-purecounter-end={counter.end} data-purecounter-duration={counter.duration} data-purecounter-decimals={counter.decimals || 0}>
                  0
                </h3>

                {!counter.noPlus && <span className="text-xl font-bold text-indigo-500">+</span>}
              </div>

              <p className="text-gray-500 text-sm">{counter.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CounterCard;
