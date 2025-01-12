'use client'
import React, { JSX } from 'react'
import { useState } from 'react'
import Weather from './features/patios/Weather'
import Quality from './features/patios/Quality'
import Warranty from './features/patios/Warranty'
import Colours from './features/patios/Colours'

const FeatureComponents: { [key: string]: () => JSX.Element } = {
Colours: () => <Colours />,
Warranty: () => <Warranty />,
Weather: () => <Weather />,
Quality: () => <Quality />,
}

const features = [
  { id: 1, name: "Colours", description: "Maintain your privacy with innovative designs that let you see out without being seen in."  },
  { id: 2, name: "Warranty", description: "Enjoy peace of mind with our quick and reliable support whenever you need it."  },
  { id: 3, name: "Weather", description: "Weather-ready blinds that add style and durability to any space, no matter the conditions."  },
  { id: 4, name: "Quality", description: "All our blinds are crafted to meet your needs for aesthetics, privacy, and functionality."  },
]

export default function FeaturesBlinds ()  {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const ActiveFeatureComponent = FeatureComponents[activeFeature.name] || (() => <div>Feature not available</div>)

  return (
<div>
<div className='mx-auto lg:p-8 p-4 bg-base shadow-lg border-[1px] rounded-md'>
  <div className='flex flex-col lg:flex-row'>
  
          <div className='flex flex-col gap-4 bg-base-100 rounded-md'>
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`p-4 text-left rounded-md w-64
                  ${ activeFeature.id === feature.id
                  ? 'bg-base-300 text- font-bold shadow-md border-[1px]'
                  : 'bg-base-200 hover:bg-base-100 text-base-content' 
                }`}
                onClick={() => setActiveFeature(feature)}
              >
                {feature.name}
              </button>
            ))}
          </div>
  
          <div className={`lg:max-w-4xl bd-base-300 flex flex-col items-start justify-center w-full lg:h-[620px] h-auto lg:pl-6  lg:pt-0 pt-4`}>
          <h2 className='text-xl font-semibold my-1 text-left'>{activeFeature.name}</h2>
          <p className='text-md text-base mb-4 text-left'>{activeFeature.description}</p>
          <ActiveFeatureComponent />
          </div>
        </div>
      </div>
</div>
  )
}