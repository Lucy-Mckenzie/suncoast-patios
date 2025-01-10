import React from 'react'

export default function GoodToKnow() {
  return (
   <div className='relative flex flex-col items-center justify-center w-full h-[550px]'>
  <div className='space-y-4'>
    {[
      { title: 'Darker Colours', content: 'Reduce glare' },
      { title: 'Paler Colours', content: 'Reflect heat and reduce heat loading' },
      { title: 'Higher Openness Fabrics', content: 'Offer clearer views' },
      { title: 'Smaller Openness Fabrics', content: 'Offer greater privacy' },
    ].map((item, index) => (
      <details key={index} className='bg-base-200 p-4 rounded-md shadow'>
        <summary className='cursor-pointer font-semibold'>{item.title}</summary>
        <p className='mt-2 text-content'>{item.content}</p>
      </details>
    ))}
  </div>
</div>
  )
}