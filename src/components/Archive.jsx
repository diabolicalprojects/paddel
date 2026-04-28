import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArchiveCard = ({ title, subtitle, description, image, index, total, children }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky effect with slight scale/blur on scroll out
      if (index < total - 1) {
        gsap.to(cardRef.current, {
          scale: 0.9,
          opacity: 0,
          y: -100,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        });
      }

      // Parallax for the content inside the card
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center",
        }
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index, total]);

  return (
    <div 
      ref={cardRef} 
      className="min-h-[100dvh] md:h-[100dvh] w-full md:sticky top-0 flex items-center justify-center p-4 md:p-8 overflow-hidden bg-carbon"
      style={{ zIndex: index }}
    >
      <div className="relative w-full h-full min-h-[600px] md:min-h-0 max-w-7xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)] bg-carbon">
        {/* Background Image with stronger overlay */}
        {/* Optimized Image Loading */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-carbon via-carbon/80 md:via-carbon/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-60 md:opacity-0"></div>

        {/* Content Grid */}
        <div className="relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-end md:justify-start p-6 md:px-20 md:pb-20 md:pt-32">
          <div ref={contentRef} className="w-full md:w-2/3 lg:w-1/2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[2px] bg-padel"></span>
              <p className="text-padel font-emphasis uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-xs md:text-sm">{subtitle}</p>
            </div>
            
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-display font-black uppercase text-white tracking-tighter leading-[0.9] mb-6 md:mb-8 drop-shadow-2xl">
              {title}
            </h2>
            
            <div className="glass-panel p-6 md:p-10 rounded-xl md:rounded-2xl border-l-4 border-l-padel max-w-xl">
              <p className="text-gray-200 font-body text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6 italic">
                "{description}"
              </p>
              
              <div className="flex items-center gap-4 md:gap-6">
                {children}
                <span className="text-gray-500 font-mono text-[10px] md:text-sm tracking-widest uppercase">Sistema de Alto Rendimiento</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Index Number */}
        <div className="absolute top-6 right-6 md:top-12 md:right-12 pointer-events-none opacity-5">
          <span className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white">0{index + 1}</span>
        </div>
      </div>
    </div>
  );
};

const BouncingBall = () => {
  const ballRef = useRef(null);
  
  useEffect(() => {
    gsap.to(ballRef.current, {
      y: -50,
      duration: 0.4,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="w-16 h-16 rounded-full border-2 border-padel flex items-center justify-center bg-[rgba(163,230,53,0.1)] backdrop-blur-sm">
      <div ref={ballRef} className="w-4 h-4 bg-padel rounded-full shadow-[0_0_10px_#A3E635]"></div>
    </div>
  );
};

const LEDFlash = () => {
  const ledRef = useRef(null);
  
  useEffect(() => {
    gsap.to(ledRef.current, {
      x: '200%',
      duration: 1.5,
      repeat: -1,
      ease: "power2.inOut",
      delay: 0.5
    });
  }, []);

  return (
    <div className="w-32 h-2 bg-[#111] border border-[#333] rounded-full overflow-hidden relative">
      <div ref={ledRef} className="absolute top-0 left-[-50%] w-1/2 h-full bg-padel shadow-[0_0_15px_#A3E635] rounded-full"></div>
    </div>
  );
};

const TrophyIcon = () => (
  <div className="w-16 h-16 rounded-full border-2 border-padel flex items-center justify-center bg-[rgba(163,230,53,0.1)] backdrop-blur-sm shadow-[0_0_20px_rgba(163,230,53,0.2)]">
    <svg className="w-8 h-8 text-padel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  </div>
);

const Archive = () => {
  const sections = [
    {
      title: "Clase Mundial",
      subtitle: "01. Canchas",
      description: "12 pistas panorámicas listas para la acción. El escenario perfecto para quienes buscan calidad, velocidad y la mejor atmósfera de la ciudad.",
      image: "/643516107_17954418798080688_5040464691383007529_n.jpg",
      element: <BouncingBall />
    },
    {
      title: "Academia M3",
      subtitle: "02. Formación",
      description: "¿Vas empezando o quieres dominar el ranking? Nuestra Academia M3 tiene el método para que juegues con confianza desde el primer día. Técnica, estrategia y resultados reales.",
      image: "/side-view-woman-holding-palette.jpg",
      element: <LEDFlash />
    },
    {
      title: "Estilo de Vida",
      subtitle: "03. Comunidad",
      description: "Torneos, convivencias y las mejores \"retas\" de Aguascalientes. Aquí vienes por el deporte y te quedas por la comunidad. El plan ya está armado.",
      image: "/657683641_17958842208080688_421451555995903500_n.jpg",
      element: <TrophyIcon />
    }
  ];

  return (
    <section id="academia" className="relative w-full bg-carbon">
      {sections.map((section, idx) => (
        <ArchiveCard 
          key={idx}
          index={idx}
          total={sections.length}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          image={section.image}
        >
          {section.element}
        </ArchiveCard>
      ))}
    </section>
  );
};

export default Archive;
