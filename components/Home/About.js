import React from 'react'

function About() 
{
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className='text-yellow-300 text-center mb-20 text-5xl lg:text-7xl'>About Us</h1>
      <div className="grid gap-12 row-gap-8 ml-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6 text-white">
            <h2 className="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-white text-center lg:ml-8 lg:text-3xl sm:text-4xl sm:leading-none">
            BLACK OWNED, NFT COMMUNITY
              <span className="inline-block text-white">
              COMBATTING STUDENT LOAN DEBT
              </span>
            </h2>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <h6 className="mb-2 font-semibold text-yellow-300 text-center leading-5">
              Who We Are
              </h6>
              <p className="text-sm text-white text-center">
              Innovators, Game Changers, New kids on the block
              </p>
            </div>
            <div>
              <h6 className="mb-2 font-semibold text-yellow-300 text-center leading-5">
              Our Mission
              </h6>
              <p className="text-sm text-white text-center">
                Work smart, while working hard. Using the latest technology to solve issues 
                that plague our community, we gone have some fun with this.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default About