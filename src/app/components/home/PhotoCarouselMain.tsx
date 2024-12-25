'use client'
import React from 'react'
import Image from 'next/image'

const photos = [
  '/demo.png',
  '/demo1.png',
  '/demo.png',
  '/demo1.png',
  '/demo.png',
  '/demo1.png'
]

export default function PhotoCarousel() {
  return (
<div className='carousel w-full max-w-[1450px] h-auto max-h-[1000px] overflow-hidden mx-auto relative rounded-lg'>
  {photos.map((photoSrc, index) => {
    const prevSlide = (index - 1 + photos.length) % photos.length + 1
    const nextSlide = (index + 1) % photos.length + 1

    return (
      <div
        key={index}
        id={`slide${index + 1}`}
        className='carousel-item relative w-full'
      >
        <Image
          src={photoSrc}
          alt={`Slide ${index + 1}`}
          width={1200}
          height={400}
          className='w-full h-auto object-cover'
        />

        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href={`#slide${prevSlide}`} className='btn btn-circle text-lg md:text-xl'>
            ❮
          </a>
          <a href={`#slide${nextSlide}`} className='btn btn-circle text-lg md:text-xl'>
            ❯
          </a>
        </div>
      </div>
    )
  })}
</div>
)
}

