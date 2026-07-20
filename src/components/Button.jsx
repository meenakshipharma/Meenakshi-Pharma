import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden group";

  const variants = {
    primary: "px-8 py-4 bg-brand text-white rounded-full shadow-md hover:shadow-xl hover:bg-brand-dark",
    secondary: "px-8 py-4 bg-white text-brand border border-brand rounded-full shadow-sm hover:bg-brand-light",
    outline: "px-8 py-4 bg-transparent text-text border border-gray-300 rounded-full hover:border-brand hover:text-brand",
    link: "text-brand hover:text-brand-dark hover:underline p-0"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  // Shimmer sweep — slides across the button on hover via CSS group-hover
  const shimmer = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]"
    />
  );

  if (to) {
    return (
      <Link to={to}>
        <motion.div
          whileHover={{ boxShadow: "0 0 0 3px rgba(233,51,48,0.18)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-block rounded-full"
        >
          <button type={type} className={buttonClasses} onClick={onClick}>
            {shimmer}
            {children}
          </button>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ boxShadow: "0 0 0 3px rgba(233,51,48,0.18)" }}
      whileTap={{ scale: 0.97 }}
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {shimmer}
      {children}
    </motion.button>
  );
};

export default Button;
