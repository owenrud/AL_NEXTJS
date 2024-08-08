import AnimeList from "@/Components/AnimeList"
import Header from "@/Components/AnimeList/header"
import { getAnimeResponse } from "@/libs/api-libs"


const Page = async({params}) =>{
const keyword = params.keyword
const decodedKeyword = decodeURI(keyword)
const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)
  return(
    <>

    <section>
     <Header title={`Pencarian untuk ${decodedKeyword}`}/>
      <AnimeList api={searchAnime}/>
    </section>

   </>
  )
}
export default Page
