import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Home, Info, MapPin, ArrowRight, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with paths
  const navItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "About", icon: <Info size={18} />, path: "/about" },
    { name: "Services", icon: <MapPin size={18} />, path: "/services" },
    { name: "One-way", icon: <ArrowRight size={18} />, path: "/one-way" },
    { name: "Contact", icon: <Phone size={18} />, path: "/contact" },
  ];

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/">
              <img src={logo} alt="Delhi Yatra Cab Logo" className="h-13 mr-3" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`font-medium flex flex-col items-center transition-colors ${
                      isActive(item.path)
                        ? "text-yellow-500"
                        : "text-blue-900 hover:text-yellow-500"
                    }`}
                  >
                    <span className="mb-1">{item.icon}</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
          >
            Book Now
          </motion.button>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center py-3 border-b border-gray-100 ${
                  isActive(item.path)
                    ? "text-yellow-500"
                    : "text-blue-900 hover:text-yellow-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors my-3">
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;