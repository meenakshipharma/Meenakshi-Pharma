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

export default function App() {
  return (
    <BrowserRouter>
      {/* Tiles provide their own background — no wrapper bg needed */}
      <div className="flex flex-col min-h-screen">
        {/* Reset page scroll offset on navigation */}
        <ScrollToTop />

        {/* Global nav — always true black, 44px height */}
        <Header />

        {/* Main page content — tiles stack edge-to-edge */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />

            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer — parchment canvas */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
