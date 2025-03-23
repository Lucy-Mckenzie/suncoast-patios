import React from 'react'
import Image from 'next/image'
import EnquiryForm from '../form/EnquiryForm'
import Link from 'next/link'

const button = {
  text: 'Free Measure & Quote',
  style: 'text-content border-content hover:bg-base-300 hover:text-content hover:border-base-300 transition-all duration-[500ms] ease-in-out rounded-full border' 
}

export default function TradeMark() {
  return (
    <div className='flex flex-col items-center text-center bg-base-100 py-20 px-4 rounded-lg'>
      <h1 className='text-4xl font-manrope mb-8'>
    Authorised Dealer of Stratco & Ziptrak Outdoor Solutions
      </h1>
      <div className='flex lg:flex-row flex-col justify-center items-center gap-8 mb-6'>
        <Link href='https://www.stratco.co.nz/' rel='noopener' target='_blank'>
          <Image
            src='/logos/outback.png'
            alt='Outback logo'
            width={300}
            height={70}
            className='object-contain rounded-md'
          />
        </Link>
        <Link href='https://www.nz.ziptrak.com/en/' rel='noopener' target='_blank'>
          <Image
            src='/logos/ziptrak.png'
            alt='Ziptrak logo'
            width={350}
            height={80}
            className='object-contain'
          />
        </Link>
        <Link href='https://kudoslouvres.co.nz/' rel='noopener' target='_blank'>
          <Image
            src='/logos/kudos.webp'
            alt='Kudos logo'
            width={350}
            height={100}
            className='object-contain rounded-md'
          />
        </Link>
      </div>
      <EnquiryForm text={button.text} style={button.style}/>
    </div>
  
  )
}
