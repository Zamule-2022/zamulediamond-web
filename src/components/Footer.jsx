export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-gold-400 font-black text-2xl tracking-tight">ZAMULE</span>
              <span className="text-white font-black text-2xl tracking-tight ml-1">DIAMOND</span>
            </div>
            <p className="text-zinc-600 text-sm mt-1">Reparación de llantas CNC · Mallorca</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-zinc-500 hover:text-gold-400 text-sm transition-colors">Inicio</a>
            <a href="#servicios" className="text-zinc-500 hover:text-gold-400 text-sm transition-colors">Servicios</a>
            <a href="#antes-despues" className="text-zinc-500 hover:text-gold-400 text-sm transition-colors">Antes/Después</a>
            <a href="#contacto" className="text-zinc-500 hover:text-gold-400 text-sm transition-colors">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="bg-gold-400/10 border border-gold-400/30 text-gold-400 font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-gold-400/20 transition-colors whitespace-nowrap"
          >
            Pedir presupuesto →
          </a>
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-zinc-700 text-xs">© {year} Zamule Diamond. Todos los derechos reservados.</p>
          <p className="text-zinc-800 text-xs">zamulediamond.com · Mallorca, España</p>
        </div>
      </div>
    </footer>
  )
}
