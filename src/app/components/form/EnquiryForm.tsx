import React, { useState } from 'react'
import Image from 'next/image'
import Timeline from './Timeline'
import Form from './Form'

export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown dropdown-end relative'>
      <label tabIndex={0} className='btn bg-[#FDB626] text-white hover:bg-[#e09c1f] transition-all duration-300 font-manrope'
        onClick={() => setIsOpen(!isOpen)}
      >
    { isOpen ? 'Close Form' : 'Free Measure and Quote'}
    </label>
    {isOpen && 
     <div
     className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'
     onClick={() => setIsOpen(false)}
   >
     <div
       className='relative bg-white text-black flex flex-col lg:flex-row rounded-lg shadow-lg w-full max-w-5xl h-auto p-6 space-y-6 lg:space-y-0 lg:space-x-6'
       onClick={(e) => e.stopPropagation()}
     >
      
   <div className='flex flex-col items-center space-y-8'>
   <div className='w-full lg:w-2/3 text-center lg:text-left'>
  <h1 className='text-2xl font-bold font-manrope mb-16'>
    The road to comfortable outdoor living starts here. We just need a few details.
  </h1>

  <div className='flex items-start space-x-3 mb-8'>
  <Image
    src='/logos/phone.png'
    alt='enquiry form'
    width={20}
    height={20}
    className='object-contain'
  />
    <h2 className='font-medium text-lg'>Call us directly:</h2>
    <p className='text-gray-700 text-md mb-2'>047589365639</p>
  </div>


<div className='flex items-start space-x-3'>
  <Image
    src='/logos/mail.png'
    alt='enquiry form'
    width={20}
    height={20}
    className='object-contain'
  />
    <h2 className='font-medium text-lg'>Email:</h2>
    <p className='text-gray-700 text-md'>info@suncoastpatios.co.nz</p>
  </div>
</div>

    <div>
      </div>
      {/* <div className='w-full text-center'>
            <Image
              src='/logos/form.png'
              alt='enquiry form'
              width={200}
              height={200}
              className='object-contain mx-auto' 
            />
          </div> */}
   <Timeline />
    </div>
    <div className='lg:w-2/3'>
          <Form />
      </div>
    </div>
    </div>
    }
  </div>  
  )
}