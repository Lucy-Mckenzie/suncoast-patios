'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const photos = [
  '/demo.png',
  '/demo1.png',
  '/demo.png',
  '/demo1.png',
  '/demo.png',
  '/demo1.png'
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear'
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
  <div className='slider-container relative w-full max-w-[1450px] h-auto max-h-[1000px] mx-auto rounded-lg overflow-hidden'>
    <Slider {...settings} ref={sliderRef}>
      {photos.map((photoSrc, index) => (
        <div key={index} className='carousel-item relative w-full'>
          <Image
            src={photoSrc}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={400}
            className='w-full h-auto object-cover max-h-[800px] overflow-hidden rounded-lg'
          />
        </div>
      ))}
    </Slider>

    <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
      <button
        onClick={handlePrev}
        className='btn btn-circle p-2 text-lg sm:text-base'
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className='btn btn-circle p-2 text-lg sm:text-base'
      >
        ❯
      </button>
    </div>
  </div>
)

}

