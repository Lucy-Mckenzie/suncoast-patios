'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Products() {
  return (
    <div className='flex flex-col items-center pb-20 space-y-10 overflow-hidden'>
      <h1 className='text-center font-manrope text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl pb-5'>
      Custom Outdoor Entertaining Solutions
      </h1>
      <div className='flex flex-row flex-wrap justify-center space-x-8'>
        <motion.div className='card bg-base-100 w-96 shadow-md rounded-md'
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <figure className='px-5'>
            <Image
              src='/patios/patios7.webp'
              alt='suncoast patios patio'
              width={400}
              height={300}
              className='rounded-md'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>
      Flat Patio Roofs
            </h2>
            <p>
      The protection from the elements, stylish aesthetics and build quality designed to stand the test of time.
            </p>
            <div className='card-actions'>
              <Link
                href='/products/patios'>
                <button
                  className='btn bg-[#005694] text-base-300'>
          View Product
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div className='card bg-base-100 w-96 shadow-md rounded-md'
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <figure className='px-5'>
            <Image
              src='/blinds/blinds.webp'
              alt='suncoast patios blinds'
              width={400}
              height={300}
              className='rounded-md'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>
      Outdoor Blinds
            </h2>
            <p className='pb-2'>
      We believe the addition of outdoor blinds can completely transform any outdoor living space.
            </p>
            <div className='card-actions'>
              <Link
                href='/products/blinds'>
                <button
                  className='btn bg-[#005694] text-base-300'>
          View Product
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div className='card bg-base-100 w-96 shadow-md rounded-md'
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <figure className='px-5'>
            <Image
              src='/louvres/louvres.webp' 
              alt='suncoast patios louvre'
              width={400}
              height={300}
              className='rounded-md'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>
      Louvre Roofs
            </h2>
            <p>
    Louvre roofs in the sunny Hawke&apos;s Bay create a combination to shape our ideal form of outdoor living. 
            </p>
            <div className='card-actions'>
              <Link
                href='/products/louvres'>
                <button
                  className='btn bg-[#005694] text-base-300'>
          View Product
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
