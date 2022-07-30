import React from 'react'
import Spline from '@splinetool/react-spline';

function Macy() 
{
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ml-2 md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:ml-60 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-5xl text-white text-center font-extrabold leading-none lg:text-5xl">
          Macire Kouyate
            {' '}
            <span className="inline-block text-yellow-300  text-3xl lg:text-4xl">
              Front-End Developer
            </span>
          </h5>
          <p className="mb-6 text-white text-center lg:text-3xl">
            "Hold on to your dreams of a better life and stay committed to striving to realize it."
          </p>
          {/* <hr className="mb-5 border-gray-300" /> */}
        </div>
        <div className="">
          <Spline className=" lg:ml-12 lg:w-96 lg:h-80 rounded" scene="https://prod.spline.design/bnljevVyjsbk31Bw/scene.splinecode" />
        </div>
      </div>
    </div>
  )
}

export default Macy