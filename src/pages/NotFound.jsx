import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { FiHome, FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Meenakshi Pharma"
        description="The page you are looking for does not exist on Meenakshi Pharma. Return to our homepage."
        canonicalPath="/404"
        noindex={true}
      />

      <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-b from-[#E8F1F9] via-[#F5F7FA] to-white">
        <div className="max-w-lg w-full text-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200/80 relative overflow-hidden">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8F1F9] border border-[#0B4E8C]/20 flex items-center justify-center text-[#0B4E8C]">
            <FiAlertCircle size={42} />
          </div>

          <span className="text-[#1C8A3C] font-extrabold uppercase text-xs tracking-widest px-3 py-1 bg-[#E8F5EB] rounded-full inline-block mb-3">
            Error 404
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B4E8C] mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Sorry, the page you are looking for does not exist or has been moved. You can return to our homepage to continue browsing.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B4E8C] text-white font-bold hover:bg-[#083B6A] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FiHome className="text-lg" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
