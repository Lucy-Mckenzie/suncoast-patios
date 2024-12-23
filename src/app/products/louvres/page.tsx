'use client'
import PhotoCarousel from '@/app/components/PhotoCarouselProducts'
import React from 'react'

export default function Louvres() {


  return (
    <>
    <div className='max-w-[1100px] mx-auto'>
      <h1 
      className='text-4xl text-left font-manrope'>
       Louvres
      </h1>
      <PhotoCarousel />
    </div>
    <section className='py-10 bg-base-200 sm:py-16 lg:py-24'>
    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>Stratco Louvre roofs</h2>
            <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed'>We use Stratco products because they are the best Louvres on market</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    <div className="h-32 rounded-lg bg-gray-200">
    
    </div>
    <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2">

    </div>
    </div>
        <div className='max-w-7xl mx-auto mt-12 sm:mt-16'>
            <div className='grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-2'>
              
            </div>
         </div>
    </div>
    </section>
    
    </>
  )
}
