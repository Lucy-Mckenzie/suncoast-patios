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
  { id: 1, imageSrc: '/demo.png', alt: 'A beautiful patio', author: 'Tanya Upritchard', description: 'Absolutely awesome service from quoting right through to the completion of the job.  I have used Suncoast Patios 4 times (blinds and patios), and each time they have exceeded my expectations,  friendly, super professional,  great workmanship, and fantastic after sales service. Highly recommended.' },
  { id: 2, imageSrc: '/demo1.png', alt: 'Lourves located at Roberts', author: 'Robert Miller', description: 'Suncoast Patio covered our new deck with a fixed patio a couple weeks before promised. This enabled us to enjoy our new covered deck for Christmas day. They went over and beyond to deliver and it looks amazing.  Thanks so much. I would highly recommend.' },
  { id: 3, imageSrc: '/demo2.png', alt: 'Blinds in action', author: 'John Walker', description: 'I couldn’t be happier with the work done by Suncoast Patios! From the initial consultation to the final installation, the team was professional and attentive to every detail. I’ve had both a patio and louvres installed, and each time the quality and service were exceptional. Highly recommend them for anyone looking to enhance their outdoor space.' },
  { id: 4, imageSrc: '/demo4.png', alt: 'A spacious patio', author: 'Emily Roberts', description: 'The service from Suncoast Patios was nothing short of amazing! They went above and beyond to ensure we were happy with our new louvres and patio. The team was always polite, punctual, and professional throughout the entire process. The finished product looks stunning, and we’ve received so many compliments from friends and family. Highly recommend their services!' },
  { id: 5, imageSrc: '/demo5.png', alt: 'A patio', author: 'Alex Kay', description: 'Suncoast Patios has done a fantastic job on our new outdoor space! From the first meeting to the final install, the communication was clear, the team was friendly, and the attention to detail was second to none. We’re so happy with the results and would gladly recommend them to anyone looking for quality work and excellent customer service.' },
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
            <h1 className='text-3xl font-bold font-manrope leading-tight sm:text-4xl lg:text-5xl'>Trusted by <span className='text-blue-600'>Hawkes Bay</span> for more than 12+ years </h1>
            </div>
  
    <div 
    role='region'
    aria-live='polite' 
    className='grid grid-cols-1 sm:grid-cols-4 gap-4 space-x-2 justify-items-center mx-auto pt-10'>
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
             className='object-cover h-[12rem]'
             />
          </figure>
          <div className='card-body'>
            <h2 
            className='card-title'
            id={`review-${review.id}-author`}
            >{review.author}</h2>
            <div className='card-actions justify-start'>
            <div className='rating rating-sm' role='radiogroup' aria-labelledby='rating-label'>
            <span id='rating-label' className='sr-only'>Rating: 5 out of 5 stars</span>
            <input 
            type='radio' 
            name='rating-2'
            id='star1'
            className='mask mask-star-2 bg-orange-400'
            checked readOnly
            aria-label='Star 1'
            />
             <input 
            type='radio' 
            name='rating-2'
            id='star2'
            className='mask mask-star-2 bg-orange-400'
            checked readOnly
            aria-label='Star 2' 
            />
              <input 
            type='radio' 
            name='rating-2'
            id='star3'
            className='mask mask-star-2 bg-orange-400'
            checked readOnly
            aria-label='Star 3' 
            />
              <input 
            type='radio' 
            name='rating-2'
            id='star4'
            className='mask mask-star-2 bg-orange-400'
            checked readOnly
            aria-label='Star 4' 
            />
              <input 
            type='radio' 
            name='rating-2'
            id='star5'
            className='mask mask-star-2 bg-orange-400'
            checked readOnly
            aria-label='Star 5' 
            />
            </div>
            </div>
            <p
            id={`review-${review.id}-description`}
            >{review.description}</p>
          </div>
        </div>
        ))}
      </div>
        <div className='mt-10'>
      {visibleReviews < reviews.length ? (
        <button 
        onClick={showMore}
        className='btn btn-primary'
        aria-expanded={visibleReviews < reviews.length}
          >
            View More
          </button>
       ) : (
        <button 
        onClick={showLess}
        className='btn btn-primary'
        aria-expanded={visibleReviews === reviews.length}
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
