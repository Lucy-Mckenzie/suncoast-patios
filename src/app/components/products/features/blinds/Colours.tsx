import React from 'react'
import Image from 'next/image'
import Tooltip from '../Tooltip'

const photos = [
  '/blinds/blinds.webp',
  '/blinds/blinds1.webp',
  '/blinds/blinds3.webp',
  '/blinds/blinds4.webp',
  '/blinds/blinds6.webp',
  '/blinds/blinds5.webp',
]

export default function Colours() {
  return (
<div className='relative flex flex-col items-center justify-center w-full h-[550px]'>
<div className='space-y-4 my-6'>
    <div className='flex gap-4 items-center justify-center'>
  <div className='relative group'>
    <div className='bg-[#f2f4f5] w-14 h-14 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Apline'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#f9e9ca] w-14 h-14 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Sand Dune'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#e5d2b4] w-14 h-14 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Desert'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#4f5650] w-14 h-14 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Storm'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#404641] w-14 h-14 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Thunder'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#001722] w-14 h-14 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Deep Space'} />
  </div>
</div>
  </div>
  <div className='relative w-full overflow-hidden rounded-md'>
  <div className='grid grid-cols-3 grid-rows-2 gap-1'>
    {photos.map((photoSrc, index) => (
      <div key={index} className='w-full h-auto'>
      <Image
        src={photoSrc}
        alt={`Slide ${index + 1}`}
        width={400}
        height={200}
        className='rounded-md'
      />
    </div>
    ))}
  </div>
 </div>
</div>
  )
}


