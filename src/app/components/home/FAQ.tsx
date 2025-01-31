/* eslint-disable quotes */
'use client'
import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "What are outdoor louvres, and how do they work?",
    answer:
      "Outdoor louvres are adjustable slats that allow you to control the amount of sunlight, shade, and ventilation in your outdoor space. They can be manually or automatically adjusted to suit the weather conditions.",
  },
  {
    question: "How do I maintain my louvres and patio structures?",
    answer:
      "Regular cleaning and inspections are essential to keep your louvres and patio in good condition. We recommend washing them every 6 months and checking for any wear and tear to ensure longevity.",
  },
  {
    question: "Can louvres be installed on existing patios?",
    answer:
      "Yes! Louvres can be added to your existing patio or outdoor structure, providing enhanced protection from the elements while adding a stylish and functional feature to your outdoor space.",
  },
  {
    question: "Are your louvres and patios weather-resistant?",
    answer:
      "Absolutely! Our louvres and patios are designed to withstand various weather conditions, from strong winds to heavy rain. All of our products are built with high-quality, durable materials to ensure longevity and performance.",
  },
  {
    question: "How much does it cost to install outdoor louvres and patios?",
    answer:
      "The cost of installing louvres and patios depends on several factors, including the size, design, and materials. Contact us for a free consultation and quote, and we'll tailor our services to your budget and needs.",
  },
]

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
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


