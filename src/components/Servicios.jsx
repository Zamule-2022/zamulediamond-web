const servicios = [
  {
    icono: 'CNC',
    titulo: 'Reparación CNC',
    desc: 'Mecanizado de precisión para bordes dañados, arañazos profundos y deformaciones. Resultado idéntico al original de fábrica.',
    precio: 'Desde 89€/llanta',
    badge: 'El más solicitado',
    badgeStyle: 'gold',
  },
  {
    icono: 'UV',
    titulo: 'Pulido y lacado',
    desc: 'Eliminamos oxidación, marcas de freno y acabados deteriorados. Lacado protector con secado UV.',
    precio: 'Desde 49€/llanta',
    badge: null,
    badgeStyle: null,
  },
  {
    icono: '200',
    titulo: 'Cambio de color',
    desc: 'Personalización total. Más de 200 colores disponibles. Acabados brillante, satinado o mate.',
    precio: 'Desde 120€/llanta',
    badge: null,
    badgeStyle: null,
  },
  {
    icono: 'x4',
    titulo: 'Pack completo x4',
    desc: 'Reparación, pulido y lacado de las cuatro llantas. Precio especial para el juego completo.',
    precio: 'Consultar precio',
    badge: 'Mejor precio',
    badgeStyle: 'zinc',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Nuestros servicios</span>
          <h2 className="text-4xl font-black text-white mt-3">Qué hacemos por tus llantas</h2>
          <p className="text-zinc-400 mt-3 max-w-lg mx-auto">
            Todo a domicilio, en tu garaje o aparcamiento. Sin desplazamientos, sin esperas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-gold-400/40 transition-all duration-300 hover:bg-zinc-900/80 flex flex-col gap-5"
            >
              {/* Top row: icon + badge */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <span className="text-gold-400 font-black text-sm tracking-tight">{s.icono}</span>
                </div>
                {s.badge && (
                  <span className={
                    s.badgeStyle === 'gold'
                      ? 'bg-gold-400/15 text-gold-400 border border-gold-400/20 text-xs font-semibold px-3 py-1 rounded-full'
                      : 'bg-zinc-800 text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full'
                  }>
                    {s.badge}
                  </span>
                )}
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-gold-400 transition-colors">{s.titulo}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Footer: price + CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
                <span className="text-gold-400 font-bold text-lg">{s.precio}</span>
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-zinc-400 hover:text-gold-400 transition-colors"
                >
                  Pedir presupuesto →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="border border-zinc-800 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">¿No estás seguro de qué servicio necesitas?</p>
            <p className="text-zinc-400 text-sm mt-0.5">Cuéntanos el daño y te asesoramos gratis, sin compromiso.</p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-gold-400 hover:bg-gold-500 text-black font-bold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Asesoría gratuita →
          </a>
        </div>

      </div>
    </section>
  )
}
