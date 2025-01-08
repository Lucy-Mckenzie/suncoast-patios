'use client'
import React, { JSX } from 'react'
import { useState } from 'react'
import Colours from './features/Colours'

const FeatureComponents: { [key: string]: () => JSX.Element } = {
Colours: () =>  <Colours />,
'Guaranteed 15 Years': () => <div>Guaranteed 15 Years Component</div>,
'Size Recomendations': () => <div>Size Recomendations Component</div>,
'Fabric Types': () => <div>Fabric Types Component</div>,
'Good to Know': () => <div>Good to Know Component</div>,
}

const features = [
  { id: 1, name: 'Colours',  description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
  { id: 2, name: 'Fabric Types', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
  { id: 3, name: 'Guaranteed 15 Years', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
  { id: 4, name: 'Size Recomendations', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
  { id: 5, name: 'Good to Know', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
]

export default function FeaturesBlinds ()  {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const ActiveFeatureComponent = FeatureComponents[activeFeature.name] || (() => <div>Feature not available</div>)

  return (
<div>
<div className='max-w-7xl mx-auto p-8 bg-base shadow-lg rounded-md'>
  <div className='flex flex-col lg:flex-row'>
  
          <div className='flex flex-col gap-4 lg:w-1/3 bg-base-100 rounded-md'>
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
  
          <div className='w-auto px-4'>
          <h2 className='text-xl font-semibold my-1'>{activeFeature.name}</h2>
          <p className='text-md text-base mb-4'>{activeFeature.description}</p>
          <ActiveFeatureComponent />
          </div>
        </div>
      </div>
</div>
  )
}

