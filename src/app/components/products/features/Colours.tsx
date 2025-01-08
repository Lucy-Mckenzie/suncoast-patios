import React from 'react'
import Image from 'next/image'
import Tooltip from './Tooltip'

const photos = [
  '/blinds/blinds.webp',
  '/blinds/blinds2.webp',
  '/blinds/blinds1.webp',
  '/blinds/blinds3.webp',
  '/blinds/blinds5.webp',
]

const extendedPhotos = [...photos, ...photos]

export default function Colours() {
  return (
<div className=''>
<div className='flex flex-col space-y-4 my-6'>
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
  <div className='marquee-container relative w-full overflow-hidden rounded-md'>
  <div className='marquee-content flex'>
    {extendedPhotos.map((photoSrc, index) => (
      <div key={index} className='flex-shrink-0'>
      <Image
        src={photoSrc}
        alt={`Slide ${index + 1}`}
        width={760}
        height={400}
        className='rounded-md'
      />
    </div>
    ))}
  </div>
 </div>
</div>
  )
}


