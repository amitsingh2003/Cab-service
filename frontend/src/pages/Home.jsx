import CarOptions from "../Components/CarOptions"
import CTA from "../Components/CTA"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import PopularDestinations from "../Components/PopularDestinations"
import Testimonials from "../Components/Testimonials"
import WhyChooseUs from "../Components/WhyChooseUs"


function Home() {
  return (
   <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <CarOptions />
      <WhyChooseUs />
      <PopularDestinations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home;
