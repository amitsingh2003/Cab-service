import { useState } from "react";
import {
  ChevronRight,
  Map,
  Search,
  ArrowRight,
  Filter,
  Car,
  Clock,
  Check,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function OneWaySection() {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [selectedTab, setSelectedTab] = useState("popular");

  const popularRoutes = [
    {
      from: "Delhi",
      to: "Chandigarh",
      sedan: 3500,
      suv: 4500,
      distance: "248 km",
      time: "4-5 hrs",
    },
    {
      from: "Delhi",
      to: "Shimla",
      sedan: 6000,
      suv: 7000,
      distance: "343 km",
      time: "7-8 hrs",
    },
    {
      from: "Delhi",
      to: "Manali",
      sedan: 8500,
      suv: 10500,
      distance: "537 km",
      time: "12-14 hrs",
    },
    {
      from: "Delhi",
      to: "Jaipur",
      sedan: 3800,
      suv: 4800,
      distance: "281 km",
      time: "5-6 hrs",
    },
  ];

  const allRoutes = {
    Delhi: [
      {
        to: "Chandigarh",
        sedan: 3500,
        suv: 4500,
        distance: "248 km",
        time: "4-5 hrs",
      },
      {
        to: "Ambala",
        sedan: 3500,
        suv: 4500,
        distance: "198 km",
        time: "3-4 hrs",
      },
      {
        to: "Shimla",
        sedan: 6000,
        suv: 7000,
        distance: "343 km",
        time: "7-8 hrs",
      },
      {
        to: "Manali",
        sedan: 8500,
        suv: 10500,
        distance: "537 km",
        time: "12-14 hrs",
      },
      {
        to: "Kullu",
        sedan: 8500,
        suv: 10500,
        distance: "497 km",
        time: "11-12 hrs",
      },
      {
        to: "Kasol",
        sedan: 8500,
        suv: 10500,
        distance: "517 km",
        time: "12-13 hrs",
      },
      {
        to: "Patiala",
        sedan: 4500,
        suv: 5500,
        distance: "240 km",
        time: "4-5 hrs",
      },
      {
        to: "Ludhiana",
        sedan: 5000,
        suv: 6500,
        distance: "310 km",
        time: "5-6 hrs",
      },
      {
        to: "Jalandhar",
        sedan: 6000,
        suv: 7500,
        distance: "370 km",
        time: "6-7 hrs",
      },
      {
        to: "Amritsar",
        sedan: 7500,
        suv: 9500,
        distance: "450 km",
        time: "7-8 hrs",
      },
    ],
    Gurgaon: [
      {
        to: "Hardwar",
        sedan: 4200,
        suv: 5300,
        distance: "210 km",
        time: "4-5 hrs",
      },
      {
        to: "Rishikesh",
        sedan: 4200,
        suv: 5300,
        distance: "240 km",
        time: "5-6 hrs",
      },
      {
        to: "Dehradun",
        sedan: 4400,
        suv: 5600,
        distance: "255 km",
        time: "5-6 hrs",
      },
      {
        to: "Roorkee",
        sedan: 4300,
        suv: 5400,
        distance: "195 km",
        time: "4-5 hrs",
      },
      {
        to: "Mussoorie",
        sedan: 6300,
        suv: 7300,
        distance: "285 km",
        time: "6-7 hrs",
      },
    ],
  };

  const cities = ["Delhi", "Gurgaon", "Noida", "Faridabad"];

  return (
    <>
      <Navbar></Navbar>

     <section className="pt-24 pb-14 md:pt-28 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
                One Way Cab Services
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book affordable one-way outstation cabs and pay only for the
                distance you travel. No return fare charges!
              </p>
            </div>

            {/* City Tabs */}
            <div className="bg-white rounded-t-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
                {cities.map((city) => (
                  <button
                    key={city}
                    className={`flex-shrink-0 px-6 py-4 font-medium text-sm focus:outline-none transition-colors ${
                      selectedCity === city
                        ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setSelectedCity(city)}
                  >
                    From {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Banner */}
            <div className="relative z-10 -mt-1">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-5 px-6 rounded-md shadow-lg transform -rotate-1 mx-4 mb-6">
                <div className="transform rotate-1 flex items-center justify-between">
                  <div className="flex-1">
                    <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                      Best Offer
                    </span>
                    <h3 className="text-white font-bold text-xl mt-2">
                      UPTO 50% OFF
                    </h3>
                    <p className="text-blue-100 text-sm">
                      On all one-way cab services
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div className="bg-white text-blue-800 font-bold py-2 px-4 rounded-lg shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      Book Now & Save
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter and Search Area */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                <div className="relative flex-1 w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Search destination city..."
                  />
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <button className="px-4 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <span>Filter</span>
                  </button>
                  <button className="px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex items-center">
                    <Map className="h-4 w-4 mr-2 text-blue-600" />
                    <span>View Map</span>
                  </button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  className={`px-4 py-2 font-medium text-base focus:outline-none ${
                    selectedTab === "popular"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setSelectedTab("popular")}
                >
                  Popular Routes
                </button>
                <button
                  className={`px-4 py-2 font-medium text-base focus:outline-none ${
                    selectedTab === "all"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setSelectedTab("all")}
                >
                  All Routes
                </button>
              </div>

              {/* Route Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(selectedTab === "popular"
                  ? popularRoutes
                  : allRoutes[selectedCity] || []
                ).map((route, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-blue-50 p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <Map className="h-5 w-5 text-blue-700" />
                          </div>
                          <div className="ml-3">
                            <div className="flex items-center">
                              <span className="font-medium text-blue-900">
                                {route.from || selectedCity}
                              </span>
                              <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                              <span className="font-medium text-blue-900">
                                {route.to}
                              </span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>
                                {route.time} • {route.distance}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <div className="flex items-center mb-2">
                            <Car className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              Sedan
                            </span>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-lg font-bold text-blue-800">
                              ₹{route.sedan}
                            </span>
                            <span className="text-xs text-gray-500 ml-1">
                              /trip
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            <Check className="h-3 w-3 inline mr-1 text-green-500" />
                            Up to 4 passengers
                          </div>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <div className="flex items-center mb-2">
                            <Car className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-700">
                              SUV
                            </span>
                          </div>
                          <div className="flex items-baseline">
                            <span className="text-lg font-bold text-blue-800">
                              ₹{route.suv}
                            </span>
                            <span className="text-xs text-gray-500 ml-1">
                              /trip
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            <Check className="h-3 w-3 inline mr-1 text-green-500" />
                            Up to 6 passengers
                          </div>
                        </div>
                      </div>

                      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                        Book Now
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              {selectedTab === "popular" && (
                <div className="text-center mt-8">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center mx-auto"
                    onClick={() => setSelectedTab("all")}
                  >
                    View All Routes
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Why Choose Our One Way Cab Service?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-blue-800 mb-2">
                    Pay One-Way Fare Only
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Only pay for the distance traveled, no hidden return
                    charges.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-blue-800 mb-2">
                    Save Time
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No waiting for return cabs, instant confirmation & booking.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-blue-800 mb-2">
                    Safe & Reliable
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Verified drivers, well-maintained cabs, and 24/7 customer
                    support.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex items-center">
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Need a Custom Quote?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Get special rates for corporate bookings and tour packages
                  </p>
                  <Link
                    to="/contact"
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="hidden md:block md:w-1/3 p-6">
                  <div className="transform rotate-12 -mr-8">
                    <svg
                      className="w-full text-blue-500 opacity-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C7.586 2 4 5.586 4 10c0 4.414 3.586 8 8 8 4.414 0 8-3.586 8-8 0-4.414-3.586-8-8-8zm0 18c-5.523 0-10-4.477-10-10S6.477 0 12 0s10 4.477 10 10-4.477 10-10 10zm0-14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
