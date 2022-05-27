import React from 'react'

import styles from '../../../styles/LandingPage/About/About.module.css'

function Team() 
{
  return (
    <div className={styles.box}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-center pb-12">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading dark:text-white text-black">
                    Meet the new kids on the block           
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-56 ml-16 sm:w-full sm:ml-0 bg-gray-600 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-white font-bold mb-2">Kervin Philippe</p>
                        <p className="text-base text-gray-400 font-normal">Founder | CIO</p>
                    </div>
                </div>
                <div className="w-56 ml-16 sm:w-full sm:ml-0 bg-gray-600 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                    {/* <div>
                        <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1634195130430-2be61200b66a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=clamp&w=400&h=400&q=80" alt="photo" />
                    </div> */}
                    {/* <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-white font-bold mb-2">Melvin Latimore</p>
                        <p className="text-base text-gray-400 font-normal">Founder | CKO</p>
                    </div>
                </div>
                <div className="w-56 ml-16 sm:w-full sm:ml-0 bg-gray-600 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1634157663445-42ffca53c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=clamp&w=400&h=400&q=80" alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-white font-bold mb-2">Stephena Jamae</p>
                        <p className="text-base text-gray-400 font-normal">Back-End Dev</p>
                    </div> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Team