'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='container flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6'>
      <h1
        className='text-5xl font-bold text-gray-800 mb-4'>
            404 - Page Not Found
      </h1>
      <p
        className='text-lg text-gray-600 max-w-lg'>
            We have updated our website, and some links might be broken. Click the button below to go home.
      </p>
      <div
        className='mt-6'>
        <Link href='/'>
          <button className='w-20'>
                Go Home
          </button>
        </Link>
      </div> 
      <Image
        src='/svg/404.svg'
        alt='Not Found Illustration'
        className='w-80 mt-8'
        width={700}
        height={800}
      />
    </div>
    
  )
}

