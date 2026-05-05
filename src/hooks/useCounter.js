import { useState, useEffect } from "react";

export default function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime;
    let animationFrame;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  return count;
}
