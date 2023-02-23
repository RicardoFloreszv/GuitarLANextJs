import Layout from "@/components/layout"
import Image from "next/image"

import { useState } from "react"

export default function Producto({guitarra, agregarCarrito}) {

    const [cantidad, setCantidad] = useState(0)
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1){
            alert("cantidad no valida")
            return
        }
        
        //construir un objeto
        const guitarraSeleccionada = {
            id:guitarra[0].id,
            imagen:imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        
        //Pasando la informaciona con context
        agregarCarrito(guitarraSeleccionada)
    }


  return (
    <Layout
        title={`Guitarra ${nombre}`}
        >
        
        <h1 className="text-center my-20 text-3xl text-black font-bold   ">Guitarra {nombre}</h1>

        <div className=" container mx-auto grid md:grid-cols-2 items-center md:max-w-6xl  justify-items-center px-10">

            <Image src={imagen.data.attributes.url} width={300} height={300} alt={`Imagen guitarra ${nombre}`} />

            <div className="p-4 bg-gray-200 rounded-md">
                <h3 className="uppercase text-orange-500 font-bold text-2xl mb-5">{nombre}</h3>
                <p className="descripcion-guitarras my-5">{descripcion}</p>
                <p className="text-orange-500 text-xl font-semibold  ">${precio}</p>


                <form className="flex  flex-col mt-10" 
                      onSubmit={handleSubmit}>
                    <label htmlFor="cantidad" className="text-xl font-semibold my-3" >Cantidad</label>

                    <select id="cantidad" 
                            className="p-3 rounded-md text-center text-xl font-semibold cursor-pointer"
                            onChange={e => setCantidad(+e.target.value)}>
                        <option value="0">-- Seleccione cantidad --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>
                    
                    <input type="submit" value="Agregar al Carrito" 
                            className="mt-5 bg-orange-500 text-white py-3 text-xl font-semibold cursor-pointer"/>

                </form>

            </div>

        </div>

        <div className="container mx-auto mt-20 px-10 ">
            <h2 className="font-bold text-xl">Características:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sed adipisci ex quaerat, alias debitis ducimus architecto ratione dolorem voluptatibus maiores labore! Fuga ab aut beatae ipsum. Incidunt, quisquam non.</p>
        </div>

    </Layout>
  )
}


export async function getServerSideProps({query: {url}}){


    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()

    return{
        props:{
            guitarra
        }
    }
}