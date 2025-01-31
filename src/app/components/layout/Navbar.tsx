import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import EnquiryForm from '../form/EnquiryForm'
import ToggleTheme from '../home/ToggleTheme'

const button = {
  text: 'Free Quote',
  style: 'bg-[#FDB626] text-base-100 hover:bg-[#e09c1f] transition-all duration-[500ms] ease-in-out border' ,
}

export default function Navbar() {


  return (
    <div className='navbar z-10 sticky top-0'>
      <div className='navbar flex items-end'>
        <div className='dropdown'>
          <div 
            tabIndex={0} 
            role='button' 
            className='btn btn-ghost lg:hidden pb-4'
            aria-label='Open Menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            aria-labelledby='dropdown-button' 
          >
            <Link
              href='/contact' 
              className='transition'>
        Contact Us
            </Link>
            <li>
              <summary>Products</summary>
              <ul className='p-2'>
                <li>
                  <Link href='/products/louvres'>Louvre Roofs</Link>
                </li>
                <li>
                  <Link href='/products/patios'>Flat Patio Roofs</Link>
                </li>
                <li>
                  <Link href='/products/blinds'>Outdoor Blinds</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <Link href='/'>
            <Image
              src='/logos/suncoastlogo.png'
              alt='Suncoast Patios Logo'
              width={160}
              height={70}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </div>
      </div>

      <div className='navbar-end flex items-center lg:space-x-4 space-x-2'>
        <div className=' hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <details>
                <summary>Products</summary>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu menu-sm rounded-box z-[1] mt-2 w-40 bg-base-100 p-2 shadow'>
                  <li>
                    <Link href='/products/louvres'>Louvre Roofs</Link>
                  </li>
                  <li>
                    <Link href='/products/patios'>Flat Patio Roofs</Link>
                  </li>
                  <li>
                    <Link href='/products/blinds'>Outdoor Blinds</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href='/contact' 
                className='transition'>
      Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <EnquiryForm text={button.text} style={button.style}/>
        <ToggleTheme />
      </div>
    </div>
  )
}
