import React from 'react'

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
              <input type='checkbox' />
              <div className='collapse-title text-xl font-medium'>
                {faq.question}
              </div>
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


