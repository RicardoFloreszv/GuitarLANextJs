import Image from "next/image"
import Layout from "@/components/layout"



export default function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, GuitarLA"}
        >

        <main className="container mx-auto p-5 ">
          <h1 className="text-center  text-2xl  font-bold text-orange-600">Nosotros</h1>
          
          <div className="grid md:grid-cols-2 gap-10 mt-20 items-center">
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

            <div className="font-semibold">
              <p>
                Libero ligula cursus tortor, sit amet suscipit massa mi at enim. Aliquam erat volutpat. In turpis augue, ultrices quis tortor quis, placerat facilisis sapien. Pellentesque malesuada lobortis eleifend. Morbi tincidunt libero vitae dui posuere, quis molestie felis scelerisque. Phasellus molestie placerat nisi ac viverra. Suspendisse potenti. Suspendisse leo lacus, fermentum et mattis id, varius sit amet quam. Suspendisse potenti. Nulla mollis enim ut ultrices eleifend.
              </p>
              <p className="mt-4">
                Sed fermentum elit odio, ut efficitur ipsum faucibus ut. Pellentesque sit amet ipsum tellus. Donec malesuada nibh vel quam dapibus iaculis. Suspendisse potenti. Vivamus ac arcu eu lacus aliquam maximus vel id neque. Aliquam vitae lectus enim. Nam fringilla quam ac diam convallis fermentum.
              </p>
              <p className="mt-4">
                Sed fermentum elit odio,  Aliquam vitae lectus enim. Nam fringilla quam ac diam convallis fermentum.
              </p>
            </div>
          
          </div>



          
        
        </main>



      </Layout>
    </>
  )
}
