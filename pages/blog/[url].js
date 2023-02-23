import Layout from "@/components/layout"
import Image from "next/image"
import { formatearFecha } from "@/utils/helpers"


export default function Post({post}) {

    
    const { titulo,contenido, imagen, publishedAt } = post[0].attributes


    

  return (
    <Layout
        title={`Guitarra ${titulo}`}
        >
        
        <h1 className="text-center my-20 text-3xl text-black font-bold   ">{titulo} </h1>

        <div className=" container mx-auto grid max-w-4xl  justify-items-center  ">

            <Image src={imagen.data.attributes.url} width={600} height={600} alt={`Imagen guitarra ${titulo}`} />

            <div className="p-4 bg-gray-100 rounded-md mt-20">
                <h3 className="uppercase font-bold text-2xl mb-5">{titulo}</h3>
                <p className=" my-5 whitespace-pre-wrap">{contenido}</p>
                <p className="text-blue-400 text-xl font-semibold text-end ">{formatearFecha(publishedAt)}</p>
            </div>
        </div>

    </Layout>
  )
}


export async function getServerSideProps({query: {url}}){


    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data: post} = await respuesta.json()

    return{
        props:{
            post
        }
    }
}