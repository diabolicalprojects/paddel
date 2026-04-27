import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Code2, Cpu } from 'lucide-react';

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating DEMO Button - Larger and Relocated */}
      <button 
        onClick={toggleModal}
        className="fixed bottom-32 right-8 z-[90] bg-[#111] text-white border border-white/20 px-8 py-3.5 rounded-full font-display font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-carbon transition-all duration-300 shadow-2xl group flex items-center gap-3"
      >
        <span className="w-2.5 h-2.5 bg-padel rounded-full animate-pulse"></span>
        <span>DEMO</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-carbon/90 backdrop-blur-md"
            onClick={toggleModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-in zoom-in-95 duration-300">
            {/* Top Pattern */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <button 
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12 text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="/LOGO-DIABOLICAL-HORIZONTAL-BLANCO@2x.png" 
                  alt="Diabolical IA Services" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 uppercase tracking-widest mb-6">
                <Sparkles size={12} className="text-padel" />
                <span>Concepto de Desarrollo</span>
              </div>

              <h2 className="text-white font-display font-black text-3xl md:text-4xl mb-6 leading-tight tracking-tighter">
                ESTA ES UNA<br/>VERSÍON <span className="text-padel">DEMO</span>
              </h2>

              <p className="text-gray-400 font-body text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
                Este sitio es un prototipo interactivo de alto rendimiento diseñado para mostrar el potencial visual y funcional de una plataforma oficial completa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left">
                  <Code2 size={20} className="text-padel mb-2" />
                  <h4 className="text-white font-bold text-sm mb-1 uppercase">Web Premium</h4>
                  <p className="text-gray-500 text-xs">Interfaces pixel-perfect y animaciones fluidas.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left">
                  <Cpu size={20} className="text-padel mb-2" />
                  <h4 className="text-white font-bold text-sm mb-1 uppercase">IA Integrada</h4>
                  <p className="text-gray-500 text-xs">Automatización y soluciones inteligentes.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-gray-300 font-bold mb-6 text-sm uppercase tracking-widest">
                  ¿Quieres escalar tu marca al siguiente nivel?
                </p>
                
                <a 
                  href="https://api.whatsapp.com/send?phone=524491245952&text=%C2%A1Hola!%20%F0%9F%91%8B%20Vengo%20de%20la%20demo%20de%20X3%20Padel%20y%20me%20interesa%20cotizar%20un%20proyecto%20con%20Diabolical%20IA%20Services.%20%F0%9F%9A%80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white text-carbon px-8 py-4 rounded-xl font-display font-black text-lg uppercase tracking-wider hover:bg-padel transition-all duration-300 shadow-xl"
                >
                  <span>Contactar Agencia</span>
                  <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default DemoModal;
