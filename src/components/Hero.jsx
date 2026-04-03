export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
        <span className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Servicio móvil · Mallorca
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Tus llantas,<br />
          <span className="text-yellow-400">perfectas.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Reparación y pulido CNC de precisión a domicilio.
        </p>
        <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-10">
          Sin desplazamientos. Sin esperas. Resultado de taller en tu garaje.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20">
            Pedir presupuesto gratis
          </a>
          <a href="#antes-despues" className="border border-zinc-700 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors">
            Ver resultados →
          </a>
        </div>
        <p className="text-zinc-600 text-xs mt-6 tracking-wide">
          Sin compromiso · Respuesta en menos de 2 horas · Servicio en toda Mallorca
        </p>
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-zinc-800">
          {[
            { num: '+500', label: 'Llantas reparadas' },
            { num: '24h', label: 'Tiempo de entrega' },
            { num: '5★', label: 'Valoración media' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-yellow-400">{s.num}</div>
              <div className="text-zinc-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
