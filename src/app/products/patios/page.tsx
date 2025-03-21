import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQProducts'
import FeaturesPatios from '@/app/components/products/FeaturesPatios'
import { Metadata } from 'next'
import Louvres from '@/app/components/home/products/Louvres'
import Blinds from '@/app/components/home/products/Blinds'

const patioPhotos: string[] = [
  '/patios/patios1.webp',
  '/patios/patios2.webp',
  '/patios/patios3.webp',
  '/patios/patios4.webp',
  '/patios/patios6.webp',
  '/patios/patios7.webp',
  '/patios/patios9.webp',
  '/patios/patios12.webp',
  '/patios/patios13.webp',
  '/patios/patios14.webp',
  '/patios/patios15.webp',
  '/patios/patios16.webp',
  '/patios/patios17.webp',
  '/patios/patios18.webp',
  '/patios/patios.webp',
]

const button = {
  text: 'Get a free quote',
  style: 'bg-[#FDB626] text-base-100 hover:bg-[#e09c1f] transition-all duration-[500ms] ease-in-out border' 
}

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

export const generateMetadata = (): Metadata => {
  return {
    title: 'Patios',
    description: 'Explore our range of high-quality patios for enhanced outdoor living spaces.'
  }
}

export default function Patios() {

  return (
    <>
      <div className='max-w-[1100px] mx-auto lg:px-0 px-7'>
        <h1 
          className='text-7xl text-left leading-tight tracking-tight mb-1'>
          Patio Roofs
        </h1>
        <p className='text-lg mb-6 max-w-4xl text-slate-500'>
          Stratco Patio Roofs are ideal for creating a comfortable, weather-protected outdoor living area that you can enjoy year-round. Below are some of the patio roof installations we’ve completed around Hawkes Bay.
        </p>
        <PhotoCarousel photos={patioPhotos}/>
      </div>
      <section className='py-10 bg-base sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Patios
            </h2>
            <p className='mx-auto my-4 leading-relaxed font-semibold text-lg'>
              We use Stratco products because we believe they are by far the best flat roof available on todays market for New Zealand conditions.
            </p>
          </div>
          <FeaturesPatios />
          <div className='pt-5'>
            <EnquiryForm text={button.text} style={button.style} />
          </div>
          <h1 className='text-2xl text-center mt-10 font-semibold'>
            Check out our other products
          </h1>
          <div className='flex flex-row my-10 items-center justify-center space-x-8'>
            <Blinds />
            <Louvres />
          </div>
          <div className='pt-10'>
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
