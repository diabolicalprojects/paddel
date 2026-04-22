import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Alquiler Único",
      price: "25€",
      period: "por pista / 1.5h",
      features: [
        "Acceso a vestuarios premium",
        "Reserva con 48h de antelación",
        "Pelotas no incluidas",
        "Sin acceso a torneos"
      ],
      highlighted: false
    },
    {
      name: "Membresía X3",
      price: "89€",
      period: "al mes",
      features: [
        "Reservas ilimitadas (1.5h/día)",
        "Reserva con 7 días de antelación",
        "Bote de pelotas mensual",
        "Acceso prioritario a ligas",
        "Descuento 20% en tienda"
      ],
      highlighted: true
    },
    {
      name: "Academia PRO",
      price: "120€",
      period: "al mes",
      features: [
        "2 clases semanales (grupos reducidos)",
        "Análisis de video mensual",
        "Preparación física específica",
        "Inscripción gratuita a 1 torneo",
        "Todo lo del plan Membresía"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="ligas" className="py-32 px-6 bg-carbon relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-padel font-display text-4xl md:text-5xl font-black mb-4">ACCESO AL CLUB</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
            Planes diseñados para adaptarse a tu ritmo de juego. Desde el partido casual hasta el entrenamiento intensivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-xl overflow-hidden flex flex-col ${
                plan.highlighted 
                  ? 'bg-carbon border-2 border-padel shadow-[0_0_30px_rgba(163,230,53,0.15)] transform md:-translate-y-4 md:scale-105 z-10' 
                  : 'bg-[#151515] border border-[#333]'
              }`}
            >
              {/* Ticket Notch Effect top/bottom */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-carbon rounded-full border border-b-[#333] border-x-[#333] border-t-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-carbon rounded-full border border-t-[#333] border-x-[#333] border-b-transparent"></div>

              {plan.highlighted && (
                <div className="bg-padel text-carbon text-center py-1 font-bold text-xs uppercase tracking-widest">
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
                <button 
                  className={`w-full py-4 uppercase font-bold tracking-widest text-sm rounded-[0.5rem] transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-padel text-carbon hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]'
                      : 'bg-transparent border border-[#555] text-white hover:border-padel hover:text-padel'
                  }`}
                >
                  Seleccionar Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
