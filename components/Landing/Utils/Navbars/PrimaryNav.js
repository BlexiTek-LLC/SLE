import React, {useState} from 'react'

import styles from '../../../../styles/LandingPage/Utils/Navbars/Primary.module.css'

function PrimaryNav() 
{

  const [menu, setMenu] = useState(true);

  const showMenu = () =>
  {
    setMenu(false)
  }

  const closeMenu = () =>
  {
    setMenu(true)
  }

  return (
    <div className={styles.container}>
        <div className={styles.logoBox}>
            <a href='/'>
                <img className={styles.logo} src='/assets/Utils/logo.png'/>
            </a>
        </div>
        <img className={styles.menu} onClick={() => showMenu()} src='/assets/LandingPage/menu.png'/>

        {
          menu ?
          <ul className={styles.navs}>
            <li className={styles.nav}><a href='/'>Home</a></li>
            <li className={styles.nav}><a href='/about'>About</a></li>
            <li className={styles.nav}><a href='/works'>How It Works</a></li>
        </ul>
          :
          <ul className={styles.mNavs}>
            <img className={styles.close} onClick={() =>closeMenu()} src='/assets/LandingPage/close.png'/>
            <li className={styles.mNav}><a href='/'>Home</a></li>
            <li className={styles.mNav}><a href='/about'>About</a></li>
            <li className={styles.mNav}><a href='/works'>How It Works</a></li>
        </ul>
        }

        

        
    </div>
  )
}

export default PrimaryNav