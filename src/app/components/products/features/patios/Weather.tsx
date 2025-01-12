import React from 'react'
import Image from 'next/image'

export default function Weather() {
  return (
    <div className='relative flex items-center justify-center w-full h-[550px]'>
        <Image
          src='/patios/patios12.webp'
          alt='weather inside view'
          width={900}
          height={700}
          className='object-cover w-full h-full rounded-md'
        />
    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-md'></div> 
  <h1 className='absolute lg:top-16 top-10 px-4 text-center text-white lg:text-2xl text-xl font-bold w-3/4'>
    Why Stratco Patios Are Great for Weather Protection:
  </h1>
  <ul className='absolute lg:top-40 top-48 px-4 text-left items-center text-white lg:text-lg text-sm w-3/4 space-y-2 list-disc list-inside'>
  <li>
    <strong>Protect:</strong> Stratco patios offer excellent UV protection, shielding your outdoor space from harmful sun rays.
  </li>
  <li>
    <strong>Resist:</strong> Withstand strong winds and gusts with Stratco patios&apos; durable construction.
  </li>
  <li>
    <strong>Defend:</strong> Keep your outdoor space dry during light rain with Stratco patios&apos; rain barrier.
  </li>
  <li>
    <strong>Control:</strong> Maintain comfortable temperatures throughout the year with Stratco patios.
  </li>
  <li>
    <strong>Repel:</strong> Keep insects at bay while enjoying fresh air with Stratco patios.
  </li>
  </ul>
    </div> 
  )
}