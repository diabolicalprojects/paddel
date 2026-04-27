import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Trophy, Users, Star, Target, ArrowRight } from 'lucide-react';

const LeagueCard = ({ title, desc, schedule, image, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-2xl h-[450px] md:h-[500px] border border-white/5 flex flex-col justify-end p-6 md:p-8 transition-all duration-700 hover:border-padel/50">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    ></div>
    
    {/* Overlays */}
    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-transparent opacity-90 md:opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute inset-0 bg-black/20 md:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Content */}
    <div className="relative z-10 translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-padel flex items-center justify-center text-carbon shadow-[0_0_20px_rgba(163,230,53,0.3)]">
          <Icon size={18} md:size={20} strokeWidth={2.5} />
        </div>
        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-padel">Inscripciones Abiertas</span>
      </div>

      <h3 className="text-white font-display font-black text-2xl md:text-4xl uppercase tracking-tighter mb-3 md:mb-4 leading-none">
        {title}
      </h3>
      
      <div className="max-h-40 md:max-h-0 opacity-100 md:opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-100">
        <p className="text-gray-300 font-body text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
          {desc}
        </p>
        
        <div className="flex items-center gap-2 mb-5 md:mb-6 text-gray-400">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-padel"></div>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{schedule}</span>
        </div>
      </div>

      <a 
        href="https://wa.me/524494361995"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-[10px] md:text-xs group/btn"
      >
        <span>Inscribirse ahora</span>
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-padel group-hover/btn:border-padel group-hover/btn:text-carbon transition-all duration-300">
          <ArrowRight size={12} md:size={14} />
        </div>
      </a>
    </div>
  </div>
);

const Leagues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".league-anim", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const leaguesData = [
    {
      title: "Liga Femenil",
      desc: "Comunidad y competencia para jugadoras que buscan elevar su nivel en el mejor ambiente social de Aguascalientes.",
      schedule: "Mar y Jue / 18:00 - 21:00",
      image: "/652844074_17957073828080688_6601196828939359994_n.jpg",
      icon: Users
    },
    {
      title: "Semillero Infantil",
      desc: "Formación técnica y valores para niños de 6 a 14 años. El futuro del pádel se construye hoy.",
      schedule: "Sábados / 09:00 - 12:00",
      image: "/649230058_17955884292080688_4342328940489496649_n.jpg",
      icon: Star
    },
    {
      title: "Categoría 2da & 3ra",
      desc: "Nivel semi-profesional para jugadores que buscan dominar el ranking y perfeccionar su táctica avanzada.",
      schedule: "Lun y Mié / 20:00 - 22:30",
      image: "/641524589_17954418873080688_7503099926291076552_n.jpg",
      icon: Target
    },
    {
      title: "Circuito PRO",
      desc: "La élite del pádel en el estado. Competencia de alta intensidad para jugadores de 1ra categoría.",
      schedule: "Viernes / 19:00 - 22:00",
      image: "/643543019_17954418903080688_3696734017386928767_n.jpg",
      icon: Trophy
    }
  ];

  return (
    <section ref={containerRef} id="ligas" className="py-32 px-6 bg-carbon relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-white font-display text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            ELIGE <br/><span className="text-padel">TU LIGA</span>
          </h2>
          <p className="text-gray-400 font-body text-xl max-w-2xl">
            Súmate al circuito más activo de Aguascalientes. Categorías diseñadas para cada etapa de tu evolución deportiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leaguesData.map((league, index) => (
            <div key={index} className="league-anim">
              <LeagueCard {...league} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leagues;
