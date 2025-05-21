import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OneWaySection from "./pages/OneWaySection";
import CharDhamTaxiService from "./pages/CharDhamTaxiService";

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/one-way" element={<OneWaySection />} />
           <Route path="/services" element={<CharDhamTaxiService />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
