export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
        {/* Badge */}
        <span className="inline-block bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          Reparaci&oacute;n de llantas a domicilio &middot; Mallorca
        </span>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Tus llantas,<br />
          <span className="text-gold-400">como nuevas.</span>
        </h1>

        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-3">
          Reparaci&oacute;n CNC profesional en tu garaje o aparcamiento. Venimos a donde est&eacute;s.
        </p>
        <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto mb-10">
          Sin taller. Sin esperas. Resultado garantizado en el mismo d&iacute;a.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-gold-400 text-black font-bold py-4 px-8 rounded-xl text-lg hover:bg-gold-500 transition-colors shadow-lg shadow-gold-400/20"
          >
            Quiero presupuesto gratis &rarr;
          </a>
          <a
            href="#antes-despues"
            className="border border-zinc-700 text-white font-semibold py-4 px-8 rounded-xl text-lg hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            Ver trabajos realizados &rarr;
          </a>
        </div>

        {/* Confianza */}
        <p className="text-zinc-600 text-xs mt-6 tracking-wide">
          Sin compromiso &middot; Respuesta en 2 horas &middot; Operamos en toda Mallorca
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-zinc-800/60">
          {[
            { num: '+500', label: 'Llantas restauradas' },
            { num: '1 d\u00eda', label: 'En tu garaje' },
            { num: '5\u2605', label: 'Valoraci\u00f3n media' },
          ].map((s) => (
            <div key={s.label} className="border-x border-zinc-800/60 first:border-l-0 last:border-r-0">
              <div className="text-3xl font-black text-gold-400">{s.num}</div>
              <div className="text-zinc-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
