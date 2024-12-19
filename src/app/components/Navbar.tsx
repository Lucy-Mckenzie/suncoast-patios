import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="navbar bg-[#fffbf9] shadow-md">
    <div className="flex items-center justify-between w-full">
      {/* Logo Section */}
      <div className="ml-4">
        <Image
          src="/suncoastlogo.png"
          alt="Suncoast Patios Logo"
          width={160}
          height={50}
          className="mr-auto"
        />
      </div>
  
      {/* Navigation Links */}
      <div className="flex items-center space-x-8 font-manrope">
        <Link
          href="/"
          className="hover:underline hover:text-gray-500 transition-colors"
        >
          HOME
        </Link>
        <Link
          href="/gallery"
          className="hover:underline hover:text-gray-500 transition-colors"
        >
          GALLERY
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:text-gray-500 transition-colors"
        >
          CONTACT US
        </Link>
        {/* CTA Button */}
        <button className="btn bg-[#FDB626] text-white hover:bg-[#e09c1f]">
          Free Measure and Quote
        </button>
      </div>
    </div>
  </nav>
  
  )
}
