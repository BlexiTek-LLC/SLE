import React from 'react'

import styles from '../../../styles/LandingPage/About/About.module.css'

function Team() 
{
  return (
    <div className={styles.box}>
        <h2 className={styles.heading}>The Team</h2>
        <div className={styles.tRow}>
            <div className={styles.tColumn}>
                <div className={styles.tInfo}>
                    <img src='/assets/LandingPage/man.png' className={styles.avatar} />
                    <p className={styles.location}>Atlanta</p>
                    <h4 className={styles.name}>Kervin Philippe</h4>
                </div>
            </div>

            <div className={styles.tColumn}>
                <div className={styles.tInfo}>
                    <img src='/assets/LandingPage/man.png' className={styles.avatar} />
                    <p className={styles.location}>Dallas</p>
                    <h4 className={styles.name}>Melvin Latimore</h4>
                </div>
            </div>

            <div className={styles.tColumn}>
                <div className={styles.tInfo}>
                    <img src='/assets/LandingPage/man.png' className={styles.avatar} />
                    <p className={styles.location}>Atlanta</p>
                    <h4 className={styles.name}>Stephena Jamae</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team