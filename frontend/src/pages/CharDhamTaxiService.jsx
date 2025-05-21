import { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Car,
  Info,
  Clock,
  CreditCard,
  PlusCircle,
  Star,
  Heart,
} from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function CharDhamTaxiService() {
  const [activeTab, setActiveTab] = useState("packages");

  const temples = [
    {
      name: "Badrinath",
      image:
        "https://i.pinimg.com/736x/d7/65/27/d76527dc6b5816a005e3379eeea36fed.jpg",
      description: "Sacred shrine nestled in the Himalayan mountains",
    },
    {
      name: "Kedarnath",
      image:
        "https://i.pinimg.com/736x/31/85/4a/31854a25a834e2cbec690b9de58460e1.jpg",
      description: "Ancient stone temple against snow-capped peaks",
    },
    {
      name: "Gangotri",
      image:
        "https://i.pinimg.com/736x/fb/cb/6d/fbcb6d582f7089a413d9c991bcb57b12.jpg",
      description: "Holy site at the source of the Ganges River",
    },
    {
      name: "Yamunotri",
      image:
        "https://i.pinimg.com/736x/4b/2c/7d/4b2c7ddc0077cb64d551216aeb9b60ba.jpg",
      description: "Remote temple with hot springs and scenic beauty",
    },
  ];

  const vehicles = [
    { name: "Dzire", price: 4000, image: "https://i.pinimg.com/736x/44/49/8c/44498cfe3d6fd6dba02b543cc3cdb3f4.jpg" },
    { name: "Etios", price: 4000, image: "https://i.pinimg.com/736x/20/74/50/20745026ba22409bfd261c55963c4f4b.jpg" },
    { name: "Ertiga", price: 5000, image: "https://i.pinimg.com/736x/89/32/c0/8932c0e6bacc17f73c4d64aa6aa4ff5b.jpg" },
    { name: "Innova", price: 5500, image: "https://i.pinimg.com/736x/0f/c8/36/0fc836701d156f6e42595709d7773b44.jpg" },
    { name: "Innova Crysta", price: 6000, image: "https://i.pinimg.com/736x/77/61/71/7761716a0fb369bfa94419b244f7a8d7.jpg" },
    {
      name: "Tempo Traveler 12+1",
      price: 9500,
      image: "https://i.pinimg.com/736x/cd/bb/e8/cdbbe86893b25aa330d9142330d924e2.jpg",
    },
  ];

  const packageOptions = [
    {
      name: "Complete Char Dham",
      days: 9,
      highlights: "Visit all four sacred temples",
      price: 36000,
    },
    {
      name: "Kedarnath-Badrinath",
      days: 5,
      highlights: "Sacred journey to two major dhams",
      price: 20000,
    },
    {
      name: "Gangotri-Badrinath",
      days: 7,
      highlights: "Experience spiritual essence of two temples",
      price: 28000,
    },
    {
      name: "Gangotri-Kedarnath-Badrinath",
      days: 7,
      highlights: "Triple temple pilgrimage",
      price: 31500,
    },
  ];

  return (
    <>
      <Navbar></Navbar>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen font-sans">
        <section className="relative overflow-hidden bg-blue-600 text-white pt-10 pb-14 md:pt-10 md:pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/19/55/61/1955616363069ea30202612f58aad648.jpg')",
            }}
          ></div>

          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 170"
              className="fill-white"
            >
              <path d="M0,96L60,101.3C120,107,240,117,360,128C480,139,600,149,720,144C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,170L1380,170C1320,170,1200,170,1080,170C960,170,840,170,720,170C600,170,480,170,360,170C240,170,120,170,60,170L0,170Z"></path>
            </svg>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-yellow-400 opacity-20"></div>
          <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-yellow-400 opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-yellow-400 opacity-10"></div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Char Dham Yatra{" "}
                <span className="text-yellow-400">Taxi Service</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Experience a spiritual journey through the sacred temples of
                Uttarakhand with our premium transportation services
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold px-6 py-3 rounded-lg flex items-center transition-all shadow-lg hover:shadow-xl">
                  Book Your Journey <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center transition-all">
                  View Packages
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 bg-white rounded-xl shadow-md">
                <button
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    activeTab === "packages"
                      ? "bg-blue-600 shadow-md text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("packages")}
                >
                  Packages
                </button>
                <button
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    activeTab === "temples"
                      ? "bg-blue-600 shadow-md text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("temples")}
                >
                  Sacred Temples
                </button>
                <button
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    activeTab === "fleet"
                      ? "bg-blue-600 shadow-md text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("fleet")}
                >
                  Our Fleet
                </button>
              </div>
            </div>

            {/* Packages Tab */}
            {activeTab === "packages" && (
              <div className="grid md:grid-cols-2 gap-8">
                {packageOptions.map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
                  >
                    <div className="flex flex-col h-full">
                      <div className="relative">
                        <div className="h-48 bg-blue-100">
                          <img
                            src="https://i.pinimg.com/736x/15/9d/df/159ddfefceff6438714f2af232c2716a.jpg"
                            alt={pkg.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 py-1 px-4 rounded-full text-sm font-semibold shadow-md">
                          {pkg.days} Days
                        </div>
                      </div>

                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{pkg.highlights}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-gray-700">
                            <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                            <span>Minimum {pkg.days} days journey</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Car className="w-5 h-5 mr-2 text-blue-600" />
                            <span>Premium vehicles available</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                            <span>All temple visits included</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0 mt-auto bg-gradient-to-r from-blue-50 to-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-500 text-sm">
                              Starting from
                            </p>
                            <p className="text-2xl font-bold text-blue-600">
                              ₹{pkg.price}
                            </p>
                          </div>
                          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-5 py-2 rounded-lg font-medium transition-colors shadow-md">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Temples Tab */}
            {activeTab === "temples" && (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {temples.map((temple, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={temple.image}
                          alt={temple.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3 bg-yellow-400 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Heart className="h-4 w-4" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white">
                          {temple.name}
                        </h3>
                        <p className="text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {temple.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-2" />
                    Char Dham - The Four Sacred Abodes
                  </h3>
                  <p className="text-gray-700 mb-6">
                    The Char Dham Yatra is one of the most important Hindu
                    pilgrimages in India. This spiritual journey takes devotees
                    to the four sacred temples nestled in the Himalayan ranges
                    of Uttarakhand: Yamunotri, Gangotri, Kedarnath, and
                    Badrinath. Each temple holds great religious significance
                    and offers breathtaking natural beauty.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-blue-600">
                          Stunning Locations
                        </h4>
                        <p className="mt-1 text-gray-600">
                          Each temple is situated amidst the majestic Himalayas,
                          offering breathtaking views and serene environments.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-blue-600">
                          Spiritual Significance
                        </h4>
                        <p className="mt-1 text-gray-600">
                          These temples are dedicated to different deities and
                          hold profound religious importance in Hinduism.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fleet Tab */}
            {activeTab === "fleet" && (
              <div>
                <div className="grid md:grid-cols-3 gap-6">
                  {vehicles.map((vehicle, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300"
                    >
                      <div className="h-40 relative">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-blue-600">
                          {vehicle.name}
                        </h3>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <p className="text-gray-500 text-sm">
                              Per day from
                            </p>
                            <p className="text-xl font-bold text-blue-600">
                              ₹{vehicle.price}
                            </p>
                          </div>
                          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="grid md:grid-cols-5">
                    <div className="col-span-2 bg-blue-600 text-white p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400 rounded-full opacity-10 transform -translate-x-12 translate-y-10"></div>

                      <h3 className="text-2xl font-bold mb-4 relative z-10">
                        Our Premium Fleet
                      </h3>
                      <p className="mb-6 relative z-10">
                        We offer a wide range of well-maintained vehicles to
                        ensure your Char Dham journey is comfortable and safe.
                      </p>

                      <ul className="space-y-4 relative z-10">
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center mr-3">
                            <PlusCircle className="h-4 w-4" />
                          </div>
                          <span>Experienced local drivers</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center mr-3">
                            <PlusCircle className="h-4 w-4" />
                          </div>
                          <span>Well-maintained vehicles</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center mr-3">
                            <PlusCircle className="h-4 w-4" />
                          </div>
                          <span>24/7 customer support</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center mr-3">
                            <PlusCircle className="h-4 w-4" />
                          </div>
                          <span>Flexible booking options</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-3 p-8 bg-gradient-to-br from-white to-blue-50">
                      <h3 className="text-xl font-bold text-blue-600 mb-6">
                        Important Information
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                              <Clock className="h-3 w-3 text-blue-900" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">
                              <span className="font-medium">
                                Duration Requirements:
                              </span>{" "}
                              Char Dham requires minimum 9 days,
                              Kedarnath-Badrinath minimum 5 days, and other
                              combinations require 7 days.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                              <Info className="h-3 w-3 text-blue-900" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">
                              <span className="font-medium">AC Vehicles:</span>{" "}
                              AC will not work at high altitudes. If you book an
                              AC car, be prepared to switch it off in hilly
                              areas.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                              <CreditCard className="h-3 w-3 text-blue-900" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">
                              <span className="font-medium">
                                Additional Costs:
                              </span>{" "}
                              GST will be extra on bill. Sightseeing outside the
                              Char Dham route will be chargeable separately.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                              <Calendar className="h-3 w-3 text-blue-900" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">
                              <span className="font-medium">Peak Season:</span>{" "}
                              May and June are very peak seasons. Rates may
                              change during these months, so please confirm all
                              details before booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 mt-2">
                Experiences shared by pilgrims who traveled with us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "The entire journey was seamless. Our driver was knowledgeable
                  about the routes and temples. Highly recommend their services
                  for anyone planning the Char Dham Yatra."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-blue-600">Rahul Sharma</p>
                    <p className="text-sm text-gray-500">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "Comfortable vehicles and excellent service. The driver was
                  patient and accommodating throughout our spiritual journey.
                  Will definitely book with them again."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    AP
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-blue-600">Anjali Patel</p>
                    <p className="text-sm text-gray-500">Mumbai, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-4">
                  "As senior citizens, we were concerned about the journey, but
                  their team made it so comfortable for us. The driver was
                  courteous and the vehicle was well-maintained."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    KV
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-blue-600">Krishan Verma</p>
                    <p className="text-sm text-gray-500">Chandigarh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto max-w-6xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400 rounded-full opacity-10 transform -translate-x-12 translate-y-10"></div>

            <div className="text-center relative z-10">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Begin Your Spiritual Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Book your Char Dham Yatra taxi service today and embark on a
                transformative pilgrimage
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-sm text-blue-100">Call us at</p>
                    <p className="font-semibold">+91-87-0066-8205</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-sm text-blue-100">Email us at</p>
                    <p className="font-semibold">booking@delhiyatracab.com</p>
                  </div>
                </div>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200">
                Contact Us Now
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
