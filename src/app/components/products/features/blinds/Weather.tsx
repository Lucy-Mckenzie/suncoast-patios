import React from 'react'
import Image from 'next/image'

export default function Weather() {
  return (
    <div className='relative flex items-center justify-center w-full h-[550px]'>
      <Image
        src='/louvres/louvres2.webp'
        alt='weather inside view'
        width={900}
        height={700}
        className='object-cover w-full h-full rounded-md'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-md'></div> 
      <h1 className='absolute lg:top-16 top-10 px-4 text-center text-white lg:text-2xl text-xl font-bold w-3/4'>
    Why Stratco Ambient® Outdoor Blinds Are Great for Weather Protection:
      </h1>
      <ul className='absolute lg:top-40 top-48 px-4 text-left items-center text-white lg:text-lg text-sm w-3/4 space-y-2 list-disc list-inside'>
        <li>
          <strong>Sun Shielding:</strong> Block harmful UV rays while staying cool.
        </li>
        <li>
          <strong>Wind Resistance:</strong> Withstand strong breezes and gusts.
        </li>
        <li>
          <strong>Rain Barrier:</strong> Keeps outdoor spaces dry during light rain.
        </li>
        <li>
          <strong>Temperature Control:</strong> Maintain comfortable temperatures year-round.
        </li>
        <li>
          <strong>Insect Protection:</strong> Keep bugs out while enjoying fresh air.
        </li>
      </ul>
    </div> 
  )
}