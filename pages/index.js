import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import Post from "@/components/post"
import Curso from "@/components/curso"

export default function Home({guitarras, posts, curso}) {


  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de musica, venta de guitarras y mas"}
        >

        <main>
          <h1 className="text-center my-10 text-2xl font-bold text-orange-600">Nuestra colección</h1>

          <div className="container mx-auto grid grid-cols-1 p-7
                          md:grid-cols-2
                          xl:grid-cols-3">
              {guitarras?.map(guitarra =>(
                <Guitarra
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                  />
              ))}
          </div>
        </main>

        {<Curso
          curso={curso.attributes}
          />}


        <section >

          <h1 className="text-center my-10 text-2xl font-bold text-orange-600">Nuestros Blogs</h1>

          <div className="container mx-auto grid grid-cols-1 p-5 gap-4
                          md:grid-cols-2
                          xl:grid-cols-3">
              {posts?.map(post => (
                  <Post
                    key={post.id}
                    post={post.attributes}
                  />
              ))}
          </div>

        </section>

        


      </Layout>
    </>
  )
}

export async function getServerSideProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  
  const [resGuitarras, resPosts, resCurso] = await Promise.all([

    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])   

  const [{data:guitarras}, {data:posts}, {data:curso}] = await Promise.all([
      resGuitarras.json(),
      resPosts.json(),
      resCurso.json()
  ])

  return{
    props:{
      guitarras,
      posts,
      curso
    }
  }
}