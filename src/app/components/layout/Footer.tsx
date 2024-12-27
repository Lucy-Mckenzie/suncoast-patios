'use client'
import Link from 'next/link'
import React from 'react'
import EnquiryForm from '../form/EnquiryForm'
import Image from 'next/image'

export default function Footer() {
  return (
<footer className='footer bg-base text-base items-center p-6'>
  <aside className='flex flex-col sm:flex-row items-center sm:justify-between w-full'>
    <Link href='/'>
      <Image
        src='/logos/suncoastlogo.png'
        alt='Suncoast Patios Logo'
        width={170}
        height={70}
        className='hover:opacity-70 transition-opacity duration-300'
      />
    </Link>
    <p className='mt-4 sm:mt-0 text-sm'>
      © {new Date().getFullYear()} Suncoast Patios - All rights reserved.
    </p>
  </aside>

  <nav className='flex items-center justify-center sm:justify-end space-x-6 mt-4 sm:mt-0'>
    <EnquiryForm />
    <Link href='https://www.facebook.com/SuncoastLtd/' target='_blank'>
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
  </nav>
</footer>
  )
}