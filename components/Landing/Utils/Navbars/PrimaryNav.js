import React, {useState} from 'react'

import styles from '../../../../styles/LandingPage/Utils/Navbars/Primary.module.css'

function PrimaryNav() 
{

  return (
    <div className={styles.container}>
        <div className={styles.logoBox}>
            <a href='/'>
                <img className={styles.logo} src='/assets/Utils/logo.png'/>
            </a>
        </div> 
    </div>
  )
}

export default PrimaryNav