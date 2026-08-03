import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden group select-none cursor-pointer tracking-wide";

  const variants = {
    primary: "px-7 py-3.5 bg-[#1C8A3C] hover:bg-[#156D2F] text-white rounded-xl shadow-md shadow-[#1C8A3C]/25 hover:shadow-lg hover:shadow-[#1C8A3C]/35 hover:-translate-y-0.5",
    secondary: "px-7 py-3.5 bg-white text-[#0B4E8C] border-2 border-[#0B4E8C] hover:bg-[#0B4E8C] hover:text-white rounded-xl shadow-sm hover:-translate-y-0.5",
    outline: "px-7 py-3.5 bg-transparent text-[#0B4E8C] border-2 border-[#0B4E8C]/30 hover:border-[#0B4E8C] hover:bg-[#0B4E8C]/5 rounded-xl hover:-translate-y-0.5",
    accent: "px-7 py-3.5 bg-[#E31E24] hover:bg-[#B81419] text-white rounded-xl shadow-md hover:-translate-y-0.5",
    link: "text-[#0B4E8C] hover:text-[#1C8A3C] hover:underline p-0 font-semibold"
  };

  const buttonClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  const shimmer = variant !== 'link' && (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
    />
  );

  if (to) {
    return (
      <Link to={to} className="inline-block focus:outline-none">
        <motion.div
          whileTap={{ scale: 0.97 }}
          className="inline-block rounded-xl"
        >
          <button type={type} className={buttonClasses} onClick={onClick}>
            {shimmer}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
          </button>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {shimmer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default Button;
