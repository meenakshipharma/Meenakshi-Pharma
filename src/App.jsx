import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import themeJson from "./theme.json";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import Achievements from "./pages/Achievements";

import Partner from "./pages/Partner";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyInfo";
import TermsOfService from "./pages/TermsOfService";

// Utils
import ScrollToTop from "./components/ScrollToTop";
import usePageLoader from "./hooks/usePageLoader";
import Logo3DSplash from "./components/loader/Logo3DSplash";
function App() {
  const loading = usePageLoader({
    minDuration: 2200,
  });
  if (loading) {
    return <Logo3DSplash theme={themeJson} />;
  }
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;