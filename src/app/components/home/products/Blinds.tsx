import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Blinds() {
  return (
    <div className='card bg-base-100 lg:w-96 w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300'>
      <figure className='p-2'>
        <Image
          src='/blinds/blinds.webp'
          alt='suncoast patios blinds'
          width={400}
          height={300}
          className='rounded-md'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          Outdoor Blinds
        </h2>
        <p>
          We believe the addition of outdoor blinds can completely transform any outdoor living space.
        </p>
        <div className='card-actions'>
          <Link
            href='/products/blinds'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}
