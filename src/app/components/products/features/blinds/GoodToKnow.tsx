import React from 'react'
import Image from 'next/image'

export default function GoodToKnow() {
  return (
<div className='relative flex flex-col items-center justify-center w-full h-[550px]'>
  <Image
    src='/louvres/louvres2.webp'
    alt='weather inside view'
    width={900}
    height={700}
    className='object-cover w-full h-full rounded-md'
  />
  
  <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-md'></div> 

  <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center  z-10 space-y-4'>
    {[
  { title: 'Darker Colours', content: 'Reduce glare and improve light control, ideal for areas with high direct sunlight.' },
  { title: 'Paler Colours', content: 'Reflect heat and reduce heat loading, helping to maintain a cooler indoor temperature.' },
  { title: 'Higher Openness Fabrics', content: 'Offer clearer views without compromising on UV protection, perfect for maintaining visibility.' },
  { title: 'Smaller Openness Fabrics', content: 'Provide greater privacy while still allowing for adequate light filtration.' },
  { title: 'UV Protection', content: 'Protects your interior furnishings from harmful UV rays that can cause fading over time.' },
  { title: 'Energy Efficiency', content: 'Ambient blinds help improve insulation, reducing the need for air conditioning and heating, lowering energy costs.' },
    ].map((item, index) => (
      <details key={index} className='bg-base-200 p-4 rounded-md shadow w-[300px]'>
        <summary className='cursor-pointer font-semibold'>{item.title}</summary>
        <p className='mt-2 text-content'>{item.content}</p>
      </details>
    ))}
  </div>
</div>
  )
}