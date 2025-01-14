import React from 'react'
import Image from 'next/image'

export default function RainSensor() {
  return (
  <div className='relative items-center justify-center w-full lg:h-[550px]'>
    <Image 
    src='/louvres/louvres.png'
    alt='weather control'
    width={900}
    height={400}
    className='object-cover rounded-md mb-2'
    />
    <div className='grid grid-cols-2 items-center justify-center w-full gap-1'>
    <figure className='relative'>
      <Image
        src='/louvres/louvres10.webp'
        alt='Privacy inside view'
        width={900}
        height={900}
        className='object-cover rounded-md'
      />
      <figcaption className='text-center mt-2 text-sm'>Open Louvre</figcaption>
    </figure>
    <figure className='relative'>
      <Image
        src='/louvres/louvres1.webp'
        alt='Privacy outside view'
        width={900}
        height={900}
        className='object-cover rounded-md'
      />
      <figcaption className='text-center mt-2 text-sm'>Closed Louvre</figcaption>
    </figure>
    </div>
  </div>
  )
}