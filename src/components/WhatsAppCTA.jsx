'use client'

export default function WhatsAppCTA() {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34XXXXXXXXX'
  const mensaje = encodeURIComponent('Hola, quisiera saber el precio para reparar mis llantas. \u00bfMe pod\u00e9is ayudar?')
  const url = `https://wa.me/${numero}?text=${mensaje}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white font-semibold px-5 py-3.5 rounded-full shadow-2xl hover:bg-green-400 transition-all hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 fill-white flex-shrink-0"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L.057 23.625a.5.5 0 0 0 .614.639l5.938-1.559A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.895 9.895 0 0 1-5.031-1.375l-.36-.214-3.733.98.998-3.65-.234-.374A9.857 9.857 0 0 1 2.1 12C2.1 6.525 6.525 2.1 12 2.1S21.9 6.525 21.9 12 17.475 21.9 12 21.9z" />
      </svg>
      <span className="hidden sm:inline">Escr&iacute;benos</span>
    </a>
  )
}
