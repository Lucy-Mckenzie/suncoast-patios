'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Form from './Form'

interface ButtonProps {
  text: string
  style: string
}

export default function EnquiryForm({ style, text }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown dropdown-end relative z-20'>
      <button 
        id='dropdown-button'
        tabIndex={0} 
        className={`p-2 text-sm ${style} transition-all duration-300 font-manrope rounded-full`}
        aria-expanded={isOpen ? 'true' : 'false'} 
        onClick={() => {
          setIsOpen(!isOpen)
          document.body.classList.toggle('overflow-hidden', !isOpen)
        }} 
        aria-controls='dropdown-content'
        aria-haspopup='true'
        onKeyDown={(e) => {
          if (e.key === 'Escape' && isOpen) setIsOpen(false)
          document.body.classList.remove('overflow-hidden')
        }}
      >
        { isOpen ? 'Close Form' : `${text}`}
      </button>
      {isOpen && (
        <div
          id='dropdown-content'
          className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'
          role='dialog'
          aria-labelledby='dropdown-title'
          aria-describedby='dropdown-description'
          onClick={() => {
            setIsOpen(false)
            document.body.classList.remove('overflow-hidden')
          }}
        >
          <div
            className='relative bg-base-100 text-base-content flex flex-col lg:flex-row rounded-lg shadow-lg lg:w-full overflow-scroll lg:max-w-5xl lg:max-h-full max-h-[90vh] max-w-xs p-6 space-y-6 lg:space-y-0 lg:space-x-6 my-5'
            onClick={(e) => e.stopPropagation()}>
            <div className='lg:flex lg:flex-col items-center lg:space-y-4'>
              <div className='lg:w-2/3 text-center lg:text-left'>
                <h1 
                  id='dropdown-title'
                  className='lg:text-2xl text-lg font-bold font-manrope lg:mb-16'>
                     The road to comfortable outdoor living starts here. We just need a few details.
                </h1>
                <p id='dropdown-description' className='sr-only'>
                   Fill out the form to request a free quote.
                </p>

                <div className='flex items-center lg:space-x-3 space-x-2 mt-4 mb-2'>
                  <Image
                    src='/logos/phone.png'
                    alt='Phone Icon'
                    width={20}
                    height={20}
                    className='object-contain lg:h-5 lg:w-5 h-3 w-3'
                  />
                  <h2 className='font-medium lg:text-xl text-md'>
                    Call us directly:
                  </h2>
                  <p className='text-content lg:text-lg text-sm'>
                     022 170 9933
                  </p>
                </div>


                <div className='flex items-center lg:space-x-3 space-x-2 mb-4'>
                  <Image
                    src='/logos/mail.png'
                    alt='Mail Icon'
                    width={20}
                    height={20}
                    className='object-contain lg:h-5 lg:w-5 h-3 w-3'
                  />
                  <h2 className='font-medium lg:text-xl text-md'>
                    Email:
                  </h2>
                  <p className='text-content lg:text-lg text-sm'>
                    info@suncoastpatios.co.nz
                  </p>
                </div>
              </div>

              <div>
              </div>
              <div className='w-full text-center'>
                <Image
                  src='/logos/form.png'
                  alt='Enquiry Form Drawing'
                  width={200}
                  height={200}
                  className='object-contain mx-auto lg:h-52 lg:w-52 h-28 w-28' 
                />
              </div>
            </div>
            <div className='lg:w-2/3'>
              <Form />
            </div>
          </div>
        </div>
      )}
    </div>  
  )
}

