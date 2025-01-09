import React from 'react'
import Image from 'next/image'

export default function Privacy() {
  return (
    <div className='relative grid grid-cols-2 items-center justify-center w-full h-[550px]'>
    <figure className='relative'>
      <Image
        src='/blinds/blinds8.webp'
        alt='Privacy inside view'
        width={400}
        height={500}
        className='object-cover w-full h-full rounded-md'
      />
      <figcaption className='text-center mt-2 text-sm'>Inside View</figcaption>
    </figure>
    <figure className='relative'>
      <Image
        src='/blinds/blinds9.webp'
        alt='Privacy outside view'
        width={400}
        height={500}
        className='object-cover w-full h-full rounded-md'
      />
      <figcaption className='text-center mt-2 text-sm'>Outside View</figcaption>
    </figure>
  </div>
  )
}