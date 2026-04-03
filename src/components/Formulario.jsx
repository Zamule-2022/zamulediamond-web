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

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Presupuesto gratis
          </span>
          <h2 className="text-4xl font-black text-white mt-3">
            ¿Cuándo te venimos?
          </h2>
          <p className="text-zinc-400 mt-3 max-w-sm mx-auto">
            Te contactamos en menos de 2 horas. Sin compromiso.
          </p>
        </div>

        {/* Form or success state */}
        {enviado ? (
          <div className="text-center py-14 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-white font-bold text-xl mb-2">¡Solicitud recibida!</h3>
            <p className="text-zinc-400 text-sm mb-6">Te llamamos en menos de 2 horas.</p>
            <button
              onClick={() => setEnviado(false)}
              className="text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors"
            >
              Enviar otra solicitud →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>

            {/* Name */}
            <div>
              <input
                {...register('nombre', { required: true })}
                placeholder="Nombre y apellidos *"
                className={`w-full bg-zinc-900 border text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors placeholder:text-zinc-500 ${errors.nombre ? 'border-red-500' : 'border-zinc-700 focus:border-gold-400'}`}
              />
              {errors.nombre && <p className="text-red-400 text-xs mt-1 ml-1">Campo obligatorio</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                {...register('telefono', { required: true })}
                placeholder="Teléfono / WhatsApp *"
                className={`w-full bg-zinc-900 border text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors placeholder:text-zinc-500 ${errors.telefono ? 'border-red-500' : 'border-zinc-700 focus:border-gold-400'}`}
              />
              {errors.telefono && <p className="text-red-400 text-xs mt-1 ml-1">Campo obligatorio</p>}
            </div>

            {/* Location + Vehicle row */}
            <div className="grid grid-cols-2 gap-4">
              <input
                {...register('municipio')}
                placeholder="Municipio"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-500"
              />
              <input
                {...register('vehiculo')}
                placeholder="Vehículo (ej: BMW X5)"
                className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-500"
              />
            </div>

            {/* Description */}
            <textarea
              {...register('descripcion')}
              placeholder="Describe el daño (opcional)"
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-500 resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-gold-400 hover:bg-gold-500 disabled:opacity-60 text-black font-bold py-4 rounded-xl text-lg transition-colors shadow-lg shadow-gold-400/20 mt-2"
            >
              {enviando ? 'Enviando…' : 'Solicitar presupuesto gratis →'}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-2 text-zinc-600 text-xs">
              <span>✓ Sin compromiso</span>
              <span>✓ No compartimos tus datos</span>
              <span>✓ Respuesta en 2h</span>
            </div>

          </form>
        )}
      </div>
    </section>
  )
}
