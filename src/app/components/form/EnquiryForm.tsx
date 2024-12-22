import React, { useState } from 'react'
import Image from 'next/image'
import Timeline from './Timeline'

export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown dropdown-end relative'>
      <label tabIndex={0} className='btn bg-[#FDB626] text-white hover:bg-[#e09c1f] transition-all duration-300'
        onClick={() => setIsOpen(!isOpen)}
      >
    { isOpen ? 'Close Form' : 'Free Measure and Quote'}
    </label>
    {isOpen && 
     <div
     className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
     onClick={() => setIsOpen(false)}
   >
     <div
       className="relative bg-white text-black flex flex-col lg:flex-row rounded-lg shadow-lg w-full max-w-5xl h-auto p-6 space-y-6 lg:space-y-0 lg:space-x-6"
       onClick={(e) => e.stopPropagation()}
     >
      
   <div className='flex flex-col items-center space-y-8'>
   <div className="w-full lg:w-2/3 space-y-4 text-center lg:text-left">
      <h1 className='text-2xl font-bold font-manrope'>
      The road to comfortable outdoor living starts here. We just need a few details.
      </h1>
      <h2 className='mb-2 font-medium'>Call us directly:</h2>
      <p className=' text-gray-700'>047589365639</p>
      <h2 className='mb-2 font-medium'>Email:</h2>
      <p className=' text-gray-700'>info@suncoastpatios.co.nz</p>
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
           <form className='lg:w-2/3 bg-[#FDB626]/60 p-8 rounded-lg space-y-4 shadow-inner'>
        <div className='form-control mb-3'>
          <label className='label' htmlFor="name">
            <span className='label-text'>Full Name*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder='Your full name'
            className='input input-bordered w-full'
            required
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Email*</span>
          </label>
          <input
            id='email'
            type='email'
            placeholder='Your email'
            className='input input-bordered w-full'
            required
          />
        </div>

        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Phone Number*</span>
          </label>
          <input
            id='number'
            type='tel'
            placeholder='Your phone number'
            className='input input-bordered w-full'
            required
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            id='message'
            placeholder='Your message here'
            className='textarea textarea-bordered w-full'
          ></textarea>
        </div>
        
        <div className='form-control'>
          <button className='btn bg-white text-[#FDB626] hover:bg-[#e09c1f] w-[150px] shadow-lg hover:scale-105'>Submit</button>
        </div>
      </form>
    </div>
    </div>
   
    }
  </div>  
  )
}