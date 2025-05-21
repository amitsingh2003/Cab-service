import { ChevronRight } from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const touristPlaces = [
    {
      name: "Agra Tour",
      image:
        "https://i.pinimg.com/736x/09/37/d7/0937d76c20c7c6832179ea9612c90f11.jpg",
      alt: "Taj Mahal",
    },
    {
      name: "Delhi Tour",
      image:
        "https://i.pinimg.com/736x/ea/82/fa/ea82fa1142e5698597c228e763be048d.jpg",
      alt: "Delhi monuments collage",
    },
    {
      name: "Manali Tour",
      image:
        "https://i.pinimg.com/736x/38/25/31/3825313056bed5eca7fb05980376fecb.jpg",
      alt: "Manali mountains",
    },
    {
      name: "Leh Ladakh Tour",
      image:
        "https://i.pinimg.com/736x/b8/ef/36/b8ef36be84b85ad2b15ec66aa21b5cc7.jpg",
      alt: "Leh Ladakh skiing",
    },
    {
      name: "Mussoorie Tour",
      image:
        "https://i.pinimg.com/736x/50/aa/d3/50aad36098435afd327471e1ce2b9f7f.jpg",
      alt: "Mussoorie valley",
    },
    {
      name: "Rishikesh Tour",
      image:
        "https://i.pinimg.com/736x/cb/71/49/cb714920561dc0c6f83f7ed703ff2eae.jpg",
      alt: "Laxman Jhula",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar></Navbar>
      {/* Welcome Section */}
     <section className="pt-24 pb-14 md:pt-28 md:pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-2">
            Welcome to Delhiyatracab
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Explore the new places and enjoy your journey with Delhiyatracab,
              the leading car rental and reservation company offering premium,
              comfy and secure cars on hire in Delhi. Having an intense and
              strong network, we provide car rental services across all these
              cities. With an aim to bring you immense pleasure of comfortable
              and stress-free travelling, we offer a wide range of rental cars
              like compact cars, small cabs, sedan, MUVs (Multi Utility
              Vehicles), SUV (Sport Utility Vehicles) etc.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Being the most happening and busiest city of India, Delhi attracts
              thousands of tourists and travelers across the globe. Therefore,
              it is necessary to make prior car booking in Delhi. At
              Delhiyatracab, we strive to provide the best travelling experience
              with personalized attention, regardless the traffic jams and poor
              roads. You can enjoy the stunning side views, spectacular natural
              beauty and various attractions of these four cities without any
              travelling worries.
            </p>
          </div>
        </div>
      </section>

      {/* Redesigned Tourist Places Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-3">
              Discover Incredible Destinations
            </h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rotate-45 border-t-4 border-l-4 border-yellow-400 opacity-20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {touristPlaces.map((place, index) => (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container with Perspective Effect */}
                <div className={`relative h-96 rounded-2xl overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'shadow-2xl scale-105' : 'shadow-lg'}`}>
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={place.image}
                      alt={place.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Decorative Element */}
                    <div className="w-12 h-12 rounded-full border-2 border-yellow-400 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110"></div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-3 relative">
                      {place.name}
                      <span className="block w-12 h-1 bg-yellow-400 mt-2 transition-all duration-500 group-hover:w-24"></span>
                    </h3>
                    
                    {/* Action Button */}
                    <div className={`flex items-center mt-4 transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <button className="py-2 px-4 bg-yellow-400 text-blue-900 rounded-lg font-bold flex items-center transform transition-transform duration-300 hover:translate-x-1">
                        Explore
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative Corners */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer></Footer>
    </div>
  );
}