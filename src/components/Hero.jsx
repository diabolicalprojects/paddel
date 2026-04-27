import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background darkens a bit on mount and zooms
      gsap.to(overlayRef.current, { opacity: 0.7, duration: 1.5, ease: "power2.out" });
      gsap.from(".hero-bg", { scale: 1.1, duration: 2, ease: "power2.out" });

      // Elastic slide up for titles
      gsap.from([title1Ref.current, title2Ref.current], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.1
      });
      
      // Animate Description
      gsap.fromTo(".hero-description", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "power2.out", 
          delay: 0.4 
        }
      );
      
      // Ensure video plays
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay was prevented:", error);
        });
      }

      // Animate CTAs
      gsap.fromTo(".ctas-container a", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out", 
          delay: 0.6 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: id,
        autoKill: true
      },
      ease: "power4.inOut"
    });
  };

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] flex items-center justify-end overflow-hidden md:pb-0">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        poster="/tennis-paddles-balls-arrangement.jpg"
        className="absolute inset-0 w-full h-full object-cover hero-bg brightness-[0.4] contrast-[0.9]"
      >
        <source src="/hero-padel-main.mp4" type="video/mp4" />
      </video>
      
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
            CLUB DE PÁDEL AGUASCALIENTES
          </span>
          <span 
            ref={title2Ref} 
            className="text-padel font-display font-black text-[4rem] md:text-7xl lg:text-[8rem] leading-[1] tracking-tighter"
          >
            PÁDEL SIN<br/>LÍMITES
          </span>
        </h1>
        
        <p className="mt-6 text-gray-200 font-body text-lg md:text-xl uppercase tracking-widest max-w-2xl hero-description">
          Olvida la rutina. Únete al club donde el mejor nivel de Aguascalientes se encuentra con el ambiente que estabas buscando. Tu próxima reta empieza aquí.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-end gap-4 ctas-container">
          <a 
            href="#planes" 
            onClick={(e) => scrollToSection(e, '#planes')}
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-emphasis text-lg uppercase tracking-widest hover:bg-white hover:text-carbon transition-all duration-300 rounded-sm"
          >
            Conoce los Planes
          </a>
          <a 
            href="https://wa.me/524494361995" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-padel text-carbon font-emphasis text-lg uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] rounded-sm"
          >
            Reserva tu Cancha
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
