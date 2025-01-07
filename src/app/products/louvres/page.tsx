import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQLouvres'
import Head from 'next/head'
import FeaturesLouvres from '@/app/components/products/FeaturesLouvres'

const louvrePhotos: string[] = [
  '/louvres/louvres.webp',
  '/louvres/louvres1.webp',
  '/louvres/louvres2.webp',
  '/louvres/louvres3.webp',
  '/louvres/louvres4.webp',
  '/louvres/louvres5.webp',
  '/louvres/louvres6.webp',
  ]

export default function Louvres() {

  return (
    <>
      <Head>
      <title>Louvres - Suncoast Patios</title>
      <meta
        name='description'
        content='Explore our range of high-quality louvres for enhanced outdoor living spaces.'
      />
    </Head>
    <div className='max-w-[1100px] mx-auto'>
      <h1 
      className='text-6xl text-left font-manrope'>
       Louvres
      </h1>
      <PhotoCarousel photos={louvrePhotos}/>
    </div>
    <section className='py-10 bg-base sm:py-16 lg:py-24'>
    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Louvre roofs
            </h2>
            <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed'>
              We use Stratco products because they are the best Louvres on market
            </p>
        </div>
        <FeaturesLouvres />
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
