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
    <div className="carousel w-[1100px] h-[600px] mx-auto relative">
      {photos.map((photoSrc, index) => {
        const prevSlide = (index - 1 + photos.length) % photos.length + 1
        const nextSlide = (index + 1) % photos.length + 1

        return (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <Image
              src={photoSrc}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={400}
              className="w-full"
            />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${prevSlide}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${nextSlide}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

