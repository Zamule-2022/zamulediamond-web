const servicios = [
  { icono: '⚙️', titulo: 'Reparación CNC', desc: 'Mecanizado de precisión para bordes dañados, arañazos profundos y deformaciones. Resultado idéntico al original de fábrica.', precio: 'Desde 89€/llanta', detalle: 'El más solicitado' },
  { icono: '✨', titulo: 'Pulido y lacado', desc: 'Eliminamos oxidación, marcas de freno y acabados deteriorados. Lacado protector con secado UV.', precio: 'Desde 49€/llanta', detalle: null },
  { icono: '🎨', titulo: 'Cambio de color', desc: 'Personalización total. Más de 200 colores disponibles. Acabados brillante, satinado o mate.', precio: 'Desde 120€/llanta', detalle: null },
  { icono: '🚗', titulo: 'Pack completo x4', desc: 'Reparación, pulido y lacado de las cuatro llantas. Precio especial para el juego completo.', precio: 'Consultar precio', detalle: 'Mejor precio' },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Nuestros servicios</span>
          <h2 className="text-4xl font-black text-white mt-3">Qué hacemos por tus llantas</h2>
          <p className="text-zinc-500 mt-3 max-w-xl mx-auto">Todo a domicilio, en tu garaje o aparcamiento. Sin necesidad de desplazarte.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <div key={s.titulo} className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400/40 transition-all group">
              {s.detalle && (
                <span className="absolute top-4 right-4 bg-yellow-400/20 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full">{s.detalle}</span>
              )}
              <div className="text-4xl mb-4">{s.icono}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{s.titulo}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold text-sm">{s.precio}</span>
                <a href="#contacto" className="text-xs text-zinc-500 hover:text-yellow-400 transition-colors">Pedir presupuesto →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm mb-4">¿No estás seguro de qué servicio necesitas?</p>
          <a href="#contacto" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
            Cuéntanos y te asesoramos gratis
          </a>
        </div>
      </div>
    </section>
  )
}
