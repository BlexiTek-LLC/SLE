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
    <div className={style.juiceBox} onClick={() => handleClick()}>
        
            <button className={style.music} >
                <span className={style.bar}></span>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
            </button>
            
            <audio src='/assets/Music/Dedication.mp3' ref={ref}  loop />
    </div>
  )
}

export default SoundBar