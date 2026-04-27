import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#081225] pt-16 md:pt-20 pb-8 px-6 border-t border-[rgba(255,255,255,0.05)] relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="X3 Padel Logo" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 font-body text-base max-w-sm mb-8 font-medium">
              Donde el rendimiento deportivo se encuentra con el mejor club social de Aguascalientes.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61553537596080" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:border-padel hover:bg-white hover:text-carbon transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://www.instagram.com/x3padelclubmx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-white hover:border-padel hover:bg-white hover:text-carbon transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black uppercase text-xl text-white mb-6 tracking-wide">Enlaces</h4>
            <ul className="space-y-4 font-body font-bold text-sm text-gray-400">
              <li><a href="#instalaciones" className="hover:text-padel transition-colors uppercase py-2 inline-block">Instalaciones</a></li>
              <li><a href="#academia" className="hover:text-padel transition-colors uppercase py-2 inline-block">Academia</a></li>
              <li><a href="#ligas" className="hover:text-padel transition-colors uppercase py-2 inline-block">Ligas & Torneos</a></li>
              <li><a href="#" className="hover:text-padel transition-colors uppercase py-2 inline-block">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase text-xl text-white mb-6 tracking-wide">Contacto</h4>
            <ul className="space-y-6 font-body font-bold text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-padel shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/sb4wN1Qvjt9BjeEq7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="uppercase hover:text-white transition-colors leading-relaxed"
                >
                  Zona de Calicantos, Norte de Aguascalientes
                </a>
              </li>
               <li className="flex items-center gap-3">
                <Phone size={20} className="text-padel shrink-0" />
                <a href="tel:4494361995" className="uppercase hover:text-white transition-colors">449 436 1995</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-padel shrink-0" />
                <a href="mailto:contacto@equistrespadel.com" className="uppercase hover:text-white transition-colors break-all">contacto@equistrespadel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-gray-500 font-body font-bold text-[10px] md:text-xs uppercase tracking-widest leading-loose">
            &copy; {new Date().getFullYear()} X3 Padel Club Aguascalientes. <br className="md:hidden"/> Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
