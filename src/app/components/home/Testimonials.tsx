'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type Review = {
  id: number;
  imageSrc: string;
  alt: string;
  author: string;
  description: string;
}

const reviews: Review[] = [
  { id: 1, imageSrc: '/demo.png', alt: 'Patio Image', author: 'Alex Kay', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, imageSrc: '/demo.png', alt: 'Louvers Image', author: 'Alex Kay', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, imageSrc: '/demo.png', alt: 'Blinds Image', author: 'Alex Kay', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, imageSrc: '/demo.png', alt: 'Patio Image 2', author: 'Alex Kay', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, imageSrc: '/demo.png', alt: 'Patio Image', author: 'Alex Kay', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

export default function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(4)

  const showMore = () => {
    setVisibleReviews(reviews.length)
  }

  const showLess = () => {
    setVisibleReviews(4)
  }

  return (
 <section className='py-10 sm:py-16 lg:py-16'> 
    <div className='px-4 mx-auto max-w-8xl sm:mx-6 lg:mx-8 bg-base-200 rounded-lg shadow-md'>
    <div className='flex flex-col items-center justify-center py-20'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold font-manrope leading-tight sm:text-4xl lg:text-5xl'>Trusted by <span className='text-blue-600'>Hawkes Bay</span> for more than 12+ years </h2>
            </div>
  
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 space-x-2 justify-items-center mx-auto pt-10'>
        {reviews.slice(0, visibleReviews).map((review) => (
           <div
           key={review.id} 
           className='card bg-base-100 shadow-md rounded-md'>
          <figure className=''>
            <Image 
            src={review.imageSrc}
            alt={review.alt}
             width={500} 
             height={300}
             className='object-cover'
             />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{review.author}</h2>
            <div className='card-actions justify-start'>
            <div className='rating rating-sm'>
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            <input type='radio' name='rating-2' className='mask mask-star-2 bg-orange-400' />
            </div>
            </div>
            <p>{review.description}</p>
          </div>
        </div>
        ))}
      </div>
        <div className='mt-10'>
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
    </div>
</section>

  )
}
