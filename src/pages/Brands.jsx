import React, { useEffect, useRef, useState } from "react";
import { BRAND_LOGOS } from "../utils/data";

function BrandCard({ brand, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Fallback for prefers-reduced-motion or environments without IntersectionObserver
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="will-change-transform motion-reduce:transition-none motion-reduce:transform-none"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: `${(index % 5) * 0.05}s`,
      }}
    >
      <div
        className="group flex items-center justify-center bg-white rounded-[20px] border border-[#ECECEC] p-[24px] h-[120px] transition-all duration-250 hover:border-[#1BD3E4] hover:-translate-y-[2px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1BD3E4] focus:border-transparent"
        tabIndex={0}
        aria-label={brand.name || `Partner Brand ${index + 1}`}
        title={brand.name}
      >
        <img
          src={brand.url}
          alt={brand.name || `Partner Brand ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-contain filter transition-all duration-250 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#111827]">
      <section className="max-w-[1400px] mx-auto px-6 py-[120px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-[48px]">
          <div className="w-12 h-1 bg-[#1BD3E4] mb-6 rounded-full" />
          <h1 className="text-[32px] md:text-[40px] font-bold mb-4 tracking-tight text-[#111827]">
            Our Trusted Brands
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl">
            Partnering with leading pharmaceutical companies.
          </p>
        </div>

        {/* Logo Gallery */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[32px]"
          role="region"
          aria-label="Brand Logos Gallery"
        >
          {BRAND_LOGOS.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </section>

      {/* Tailwind handles standard utilities, but we inject a small style block to enforce 250ms duration if custom class is missing */}
      <style>{`
        .duration-250 {
          transition-duration: 250ms;
        }
      `}</style>
    </div>
  );
}
