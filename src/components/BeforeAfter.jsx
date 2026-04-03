const casos = [
  { antes: '/images/antes-1.jpg', despues: '/images/despues-1.jpg', desc: 'BMW Serie 3 — Bordes dañados' },
  { antes: '/images/antes-2.jpg', despues: '/images/despues-2.jpg', desc: 'Audi A4 — Oxidación severa' },
  { antes: '/images/antes-3.jpg', despues: '/images/despues-3.jpg', desc: 'Mercedes GLC — Arañazos profundos' },
]

export default function BeforeAfter() {
  return (
    <section id="antes-despues" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Resultados reales</span>
          <h2 className="text-4xl font-black text-white mt-3">Antes y después</h2>
          <p className="text-zinc-400 mt-3">Sin filtros. Sin Photoshop. Solo nuestro trabajo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casos.map((c, i) => (
            <div key={i} className="space-y-3">
              <div className="relative">
                <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">ANTES</div>
                <div className="aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center">
                  <div className="text-center text-zinc-600">
                    <div className="text-4xl mb-2">📷</div>
                    <div className="text-xs">Añade foto en<br />public/images/</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-2 z-10 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">DESPUÉS</div>
                <div className="aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center">
                  <div className="text-center text-zinc-600">
                    <div className="text-4xl mb-2">✨</div>
                    <div className="text-xs">Añade foto en<br />public/images/</div>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm text-center">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contacto" className="inline-block border border-yellow-400/50 text-yellow-400 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400/10 transition-colors">
            Quiero este resultado para mis llantas →
          </a>
        </div>
      </div>
    </section>
  )
}
