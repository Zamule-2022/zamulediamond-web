export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-yellow-400 font-black text-8xl mb-4">404</div>
        <h1 className="text-white font-bold text-2xl mb-4">Página no encontrada</h1>
        <p className="text-zinc-500 mb-8">La página que buscas no existe.</p>
        <a
          href="/"
          className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
