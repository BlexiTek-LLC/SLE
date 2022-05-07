import React from 'react'
import Head from 'next/head'

import styles from '../styles/LandingPage/About/About.module.css'

import Who from '../components/Landing/About/Who'
import PrimaryNav from '../components/Landing/Utils/Navbars/PrimaryNav'
import Team from '../components/Landing/About/Team'

function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SLE | About Us</title>
        <meta name="description" content="SLE is a company built on value and innovation" />
        <link rel="icon" href="/assets/utils/bigSleLogo.png" />
      </Head>
      <PrimaryNav />
      <h1 className={styles.title}>BLACK OWNED, NFT COMMUNITY COMBATTING STUDENT LOAN DEBT</h1>
      <Who />
      <Team />
    </div>
  )
}

export default about