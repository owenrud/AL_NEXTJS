"use client"

import { useRef } from "react"
import {MagnifyingGlass} from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Searchbar = () =>{
    const search = useRef()
    const router = useRouter()
    
    const handleSearch = (event) =>{
        const keyword = search.current.value
        if(!keyword || keyword.trim() == "") return
        if(event.key === 'Enter' || event.type === 'click'){
            event.preventDefault()
            
            router.push(`/search/${keyword}`)
        }
        
    }

    return(
  
    <div className="relative">
        <input ref={search}  className="flex-1 block w-full p-2 text-sm text-gray-900 rounded-lg" 
         placeholder="Cari Anime" onKeyDown={handleSearch} required />
        <button className="absolute top-1.5 end-3" type="submit" onClick={handleSearch}>
            <MagnifyingGlass size={24}/>
            </button>
    </div>



    )
}

export default Searchbar