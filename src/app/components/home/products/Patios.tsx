import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Patios() {
  return (
    <div className='card bg-base-100 lg:w-96 w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300'>
      <figure className='p-2'>
        <Image
          src='/patios/patios7.webp'
          alt='suncoast patios patio'
          width={400}
          height={300}
          className='rounded-md'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          Flat Patio Roofs
        </h2>
        <p>
          Protect your outdoor space from the elements with quality designs built to stand the test of time.
        </p>
        <div className='card-actions'>
          <Link
            href='/products/patios'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}
