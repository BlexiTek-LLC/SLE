import React from 'react'

import styles from '../../../styles/LandingPage/Work/Work.module.css'

function Works() {
  return (
    <div>
      <h1 className={styles.title}>BLACK OWNED, NFT COMMUNITY COMBATTING STUDENT LOAN DEBT</h1>

      <div className={styles.top}>
        <div className={styles.hexi}>
          <h1 className={styles.hextext}>Step 1</h1>
          <h2 className={styles.hexparagraph}>Create your Account <br></br> on the SLE MarketPlace</h2>
        </div>

        <div className={styles.hexi}>
          <h1 className={styles.hextext}>Step 3</h1>
          <h2 className={styles.hexparagraph}>Place for Sell or <br></br> Auction to Gain SLE Tokens</h2>
        </div>

        <div className={styles.hexi}>
          <h1 className={styles.hextext}>Step 5</h1>
          <h2 className={styles.hexparagraph}>Contact approved vendor <br></br>to pay using SLE Tokens,<br></br> if not an approved vendor,<br></br> convert tokens to USD<br></br> to make payments</h2>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.hexi2}>
          <h1 className={styles.hextext}>Step 2</h1>
          <h2 className={styles.hexparagraph}>Upload your <br></br>Non-Fungible Token</h2>

        </div>
        <div className={styles.hexi2}>
          <h1 className={styles.hextext}>Step 4</h1>
          <h2 className={styles.hexparagraph}>With the help<br></br> of the community,<br></br> allow tokens to accumalate to <br></br> match or exceed <br></br> your student debt</h2>
        </div>
      </div>
    </div>
  )
}

export default Works