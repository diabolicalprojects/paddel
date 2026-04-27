import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Pádel Casual",
      price: "$600",
      period: "por pista / 1.5h",
      features: [
        "Reserva, juega y disfruta de nuestras instalaciones premium sin complicaciones.",
        "Acceso a vestuarios premium",
        "Reserva con 48h de antelación",
        "Préstamo de equipo básico"
      ],
      highlighted: false
    },
    {
      name: "Membresía X3",
      price: "$1,800",
      period: "al mes",
      features: [
        "Acceso prioritario, beneficios exclusivos y un lugar asegurado en la comunidad.",
        "Reservas ilimitadas (1.5h/día)",
        "Torneo interno mensual incluido",
        "Acceso prioritario a eventos",
        "Descuento 15% en Pro Shop"
      ],
      highlighted: true
    },
    {
      name: "Academia Pro",
      price: "$2,500",
      period: "al mes",
      features: [
        "Clases diseñadas para que tu evolución no se detenga.",
        "2 entrenamientos semanales",
        "Clínicas de técnica avanzada",
        "Análisis táctico con video",
        "Todo lo de la Membresía X3"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="planes" className="py-32 px-6 bg-carbon relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-padel font-display text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase leading-none">MEMBRESÍAS <br className="md:hidden"/>Y ENTRENAMIENTO</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
            Planes diseñados para adaptarse a tu ritmo de juego. Desde el partido casual hasta el entrenamiento intensivo de élite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => {
            const message = `¡Hola! 👋 Vengo de la página web de X3 Padel Club y me interesa recibir más información sobre el plan: ${plan.name} 🎾`;
            const whatsappLink = `https://api.whatsapp.com/send?phone=524494361995&text=${encodeURIComponent(message)}`;

            return (
              <div 
                key={idx}
                className={`relative rounded-xl overflow-hidden flex flex-col ${
                  plan.highlighted 
                    ? 'bg-carbon border-2 border-padel shadow-[0_0_30px_rgba(163,230,53,0.15)] transform md:-translate-y-4 md:scale-105 z-10' 
                    : 'bg-[#151515] border border-[#333]'
                }`}
              >
                {/* Ticket Notch Effect bottom only to avoid overlap */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-carbon rounded-full border border-t-[#333] border-x-[#333] border-b-transparent"></div>

                {plan.highlighted && (
                  <div className="bg-padel text-carbon text-center py-2 font-bold text-xs uppercase tracking-[0.2em] relative z-20">
                    Más Popular
                  </div>
                )}

                <div className="p-8 flex-grow">
                  <h3 className="font-emphasis text-2xl uppercase tracking-wide mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6 border-b border-[#333] pb-6">
                    <span className="text-4xl font-display font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 font-body text-sm uppercase">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <svg className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-padel' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 text-center uppercase font-bold tracking-widest text-sm rounded-[0.5rem] transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-padel text-carbon hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_20px_rgba(163,230,53,0.2)] hover:shadow-[0_15px_30px_rgba(163,230,53,0.4)]'
                        : 'bg-transparent border border-[#555] text-white hover:border-padel hover:text-padel'
                    }`}
                  >
                    Seleccionar Plan
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
