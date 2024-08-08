"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtube_id}) =>{
    const [isOpen,setIsOpen] = useState(true)
    const HandleVideoPlayer = () =>{
        setIsOpen((prevState)=> !prevState)
    }
    const option = {
        width:"300",
        height:"250"
    }
    const Player = () =>{
        return(
            <>
            <div className="fixed bottom-2 right-2">
                <button onClick={HandleVideoPlayer} className="float-right px-3"><XCircle size={32}/></button>
                <YouTube 
                videoId={youtube_id} 
                onReady={(event)=> event.target.pauseVideo()}
                opts={option}/>
            </div>
            </>
        )
    }

    const OpenTrailer = () =>{
        return(
            <>
             <button onClick={HandleVideoPlayer} className="fixed bottom-5 border-0 rounded right-5 w-32 text-xl shadow-xl hover:text-yellow-600 font-bold">Open Trailer</button>
          
            </>
        )
    }

    return isOpen ? <Player/> : <OpenTrailer/>
}

export default VideoPlayer