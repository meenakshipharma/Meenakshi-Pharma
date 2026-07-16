import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import Achievements from "./pages/Achievements";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50">
        {/* Reset page scroll offset on navigation */}
        <ScrollToTop />

        {/* Dynamic header navigation */}
        <Header />

        {/* Main page content container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />

            {/* Fallback route for 404 handler */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
