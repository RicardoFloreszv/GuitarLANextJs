import Link from "next/link"
import Head from "next/head"


import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title, description}) {
  return (
    <div className=" flex flex-col justify-between min-h-screen" >
      <Head>
        <title>GuitarLA - {title}</title>
        <meta name="description" content={description}/>
      </Head>

      <Header/>
        
      {children}

      <Footer/>
        
    </div>
  )
}
