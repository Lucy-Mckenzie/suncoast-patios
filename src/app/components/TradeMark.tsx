import React from 'react'
import Image from 'next/image'

export default function TradeMark() {
  return (
    <div className='flex flex-col items-center text-center bg-base-100 py-10 px-4 rounded-lg'>
    <h1 className='text-2xl md:text-3xl font-bold font-manrope mb-8'>
      We are an Authorized Dealer Of Stratco & Ziptrak Outdoor Products
    </h1>
    
    <div className='flex flex-row justify-center items-center gap-8 mb-6'>
      <Image
        src='/logos/outback.png'
        alt='Outback logo'
        width={150}
        height={80}
        className='object-contain'
      />
      <Image
        src='/logos/ziptrak.png'
        alt='Ziptrak logo'
        width={150}
        height={80}
        className='object-contain'
      />
    </div>
    
    <button className='btn btn-wide bg-[#FDB626] text-white hover:bg-[#e09c1f] py-3 px-6 rounded-md text-lg'>
      Free Quote
    </button>
  </div>
  
  
  )
}