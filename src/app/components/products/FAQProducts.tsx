'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
question: string,
answer: string
}

export default function FAQ({question, answer}: Props) {
  return (
    <div>
    <div className='flex flex-col items-center my-5'>
      <div className='w-[70%]'>
          <motion.div className='collapse bg-base-200 shadow-md'
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8}} 
          >
            <input 
            type='checkbox'
            id={`checkbox-${question}`}
            />
            <label htmlFor={`checkbox-${question}`}  className='collapse-title text-xl font-medium'>
              {question}
            </label>
            <div className='collapse-content'>
              <p>{answer}</p>
            </div>
          </motion.div>
      </div>
    </div>
  </div>
  )
}
