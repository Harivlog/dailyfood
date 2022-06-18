import React, { useRef, useState } from 'react';
import './Intro.css';
import {BsFillPlayFill , BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
const Intro = () => {
  const [PlayVideo, setPlayVideo] = useState()
  const vidRef = useRef()
   const VideoHundle =()=>{
     setPlayVideo((prevPlayVideo) => !prevPlayVideo)
     if(PlayVideo){
       vidRef.current.pause()
     }
     else{
      vidRef.current.play()

     }
   }
  return(
  <>
    <section className="video-sctn app__video" id='intro'>
      <video
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      controls = {false}
      muted
      />
      <div className="flex__center app_video_overlay">
        <div className="flex__center" onClick={VideoHundle}>
            {PlayVideo ? (
              <BsPauseFill  color='#fff' fontSize={30}/>
            ) : <BsFillPlayFill color='#fff' fontSize={30}/>}        
        </div>
      </div>
    </section>
  </>
  )
  };

export default Intro;
