import React from 'react'

import styles from '../../../styles/LandingPage/About/About.module.css'

function Team() 
{
  return (
    <div className={styles.box}>
        <div className={styles.tBox}>
          <img className={styles.me} src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" alt="photo"/>
          <div className={styles.tInfo}>
            <h2 className={styles.name}>Kervin Philippe</h2>
            <p className={styles.position}>Founder | CIO</p>
          </div>
        </div>

        <div className={styles.tBox}>
        <img className={styles.me} src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=clamp&w=400&h=400&q=80" alt="photo"/>
          <div className={styles.tInfo}>
            <h2 className={styles.name}>Melvin Latimore</h2>
            <p className={styles.position}>Founder | CKO</p>
          </div>
        </div>

        <div className={styles.tBox}>
        <img className={styles.me} src="https://images.unsplash.com/photo-1634157663445-42ffca53c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=clamp&w=400&h=400&q=80" alt="photo"/>
          <div className={styles.tInfo}>
            <h2 className={styles.name}>Stephena Jamae</h2>
            <p className={styles.position}>Back-End Dev</p>
          </div>
        </div>

        <div className={styles.tBox}>
        <img className={styles.me} src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=clamp&w=400&h=400&q=80" alt="photo"/>
          <div className={styles.tInfo}>
            <h2 className={styles.name}>Macire Kouyate</h2>
            <p className={styles.position}>Front-End Dev</p>
          </div>
        </div>

        <div className={styles.tBox}>
        <img className={styles.me} src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" alt="photo"/>
          <div className={styles.tInfo}>
            <h2 className={styles.name}>Cortez Thompson</h2>
            <p className={styles.position}>Business Advisor</p>
          </div>
        </div>
    </div>
  )
}

export default Team