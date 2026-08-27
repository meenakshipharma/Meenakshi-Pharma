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
import NotFound from "./pages/NotFound";

// Utils
import ScrollToTop from "./components/ScrollToTop";
import usePageLoader from "./hooks/usePageLoader";
import Logo3DSplash from "./components/loader/Logo3DSplash";
function App() {
  const loading = usePageLoader({
    minDuration: 2200,
  });

  React.useEffect(() => {
    // GA4 Initialization (Active when VITE_GA_MEASUREMENT_ID is provided)
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId && gaId.trim() && !window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", gaId);
    }

    // GTM Initialization (Active when VITE_GTM_ID is provided)
    const gtmId = import.meta.env.VITE_GTM_ID;
    if (gtmId && gtmId.trim() && !window.gtmLoaded) {
      window.gtmLoaded = true;
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',gtmId);
    }
  }, []);

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;