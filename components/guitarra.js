import Image from "next/image"
import Link from "next/link"

export default function Guitarra({guitarra}) {

  const {descripcion, imagen, nombre, precio, url} = guitarra


  return (
    <div className="grid grid-cols-2 gap-1 items-center max-w-6xl mx-0 my-auto">
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

        <div className="p-1">
          <h3 className="uppercase text-orange-500 font-semibold text-xl">{nombre}</h3>
          <p className="descripcion-guitarras ">{descripcion}</p>
          <p className="text-orange-500 text-xl font-semibold">${precio}</p>

          <Link href={`/guitarras/${url}`} className="block mt-3 bg-black text-white p-2 text-center uppercase font-semibold  hover:bg-orange-500 transition duration-500">
            Ver Producto
          </Link>
          
        </div>
    </div>

  )
}
