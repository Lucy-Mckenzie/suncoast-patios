import React from 'react'

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
