'use client'
import React, { JSX } from 'react'
import { useState } from 'react'
import Colours from './features/blinds/Colours'
import Fabrics from './features/blinds/Fabrics'
import Warranty from './features/blinds/Warranty'
import Privacy from './features/blinds/Privacy'
import Weather from './features/blinds/Weather'
import GoodToKnow from './features/blinds/GoodToKnow'

const FeatureComponents: { [key: string]: () => JSX.Element } = {
Colours: () =>  <Colours />,
'Fabrics': () => <Fabrics />,
'Warranty': () => <Warranty />,
'Privacy': () => <Privacy />,
'Weather': () => <Weather />,
'Good to Know': () => <GoodToKnow />,
}

const features = [
  { id: 1, name: 'Colours',  description: 'Check out six of our most popular colours to blend seamlessly into your house.'  },
  { id: 2, name: 'Fabrics',  description: 'Choose from 11 different colours to match or contrast with your existing décor.'  },
  { id: 3, name: 'Warranty', description: 'We are always quick to help out if you are facing problems.'  },
  { id: 4, name: 'Privacy', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
  { id: 5, name: 'Weather', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
  { id: 6, name: 'Good to Know', description: 'All Ambient Blinds are available in six popular colours to blend seamlessly into your house.'  },
]

export default function FeaturesBlinds ()  {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const ActiveFeatureComponent = FeatureComponents[activeFeature.name] || (() => <div>Feature not available</div>)

  return (
<div>
<div className='max-w-7xl mx-auto p-8 bg-base shadow-lg border-[1px] rounded-md'>
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
  
          <div className='px-4 min-w-4xl max-w-4xl bd-base-300'>
          <h2 className='text-xl font-semibold my-1'>{activeFeature.name}</h2>
          <p className='text-md text-base mb-4'>{activeFeature.description}</p>
          <ActiveFeatureComponent />
          </div>
        </div>
      </div>
</div>
  )
}

