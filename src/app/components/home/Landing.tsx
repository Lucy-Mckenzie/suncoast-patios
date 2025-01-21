import React from 'react'
import Image from 'next/image'

export default function LandingPage() {

return (
 <div className='relative w-full lg:h-[900px] md:h-[700px] h-[500px] mx-auto rounded-lg overflow-hidden'>
    <div className='flex justify-center items-center relative w-full overflow-hidden'>
      <Image
        src='/patios/patios8.webp'
        alt='landing photo'
        width={1100}
        height={700}
        loading='eager'
        priority={true}
        className='w-[95%] lg:h-auto object-cover lg:max-h-[720px] md:h-[600px] h-[400px] rounded-lg'
      />
      <div className='absolute w-[95%] flex items-center justify-center h-full bg-black opacity-30 rounded-md'></div> 
    </div>
    <div className='absolute inset-0 flex flex-col justify-center items-start text-left space-y-4 px-4 ml-20'>
        <h1 className='text-white lg:text-6xl text-4xl font-normal max-w-4xl'>
          Ultimate Outdoor Living Solutions
        </h1>
        <h2 className='text-white lg:text-3xl text-xl font-light'>
          Bring your outdoor area to life
        </h2>
      </div>
      <div className='absolute top-[65%] left-1/2 transform -translate-x-1/2 z-10'>
        <div className='animate-pulse'>
        <h2 className='text-white lg:text-1xl text-lg font-light justify-center flex'>
          Scroll
        </h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 64 64'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-20 w-20 text-white'
          >
      <polyline points='24 44 32 52 40 44' />
      <line x1='32' y1='12' x2='32' y2='52' />
          </svg>
        </div>
      </div>
    </div>
 ) 
}