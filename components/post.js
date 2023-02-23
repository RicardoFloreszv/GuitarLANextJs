import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}) {

    const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article className="border-2 border-black rounded-sm mb-5">
            <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`}/>

            <div className="p-2 ">
                <h3 className="text-2xl font-semibold ">{titulo}</h3>
                <p className="text-sm my-2  text-end mr-5 text-orange-500 font-semibold">{formatearFecha(publishedAt)}</p>
                <p className="descripcion-blog p-1 text-justify ">{contenido}</p>

                <Link className="bg-blue-200 block text-center rounded-sm p-1 font-semibold mt-3" 
                      href={`/blog/${url}`}>
                    Leer Post
                </Link>
            </div>
    </article>
  )
}
