import React from 'react'
import Image from 'next/image'

interface Props {
  photo: string,
  text: string
}

export default function Warranty({ photo, text }: Props) {
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-[550px]'>
    <Image
      alt='warranty description'
      src={photo}
      width={900}
      height={600}
      className='object-cover w-full h-full rounded-md'
    />
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md'></div> 
    <h1 className='absolute px-4 text-center text-white text-2xl w-3/4'
     dangerouslySetInnerHTML={{ __html: text }}>
   </h1>
  </div>  
  )
}

