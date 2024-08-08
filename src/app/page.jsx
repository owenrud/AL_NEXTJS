import AnimeList from "@/Components/AnimeList"
import Header from "@/Components/AnimeList/header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

const Page = async() =>{
  
const topAnime = await getAnimeResponse("top/anime","limit=8")
let RecAnime = await getNestedAnimeResponse("recommendations/anime","entry")

RecAnime = reproduce(RecAnime,8)
  return(
    <>

    <section>
     <Header title="Top Anime" link="/top" linkTitle="See All"/>
      <AnimeList api={topAnime}/>
    </section>

    <section>
      <Header title="Recommended Anime" link="/recent" linkTitle="Follow Now"/>
      <AnimeList api={RecAnime}/>
    </section>

   </>
  )
}
export default Page
