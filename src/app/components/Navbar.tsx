import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className='flex items-center px-3 justify-center z-2 pb-4 pt-4'>
      <div className='px-9 flex items-center space-x-28 no-underline'>
        <Link href="/" className="hover:underline font-manrope hover:text-gray-500 z-20">HOME</Link>
        <Link href="/products" className="hover:underline font-manrope hover:text-gray-500 z-20">PRODUCTS</Link>
        <Link href="/gallery" className="hover:underline font-manrope hover:text-gray-500 z-20">GALLERY</Link>
        <Link href="/contact" className="hover:underline font-manrope hover:text-gray-500 z-20">CONTACT US</Link>
      </div>
      </div>
  </nav>
  )
}
