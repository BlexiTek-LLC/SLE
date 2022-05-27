import React from 'react'

import styles from '../../../styles/LandingPage/Utils/Posts.module.css'

function Posts({post}) 
{
  return (
    <ul className={styles.signatures}>
        {
            post.map((item) =>
            {
                return(
                    <li key={item.id} className={styles.signature}>{item.userPost}</li>
                )
            })
        }
    </ul>
  )
}

export default Posts