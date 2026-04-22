import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background darkens a bit on mount
      gsap.to(overlayRef.current, { opacity: 0.6, duration: 1.5, ease: "power2.out" });

      // Elastic slide up for titles
      gsap.from([title1Ref.current, title2Ref.current], {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] flex items-center justify-end overflow-hidden pb-20 md:pb-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622227922682-58e1363e52f1?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-carbon via-[rgba(11,29,58,0.7)] to-transparent opacity-0"
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-end text-right">
        <h1 className="flex flex-col items-end">
          <span 
            ref={title1Ref} 
            className="text-white font-body font-bold text-2xl md:text-4xl uppercase tracking-tighter mb-2 opacity-100 drop-shadow-md"
          >
            AGUASCALIENTES, AGS
          </span>
          <span 
            ref={title2Ref} 
            className="text-padel font-display font-black text-[5rem] md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter"
          >
            MÁS QUE<br/>PÁDEL
          </span>
        </h1>
        
        <div className="mt-12 md:mt-16 flex items-center gap-4">
          <div className="w-2 h-12 bg-padel"></div>
          <p className="text-gray-200 font-body text-base uppercase font-bold tracking-widest max-w-[250px] text-left">
            El alto rendimiento deportivo se encuentra con un club social vibrante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
