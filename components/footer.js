import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black py-5 mt-16">
      <div className="container mx-auto flex flex-col items-center 
                      md:flex-row md:justify-between">

        <nav className="text-white flex gap-4 mt-5 uppercase font-semibold
                              md:mt-0" >
                  
          <Link className=" hover:bg-orange-500 rounded-md transition duration-500 " href="/" >
              Inicio
          </Link>

          <Link className=" hover:bg-orange-500 rounded-md transition duration-500 " href="/nosotros" >
              Nosotros
          </Link>
          
          <Link className=" hover:bg-orange-500 rounded-md transition duration-500 " href="/tienda" >
              Tienda
          </Link>
          
          <Link className=" hover:bg-orange-500 rounded-md transition duration-500 " href="/blog" >
              Blog
          </Link>
          


          </nav>

          <p className="text-white uppercase font-semibold py-4">Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}
