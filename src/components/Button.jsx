import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300";
  
  const variants = {
    primary: "px-8 py-4 bg-brand text-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-brand-dark",
    secondary: "px-8 py-4 bg-white text-brand border border-brand rounded-full shadow-sm hover:bg-brand-light hover:-translate-y-1",
    outline: "px-8 py-4 bg-transparent text-text border border-gray-300 rounded-full hover:border-brand hover:text-brand transition-colors",
    link: "text-brand hover:text-brand-dark hover:underline p-0"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to}>
        <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
          <button type={type} className={buttonClasses} onClick={onClick}>
            {children}
          </button>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
