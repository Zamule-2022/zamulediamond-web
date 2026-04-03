const testimonios = [
  {
    vehiculo: 'BMW Serie 3',
    dano: 'Bordes dañados + oxidación',
    texto: 'Vinieron a mi garaje en Palma, tardaron 3 horas y las llantas quedaron como nuevas. Sin diferencia con las originales de fábrica.',
    cliente: 'Alejandro M.',
    zona: 'Palma de Mallorca',
    stars: 5
  },
  {
    vehiculo: 'Audi A4 Avant',
    dano: 'Arañazos profundos x4',
    texto: 'Contratamos el pack completo x4 y el acabado es impecable. Precio muy competitivo para el nivel de trabajo. 100% recomendable.',
    cliente: 'Carmen L.',
    zona: 'Calviá',
    stars: 5
  },
  {
    vehiculo: 'Mercedes GLC',
    dano: 'Deformación + lacado',
    texto: 'El servicio a domicilio es una pasada. Sin mover el coche. Resultado de taller profesional, garantizado y sin sorpresas.',
    cliente: 'Roberto P.',
    zona: 'Alcúdia',
    stars: 5
  }
]

export default function BeforeAfter() {
  return (
    <section id="antes-despues" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Resultados reales</span>
          <h2 className="text-4xl font-black text-white mt-3">Lo que dicen nuestros clientes</h2>
          <p className="text-zinc-400 mt-3 max-w-lg mx-auto">Más de 500 llantas reparadas en Mallorca. Valoración media 5 estrellas.</p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-gold-400/30 transition-colors">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-gold-400 text-base">&#9733;</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{t.texto}&rdquo;</p>

              {/* Client info */}
              <div className="border-t border-zinc-800 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold text-sm">{t.cliente}</span>
                  <span className="text-zinc-600 text-xs">&middot;</span>
                  <span className="text-zinc-500 text-xs">{t.zona}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-zinc-800 text-zinc-400 text-xs px-2 py-0.5 rounded-md">{t.vehiculo}</span>
                  <span className="bg-gold-400/10 text-gold-400 text-xs px-2 py-0.5 rounded-md border border-gold-400/20">{t.dano}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden mb-12">
          <div className="bg-zinc-900 p-6 text-center">
            <div className="text-3xl font-black text-gold-400">+500</div>
            <div className="text-zinc-400 text-sm mt-1">Llantas reparadas</div>
          </div>
          <div className="bg-zinc-900 p-6 text-center">
            <div className="text-3xl font-black text-gold-400">5&#9733;</div>
            <div className="text-zinc-400 text-sm mt-1">Valoración media</div>
          </div>
          <div className="bg-zinc-900 p-6 text-center">
            <div className="text-3xl font-black text-gold-400">100%</div>
            <div className="text-zinc-400 text-sm mt-1">Garantía del trabajo</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="inline-block border border-gold-400/50 text-gold-400 font-semibold px-8 py-3 rounded-lg hover:bg-gold-400/10 transition-colors"
          >
            Quiero este resultado para mis llantas &#8594;
          </a>
        </div>

      </div>
    </section>
  )
}
