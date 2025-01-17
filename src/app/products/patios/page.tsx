import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQProducts'
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
'/patios/patios9.webp',
'/patios/patios12.webp',
'/patios/patios13.webp',
]

const faqs = [
  {
    question: 'What is the difference between a patio and a deck?',
    answer: 'Patios are typically built on the ground level, often made of stone, concrete, or pavers, while decks are elevated, made from wood or composite materials.'
  },
  {
    question: 'How long does it take to build a patio?',
    answer: 'Patio construction typically takes a few days to a week, depending on size, materials, and weather conditions.'
  },
  {
    question: 'Can I install a patio myself?',
    answer: 'While its possible to install a patio yourself, professional installation is recommended for complex designs to ensure durability and proper drainage.'
  },
  {
    question: 'Do I need a permit to build a patio?',
    answer: 'Permits may be required depending on your location, the size of the patio, and local regulations. Check with your local council for specific requirements.'
  },
  {
    question: 'How do I maintain my patio?',
    answer: 'Regular cleaning, sealing, and checking for any cracks or damages will help maintain the look and functionality of your patio over time.'
  }
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
      className='text-7xl text-left leading-tight tracking-tight mb-1'>
       Patio Roofs
      </h1>
      <PhotoCarousel photos={patioPhotos}/>
    </div>
    <section className='py-10 bg-base sm:py-16 lg:py-24'>
    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Patios
            </h2>
            <p className='max-w-xl mx-auto my-4 text-base leading-relaxed'>
              We use Stratco products because they are the best Patios on market
            </p>
        </div>
        <FeaturesPatios />
    <div className='pt-5'>
    <EnquiryForm />
    </div>
    <div className='pt-5'>
      <h1 className='text-2xl text-center font-manrope mb-6'>
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
    <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </div>
    </section>
    
    </>
  )
}
