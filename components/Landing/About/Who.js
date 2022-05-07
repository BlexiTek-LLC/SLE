import React from 'react'

import styles from '../../../styles/LandingPage/About/About.module.css'

function Who() {
  return (
    <div className={styles.whoBox}>
            <div className={styles.wColumn}>
                <h3 className={styles.heading}>Who We Are</h3>
                <p className={styles.info}>Innovators, Game Changers, New kids on the block</p>
            </div>

            <div className={styles.wColumn}>
                <h3 className={styles.heading}>Our Mission</h3>
                <p className={styles.info}>
                    Work smart, while working hard. 
                    Using the latest technology to solve issues that plague our community, 
                    we gone have some fun with this.
                </p>
            </div>
    </div>
  )
}

export default Who