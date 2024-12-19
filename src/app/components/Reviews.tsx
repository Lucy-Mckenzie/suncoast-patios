import React from 'react'
import Image from 'next/image'

export default function Reviews() {
  return (
    <div className='flex flex-col items-center'>
    <h1 className='text-2xl font-bold text-center pb-10'>
      12+ Years Serving In Hawkes Bay
    </h1>
  
    <div className='carousel flex carousel-start rounded-box justify-center gap-4 pb-10'>
      <div className='carousel-item w-auto'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600}/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
            </div>
          </div>
        </div>
      </div>
      
      <div className='carousel-item w-auto'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600}/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
            </div>
          </div>
        </div>
      </div>
  
      <div className='carousel-item w-auto'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600}/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
            </div>
          </div>
        </div>
      </div>

      <div className='carousel-item w-auto'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600}/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
            </div>
          </div>
        </div>
      </div>

      <div className='carousel-item w-auto'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <figure>
            <Image src='/demo.png' alt='suncoast patios louvre' width={700} height={600} className='object-cover'/>
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Lorem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card-actions justify-end'>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
