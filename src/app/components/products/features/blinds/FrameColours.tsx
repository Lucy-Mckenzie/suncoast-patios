import React from 'react'
import Image from 'next/image'
import Tooltip from '../Tooltip'

const photos = [
  '/blinds/blinds.webp',
  '/blinds/blinds1.webp',
  '/blinds/blinds3.webp',
  '/blinds/blinds4.webp',
  '/blinds/blinds10.webp',
  '/blinds/blinds12.webp',
]

export default function FrameColours() {
  return (
<div className='relative flex flex-col items-center justify-center w-full lg:h-[550px] h-auto'>
<div className='space-y-4 my-6'>
    <div className='flex gap-4 items-center justify-center'>
  <div className='relative group'>
    <div className='bg-[#f2f4f5] lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Apline'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#f9e9ca] lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Sand Dune'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#e5d2b4] lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Desert'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#4f5650] lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Storm'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#404641] lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Thunder'} />
  </div>
  <div className='relative group'>
    <div className='bg-[#001722] lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm'></div>
    <Tooltip tooltip={'Deep Space'} />
  </div>
</div>
  </div>
  <div className='relative w-full overflow-hidden rounded-md'>
  <div className='grid grid-cols-3 grid-rows-2 sm:grid-cols-3 gap-1'>
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


