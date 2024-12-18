import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
    <ul className="flex justify-center space-x-6">
      <li><Link href="/" className="hover:underline">HOME</Link></li>
      <li><Link href="/products" className="hover:underline">PRODUCTS</Link></li>
      <li><Link href="/gallery" className="hover:underline">GALLERY</Link></li>
      <li><Link href="/contact" className="hover:underline">CONTACT US</Link></li>
    </ul>
  </nav>
  )
}