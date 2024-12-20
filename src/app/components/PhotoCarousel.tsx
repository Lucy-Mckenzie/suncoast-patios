import React from 'react'
import Image from 'next/image'

export default function PhotoCarousel() {
  return (
    <div className='carousel w-full overflow-hidden'>
      <div id='carouselExample' className='carousel-inner flex'>
        <div className='carousel-item w-full flex-shrink-0'>
          <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className='w-full'/>
        </div>
        <div className='carousel-item w-full flex-shrink-0'>
          <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className='w-full'/>
        </div>
        <div className='carousel-item w-full flex-shrink-0'>
          <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className='w-full'/>
        </div>
      </div>

      <button className='carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full'>
        <span className='carousel-control-prev-icon'>&lt;</span>
      </button>
      <button className='carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full'>
        <span className='carousel-control-next-icon'>&gt;</span>
      </button>
    </div>
  )
}

