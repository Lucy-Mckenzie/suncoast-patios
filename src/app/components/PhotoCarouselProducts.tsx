'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

const photos = [
  '/demo.png',
  '/demo.png',
  '/demo.png',
  '/demo.png',
  '/demo.png',
  '/demo.png'
]

export default function PhotoCarousel() {
  const [photo, setPhoto] = useState(0)
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const nextImage = () => {
    setPhoto((photo) => (photo + 1) % photos.length)
    if (carouselRef.current) {
    carouselRef.current.scrollTo({
      left: photo * carouselRef.current.offsetWidth,
      behavior: 'smooth'
    })
  }
  }

  const prevImage = () => {
    setPhoto((photo) => (photo - 1 + photos.length) % photos.length)
    if (carouselRef.current) {
    carouselRef.current.scrollTo({
      left: photo * carouselRef.current.offsetWidth,
      behavior: 'smooth'
    })
  }
  }

  return (
    <div className='w-[1100px] mx-auto'>
    <div className='carousel overflow-hidden'>
    <div ref={carouselRef} className='carousel-inner flex overflow-x-auto snap-x snap-mandatory'>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item w-full flex-shrink-0 snap-start'>
          <Image 
            src={photoSrc} 
            alt='Image carousel' 
            width={1200} 
            height={400} 
            className='w-full'
          />
        </div>
      ))}
    </div>

    <div className=''>
      <button 
        className='carousel-control-prev absolute top-1/2 left-60 transform -translate-y-1/2 px-4 py-2 bg-gray-800/70 text-white rounded-full'
        onClick={prevImage}
      >
        <span className='carousel-control-prev-icon'>&lt;</span>
      </button>
    </div>
    <div className=''>
      <button 
        className='carousel-control-next absolute top-1/2 right-60 transform -translate-y-1/2 px-4 py-2 bg-gray-800/70 text-white rounded-full'
        onClick={nextImage}
      >
        <span className='carousel-control-next-icon'>&gt;</span>
      </button>
    </div>
  </div>
  </div>
  )
}

