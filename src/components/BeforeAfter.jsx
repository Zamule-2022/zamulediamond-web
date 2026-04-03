const testimonios = [
  {
    cliente: 'Alejandro M.',
    zona: 'Palma de Mallorca',
    vehiculo: 'BMW Serie 3',
    dano: 'Bordes golpeados + oxidaci\u00f3n',
    stars: 5,
    texto: 'Llevaba semanas sin usar el coche por verg\u00fcenza de las llantas. Vinieron a casa, tardaron 3 horas y quedaron perfectas. No me lo pod\u00eda creer.',
  },
  {
    cliente: 'Carmen L.',
    zona: 'Calvi\u00e1',
    vehiculo: 'Audi A4 Avant',
    dano: 'Ara\u00f1azos profundos en 3 llantas',
    stars: 5,
    texto: 'Ten\u00eda miedo de que se notara la reparaci\u00f3n. Qued\u00f3 id\u00e9ntico a como sali\u00f3 del taller. Y en mi aparcamiento, sin perder el d\u00eda.',
  },
  {
    cliente: 'Roberto P.',
    zona: 'Alc\u00fadia',
    vehiculo: 'Mercedes GLC',
    dano: 'Deformaci\u00f3n + lacado da\u00f1ado',
    stars: 5,
    texto: 'Precio justo, vinieron puntu\u00ednimos y el trabajo fue impecable. Para el pr\u00f3ximo ara\u00f1azo, sin duda otra vez.',
  },
]

export default function BeforeAfter() {
  return (
    <section id="antes-despues" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Clientes reales
          </span>
          <h2 className="text-4xl font-black text-white mt-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
            Opiniones sin filtro de personas que confiaron en nosotros. Sus llantas, restauradas en su propia casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-gold-400/30 transition-all flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-gold-400 text-base">&#9733;</span>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{t.texto}&rdquo;
              </p>
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-white font-semibold text-sm">{t.cliente}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{t.zona} &middot; {t.vehiculo}</p>
                <p className="text-zinc-600 text-xs mt-1">{t.dano}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden mt-12">
          {[
            { num: '+500', label: 'Llantas restauradas' },
            { num: '5\u2605', label: 'Valoraci\u00f3n media' },
            { num: '100%', label: 'Garant\u00eda de calidad' },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-900 px-6 py-5 text-center">
              <div className="text-2xl font-black text-gold-400">{s.num}</div>
              <div className="text-zinc-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contacto"
            className="inline-block border border-gold-400/50 text-gold-400 font-semibold px-8 py-3 rounded-xl hover:bg-gold-400/10 transition-colors"
          >
            Quiero este resultado para mis llantas &#8594;
          </a>
        </div>
      </div>
    </section>
  )
             }
