import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import BeforeAfter from '@/components/BeforeAfter'
import Formulario from '@/components/Formulario'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <BeforeAfter />
      <Formulario />
      <Footer />
    </main>
  )
}
