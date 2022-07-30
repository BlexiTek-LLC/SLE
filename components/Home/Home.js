import Head from 'next/head'
import React, {useState, useEffect} from 'react'

import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import {db} from '../Utils/Configs/firebase'
import Spline from '@splinetool/react-spline';

import styled from 'styled-components';

import PrimaryNav from '../Utils/Navbars/PrimaryNav'
import SoundBar from '../Utils/SoundBar';
import About from './About';
import Team from './Team';
import Melvin from './Melvin';
import Steph from './Steph';
import Macy from './Macy';
import Cortez from './Cortez';



function Home() 
{
  return (
    <div>
      <Head>
        <title>SLE | Home</title>
        <meta name="description" content="SLE is a company built on value and innovation" />
        <link rel="icon" href="/assets/utils/bigSleLogo.png" />
      </Head>

      <PrimaryNav />
        <Content>
          <h1>Black Owned, NFT Community Combating Student Loan Debt</h1>
        </Content>
      <Wrapper>
        <Spline className='spline' scene="https://prod.spline.design/4M780b45hYq8uUIg/scene.splinecode" />
      </Wrapper>

      <About />
      <Team />
      <Melvin />
      <Steph />
      <Macy />
      <Cortez />
    </div>
  )
}

const Wrapper = styled.div`
  font-size: 16px;
  color: white;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 80px;


  .spline 
  {
    margin-left: 0;
    margin-top: 20px;
    z-index: 1;
  
  
    

    @media (max-width: 1024px)
    {
      transform: scale(0.8) translateX(200px);
    }

    @media (max-width: 800px)
    {
      transform: scale(0.7) translateX(600px);
    }

    @media (max-width: 600px)
    {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }

    @media (max-width: 400px)
    {
      transform: scale(0.45) translateX(-50px);
      margin-top: 12vh;
      margin-bottom: -20vh;
      margin-left: -55vw;
    }
  }

`

const Content = styled.div`
position: absolute;
z-index: 99;

@media (max-width: 400px)
  {
    margin-top: 10vh;
    margin-left: -15vw;
  }


h1
{
  font-size: 2.5rem;
  text-align: center;
  left: 58vw;
  top: 15vh;
  width: 40vw;
  position: absolute;
  color: white;
 

  @media (max-width: 400px)
  {
    font-size: 33px;
    left: 25vw;
    top: -4vh;
    width: 85vw;
    text-align: center;
    
   
  }
}

`

export default Home