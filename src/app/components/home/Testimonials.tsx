'use client'
import React from 'react'
import Image from 'next/image'

type Review = {
  id: number;
  imageSrc: string;
  alt: string;
  author: string;
  description: string;
}

const reviews: Review[] = [
  { id: 1, imageSrc: '/logos/Tanya.png', alt: 'A beautiful patio', author: 'Tanya Upritchard', description: 'Absolutely awesome service from quoting right through to the completion of the job.  I have used Suncoast Patios 4 times (blinds and patios), and each time they have exceeded my expectations,  friendly, super professional,  great workmanship, and fantastic after sales service. Highly recommended.' },
  { id: 2, imageSrc: '/logos/Robert.png', alt: 'Lourves located at Roberts', author: 'Robert Miller', description: 'Suncoast Patios covered our new deck with a fixed patio a couple weeks before promised. This enabled us to enjoy our new covered deck for Christmas day. They went over and beyond to deliver and it looks amazing.  Thanks so much. I would highly recommend.' },
]

export default function Reviews() {

  return (
    <div className='px-4 py-10 sm:mx-6 lg:mx-8 bg-base-200 rounded-lg shadow-md flex flex-col'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-2xl'>
          TESTIMONIALS
        </h1>
        <h2 className='text-3xl font-bold font-manrope leading-tight sm:text-4xl lg:text-5xl pb-16'>
          Trusted by <span className='text-[#005694]'>Hawkes Bay</span> for more than 10+ years 
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto justify-center space-y-8 lg:space-y-0'>
        {reviews.map((review, index) => (
          <div key={index} className='relative flex items-center bg-[#FFC41F]/30 rounded-lg shadow-md text-content flex-col py-5 px-12 text-center'>
            <div className='absolute -top-10'>
              <Image 
                className='w-20 h-20 p-1 object-contain rounded-full shrink-0'
                src={review.imageSrc}
                alt={`Review from ${review.alt}`}
                width={40}
                height={40}
              />
            </div>
            <div className='card-actions justify-start'>
              <div className='rating rating-sm' role='radiogroup' aria-labelledby='rating-label'>
                <span id='rating-label' className='sr-only'>
                  Rating: 5 out of 5 stars
                </span>
                {[...Array(5)].map((_, index) => (
                  <input 
                    key={index}
                    type='radio' 
                    name='rating-2'
                    id={`Star ${index + 1}`}
                    className='mask mask-star-2 bg-orange-400 px-2.5 py-8'
                    checked readOnly
                    aria-label={`Star ${index + 1}`}
                  />
                ))}
              </div>
            </div> 
            <h1 className='text-2xl pb-3'>
              {review.author}
            </h1>
            <h2 className='text-lg'>
              {review.description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}


