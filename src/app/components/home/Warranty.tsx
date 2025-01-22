import React from 'react'
import Image from 'next/image'

export default function Warranty() {
  return (
  <div className='relative flex overflow-x-hidden max-w-[70%] mx-auto w-full'>
    <div className='absolute left-0 top-0 h-full w-44 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none'></div>
  <div className='inline-flex animate-marquee'>
  <Image
      src='/warranty/google.png'
      alt='Installation warranty logo'
      width={80}
      height={100}
      className='object-contain mx-11'
    />
    <Image
      src='/warranty/warranty3.png'
      alt='Installation warranty logo'
      width={80}
      height={100}
      className='object-contain mx-11'
    />
    <Image
      src='/warranty/warranty1.png'
      alt='Paint warranty logo'
      width={80}
      height={100}
      className='object-contain mx-11'
    />
    <Image
      src='/warranty/warranty2.png'
      alt='Structural warranty logo'
      width={100}
      height={140}
      className='object-contain mx-11'
    />
  </div>
  <div className='absolute top-0 inline-flex animate-marquee2'>
  <Image
      src='/warranty/google.png'
      alt='Installation warranty logo'
      width={150}
      height={140}
      className='object-contain mx-11'
    />
    <Image
      src='/warranty/warranty3.png'
      alt='Installation warranty logo'
      width={180}
      height={140}
      className='object-contain mx-11'
    />
    <Image
      src='/warranty/warranty1.png'
      alt='Paint warranty logo'
      width={100}
      height={140}
      className='object-contain mx-11'
    />
    <Image
      src='/warranty/warranty2.png'
      alt='Structural warranty logo'
      width={100}
      height={140}
      className='object-contain mx-11'
    />
  </div>
  <div className='absolute right-0 top-0 h-full w-44 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none'></div>
</div>
  )
}
