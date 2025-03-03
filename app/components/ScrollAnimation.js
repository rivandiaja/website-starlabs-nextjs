"use client";
import { useEffect, useRef, useState } from "react";
import "animate.css";

export default function ScrollAnimation({ children, animation = "animate__zoomInDown", threshold = 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Hentikan observer setelah animasi dijalankan
        }
      },
      { threshold } // Animasi berjalan saat elemen mencapai threshold
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${isVisible ? `animate__animated ${animation}` : "opacity-0"}`}>
      {children}
    </div>
  );
}
