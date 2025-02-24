import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Louvres() {
  return (
    <div className='card bg-base-100 lg:w-96 w-80 shadow-md rounded-md space-y-2 transition-transform hover:scale-105 duration-300'>
      <figure className='p-2'>
        <Image
          src='/louvres/louvres.webp' 
          alt='suncoast patios louvre'
          width={400}
          height={300}
          className='rounded-md'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>
          Louvre Roofs
        </h2>
        <p>
          Kudos Louvre roofs in sunny Hawke&apos;s Bay significantly enhance your outdoor living experience.
        </p>
        <div className='card-actions'>
          <Link
            href='/products/louvres'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  )
}
