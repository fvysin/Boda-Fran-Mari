import { useState, useEffect } from 'react';

export const useOnScreen = (ref, threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting); // Detecta si está visible
      },
      { threshold } // Configura qué tan visible debe estar para activar
    );

    if (ref.current) {
      observer.observe(ref.current); // Observa el nodo del ref
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current); // Limpia el observador
    };
  }, [ref, threshold]);

  return isIntersecting;
};
