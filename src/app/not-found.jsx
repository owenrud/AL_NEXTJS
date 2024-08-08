"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () =>{
    return(
        <div className="min-h-screen  max-w-xl mx-auto flex justify-center items-center">
           <div className="flex justify-center items-center gap-4 flex-col">
            <FileSearch size={40} color="yellow-700"/>
                <h1 className="text-yellow-600 font-bold text-2xl">NOT FOUND</h1>
                <Link className="button btn hover:text-yellow-600 transition-all underline" href="/">Kembali</Link>
           </div>
        </div>
    )
}

export default Page