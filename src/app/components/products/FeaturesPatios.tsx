/* eslint-disable quotes */
'use client'
import React, { JSX } from 'react'
import { useState } from 'react'
import Weather from './features/patios/Weather'
import Quality from './features/patios/Quality'
import Warranty from './features/Warranty'
import Light from './features/patios/Light'

const patiosData = {
  photo: '/patios/patios5.webp',
  text: 'Protected by Stratco&apos;s <strong>25 year structural warranty</strong> (conditions apply).'
}

const FeatureComponents: { [key: string]: () => JSX.Element } = {
  Light: () => <Light />,
  Warranty: () => <Warranty photo={patiosData.photo} text={patiosData.text}/>,
  Weather: () => <Weather />,
  Quality: () => <Quality />,
}

const features = [
  { id: 1, name: "Light", description: "With the addition of the Stratco Outback Rooflite™ you can supply filtered light to the underside."  },
  { id: 2, name: "Warranty", description: "Built to last and backed by a comprehensive warranty for long-term reliability and peace of mind."  },
  { id: 3, name: "Weather", description: "Designed to withstand harsh weather conditions while providing shade and comfort all year round."  },
  { id: 4, name: "Quality", description: "Engineered with premium materials and craftsmanship for lasting performance and timeless appeal."  },
]

export default function FeaturesBlinds ()  {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const ActiveFeatureComponent = FeatureComponents[activeFeature.name] || (() => <div>Feature not available</div>)

  return (
    <div>
      <div className='mx-auto lg:p-8 p-4 bg-base shadow-lg border-[1px] rounded-md'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col items-center gap-4 bg-base-100 rounded-md'>
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
            <p className='text-md text-base mb-4 text-left border-b-[1px]'>{activeFeature.description}</p>
            <ActiveFeatureComponent />
          </div>
        </div>
      </div>
    </div>
  )
}