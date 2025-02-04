import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQProducts'
import Head from 'next/head'
import FeaturesBlinds from '@/app/components/products/FeaturesBlinds'

const blindsPhotos: string[] = [
  '/blinds/blinds.webp',
  '/blinds/blinds7.webp',
  '/blinds/blinds10.webp',
  '/blinds/blinds11.webp',
  '/blinds/blinds12.webp',
  '/blinds/blinds13.webp',
  '/blinds/blinds14.webp',
  '/blinds/blinds15.webp',
  '/blinds/blinds4.webp',
  '/blinds/blinds5.webp',
  '/blinds/blinds6.webp'
]
 
const button = {
  text: 'Get a free quote',
  style: 'bg-[#FDB626] text-base-100 hover:bg-[#e09c1f] transition-all duration-[500ms] ease-in-out border' 
}

const faqs = [
  {
    question: 'What types of blinds are available?',
    answer: 'Common types of blinds include roller blinds, Venetian blinds, vertical blinds, and wooden or faux wood blinds, each offering different aesthetic and functional benefits.'
  },
  {
    question: 'Can blinds be customized to fit unusual windows?',
    answer: 'Yes, blinds can be custom-made to fit any window size or shape, ensuring a perfect fit for both standard and non-standard windows.'
  },
  {
    question: 'Are blinds easy to clean?',
    answer: 'Most blinds are relatively easy to clean. Roller and Venetian blinds can be wiped down, while fabric blinds may require vacuuming or occasional washing.'
  },
  {
    question: 'Can blinds help with energy efficiency?',
    answer: 'Yes, blinds can help insulate your home by blocking out heat in summer and retaining warmth in winter, contributing to better energy efficiency.'
  },
  {
    question: 'Can I automate my blinds?',
    answer: 'Yes, many modern blinds can be motorized and automated, allowing you to control them remotely or set schedules for opening and closing.'
  }
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
      <div className='max-w-[1100px] mx-auto lg:px-0 px-7'>
        <h1 
          className='text-7xl text-left text-slate-800 leading-tight tracking-tight mb-1'>
       Outdoor Blinds
        </h1>
        <p className='text-lg mb-6 max-w-4xl text-slate-500'>
          Outdoor blinds are great for weather protection and privacy to make the most of your outdoor space. Below are some blinds we&apos;ve installed around Hawkes Bay.
        </p>
        <PhotoCarousel photos={blindsPhotos}/>
      </div>
      <section className='py-10 bg-base sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Blinds
            </h2>
            <p className='max-w-xl mx-auto my-4 text-base leading-relaxed'>
              We use Stratco blinds because they are the best outdoor blinds on the market
            </p>
          </div>
          <FeaturesBlinds />
          <div className='pt-5'>
            <EnquiryForm text={button.text} style={button.style} />
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
