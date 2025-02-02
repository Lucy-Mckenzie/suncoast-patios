import PhotoCarousel from '@/app/components/products/PhotoCarouselProducts'
import React from 'react'
import EnquiryForm from '@/app/components/form/EnquiryForm'
import FAQ from '@/app/components/products/FAQProducts'
import Head from 'next/head'
import FeaturesLouvres from '@/app/components/products/FeaturesLouvres'

const louvrePhotos: string[] = [
  '/louvres/louvres8.webp',
  '/louvres/louvres2.webp',
  '/louvres/louvres12.webp',
  '/louvres/louvres4.webp',
  '/louvres/louvres5.webp',
  '/louvres/louvres6.webp',
  '/louvres/louvres7.webp',
  '/louvres/louvres1.webp',
  '/louvres/louvres9.webp',
  '/louvres/louvres10.webp',
  '/louvres/louvres11.webp',
  '/louvres/louvres3.webp',
]

const button = {
  text: 'Get a free quote',
  style: 'bg-[#FDB626] text-base-100 hover:bg-[#e09c1f] transition-all duration-[500ms] ease-in-out border' 
}

const faqs = [
  {
    question: 'What is a louvre?',
    answer: 'A louvre is a type of outdoor structure with adjustable slats that provide shade and ventilation, making it ideal for patios.'
  },
  {
    question: 'How do I clean my patio louvres?',
    answer: 'To clean your patio louvres, use a soft brush and soapy water. Avoid harsh chemicals that could damage the surface.'
  },
  {
    question: 'Are your blinds motorized?',
    answer: 'Yes, we offer motorized blinds for ease of use, especially for larger windows or hard-to-reach areas.'
  },
  {
    question: 'Can I install a patio louvre myself?',
    answer: 'We recommend professional installation to ensure the structure is safe and functional, although DIY options are available for some products.'
  },
  {
    question: 'How do I maintain my patio?',
    answer: 'Regular cleaning and occasional checks on the structure and blinds will ensure your patio remains in excellent condition.'
  }
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
          className='text-7xl text-left font-manrope leading-tight tracking-tight mb-1'>
          Louvre Roofs
        </h1>
        <p className='text-lg mb-6 max-w-4xl text-slate-500'>
        Kudos Louvres are perfect for enhancing airflow, controlling light, and adding a modern touch to your indoor or outdoor spaces. Below are some of the louvre installations we’ve completed around Hawkes Bay.
        </p>
        <PhotoCarousel photos={louvrePhotos}/>
      </div>
      <section className='py-10 bg-base sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl'>
              Stratco Louvre roofs
            </h2>
            <p className='max-w-xl mx-auto my-4 text-base leading-relaxed'>
              We use Kudos Louvres because they are the best Louvres on market
            </p>
          </div>
          <FeaturesLouvres />
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
