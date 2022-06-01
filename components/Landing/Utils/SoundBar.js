import React from 'react'

import {useState, useRef} from 'react'

import style from '../../../styles/LandingPage/Home/Home.module.css'

function SoundBar() 
{
    const music = new Audio('./assets/music/Dedication.mp3');
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            music.play();
        }else{
            music.pause();
        }
    }
  return (
    <div className={style.juiceBox} onClick={() => handleClick()}>
        
            <button className={style.music} click={click}>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
            </button>
            
            {/* <audio src='/assets/music/Dedication.mp3' crossOrigin='"anonymous"' ref={ref} loop /> */}
    </div>
  )
}

export default SoundBar