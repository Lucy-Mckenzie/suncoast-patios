import React from 'react'

interface Props {
question: string,
answer: string
}

export default function FAQ({question, answer}: Props) {
  return (
    <div>
    <div className='flex flex-col items-center my-6'>
      <div className='w-[70%]'>
          <div className='collapse bg-base-200 shadow-md'>
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
          </div>
      </div>
    </div>
  </div>
  )
}
