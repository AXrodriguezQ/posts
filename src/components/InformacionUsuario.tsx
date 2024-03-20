import Image from "next/image"

const InformacionUsuario = () => {
  return (
    <div className="m-auto mt-4 w-4/5 bg-slate-400 h-auto p-4 rounded-2xl flex justify-start items-center">
        <div className="flex justify-center items-center gap-4">
            <Image
                src={"/images/"}
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full bg-black"
            />
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-black">Alexander </h1>
                <p className="text-slate-100">Aventurero</p>
            </div>
        </div>
      </div>
  )
}

export default InformacionUsuario