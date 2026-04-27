import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize, Zap, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, desc, icon, highlights }) => (
  <div className="h-full w-full relative overflow-hidden rounded-xl bg-[#0a0a0a] border border-[#222] p-8 flex flex-col gap-4 group hover:border-padel/50 transition-all duration-500">
    <div className="text-padel mb-2 transform group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h4 className="font-display font-black text-2xl uppercase tracking-tighter text-white">{title}</h4>
    <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">{desc}</p>
    {highlights && (
      <ul className="mt-auto space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-padel rounded-full"></span>
            {h}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card-anim", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const technicalFeatures = [
    {
      title: "Canchas de Élite",
      desc: "Instalaciones de alto rendimiento diseñadas bajo estándares internacionales para garantizar el mejor juego en Aguascalientes.",
      icon: <Maximize size={40} />,
      highlights: ["Cristal Panorámico 12mm", "Iluminación LED 200W", "Césped Monofilamento"]
    },
    {
      title: "Comunidad y Ranking",
      desc: "Súmate al ranking más activo del estado. Torneos semanales y ligas americanas para todos los niveles.",
      icon: <Activity size={40} />,
      highlights: ["Ranking en Tiempo Real", "Torneos Federados", "Retas Garantizadas"]
    },
    {
      title: "Energía y Confort",
      desc: "Más allá de la cancha. Zonas de descanso, vestidores premium y pro-shop con las mejores marcas.",
      icon: <Zap size={40} />,
      highlights: ["Vestidores Premium", "Pro-Shop Especializada", "Área Social Vibe"]
    }
  ];

  return (
    <section ref={containerRef} id="instalaciones" className="py-32 px-6 max-w-6xl mx-auto relative z-20">
      <div className="mb-20">
        <h2 className="text-padel font-display text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">INGENIERÍA <br/>DEPORTIVA</h2>
        <p className="text-gray-400 max-w-3xl font-body text-xl font-medium leading-relaxed">
          No solo construimos un club, diseñamos un ecosistema de <span className="text-white">alto rendimiento</span>. Cada elemento de nuestras 12 pistas ha sido seleccionado para elevar tu nivel de juego al estándar internacional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technicalFeatures.map((f, i) => (
          <div key={i} className="feature-card-anim">
            <FeatureCard {...f} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
