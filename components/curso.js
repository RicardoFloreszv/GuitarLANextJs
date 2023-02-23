

export default function Curso({curso}) {

    const { imagen, contenido, titulo} = curso

  return (
    <section className="curso bg-cover bg-center grid md:grid-cols-2 ">
        <style jsx>{`
            .curso {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
            }
        `}</style>


        <div className="py-20 md:col-end-3">
            <div className=" ">
                <h2 className="text-center text-orange-500 font-bold text-3xl my-5">{titulo}</h2>
                <p className="text-white px-10 py-5 text-xl">{contenido}</p>
            </div>
        </div>

    </section>
  )
}
