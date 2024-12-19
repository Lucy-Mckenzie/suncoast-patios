import React from 'react'
import Image from 'next/image'

export default function TradeMark() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl text-center font-manrope mb-6'>
        We are an Authorized Dealer Of Stratco & Ziptrak Outdoor Products
      </h1>
      <div className='flex flex-row justify-center items-center gap-10 pb-10'>
         <Image src='/logos/outback.png' alt='outback logo' width={200} height={100} className="object-contain"/>
         <Image src='/logos/ziptrak.png' alt='ziptrack logo' width={200} height={100} className="object-contain"/>
      </div>
      <button className='btn btn-wide'>Free Quote</button>
    </div>
  )
}