import { useEffect, useState } from "react"
import Layout from "@/components/layout"
import Image from "next/image"

export default function Carrito({carrito, eliminarProducto, actualizarCantidad}) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0 )
        setTotal(calculoTotal)
    }, [carrito])
    

  return (
    <Layout
        title="Carrito de compras"
        >
        
        <main className="container mx-auto pb-64 px-10">
            <h2 className="text-center my-20 text-2xl font-bold text-orange-600">Carrito</h2>

            <div className="grid items-start gap-7
                            md:grid-cols-3">

                <div className="md:col-span-2 text-xl text-center">
                    <h2 className="text-2xl font-bold mb-10 text-start">Artículos </h2>

                    {carrito.length === 0 ? <p className="md:mt-64 bg-gray-100 rounded-md w-3/6 mx-auto py-5">Carrito Vacío</p> : (
                        carrito.map(producto =>(
                            <div key={producto.id} className="grid grid-cols-2 items-center border-b-2 last-of-type:border-0 relative">

                                <div className="">
                                    <Image width={250} height={480} src={producto.imagen} alt={producto.nombre}>

                                    </Image>                                    
                                </div>
                                <div className="flex flex-col gap-3 text-start">
                                    <p className="text-3xl font-extrabold ">{producto.nombre}</p>
                                    <p className="text-xl font-bold">$<span>{producto.precio}</span></p>
                                    
                                    <div>
                                        <p className="font-semibold">Cantidad de guitarras:</p>
                                        <select 
                                                className="p-3 rounded-md text-center text-xl font-semibold cursor-pointer w-full border-2 my-2 border-black"
                                                onChange={e => actualizarCantidad({
                                                    id:producto.id,
                                                    cantidad:e.target.value
                                                })}
                                                value={producto.cantidad}>
                                            
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>

                                        </select>
                                    </div>

                                    <p className="font-semibold text-md text-center mt-4 bg-orange-200 p-2 rounded-md ">Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                </div>

                                <button className="cursor-pointer absolute top-8 right-1 font-bold border px-2 py-1 bg-black text-white" 
                                        type="button"
                                        onClick={() => eliminarProducto(producto.id)}>
                                    Eliminar 
                                </button>

                            </div>

                        ))
                    )}

                </div>

                <aside className="bg-gray-200 px-4 md:mx-10 py-5 rounded-md  sticky top-5">
                    <h3 className="text-2xl font-bold uppercase">Resumen del carrito</h3>
                    <p className="text-lg  font-semibold mt-5 bg-orange-400 p-2">Total a pagar: <span className="ml-3 "> ${total} </span></p>
                </aside>

            </div>

        </main>



    </Layout>
  )
}
