'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Formulario() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setEnviando(true)
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, fuente: 'zamulediamond.com', fecha: new Date().toISOString() }),
        })
      } catch (err) { console.error('Error enviando lead:', err) }
    } else {
      console.log('Lead (sin webhook):', data)
      await new Promise(r => setTimeout(r, 1000))
    }
    setEnviando(false)
    setEnviado(true)
    reset()
  }

  return (
    <section id="contacto" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Presupuesto gratis
          </span>
          <h2 className="text-4xl font-black text-white mt-3">¿Cuándo te venimos?</h2>
          <p className="text-zinc-400 mt-2">Te contactamos en menos de 2 horas. Sin compromiso.</p>
        </div>

        {enviado ? (
          <div className="bg-green-900/20 border border-green-700/50 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-white font-bold text-xl mb-2">¡Solicitud recibida!</h3>
            <p className="text-zinc-400 text-sm">Nos ponemos en contacto contigo en menos de 2 horas para confirmar cita.</p>
            <button onClick={() => setEnviado(false)} className="mt-6 text-gold-400 text-sm underline-offset-2 underline hover:text-gold-300">
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <input
                placeholder="Nombre y apellidos *"
                className={`w-full bg-zinc-900 border text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors placeholder:text-zinc-500 ${
                  errors.nombre ? 'border-red-500 focus:border-red-400' : 'border-zinc-700 focus:border-gold-400'
                }`}
                {...register('nombre', { required: 'El nombre es obligatorio' })}
              />
              {errors.nombre && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.nombre.message}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp *"
                className={`w-full bg-zinc-900 border text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors placeholder:text-zinc-500 ${
                  errors.telefono ? 'border-red-500 focus:border-red-400' : 'border-zinc-700 focus:border-gold-400'
                }`}
                {...register('telefono', {
                  required: 'El teléfono es obligatorio',
                  pattern: { value: /^[0-9+\s\-()]{9,15}$/, message: 'Introduce un teléfono válido' },
                })}
              />
              {errors.telefono && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.telefono.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Municipio" className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-500" {...register('municipio')} />
              <input placeholder="Vehículo (ej: BMW X5)" className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-500" {...register('vehiculo')} />
            </div>

            <textarea rows={3} placeholder="Describe el daño (opcional)" className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-400 transition-colors resize-none placeholder:text-zinc-500" {...register('descripcion')} />

            <button type="submit" disabled={enviando} className="w-full bg-gold-400 text-black font-bold py-4 rounded-xl text-lg hover:bg-gold-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-gold-400/20">
              {enviando ? 'Enviando...' : 'Solicitar presupuesto gratis →'}
            </button>

            <p className="text-zinc-600 text-xs text-center leading-relaxed">
              Sin compromiso. No compartimos tus datos. Solo te llamamos para darte precio.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
