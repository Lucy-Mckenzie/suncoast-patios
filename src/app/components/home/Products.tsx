'use client'
import React from 'react'
import Louvres from './products/Louvres'
import Blinds from './products/Blinds'
import Patios from './products/Patios'
import { motion } from 'framer-motion'

export default function Products() {
  return (
    <div className='flex flex-col items-center pb-20 space-y-10 overflow-hidden'>
      <h1 className='text-center font-manrope font-bold leading-tight lg:text-7xl text-5xl pb-5 lg:pt-0 pt-10'>
       Outdoor Living Solutions
      </h1>
      <motion.div className='flex flex-row flex-wrap lg:items-baseline lg:space-x-8 space-y-4 justify-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Patios />
        <Blinds />
        <Louvres />
      </motion.div>
    </div>
  )
}
