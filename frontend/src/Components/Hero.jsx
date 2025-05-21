import {
  Car,
  CalendarDays,
  MapPin,
  Phone,
  Star,
  Clock,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="relative pt-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/01/c9/c0/01c9c0c718cffd19e880623968fa0f84.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              India's #1 Cab Service
            </h1>
            <p className="text-xl mb-8">
              Book your car rental anytime, anywhere in India.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors flex items-center">
                <Car className="mr-2" size={18} />
                Book a Cab
              </button>
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors flex items-center">
                <Phone className="mr-2" size={18} />
                Call Now
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <Shield className="text-yellow-500 mr-2" size={20} />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span>Top Rated Service</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-yellow-500 mr-2" size={20} />
                <span>24/7 Booking</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Book Your Journey
              </h2>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Delhi"
                        className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <MapPin
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium">
                      Drop Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Shimla"
                        className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <MapPin
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium">
                      Departure Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        defaultValue="2025-05-02"
                        className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <CalendarDays
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 font-medium">
                      Return Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        defaultValue="2025-05-19"
                        className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <CalendarDays
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-yellow-500 text-blue-900 font-semibold p-3 rounded-md hover:bg-yellow-400 transition-colors mt-2">
                  Search Cabs
                </button>

                <div className="flex justify-center text-sm text-gray-500 mt-2">
                  <p>
                    Or call us at:{" "}
                    <span className="font-bold">+91-78-3830-8693</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
