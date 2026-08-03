import { useEffect, useState } from "react";

export default function usePageLoader({ minDuration = 2500 } = {}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const timer = setTimeout(() => {
      if (mounted) {
        setLoading(false);
      }
    }, minDuration);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [minDuration]);

  return loading;
}