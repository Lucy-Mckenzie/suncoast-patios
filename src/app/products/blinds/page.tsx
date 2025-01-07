import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQBlinds'
import Head from 'next/head'
import FeaturesBlinds from '@/app/components/products/FeaturesBlinds'

const blindsPhotos: string[] = [
  '/blinds/blinds3.webp',
  '/blinds/blinds1.webp',
  '/blinds/blinds.webp',
  '/blinds/blinds2.webp',
  '/blinds/blinds4.webp',
  '/blinds/blinds5.webp',
  ]

export default function Blinds() {

  return (
    <>
       <Head>
        <title>Blinds - Suncoast Patios</title>
        <meta
          name='description'
          content='Explore our range of high-quality blinds for enhanced outdoor living spaces.'
        />
      </Head>
    <div className='max-w-[1100px] mx-auto'>
      <h1 
      className='text-6xl text-left font-manrope'>
       Blinds
      </h1>
      <PhotoCarousel photos={blindsPhotos}/>
    </div>
    <section className='py-10 bg-base sm:py-16 lg:py-24'>
    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Blinds
            </h2>
            <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed'>
              We use Stratco blinds because they are the best outdoor blinds on market
            </p>
        </div>
    <FeaturesBlinds />
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
