import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

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
              <a 
                href="https://www.facebook.com/profile.php?id=61553537596080" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:border-padel hover:bg-white hover:text-carbon transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://www.instagram.com/x3padelclubmx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:border-padel hover:bg-white hover:text-carbon transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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
                <a 
                  href="https://maps.app.goo.gl/sb4wN1Qvjt9BjeEq7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="uppercase hover:text-white transition-colors"
                >
                  Zona de Calicantos, Norte de Aguascalientes
                </a>
              </li>
               <li className="flex items-center gap-3">
                <Phone size={18} className="text-padel shrink-0" />
                <a href="tel:4494361995" className="uppercase hover:text-white transition-colors">449 436 1995</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-padel shrink-0" />
                <a href="mailto:contacto@equistrespadel.com" className="uppercase hover:text-white transition-colors">contacto@equistrespadel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-body font-bold text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} X3 Padel Club Aguascalientes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
