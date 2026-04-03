export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_65%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">

        {/* Badge */}
        <span className="inline-block bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          Servicio móvil · Mallorca
        </span>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Tus llantas,<br />
          <span className="text-gold-400">perfectas.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-3">
          Reparación y pulido CNC de precisión a domicilio.
        </p>
        <p className="text-zinc-500 text-base max-w-xl mx-auto mb-10">
          Sin desplazamientos. Sin esperas. Resultado de taller en tu garaje.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="#contacto"
            className="bg-gold-400 text-black font-bold py-4 px-8 rounded-xl text-lg hover:bg-gold-500 transition-colors shadow-lg shadow-gold-400/20"
          >
            Pedir presupuesto gratis
          </a>
          <a
            href="#antes-despues"
            className="border border-zinc-700 text-white font-semibold py-4 px-8 rounded-xl text-lg hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            Ver resultados →
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="text-zinc-600 text-sm tracking-wide">
          Sin compromiso · Respuesta en menos de 2 horas · Toda Mallorca
        </p>

        {/* Stats */}
        <div className="mt-16 pt-10 border-t border-zinc-800/60 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-black text-gold-400">+500</div>
            <div className="text-zinc-500 text-sm mt-1">Llantas reparadas</div>
          </div>
          <div className="border-x border-zinc-800/60">
            <div className="text-3xl font-black text-gold-400">24h</div>
            <div className="text-zinc-500 text-sm mt-1">Tiempo de entrega</div>
          </div>
          <div>
            <div className="text-3xl font-black text-gold-400">5★</div>
            <div className="text-zinc-500 text-sm mt-1">Valoración media</div>
          </div>
        </div>

      </div>
    </section>
  )
}
