import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SocialGallery = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        gsap.fromTo(img, 
          { y: i % 2 === 0 ? 100 : -100 },
          { 
            y: i % 2 === 0 ? -100 : 100,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const images = [
    "/654943453_17957073909080688_2531322485578528401_n.webp",
    "/655292297_17957401242080688_1653857506797928154_n.webp",
    "/658424315_17958006810080688_4634116456805855768_n.webp"
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-carbon overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, idx) => (
            <div 
              key={idx}
              ref={el => imagesRef.current[idx] = el}
              className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl border border-[rgba(255,255,255,0.1)] shadow-2xl"
            >
              <img 
                src={src} 
                alt={`Club Life ${idx + 1}`} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-10 select-none">
        <span className="font-display font-black text-[12vw] uppercase text-white whitespace-nowrap tracking-tighter block">
          ESTILO DE VIDA • ESTILO DE VIDA
        </span>
      </div>
    </section>
  );
};

export default SocialGallery;
