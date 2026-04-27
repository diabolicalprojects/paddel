import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-padel transition-colors"
      >
        <span className="text-lg md:text-xl font-display font-bold uppercase tracking-tight pr-8">{question}</span>
        {isOpen ? <ChevronUp className="text-padel flex-shrink-0" /> : <ChevronDown className="text-gray-500 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-gray-400 font-body leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo puedo reservar mi lugar?",
      answer: "En X3 Padel Club puedes reservar fácilmente a través de nuestra plataforma online o mediante nuestra App. Solo elige tu horario preferido (desde las 6:00 AM) y confirma tu renta en menos de 2 minutos."
    },
    {
      question: "¿Cuentan con renta de palas y equipo?",
      answer: "¡Claro! No necesitas tener equipo propio para empezar. Contamos con renta de palas de gama alta y venta de pelotas nuevas en nuestra Pro-Shop para que solo te preocupes por jugar."
    },
    {
      question: "¿Tienen clases para quienes van empezando?",
      answer: "Sí, nuestra Academia M3 ofrece clases diseñadas específicamente para principiantes. Nuestros coaches certificados te enseñarán desde el agarre básico hasta la táctica en cancha para que juegues con confianza desde el primer día."
    },
    {
      question: "¿Cuál es el costo y duración de la renta?",
      answer: "Contamos con una tarifa de $600 MXN por pista para una sesión de 1.5 horas, incluyendo acceso a vestidores premium y todas nuestras amenidades."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-carbon relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <HelpCircle className="text-padel" size={32} />
           <h2 className="text-white font-display text-4xl md:text-5xl font-black uppercase tracking-tighter">
             PREGUNTAS <span className="text-padel">FRECUENTES</span>
           </h2>
        </div>
        
        <p className="text-gray-500 font-body text-lg mb-12">
          Todo lo que necesitas saber sobre el mejor club de pádel en el norte de Aguascalientes.
        </p>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
