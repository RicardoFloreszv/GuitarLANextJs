
import Layout from "../components/layout"
import Guitarra from "../components/guitarra"


export default function Tienda({guitarras}) {



  return (
    <>
      <Layout
        title={"Tienda"}
        description={"Tienda de Guitarras, GuitarLA"}
        >

        <main className="container mx-auto">
          <h1 className="text-center my-10 text-2xl font-bold text-orange-600">Nuestra colección</h1>

          <div className="grid grid-cols-1 gap-5 px-10
                          md:grid-cols-2 
                          xl:grid-cols-3">
            {guitarras?.map(guitarra => (

              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps(){

  const respusta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respusta.json()

  return{
    props:{
        guitarras
    }
  }
}

