import React from 'react';
import { Globe, Share2, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#081225] pt-20 pb-6 px-6 border-t border-[rgba(255,255,255,0.05)] relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="X3 Padel Logo" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 font-body text-sm max-w-sm mb-8 font-medium">
              Donde el rendimiento deportivo se encuentra con el mejor club social de Aguascalientes.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:border-padel hover:bg-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:border-padel hover:bg-white transition-colors">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black uppercase text-xl text-white mb-6 tracking-wide">Enlaces</h4>
            <ul className="space-y-3 font-body font-bold text-sm text-gray-400">
              <li><a href="#instalaciones" className="hover:text-padel transition-colors uppercase">Instalaciones</a></li>
              <li><a href="#academia" className="hover:text-padel transition-colors uppercase">Academia</a></li>
              <li><a href="#ligas" className="hover:text-padel transition-colors uppercase">Ligas & Torneos</a></li>
              <li><a href="#" className="hover:text-padel transition-colors uppercase">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase text-xl text-white mb-6 tracking-wide">Contacto</h4>
            <ul className="space-y-4 font-body font-bold text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-padel shrink-0" />
                <span className="uppercase">Av. Deportiva 123, Aguascalientes, Ags.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-padel shrink-0" />
                <span className="uppercase">+52 449 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-padel shrink-0" />
                <span className="uppercase">play@x3padel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-body font-bold text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} X3 Padel Club Aguascalientes. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-3 bg-padel px-4 py-2 rounded">
            <span className="text-carbon font-display font-black text-xs uppercase tracking-widest">Club Abierto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
