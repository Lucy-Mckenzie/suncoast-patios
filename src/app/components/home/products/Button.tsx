'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Button() {
  return (
    <motion.button
      className='btn bg-[#005694] text-base-300 hover:bg-[rgba(0,86,148,0.59)]'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      View Product
    </motion.button>
  )
}
