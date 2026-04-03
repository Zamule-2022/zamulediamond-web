'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#antes-despues', label: 'Antes/Después' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-zinc-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-gold-400 font-black text-xl tracking-tight">ZAMULE</span>
          <span className="text-white font-black text-xl tracking-tight">DIAMOND</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-zinc-400 hover:text-gold-400 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gold-400 text-black font-bold text-sm px-5 py-2 rounded-lg hover:bg-gold-500 transition-colors"
          >
            Presupuesto gratis
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-zinc-800 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-zinc-300 hover:text-gold-400 py-3 text-base font-medium border-b border-zinc-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-gold-400 text-black font-bold text-center py-3 rounded-lg hover:bg-gold-500 transition-colors"
          >
            Presupuesto gratis
          </a>
        </div>
      )}
    </header>
  )
}
