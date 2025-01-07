import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQPatios'
import Head from 'next/head'
import FeaturesPatios from '@/app/components/products/FeaturesPatios'

const patioPhotos: string[] = [
'/patios/patios.webp',
'/patios/patios1.webp',
'/patios/patios2.webp',
'/patios/patios3.webp',
'/patios/patios4.webp',
'/patios/patios5.webp',
'/patios/patios6.webp',
'/patios/patios7.webp',
'/patios/patios8.webp',
'/patios/patios9.webp'
]

export default function Patios() {

  return (
    <>
      <Head>
      <title>Patios - Suncoast Patios</title>
      <meta
        name='description'
        content='Explore our range of high-quality patios for enhanced outdoor living spaces.'
      />
    </Head>
    <div className='max-w-[1100px] mx-auto'>
      <h1 
      className='text-6xl text-left font-manrope'>
       Patios
      </h1>
      <PhotoCarousel photos={patioPhotos}/>
    </div>
    <section className='py-10 bg-base sm:py-16 lg:py-24'>
    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Patios
            </h2>
            <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed'>
              We use Stratco products because they are the best Patios on market
            </p>
        </div>
        <FeaturesPatios />
    <div className='pt-5'>
    <EnquiryForm />
    </div>
    <div className='pt-5'>
    <FAQ />
    </div>
    </div>
    </section>
    
    </>
  )
}
