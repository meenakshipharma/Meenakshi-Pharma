import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, duration = 1.5, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      
      // Smooth ease-out exponential count curves
      const easeOutValue = Math.round(end * (1 - Math.pow(2, -10 * progress)));
      setCount(easeOutValue >= end ? end : easeOutValue);

      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
