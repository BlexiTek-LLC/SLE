import Head from 'next/head'
import {useState, useEffect} from 'react'

import LoadingScreen from '../components/Utils/LoadingScreen'
import Home from '../components/Home/Home'


export default function Web() 
{
  const [loading, setLoading] = useState(true)

  useEffect(
    () =>
    {
      setLoading(true)
      setTimeout(
        () =>
        {
          setLoading(false);
        }, 5000
      )
    }, []
  )

  return (
    <div>
      {
        loading ?
        <LoadingScreen />
          :
        <Home />
      }
    </div>
  )
}
