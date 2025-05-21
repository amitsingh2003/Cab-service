import { useState } from "react";
import { motion } from "framer-motion";

const carOptions = [
  {
    name: "Innova",
    price: 7000,
    image:
      "https://i.pinimg.com/736x/0f/c8/36/0fc836701d156f6e42595709d7773b44.jpg",
    features: ["A/C", "7 Seats", "Bluetooth", "USB Charging"],
    description: "Spacious family SUV with ultimate comfort for long journeys",
  },
  {
    name: "Dzire Sedan",
    price: 6000,
    image:
      "https://i.pinimg.com/736x/44/49/8c/44498cfe3d6fd6dba02b543cc3cdb3f4.jpg",
    features: ["A/C", "5 Seats", "Navigation", "Premium Audio"],
    description: "Elegant sedan with premium features and smooth handling",
  },
  {
    name: "Swift",
    price: 5500,
    image:
      "https://i.pinimg.com/736x/ba/22/a3/ba22a31238023d22f27c8c63400fbc42.jpg",
    features: ["A/C", "5 Seats", "Fuel Efficient", "Compact"],
    description:
      "Economic compact car perfect for city driving and parking ease",
  },
  {
    name: "Ertiga",
    price: 6500,
    image:
      "https://i.pinimg.com/736x/89/32/c0/8932c0e6bacc17f73c4d64aa6aa4ff5b.jpg",
    features: ["A/C", "7 Seats", "Spacious Trunk", "Child Locks"],
    description: "Family-friendly MPV with versatile seating arrangements",
  },
];

const CarOptions = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3 text-white">
            Our Premium Fleet
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto">
            Experience comfort and style with our well-maintained vehicles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carOptions.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden h-full transform transition-all duration-300 group-hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

                  <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">
                    ₹{car.price}/day
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {car.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {car.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded inline-flex items-center"
                      >
                        <svg
                          className="w-3 h-3 mr-1 text-blue-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded transition-colors duration-200">
                      Book Now
                    </button>
                    <button className="border border-gray-500 hover:border-blue-400 hover:text-blue-400 text-gray-300 font-medium py-2 px-3 rounded transition-colors duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>

              {activeCard === index && (
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarOptions;
