/**
 * useCounter - Hook para animación de contador numérico
 *
 * Incrementa un número desde 0 hasta el valor final durante
 * una duración determinada usando requestAnimationFrame.
 *
 * @param {number} end      - Valor final del contador
 * @param {number} duration - Duración de la animación en ms (default: 2000)
 * @param {number} start    - Valor inicial (default: 0)
 * @returns {number} Valor actual del contador durante la animación
 */

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
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}
