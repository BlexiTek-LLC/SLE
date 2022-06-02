import React from 'react'
import Head from 'next/head'

import PrimaryNav from '../components/Landing/Utils/Navbars/PrimaryNav'

import styles from '../styles/LandingPage/Work/Work.module.css'
import Works from '../components/Landing/How/Works'

function works() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SLE | How It Works</title>
        <meta name="description" content="SLE is a company built on value and innovation" />
        <link rel="icon" href="/assets/utils/bigSleLogo.png" />
      </Head>
      <PrimaryNav />
      <Works />
    </div>
  )
}

export default works