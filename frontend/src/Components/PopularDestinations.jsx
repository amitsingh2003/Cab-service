import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const popularDestinations = [
  {
    from: "Delhi",
    destinations: [
      "Agra",
      "Rishikesh",
      "Jaipur",
      "Chandigarh",
      "Manali",
      "Shimla",
      "Haridwar",
      "Nainital",
      "Mussoorie",
      "Ajmer",
      "Amritsar",
      "Dehradun",
      "Patiala",
      "Ambala",
      "Mcleodganj",
      "Lansdowne",
    ],
  },
  {
    from: "Gurgaon",
    destinations: [
      "Agra",
      "Rishikesh",
      "Jaipur",
      "Chandigarh",
      "Manali",
      "Shimla",
      "Haridwar",
      "Nainital",
      "Mussoorie",
      "Ajmer",
      "Amritsar",
      "Dehradun",
      "Patiala",
      "Ambala",
      "Mcleodganj",
      "Lansdowne",
    ],
  },
  {
    from: "Noida",
    destinations: [
      "Agra",
      "Rishikesh",
      "Jaipur",
      "Chandigarh",
      "Manali",
      "Shimla",
      "Haridwar",
      "Nainital",
      "Mussoorie",
      "Ajmer",
      "Amritsar",
      "Dehradun",
      "Patiala",
      "Ambala",
      "Mcleodganj",
      "Lansdowne",
    ],
  },
];
const PopularDestinations = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the most popular routes from major cities
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-wrap border-b">
            {popularDestinations.map((item, index) => (
              <button
                key={index}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === index
                    ? "text-blue-900 border-b-2 border-yellow-500"
                    : "text-gray-500 hover:text-blue-900"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {item.from}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {popularDestinations[activeTab].destinations.map(
            (destination, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-4 hover:bg-blue-900 group transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 group-hover:text-white transition-colors">
                      {popularDestinations[activeTab].from} To {destination}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-200 transition-colors text-sm">
                      Taxi Service
                    </p>
                  </div>
                  <ArrowRight className="text-yellow-500" size={18} />
                </div>
              </motion.a>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
export default PopularDestinations;
