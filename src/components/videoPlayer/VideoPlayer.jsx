import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college.mp4";

export default function VideoPlayer ({playState, setPlayState}) {

    const player = useRef(null)
  
    const closePlayer = (e) => {
        if(e.target === player.current) {
            console.log(e.target);
            console.log("player=>", player);
            
            console.log(player.current);
            
            setPlayState(false);    
        }
    }

    return (
        <div className={`video-player ${playState ? "" : "hide"}`} 
             ref={player}
             onClick={closePlayer}
        >
            <video src={video} autoPlay muted controls></video>
        </div>
    );
}