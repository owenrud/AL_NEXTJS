"use client"

import HeaderMenu from "@/Components/Utilities/HeaderMenu"
import Pagination from "@/Components/Utilities/Pagination"
import AnimeList from "@/Components/AnimeList"
import { getAnimeResponse } from "../../libs/api-libs"
import { useEffect, useState } from "react"

const Page = () =>{
    const [page,setPage] = useState(1)
    const [topAnime,setTopAnime] = useState([])

    const fetchData = async()=>{
        const topAnime = await getAnimeResponse("top/anime",`page=${page}`)
        setTopAnime(topAnime)
    }

    useEffect(() =>{
        fetchData()
    },[page])
    
    return(
        <>
            <HeaderMenu title={`Top Anime #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination page={page} 
            totalPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}/>
        </>
    )
}

export default Page