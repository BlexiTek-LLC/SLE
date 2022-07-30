import Head from 'next/head'
import React from 'react'

import styles from '../../styles/LandingPage/Utils/Loading.module.css'

function LoadingScreen() 
{
  return (
    <div className={styles.container}>
      <Head>
            <title>SLE | Home</title>
            <meta name="description" content="SLE is a company built on value and innovation" />
            <link rel="icon" href="/assets/utils/bigSleLogo.png" />
      </Head>

      <img className={styles.logo}  src='/assets/LandingPage/spin.gif'/>
      <p className={styles.title}>Student Loan Experiment</p>
      <p className={styles.subTitle}>Let's Take This Up A Notch</p>
    </div>
  )
}

export default LoadingScreen