import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <div className='flex flex-col items-center py-20 space-y-10 overflow-hidden'>
      <h1 className='text-center font-manrope text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl pb-5'>
        Custom Outdoor Entertaining Solutions
      </h1>
      <div className='flex flex-row flex-wrap justify-center space-x-8'>
      <div className='card bg-base-100 w-96 shadow-md rounded-md'>
  <figure className='px-10 pt-10'>
      <Image
       src='/demo2.png' 
       alt='suncoast patios louvre'
       width={1200}
       height={400}
       />
  </figure>
  <div className='card-body items-center text-center'>
    <h2 className='card-title'>
      Louvres
      </h2>
    <p>
    Louvre roofs in the sunny Hawke’s Bay create a combination to shape our ideal form of outdoor living. 
    </p>
    <div className='card-actions'>
    <Link
       href='/products/louvres'>
        <button
         className='btn btn-primary'>
          View Product
        </button>
      </Link>
    </div>
  </div>
</div>
<div className='card bg-base-100 w-96 shadow-md rounded-md'>
  <figure className='px-10 pt-10'>
      <Image
       src='/demo.png'
       alt='suncoast patios patio'
       width={1200}
       height={400}
       />
  </figure>
  <div className='card-body items-center text-center'>
    <h2 className='card-title'>
      Patios
    </h2>
    <p>
    The protection from the elements, stylish aesthetics and build quality designed to stand the test of time.
    </p>
    <div className='card-actions'>
    <Link
       href='/products/patios'>
        <button
         className='btn btn-primary'>
          View Product
        </button>
      </Link>
    </div>
  </div>
</div>
<div className='card bg-base-100 w-96 shadow-md rounded-md'>
  <figure className='px-10 pt-10'>
      <Image
       src='/blinds.png'
       alt='suncoast patios blinds'
       width={1200}
       height={400}
       />
  </figure>
  <div className='card-body items-center text-center'>
    <h2 className='card-title'>
      Blinds
    </h2>
    <p>
    We believe the addition of outdoor blinds can completely transform any outdoor living space.
    </p>
    <div className='card-actions'>
      <Link
       href='/products/blinds'>
        <button
         className='btn btn-primary'>
          View Product
        </button>
      </Link>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
