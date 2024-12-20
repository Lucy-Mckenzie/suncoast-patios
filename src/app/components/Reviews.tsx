'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type Review = {
  id: number;
  imageSrc: string;
  alt: string;
}

const reviews: Review[] = [
  { id: 1, imageSrc: '/demo.png', alt: 'Patio Image' },
  { id: 2, imageSrc: '/demo.png', alt: 'Louvers Image' },
  { id: 3, imageSrc: '/demo.png', alt: 'Blinds Image' },
  { id: 4, imageSrc: '/demo.png', alt: 'Patio Image 2' },
  { id: 5, imageSrc: '/demo.png', alt: 'Patio Image' },
]

export default function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(2)

  const showMore = () => {
    setVisibleReviews(reviews.length)
  }

  const showLess = () => {
    setVisibleReviews(2)
  }

  return (
    <div className='flex flex-col items-center justify-center py-20'>
    <h1 className='text-2xl text-center pb-10 font-manrope'>
      12+ Years Serving In Hawkes Bay
    </h1>
  
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 space-x-4 justify-items-center mx-auto'>
        {reviews.slice(0, visibleReviews).map((review) => (
           <div
           key={review.id} 
           className='card bg-base-100 shadow-xl'>
          <figure className='rounded-md'>
            <Image 
            src={review.imageSrc}
            alt={review.alt}
             width={500} 
             height={300}
             className='object-cover rounded-md'
             />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
            </div>
          </div>
        </div>
        ))}
      </div>
        <div className='mt-6'>
      {visibleReviews < reviews.length ? (
        <button 
        onClick={showMore}
          className='btn btn-primary'
          >
            View More
          </button>
       ) : (
        <button 
        onClick={showLess}
          className='btn btn-primary'
          >
            View Less
          </button>
      )}
      </div>
    </div>
  )
}
