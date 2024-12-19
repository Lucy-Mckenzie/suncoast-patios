import React from 'react'
import Image from 'next/image'

export default function Reviews() {
  return (
    <div className='flex flex-col items-center py-20 space-y-10 mb-10'>
    <h1 className='text-2xl font-bold text-center mb-30'>
      12+ Years Serving In Hawkes Bay
    </h1>
  
    <div className='carousel w-full flex justify-center gap-4'>
      <div className='carousel-item w-80'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600} className='object-cover'/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
              <div className='rating rating-sm'>
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='carousel-item w-80'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600} className='object-cover'/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
              <div className='rating rating-s'>
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className='carousel-item w-80'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600} className='object-cover'/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
              <div className='rating rating-s'>
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='carousel-item w-80'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600} className='object-cover'/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
              <div className='rating rating-s'>
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='carousel-item w-80'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600} className='object-cover'/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
              <div className='rating rating-s'>
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
                <input type='radio' name='rating-1' className='mask mask-star-2 bg-yellow-400' checked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
