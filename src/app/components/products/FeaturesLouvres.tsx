'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const features = [
  { id: 1, name: 'Colours', image: '/demo1.png' },
  { id: 2, name: '165 Degree Rotation', image: '/demo.png' },
  { id: 3, name: 'Remote Opening', image: '/demo1.png' },
  { id: 4, name: 'Guaranteed 15 Years', image: '/demo.png' },
  { id: 5, name: 'Auto Closures in Rain', image: '/demo1.png' },
  { id: 6, name: 'Any Size Achievable', image: '/demo.png' },
]

export default function FeaturesLouvres ()  {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
<div>
<div className='max-w-7xl mx-auto p-8 bg-base shadow-lg rounded-md'>
  <div className='flex flex-col lg:flex-row'>
  
          <div className='flex flex-col gap-4 lg:w-1/3 bg-base-200 rounded-md'>
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`p-4 text-left rounded-md ${
                  activeFeature.id === feature.id
                    ? 'bg-base-300'
                    : 'bg-base-200 hover:bg-base-100'
                }`}
                onClick={() => setActiveFeature(feature)}
              >
                {feature.name}
              </button>
            ))}
          </div>
  
          <div className='mt-8 lg:mt-0 lg:w-2/3 lg:pl-4 flex justify-center items-center'>
            <Image
              src={activeFeature.image}
              alt={activeFeature.name}
              className='h-[500px] rounded-md shadow-md'
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </div>
</div>
  )
}