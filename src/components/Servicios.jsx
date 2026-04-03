const servicios = [
  {
    icono: 'CNC',
    titulo: 'Tu llanta, id\u00e9ntica al original',
    desc: 'Borramos bordes golpeados, ara\u00f1azos profundos y deformaciones. El mecanizado CNC la deja exactamente igual que la del concesionario.',
    precio: 'Desde 89\u20ac/llanta',
    detalle: 'El m\u00e1s solicitado',
  },
  {
    icono: 'UV',
    titulo: 'Brillo de estreno garantizado',
    desc: 'Oxidaci\u00f3n, frenazo o rozadura del bordillo: lo eliminamos todo. Nuevo lacado protector con curado UV para que dure a\u00f1os.',
    precio: 'Desde 49\u20ac/llanta',
    detalle: null,
  },
  {
    icono: '200',
    titulo: 'Llantas nuevas sin comprarlas',
    desc: 'M\u00e1s de 200 colores disponibles. Brillante, satinado o mate. Cambia el look del coche sin gastarte en rines nuevos.',
    precio: 'Desde 120\u20ac/llanta',
    detalle: null,
  },
  {
    icono: 'x4',
    titulo: 'Las cuatro por el mejor precio',
    desc: 'Reparamos, pulimos y lacamos las 4 llantas en una sola visita. Precio especial de pack y resultado uniforme en todo el juego.',
    precio: 'Pide precio ahora',
    detalle: 'Mejor precio',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Nuestros servicios
          </span>
          <h2 className="text-4xl font-black text-white mt-3">
            &iquest;Qu&eacute; le pasa a tu llanta?
          </h2>
          <p className="text-zinc-500 mt-3 max-w-xl mx-auto">
            Sea cual sea el da&ntilde;o, lo solucionamos. En tu garaje o aparcamiento, sin que muevas el coche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-gold-400/40 transition-all group"
            >
              {s.detalle && (
                <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full border ${
                  s.detalle === 'El m\u00e1s solicitado'
                    ? 'bg-gold-400/15 text-gold-400 border-gold-400/20'
                    : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                }`}>
                  {s.detalle}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4">
                <span className="text-gold-400 font-black text-sm tracking-tight">{s.icono}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                {s.titulo}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold-400 font-bold text-sm">{s.precio}</span>
                <a
                  href="#contacto"
                  className="text-xs text-zinc-500 hover:text-gold-400 transition-colors"
                >
                  Pedir presupuesto &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-zinc-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">&iquest;No sabes exactamente qu&eacute; necesitas?</p>
            <p className="text-zinc-500 text-sm mt-1">Cu&eacute;ntanos el da&ntilde;o y te decimos precio al momento.</p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-gold-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-gold-500 transition-colors text-sm"
          >
            Asesor&iacute;a gratis &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
