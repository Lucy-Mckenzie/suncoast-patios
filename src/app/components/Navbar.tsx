import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='bg-[#fffbf9] relative'>
      <div className='flex items-center justify-between z-2 pt-2 shadow-[3px_6px_10px_rgba(0,_0,_0,_0.04)]'>
        <Image src='/suncoastlogo.png' alt='suncoast patios logo' width={160} height={50} className='ml-20 mr-auto z-1'/>
      <div className='flex items-center space-x-12 no-underline pr-20'>
        <Link href='/' className='hover:underline font-manrope hover:text-gray-500 z-20'>HOME</Link>
        <Link href='/gallery' className='hover:underline font-manrope hover:text-gray-500 z-20'>GALLERY</Link>
        <Link href='/contact' className='hover:underline font-manrope hover:text-gray-500 z-20'>CONTACT US</Link>
        <button className='bg-[#FDB626] text-white p-2 rounded-md'>Free Measure and Quote</button>
      </div>
      </div>
  </nav>
  )
}
