import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Logo3DSplash.css";
import logo from "../../assets/images/logo_1.webp";

export default function Logo3DSplash() {
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    // Trigger blue circle expansion after logo reveal completes
    const timer = setTimeout(() => {
      setSpread(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Expanding Brand Circle */}
        <motion.div
          className="spreadCircle"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: spread ? 35 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Glow */}
        <motion.div
          className="glow"
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: spread ? 0 : [1, 1.15, 1],
            opacity: spread ? 0 : [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: spread ? 0.2 : 1.2,
            repeat: spread ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo */}
        <motion.div
          className="logoWrapper"
          initial={{
            clipPath: "circle(0% at 50% 50%)",
            scale: 0.85,
            opacity: 0,
          }}
          animate={{
            clipPath: "circle(100% at 50% 50%)",
            scale: spread ? 0.9 : 1,
            opacity: spread ? 0 : 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}