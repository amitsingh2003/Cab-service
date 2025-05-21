import {
  
  MapPin,
  Phone,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
           
            <p className="text-gray-300 mb-4">
              India's #1 cab company for all your travel needs. Government
              approved and trusted by thousands of customers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Services",
                "Char Dham Tour Package",
                "One-way",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="mr-1" size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">
              Popular Routes
            </h3>
            <ul className="space-y-2">
              {[
                "Delhi To Shimla",
                "Delhi To Manali",
                "Delhi To Jaipur",
                "Delhi To Agra",
                "Delhi To Rishikesh",
                "Delhi To Haridwar",
                "Delhi To Nainital",
                "Delhi To Chandigarh",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="mr-1" size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone
                  className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+91-78-3830-8693</p>
                  <p className="text-gray-300">+91-87-0066-8205</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail
                  className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">booking@delhiyatracab.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin
                  className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300">Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Delhi Yatra Cab. All rights
            reserved.
          </p>
        </div>
      </div>

      <div className="bg-blue-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            Approved by Govt. of India | No 1 Cab Company in India
          </p>
          <div className="flex space-x-4">
            <a
              href="tel:+917838308693"
              className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center transition-colors"
            >
              <Phone className="mr-2" size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/919870276123"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
            >
              <MessageSquare className="mr-2" size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
