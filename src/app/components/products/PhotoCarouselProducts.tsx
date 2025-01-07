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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
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
      <div className='slider-container relative w-full max-w-[1100px] h-auto md:max-h-[600px] sm:max-h-[400px] mx-auto rounded-md overflow-hidden'>
        <Slider {...settings} ref={sliderRef}>
          {photos.map((photoSrc, index) => (
            <div key={index} className='carousel-item relative w-full'>
              <Image
                src={photoSrc}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={400}
                className='w-full h-auto object-cover'
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

