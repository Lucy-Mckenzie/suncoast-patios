import React from 'react'
import Image from 'next/image'

export default function Warranty() {
  return (
    <div className='relative flex items-center justify-center w-full h-[550px]'>
    <Image
      src='/blinds/blinds4.webp'
      alt='warranty description'
      width={400}
      height={500}
      className='object-cover w-full h-full rounded-md'
    />
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md'></div> 
    <h1 className='absolute px-4 text-center text-white text-2xl w-3/4'>
      All Ambient Blinds up to 12m² are covered by a 5-year parts and materials warranty.
    </h1>
  </div>  

  )
}

