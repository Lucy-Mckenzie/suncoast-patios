import React from 'react'
import Image from 'next/image'

export default function Products() {
  return (
    <div className='flex flex-col items-center py-20 space-y-10'>
      <h1 className='text-2xl font-bold text-center text-black'>
        Custom Outdoor Entertaining Solutions
      </h1>
      <div className='flex flex-row flex-wrap justify-center space-x-8'>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
      <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Product</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
      <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Product</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
      <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"></h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Product</button>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}