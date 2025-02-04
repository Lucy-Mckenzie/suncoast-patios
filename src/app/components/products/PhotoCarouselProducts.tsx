'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface PhotoCarouselProps {
  photos: string[]
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: 'linear'
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const sliderRef = useRef<Slider | null>(null)

  const handlePrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev()
  }

  const handleNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext()
  }

  return (
    <div className='slider-container relative w-full max-w-[1100px] mx-auto rounded-md overflow-hidden'>
      <Slider {...settings} ref={sliderRef}>
        {photos.map((photoSrc, index) => (
          <div key={index} className='carousel-item relative w-full'>
            <Image
              src={photoSrc}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={800}
              className='w-full lg:h-[700px] h-[400px] object-cover rounded-md lg:border border-black'
            />
          </div>
        ))}
      </Slider>

      <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
        <button
          onClick={handlePrev}
          className='btn btn-circle'
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className='btn btn-circle'
        >
          ❯
        </button>
      </div>
    </div>
  )
}

