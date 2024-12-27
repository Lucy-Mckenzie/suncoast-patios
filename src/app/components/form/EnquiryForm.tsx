import React, { useState } from 'react'
import Image from 'next/image'
import Form from './Form'

export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown dropdown-end relative'>
      <label tabIndex={0} className='btn bg-[#FDB626] text-base-200 hover:bg-[#e09c1f] transition-all duration-300 font-manrope rounded-full'
        onClick={() => setIsOpen(!isOpen)}
      >
    { isOpen ? 'Close Form' : 'Free Measure'}
    </label>
    {isOpen && 
     <div
     className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'
     onClick={() => setIsOpen(false)}
   >
     <div
       className='relative bg-base-100 text-base-content flex flex-col lg:flex-row rounded-lg shadow-lg lg:w-full overflow-scroll lg:max-w-5xl lg:max-h-full max-h-[100vh] max-w-xs p-6 space-y-6 lg:space-y-0 lg:space-x-6 py-5'
       onClick={(e) => e.stopPropagation()}
     >
      
   <div className='lg:flex lg:flex-col items-center lg:space-y-4'>
   <div className='lg:w-2/3 text-center lg:text-left'>
  <h1 className='lg:text-2xl text-lg font-bold font-manrope lg:mb-16'>
    The road to comfortable outdoor living starts here. We just need a few details.
  </h1>

  <div className='flex items-center lg:space-x-3 space-x-2 mt-4 mb-2'>
  <Image
    src='/logos/phone.png'
    alt='enquiry form'
    width={20}
    height={20}
    className='object-contain lg:h-5 lg:w-5 h-3 w-3'
  />
    <h2 className='font-medium lg:text-xl text-md'>Call us directly:</h2>
    <p className='text-content lg:text-lg text-sm'>+64 22 170 9933</p>
  </div>


<div className='flex items-center lg:space-x-3 space-x-2 mb-4'>
  <Image
    src='/logos/mail.png'
    alt='enquiry form'
    width={20}
    height={20}
    className='object-contain lg:h-5 lg:w-5 h-3 w-3'
  />
    <h2 className='font-medium lg:text-xl text-md'>Email:</h2>
    <p className='text-content lg:text-lg text-sm'>info@suncoastpatios.co.nz</p>
  </div>
</div>

    <div>
      </div>
      <div className='w-full text-center'>
            <Image
              src='/logos/form.png'
              alt='enquiry form'
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
    }
  </div>  
  )
}

