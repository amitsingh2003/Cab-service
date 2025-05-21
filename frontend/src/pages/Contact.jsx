import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";

export default function Contact() {
  // Function to initialize Google Map
  useEffect(() => {
    // This function would initialize the Google Maps API
    // You would need to add your Google Maps API key in an actual implementation
    const loadGoogleMaps = () => {
      // This is a placeholder for the Google Maps API initialization
      // In a real scenario, you would replace this with actual Google Maps implementation
      console.log("Google Maps loaded");
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Contact Section */}
      <section className="pt-24 pb-14 md:pt-28 md:pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-3">
              Get In Touch
            </h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-6">
              Have questions about our services or want to book a cab? Contact
              us using any of the methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-blue-50 rounded-2xl p-8 overflow-hidden relative shadow-lg transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"></div>

              <h3 className="text-2xl font-bold text-blue-800 mb-8 relative">
                Contact Information
                <span className="block w-12 h-1 bg-yellow-400 mt-2"></span>
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">
                      Phone
                    </h4>
                    <p className="text-gray-700 hover:text-blue-600 transition-colors">+91 98765 43210</p>
                    <p className="text-gray-700 hover:text-blue-600 transition-colors">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">
                      Email
                    </h4>
                    <p className="text-gray-700 hover:text-blue-600 transition-colors">info@delhiyatracab.com</p>
                    <p className="text-gray-700 hover:text-blue-600 transition-colors">booking@delhiyatracab.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">
                      Address
                    </h4>
                    <p className="text-gray-700">
                      123 Delhi Street, New Delhi - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">
                      Working Hours
                    </h4>
                    <p className="text-gray-700">
                      24 hours a day, 7 days a week
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-200 relative z-10">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-300 shadow-md"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-300 shadow-md"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-300 shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-colors duration-300 shadow-md"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-5"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400 rounded-full translate-y-1/3 translate-x-1/3 opacity-10"></div>

              <h3 className="text-2xl font-bold text-blue-800 mb-8 relative">
                Send Us a Message
                <span className="block w-12 h-1 bg-yellow-400 mt-2"></span>
              </h3>

              <form className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        placeholder="Your Name"
                        required
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                        placeholder="Your Email"
                        required
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">
                          <Mail className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Your Phone Number"
                      required
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400">
                        <Phone className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition appearance-none"
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="local">Local City Tour</option>
                      <option value="outstation">Outstation Trip</option>
                      <option value="package">Tour Package</option>
                      <option value="corporate">Corporate Travel</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-400">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <span className="text-gray-400">
                        <MessageSquare className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 w-full bg-white">
        <div className="absolute inset-0">
          {/* Replace with actual Google Maps implementation */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56037.97629873228!2d77.18056155664064!3d28.643830400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1653375304292!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Delhi Yatra Cab Location"
            className="shadow-lg"
          ></iframe>
        </div>
        <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10">
          <h3 className="text-xl font-bold text-blue-800 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            Our Location
          </h3>
          <p className="text-gray-700 mt-1">
            123 Delhi Street, New Delhi - 110001
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}