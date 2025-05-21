import { Car, Phone } from "lucide-react";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your Next Journey?
            </h2>
            <p className="text-xl text-gray-200">
              Book your car rental anytime, anywhere in India with Delhi Yatra
              Cab
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors flex items-center">
              <Car className="mr-2" size={18} />
              Book Now
            </button>
            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center">
              <Phone className="mr-2" size={18} />
              Call Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
