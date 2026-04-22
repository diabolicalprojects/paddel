import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Feature1 = () => {
  return (
    <div className="h-64 w-full relative overflow-hidden rounded-xl border-b-4 border-padel">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622227922682-58e1363e52f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-carbon/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col">
        <span className="text-padel font-display font-black text-4xl leading-none">12</span>
        <span className="text-white font-emphasis text-xl uppercase tracking-widest mt-1">Canchas WPT</span>
        <span className="text-gray-400 font-body text-sm mt-2">Cristal panorámico e iluminación LED asimétrica de competición.</span>
      </div>
    </div>
  );
};

const Feature2 = () => {
  return (
    <div className="h-64 w-full relative overflow-hidden rounded-xl bg-deepblue border border-[rgba(255,255,255,0.1)] flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-emphasis text-white text-xl uppercase tracking-widest">Top Jugadores</h4>
        <div className="flex gap-1">
          <span className="w-2 h-6 bg-padel"></span>
          <span className="w-2 h-6 bg-padel opacity-50"></span>
          <span className="w-2 h-6 bg-padel opacity-20"></span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {[
          { rank: "1", name: "L. Mendoza", pts: "2450" },
          { rank: "2", name: "A. Silva", pts: "2100" },
          { rank: "3", name: "C. Rivas", pts: "1980" }
        ].map((p, i) => (
          <div key={i} className="flex justify-between items-center border-b border-[rgba(255,255,255,0.05)] pb-2">
            <div className="flex items-center gap-3">
              <span className={`font-display font-black text-xl ${i === 0 ? 'text-padel' : 'text-gray-500'}`}>{p.rank}</span>
              <span className="font-body font-bold text-white uppercase">{p.name}</span>
            </div>
            <span className="font-mono text-gray-400 text-sm">{p.pts} PTS</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Feature3 = () => {
  return (
    <div className="h-64 w-full relative overflow-hidden rounded-xl bg-[#111] border border-[#222] p-6 flex flex-col justify-between">
      <div>
        <h4 className="font-emphasis text-white text-xl uppercase tracking-widest mb-2">Compite y Mejora</h4>
        <p className="text-gray-400 font-body text-sm leading-relaxed">
          Desde Ligas Americanas hasta torneos federados. Encuentra tu nivel y ponte a prueba contra la mejor comunidad deportiva de Aguascalientes.
        </p>
      </div>

      <button className="w-full bg-padel text-carbon font-black uppercase tracking-widest py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
        <span>Ver Próximos Torneos</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="instalaciones" className="py-24 px-6 max-w-6xl mx-auto relative z-20">
      <div className="mb-16">
        <h2 className="text-padel font-display text-4xl md:text-5xl font-black mb-4 uppercase">Rendimiento Real</h2>
        <p className="text-gray-300 max-w-2xl font-body text-lg font-medium">
          Instalaciones top. Torneos desafiantes. Una comunidad que no para de crecer en Aguascalientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-card flex flex-col gap-4">
          <h3 className="font-display font-black text-2xl tracking-tight uppercase text-white">Instalaciones Top</h3>
          <Feature1 />
        </div>
        
        <div className="feature-card flex flex-col gap-4">
          <h3 className="font-display font-black text-2xl tracking-tight uppercase text-white">Comunidad Activa</h3>
          <Feature2 />
        </div>

        <div className="feature-card flex flex-col gap-4">
          <h3 className="font-display font-black text-2xl tracking-tight uppercase text-white">Ligas y Retos</h3>
          <Feature3 />
        </div>
      </div>
    </section>
  );
};

export default Features;
