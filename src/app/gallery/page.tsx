import React from 'react'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className='flex flex-col items-center py-20 space-y-10'>
        <h1 className='text-2xl text-center font-manrope'>
          Gallery
        </h1>

        <div className="form-control w-96">
    <label className="label">
      <span className="label-text">Filter by Product</span>
    </label>
    <select className="select select-bordered w-full">
      <option>All Products</option>
      <option>Patios</option>
      <option>Louvers</option>
      <option>Blinds</option>
    </select>
  </div>

        <div className='flex flex-row flex-wrap justify-center space-x-8'>
        <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
      </div>

      <div className='flex flex-row flex-wrap justify-center space-x-8'>
      <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
        </div>

        <div className='flex flex-row flex-wrap justify-center space-x-8'>
      <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
        </div>

        <div className='flex flex-row flex-wrap justify-center space-x-8'>
      <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
        </div>
        
        <div className='flex flex-row flex-wrap justify-center space-x-8'>
      <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl transform transition duration-300 hover:scale-105">
    <figure className='rounded-md'>
        <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400} className="object-cover w-full h-64" />
    </figure>
  </div>
        </div>
      </div>
  )
}
