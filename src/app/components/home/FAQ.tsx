/* eslint-disable quotes */
'use client'
import React from 'react'
import { motion } from 'framer-motion'

const link = 'https://www.qcard.co.nz/'

const faqs = [
  {
    question: "Do they comply with the NZ building code?",
    answer:
      "Yes! All structures are engineered to meet the New Zealand Building Code.",
  },
  {
    question: "What colours do they come in?",
    answer:
      "Stratco provides standard colours that blend in nicely with 95% of existing home colours. The framework can also be powder-coated to match any existing house joinery colours.",
  },
  {
    question: "How much light comes through?",
    answer:
      "The light panels are designed to allow plenty of natural light to pass through all day long. The 2mm thick polycarbonate light panels are domed to allow rain to wash them clean while offering excellent UV resistance.",
  },
  {
    question: "Are there any payment plans available?",
    answer:
      `Absolutely! Finance is available through <a href="${link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">Q Card</a> for approved customers.`,
  },
  {
    question: "How much heat comes through?",
    answer:
      "While standard polycarbonate sheeting can allow some heat from the sun to penetrate, the Stratco design effectively blocks heat. In ten years of installing, we have never received a complaint about excessive heat.",
  },
];

export default function FAQ() {
  return (
    <div className='flex flex-col items-center my-20'>
      <h1 className='text-4xl text-center font-manrope mb-6'>
      Frequently asked questions
      </h1>
      <motion.div className='w-[70%] space-y-4'>
        {faqs.map((faq, index) => (
          <motion.div key={index} className='collapse bg-base-200 shadow-md'
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }} 
          >
            <input type='checkbox'
              id={`checkbox-${index}`}/>
            <label 
              className='collapse-title text-xl font-medium'
              htmlFor={`checkbox-${index}`}
            >
              {faq.question}
            </label>
            <div className='collapse-content'>
              <p
                className='text-gray-600'
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


