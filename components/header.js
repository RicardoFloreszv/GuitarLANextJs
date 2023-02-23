import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"



export default function Header() {

    const rauter = useRouter()

    return (
      <header className="imagen-header px-5 py-10 bg-center bg-cover ">
        <div className="container mx-auto flex flex-col items-center
                        md:flex-row md:justify-between ">
          
          <Link href={'/'}>
            <Image src="/img/logo.svg" width={300} height={40} alt="Imagen logotipo" />
          </Link>
            <nav className="text-white flex gap-4 mt-8 uppercase font-semibold
                            md:mt-0" >
                
                <Link className={ rauter.pathname === '/' ? "bg-orange-500 p-1 hover:bg-orange-500 rounded-md transition duration-500 " : "p-1 hover:bg-orange-500 rounded-md transition duration-500"}
                      href="/" >
                    Inicio
                </Link>
                
                <Link className={ rauter.pathname === '/nosotros' ? "bg-orange-500 p-1 hover:bg-orange-500 rounded-md transition duration-500 " : "p-1 hover:bg-orange-500 rounded-md transition duration-500"} href="/nosotros" >
                    Nosotros
                </Link>

                <Link className={ rauter.pathname === '/tienda' ? "bg-orange-800 p-1 hover:bg-orange-500 rounded-md transition duration-500 " : "p-1 hover:bg-orange-500 rounded-md transition duration-500"} href="/tienda" >
                    Tienda
                </Link>

                <Link className={ rauter.pathname === '/blog' ? "bg-orange-800 p-1 hover:bg-orange-500 rounded-md transition duration-500 " : "p-1 hover:bg-orange-500 rounded-md transition duration-500"} href="/blog" >
                    Blog
                </Link>

                <Link href="/carrito" >
                    <Image width={30} height={25} src="/img/carrito.png" alt="imagen carrito">

                    </Image>
                </Link>                


            </nav>
        </div>
        
      </header>
    )
  }