'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const photos = [
'/louvres/louvres10.webp',
'/patios/patios2.webp',
'/louvres/louvres1.webp',
'/blinds/blinds11.webp',
'/louvres/louvres13.webp',
'/patios/patios4.webp',
'/blinds/blinds2.webp',
'/patios/patios12.webp',
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  afterChange: () => {} 
}

export default function PhotoCarousel() {
  const sliderRef = useRef<Slider | null>(null)

  const handlePrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev()
  }

  const handleNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext()
  }



return (
  <div className='slider-container relative w-full lg:h-[900px] md:h-[700px] h-[500px] mx-auto rounded-lg overflow-hidden'>
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative w-full'>
          <Image
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={800}
            loading='eager'
            priority={true}
            className='w-full lg:h-auto object-cover lg:max-h-[800px] md:h-[600px] h-[400px] rounded-lg'
          />
        </div>
      ))}
    </Slider>
        <h1 className='absolute top-1/2 left-1/2 text-white lg:text-8xl text-4xl font-normal manrope transform -translate-x-1/2 -translate-y-1/2'>
          Ultimate Outdoor Living
        </h1>
    <div className='absolute lg:left-10 lg:right-10 left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between'>
      <button
        onClick={handlePrev}
        className='btn btn-circle p-2 lg:text-lg text-content text-sm'
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className='btn btn-circle p-2 lg:text-lg text-content text-sm'
      >
        ❯
      </button>
    </div>
  </div>
)

}

