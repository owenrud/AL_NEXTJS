import VideoPlayer from "@/Components/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async({ params:{anime_id} }) =>{
    const getAnime = await getAnimeResponse(`anime/${anime_id}`)
    return(
        <>
        <div className="pt-4 px-4">
            <h3 className="text-2xl">{getAnime.data.title} - {getAnime.data.year}</h3>
        </div>
        <div className="pt-4 px-4 flex gap-2">
            <div className="p-2 w-36 flex flex-col justify-center text-center items-center rounded border border-yellow-700 shadow-lg">
                <h3>Rank</h3>
                <p className="font-bold">{getAnime.data.rank}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center text-center items-center rounded border border-yellow-700 shadow-lg">
                <h3>Rating</h3>
                <p className="font-bold">{getAnime.data.score}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center text-center items-center rounded border border-yellow-700 shadow-lg">
                <h3>Episodes</h3>
                <p className="font-bold">{getAnime.data.episodes}</p>
            </div>
            <div className="p-2 w-36 flex flex-col justify-center text-center items-center rounded border border-yellow-700 shadow-lg">
                <h3>Status</h3>
                {getAnime.data.airing == false ?
                <p className="text-red-600 font-bold">{getAnime.data.status}</p>
                :<p className="text-green-600 font-bold">{getAnime.data.status}</p>
                }
                
            </div>
        </div>
        <div className="flex flex-row sm:flex-nowrap flex-wrap pt-4 px-4">
            <Image src={getAnime.data.images.webp.image_url}
            alt={getAnime.data.images.jpg.image_url}
            width={350} height={350}
            className="w-full rounded-lg object-cover shadow-xl"/>
            <p className="text-justify p-8 text-wrap">{getAnime.data.synopsis}</p>
        </div>
        <VideoPlayer youtube_id={getAnime.data.trailer.youtube_id}/>
        </>
        
    )
} 

export default Page