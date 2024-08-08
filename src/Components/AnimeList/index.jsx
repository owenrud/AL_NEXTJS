import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4">
            {api.data?.map((anime,index)=>{
                return (
                <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer hover:text-yellow-600" key={index}>
                    <Image src={anime.images.webp.image_url} width={600} height={600} alt="..." className="w-full h-64 object-cover"/>
                    <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                 </Link>
                )
            })}
            
         </div>
                      
    )
}
export default AnimeList