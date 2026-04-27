import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".location-content", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ubicacion" className="py-32 px-6 bg-[#080808] relative overflow-hidden">
      {/* Decorative Map Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#A3E635 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="w-full md:w-1/2 location-content text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-padel/10 border border-padel/20 rounded-full mb-6">
            <MapPin size={16} className="text-padel" />
            <span className="text-padel font-bold text-xs uppercase tracking-widest">Localización Estratégica</span>
          </div>
          
          <h2 className="text-white font-display text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
            UBICACIÓN EN EL <br/><span className="text-padel">NORTE DE AGS</span>
          </h2>
          
          <p className="text-gray-400 font-body text-xl leading-relaxed mb-8">
            Encuéntranos en la <span className="text-white">zona de Calicantos</span>, la ubicación más premium y accesible del norte de Aguascalientes. Estamos a menos de <span className="text-white">5 minutos de Av. Colosio</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Puntos Cercanos</h4>
              <p className="text-gray-500 text-sm">Zona Calicantos, Prol. Zaragoza, Av. Colosio.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Fácil Acceso</h4>
              <p className="text-gray-500 text-sm">Amplio estacionamiento privado y vigilado.</p>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/sb4wN1Qvjt9BjeEq7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-carbon px-8 py-4 font-black uppercase tracking-widest rounded hover:bg-padel transition-colors group"
          >
            <span>Cómo Llegar</span>
            <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square w-full bg-carbon border border-white/10 rounded-2xl overflow-hidden relative group">
             {/* Simplified Visual Map Placeholder */}
             <div className="absolute inset-0 bg-[#111] flex items-center justify-center p-10">
                <div className="relative w-full h-full border-2 border-white/5 rounded-full flex items-center justify-center animate-pulse">
                   <div className="w-4/5 h-4/5 border-2 border-padel/10 rounded-full flex items-center justify-center">
                      <div className="w-3/5 h-3/5 border-2 border-padel/30 rounded-full flex items-center justify-center">
                         <div className="w-8 h-8 bg-padel rounded-full shadow-[0_0_30px_rgba(163,230,53,0.8)] relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-carbon font-black text-[10px]">X3</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="absolute top-1/4 right-1/4 text-[10px] text-gray-600 font-black uppercase tracking-widest">Colosio</div>
                <div className="absolute bottom-1/4 left-1/4 text-[10px] text-gray-600 font-black uppercase tracking-widest">Zaragoza</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
