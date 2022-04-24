import Head from 'next/head'
import React, {useState, useEffect} from 'react'

import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import {db} from '../Utils/Configs/firebase'

import styles from '../../../styles/LandingPage/Home/Home.module.css'
import PrimaryNav from '../Utils/Navbars/PrimaryNav'
import Posts from '../Utils/Posts';

function Home() 
{
  const [email, setEmail] = useState('')
  const [userPost, setUserPost] = useState('')
  const [posts, setPosts] = useState([])

  const submit = async () =>
  {
    event.preventDefault(event);
      try 
      {
        const docRef = await addDoc(collection(db, 'Subscribe'),
        {
          email,
          userPost
        })
        console.log("Document written with ID: ", docRef.id);
        location.reload();  
      } catch (error) 
      {
        console.error("Error adding document: ", e); 
      }
  }

  const getPosts = () =>
  {
    const dbRef = collection(db, 'Subscribe');
    getDocs(dbRef).then((data) =>
    {
      setPosts(data.docs.map((item) =>
      {
        return {...item.data(), id: item.id}
      }))
    })
  }

  useEffect(() =>
  {
    getPosts();
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>SLE | Home</title>
        <meta name="description" content="SLE is a company built on value and innovation" />
        <link rel="icon" href="/assets/utils/bigSleLogo.png" />
      </Head>

      <PrimaryNav />
      <img className={styles.bg} src='/assets/Utils/bg.png' />
      
      <h1 className={styles.title}>BLACK OWNED, NFT COMMUNITY COMBATTING 
      <br />
      STUDENT LOAN DEBT</h1>

      <div className={styles.row}>
        <div className={styles.column1}>
          <img className={styles.avatar} src='/assets/LandingPage/avatar.png'/>
          <p className={styles.disclaimer}>NFT Market Place Coming Soon.</p>
        </div>

        <div className={styles.column2}>
          <p className={styles.cta}>Say Something to the Student Loan Industry</p>
          <div className={styles.wall}>
              <form className={styles.form}>
                <textarea className={styles.textarea}
                placeholder='Say it Here'
                value={userPost}
                onChange={() => setUserPost(event.target.value)}
                />
                <input className={styles.email}
                placeholder='Email'
                value={email}
                onChange={() => setEmail(event.target.value)}/>
                <a className={styles.submit} onClick={submit}>Submit</a>
              </form>

              <Posts post={posts}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home