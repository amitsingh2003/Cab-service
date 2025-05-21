import { Car, Star, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="text-yellow-500" size={40} />,
      title: "Government Approved",
      description:
        "Fully authorized and approved by the Government of India for safe and reliable travel",
    },
    {
      icon: <Clock className="text-yellow-500" size={40} />,
      title: "24/7 Service",
      description:
        "Our service is available round the clock to ensure your travel needs are always met",
    },
    {
      icon: <Car className="text-yellow-500" size={40} />,
      title: "Well-Maintained Fleet",
      description:
        "All our vehicles are regularly serviced and maintained to ensure a comfortable journey",
    },
    {
      icon: <Star className="text-yellow-500" size={40} />,
      title: "Experienced Drivers",
      description:
        "Our professional drivers are experienced and familiar with all routes",
    },
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">
            Why Choose Delhi Yatra Cab
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the best in taxi services across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-blue-800 rounded-lg p-6 hover:shadow-lg hover:bg-blue-700 transition-all"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
