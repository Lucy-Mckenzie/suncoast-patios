import React from 'react'
import Image from 'next/image'

export default function Privacy() {
  return (
    <div>
    <div className='relative grid grid-cols-2 items-center justify-center w-full h-[550px]'>
       <Image
         src='/blinds/blinds5.webp'
         alt='privacy inside'
         width={400}
         height={500}
         className='object-cover w-full h-full rounded-md'
       />
        <Image
         src='/blinds/blinds7.webp'
         alt='privacy outside'
         width={400}
         height={500}
         className='object-cover w-full h-full rounded-md'
       />
     </div>  
   
    </div>
  )
}