import React from 'react'

import {useState, useRef} from 'react'

import style from '../../../styles/LandingPage/Home/Home.module.css'

function SoundBar() 
{
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
  return (
    <div className={style.juiceBox}>
        
            <button className={style.music} onClick={() => handleClick()}>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
            </button>
            
            <audio src='/assets/music/Dedication.mp3' crossOrigin='"anonymous"' ref={ref} loop />
    </div>
  )
}

export default SoundBar