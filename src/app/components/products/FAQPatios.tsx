import React from 'react'

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

export default function FAQ() {
  return (
    <div>
    <div className='flex flex-col items-center my-20'>
      <h1 className='text-2xl text-center font-manrope mb-6'>
        Frequently Asked Questions
      </h1>
      <div className='w-[70%] space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='collapse bg-base-200 shadow-md'>
            <input 
            type='checkbox'
            id={`checkbox-${index}`}
            />
            <label htmlFor={`checkbox-${index}`}  className='collapse-title text-xl font-medium'>
              {faq.question}
            </label>
            <div className='collapse-content'>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
