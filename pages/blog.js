import Post from "@/components/post"
import Layout from "@/components/layout"



export default function Blog({posts}) {


  return (
    <>
      <Layout
        title={"blog"}
        description={"Blog sobre guitarras, GuitarLA"}
        >

        <main className="container mx-auto px-10">
          <h1 className="text-center my-10 font-semibold text-2xl">Blog </h1>
          <div className="grid grid-cols-1 gap-5
                          md:grid-cols-2
                          xl:grid-cols-3">
              {posts?.map(post => (
                <Post
                    key={post.id}
                    post={post.attributes}

                  />
              ))}
          </div>
        </main>



      </Layout>
    </>
  )
}


export async function getServerSideProps(){

  const respusta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respusta.json()

  return{
    props:{
        posts
    }
  }
}

