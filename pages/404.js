import Layout from '@/components/layout'
import Link from 'next/link'

export default function Pagina404() {
  return (
    <Layout
        title="Pagina no encontrada"
        >
        <div className=' text-center pt-96 pb-96'>
            <p className='text-2xl font-semibold pb-10'>Página no encontrada</p>
            <Link href="/" className='text-xl bg-orange-500 p-3 rounded-md text-white'>Ir a inicio</Link>
        </div>



    </Layout>
  )
}
