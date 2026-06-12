/**
 * useInView - Hook para detectar visibilidad de elementos
 *
 * Usa IntersectionObserver para determinar cuándo un elemento
 * (referenciado por ref) entra en el viewport.
 *
 * @param {Object} ref       - Referencia al elemento DOM a observar
 * @param {number} threshold - Porcentaje de visibilidad requerido (0-1, default: 0.15)
 * @returns {boolean} true si el elemento está visible en el viewport
 */

import { useState, useEffect } from "react";

export default function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
