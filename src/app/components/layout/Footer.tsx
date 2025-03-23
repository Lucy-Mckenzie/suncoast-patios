'use client'
import Link from 'next/link'
import React from 'react'
import EnquiryForm from '../form/EnquiryForm'

const button = {
  text: 'Free Measure & Quote',
  style: 'bg-[#FDB626] text-base-100 hover:bg-[#e09c1f] transition-all duration-[500ms] ease-in-out border' 
}

export default function Footer() {
  return (
    <footer className='footer text-base flex flex-col items-center justify-center bg-base-300 py-8'>
      <nav className='flex items-center text-center justify-center sm:justify-end align-baseline space-x-6'>
        <p className='text-sm text-start'>
          © {new Date().getFullYear()} Suncoast Patios - All rights reserved.
        </p>
        <div className='align-baseline flex flex-row gap-12'>
          <div className='flex flex-col space-y-1'>
            <h1 className='text-md font-semibold text-start'>
              Products:
            </h1>
            <Link href='/products/louvres' className='text-sm text-start hover:underline'>
              Louvre Roofs
            </Link>
            <Link href='/products/patios' className='text-sm text-start hover:underline'>
              Patio Roofs
            </Link>
            <Link href='/products/blinds' className='text-sm text-start hover:underline'>
              Outdoor Blinds
            </Link>
          </div>
          <div className='flex flex-col space-y-1'>
            <h1 className='text-md font-semibold text-start'>
              Contact Us:
            </h1>
            <p className='text-sm text-start'>
              Phone: 0 22 170 9933
            </p>
            <p className='text-sm text-start pb-2'>
              Email: info@suncoastpatios.co.nz
            </p>
            <Link href='https://www.facebook.com/SuncoastLtd/' target='_blank'  aria-label="Visit Suncoast Ltd's Facebook page">
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path
                  d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </Link>
          </div>
        </div>
        <EnquiryForm text={button.text} style={button.style} />
      </nav>
    </footer>
  )
}
