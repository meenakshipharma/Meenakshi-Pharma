// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import logo from "../../assets/images/logo_1.png";

// export default function Logo3DSplash() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let current = 0;

//     const interval = setInterval(() => {
//       current += 1;

//       if (current >= 100) {
//         current = 100;
//         clearInterval(interval);
//       }

//       setProgress(current);
//     }, 20); // 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.2 }}
//         style={{
//           position: "fixed",
//           inset: 0,
//           background: "#ffffff",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: 99999,
//         }}
//       >
//         <div
//           style={{
//             width: 320,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {/* Logo Reveal */}

//           <div
//             style={{
//               width: 230,
//               height: 230,
//               overflow: "hidden",
//             }}
//           >
//             {/* <motion.img
//               src={logo}
//               alt="Logo"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//               }}
//               animate={{
//                 clipPath: `inset(${100 - progress}% 0% 0% 0%)`,
//               }}
//               transition={{
//                 duration: 0.1,
//                 ease: "linear",
//               }}
//             /> */}
//             <motion.img
//               src={logo}
//               alt="Logo"
//               initial={{
//                 clipPath: "inset(100% 0 0 0)",
//               }}
//               animate={{
//                 clipPath: "inset(0% 0 0 0)",
//               }}
//               transition={{
//                 duration: 2,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//               }}
//             />
//           </div>

//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import "./Logo3DSplash.css";
// import logo from "../../assets/images/logo_1.png";

// export default function Logo3DSplash({ theme, onDone }) {
//   const colors = theme?.colors;

//   const loaderStyle = {
//     "--loader-bg": colors?.background?.DEFAULT || "#F8FAFC",
//     "--loader-glow-1": colors?.brand?.DEFAULT || "#0056B3",
//     "--loader-glow-2": colors?.secondary?.DEFAULT || "#2E8B57",
//     "--loader-glow-3": colors?.brand?.light || "#DCEBFF",
//     "--loader-spread": colors?.brand?.dark || "#004494",
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="loader"
//         style={loaderStyle}
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         <motion.div
//           className="spread"
//           initial={{ scale: 0, opacity: 0.35 }}
//           animate={{ scale: 18, opacity: 0 }}
//           transition={{ duration: 1.4, ease: "easeOut" }}
//           onAnimationComplete={() => onDone?.()}
//         />

//         <motion.div
//           className="glow"
//           animate={{
//             scale: [1, 1.12, 1],
//             opacity: [0.25, 0.5, 0.25],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <motion.div
//           className="logoWrapper"
//           initial={{ scale: 0.85, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <img src={logo} alt="Logo" className="logo" />
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Logo3DSplash.css";
import logo from "../../assets/images/logo_1.png";

export default function Logo3DSplash() {
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpread(true);
    }, 1400); // After logo reveal

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Expanding Brand Circle */}
        <motion.div
          className="spreadCircle"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: spread ? 25 : 0,
          }}
          transition={{
            duration: 0.9,
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
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
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
            clipPath: "circle(80% at 50% 50%)",
            scale: spread ? 0.9 : 1,
            opacity: spread ? 0 : 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img src={logo} alt="Logo" className="logo" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}