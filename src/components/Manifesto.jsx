import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Split Text Animation (simulated with lines)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(text1Ref.current, 
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" }
      )
      .fromTo(text2Ref.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" },
        "-=0.4"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 overflow-hidden bg-deepblue flex items-center justify-center">
      {/* Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute inset-[-20%] w-[140%] h-[140%] bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: 'url("/high-angle-tired-woman-laying-ground.jpg")' }}
      ></div>
      
      {/* Noise Texture Override for this section */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20 pointer-events-none mix-blend-soft-light"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col gap-8">
        <h2 
          ref={text1Ref}
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase text-white tracking-tighter leading-none"
        >
          TU NUEVA SOLUCIÓN DE <br/><span className="text-gray-400">EMERGENCIA CONTRA EL ESTRÉS.</span>
        </h2>
        
        <h2 
          ref={text2Ref}
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl uppercase text-padel tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]"
        >
          EL PLAN PERFECTO <br/>ESTÁ EN LA CANCHA.
        </h2>
      </div>
    </section>
  );
};

export default Manifesto;
