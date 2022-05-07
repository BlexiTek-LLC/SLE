import React from 'react'

import Navbar from '../components/Landing/Utils/Navbars/PrimaryNav'

import styles from '../styles/LandingPage/Coin/Coin.module.css'

function coin() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>BLACK OWNED, NFT COMMUNITY COMBATTING STUDENT LOAN DEBT</h1>
      <div className={styles.box}>
        <p className={styles.currency}>1 sle coin = 1.5 eth</p>
      </div>
    </div>
  )
}

export default coin