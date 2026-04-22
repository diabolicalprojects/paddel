import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArchiveCard = ({ title, subtitle, image, index, total, children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (index < total - 1) {
        gsap.to(cardRef.current, {
          scale: 0.95,
          opacity: 0.4,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        });
      } else {
        ScrollTrigger.create({
          trigger: cardRef.current,
          start: "top top",
          pin: true,
          pinSpacing: true
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index, total]);

  return (
    <div 
      ref={cardRef} 
      className="h-[100dvh] w-full sticky top-0 flex items-center justify-center p-6 md:p-12"
      style={{ zIndex: index }}
    >
      <div className="relative w-full h-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 bg-carbon bg-opacity-60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
          <div className="flex justify-between items-end w-full">
            <div>
              <p className="text-padel font-body uppercase tracking-widest font-bold mb-2">{subtitle}</p>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase text-white tracking-tighter drop-shadow-lg">{title}</h2>
            </div>
            <div className="hidden md:block">
              {children}
            </div>
          </div>
        </div>
        
        {/* Mobile Micro-element */}
        <div className="absolute top-8 right-8 md:hidden">
          {children}
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

const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev + 1) % 6000); // 60 seconds * 100
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const s = Math.floor(ms / 100);
    const msRemainder = ms % 100;
    return `${s.toString().padStart(2, '0')}:${msRemainder.toString().padStart(2, '0')}`;
  };

  return (
    <div className="font-mono text-2xl md:text-4xl text-padel font-bold tracking-widest drop-shadow-[0_0_10px_rgba(163,230,53,0.5)] bg-carbon px-4 py-2 rounded-[0.5rem] border border-[rgba(163,230,53,0.3)]">
      {formatTime(time)}
    </div>
  );
};

const Archive = () => {
  const sections = [
    {
      title: "Canchas",
      subtitle: "01. Instalaciones",
      image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070&auto=format&fit=crop",
      element: <BouncingBall />
    },
    {
      title: "Academia",
      subtitle: "02. Formación",
      image: "https://images.unsplash.com/photo-1622227922682-58e1363e52f1?q=80&w=2070&auto=format&fit=crop",
      element: <LEDFlash />
    },
    {
      title: "Eventos",
      subtitle: "03. Comunidad",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
      element: <Stopwatch />
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
          image={section.image}
        >
          {section.element}
        </ArchiveCard>
      ))}
    </section>
  );
};

export default Archive;
