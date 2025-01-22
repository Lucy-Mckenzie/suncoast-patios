'use client'
import React from 'react'
import Image from 'next/image'
import EnquiryForm from '../form/EnquiryForm'
import { motion } from 'framer-motion'

const button = {
  text: 'Get in contact today',
  style: 'text-white border-white hover:bg-white hover:text-black hover:border-white transition-all duration-[500ms] ease-in-out rounded-full border' 
}

export default function LandingPage() {

return (
 <motion.div className='relative w-full lg:h-[900px] md:h-[700px] h-[500px] mx-auto rounded-lg overflow-hidden'
 initial={{ y: 10 }}
 animate={{ y: [0, 2, 0] }}
 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
 >
    <div className='flex justify-center items-center relative w-full overflow-hidden'>
      <Image
        src='/patios/patios8.webp'
        alt='landing photo'
        width={1100}
        height={700}
        loading='eager'
        priority={true}
        className='w-[95%] lg:h-auto object-cover lg:max-h-[750px] md:h-[600px] h-[400px] rounded-lg'
      />
      <div className='absolute w-[95%] flex items-center justify-center h-full bg-black opacity-30 rounded-md'></div> 
    </div>
    <motion.div className='absolute inset-0 flex flex-col justify-center items-start text-left space-y-4 px-4 ml-20 pt-10'>
        <motion.h1 className='text-white lg:text-6xl text-4xl font-normal max-w-4xl'
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0, y: 100 },
             visible: { opacity: 1, y: 0 },
           }}
           transition={{ duration: 0.5 }}
        >
          Ultimate Outdoor Living Solutions
        </motion.h1>
        <motion.h2 className='text-white lg:text-3xl text-xl font-light'
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bring your outdoor area to life
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
    <EnquiryForm text={button.text} style={button.style} />
  </motion.div>
      </motion.div>
      <motion.div className='absolute top-[70%] left-1/2 transform -translate-x-1/2 z-10 hidden lg:block'
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        })
      }
      >
        <motion.div className='hover:cursor-pointer'
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
        <h2 className='text-white lg:text-1xl text-lg font-light justify-center flex'>
          Scroll
        </h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 64 64'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-20 w-20 text-white'
          >
      <polyline points='24 44 32 52 40 44' />
      <line x1='32' y1='12' x2='32' y2='52' />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
 ) 
}