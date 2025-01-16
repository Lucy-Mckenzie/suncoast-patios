import React from 'react'
import Image from 'next/image'
import EnquiryForm from '../form/EnquiryForm'

export default function TradeMark() {
  return (
    <div className='flex flex-col items-center text-center bg-base-100 py-10 px-4 rounded-lg'>
    <h1 className='text-2xl md:text-3xl font-bold font-manrope mb-8'>
    Official Dealer of Stratco & Ziptrak Outdoor Solutions
    </h1>
    <div className='flex flex-row justify-center items-center gap-8 mb-6'>
      <Image
        src='/logos/outback.png'
        alt='Outback logo'
        width={350}
        height={80}
        className='object-contain'
      />
      <Image
        src='/logos/ziptrak.png'
        alt='Ziptrak logo'
        width={350}
        height={80}
        className='object-contain'
      />
    </div>
  <EnquiryForm />
  </div>
  
  )
}