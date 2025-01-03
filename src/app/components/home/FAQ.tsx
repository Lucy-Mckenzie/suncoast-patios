import React from 'react'

export default function FAQ() {
  return (
    <div className='flex flex-col items-center my-20 '>
      <h1 className='text-4xl text-center font-manrope mb-6'>
        Frequently asked questions
      </h1>
      <div className='w-[70%] space-y-4'>

    <div className='collapse bg-base-200 shadow-md'>
  <input type='checkbox' />
    <div className='collapse-title text-xl font-medium'>
      What are outdoor louvres, and how do they work?
      </div>
    <div className='collapse-content'>
      <p>
      Outdoor louvres are adjustable slats that allow you to control the amount of sunlight, shade, and ventilation in your outdoor space. They can be manually or automatically adjusted to suit the weather conditions.
      </p>
    </div>
</div>
<div className='collapse bg-base-200 shadow-md'>
  <input type='checkbox' />
    <div className='collapse-title text-xl font-medium'>
    How do I maintain my louvres and patio structures?
      </div>
    <div className='collapse-content'>
      <p>
      Regular cleaning and inspections are essential to keep your louvres and patio in good condition. We recommend washing them every 6 months and checking for any wear and tear to ensure longevity.
        </p>
    </div>
</div>
<div className='collapse bg-base-200 shadow-md'>
  <input type='checkbox' />
    <div className='collapse-title text-xl font-medium'>
      Can louvres be installed on existing patios?
      </div>
    <div className='collapse-content'>
      <p>
      Yes! Louvres can be added to your existing patio or outdoor structure, providing enhanced protection from the elements while adding a stylish and functional feature to your outdoor space.
        </p>
    </div>
</div>
<div className='collapse bg-base-200 shadow-md'>
  <input type='checkbox' />
    <div className='collapse-title text-xl font-medium'>
    Are your louvres and patios weather-resistant?
      </div>
    <div className='collapse-content'>
      <p>
      Absolutely! Our louvres and patios are designed to withstand various weather conditions, from strong winds to heavy rain. All of our products are built with high-quality, durable materials to ensure longevity and performance.
        </p>
    </div>
</div>
<div className='collapse bg-base-200 shadow-md'>
  <input type='checkbox' />
    <div className='collapse-title text-xl font-medium'>
    How much does it cost to install outdoor louvres and patios?
      </div>
    <div className='collapse-content'>
      <p>
      The cost of installing louvres and patios depends on several factors, including the size, design, and materials. Contact us for a free consultation and quote, and we&apos;ll tailor our services to your budget and needs.
        </p>
    </div>
</div>
</div>
    </div>
  )
}
