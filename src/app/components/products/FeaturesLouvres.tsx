/* eslint-disable quotes */
'use client'
import React, { JSX } from 'react'
import { useState } from 'react'
import ColourRange from './features/louvres/ColourRange'
import Warranty from './features/Warranty'
import KudosLouvres from './features/louvres/KudosLouvres'
import RainSensor from './features/louvres/RainSensor'

const louvresData = {
  photo: '/louvres/louvres11.webp',
  text: 'Protected by Stratco&apos;s <strong>25 year structural warranty</strong>, and a 10 year paint finish warranty. (conditions apply).'
}

const FeatureComponents: { [key: string]: () => JSX.Element } = {
  'Kudos Louvres': () => <KudosLouvres />,
  Warranty: () => <Warranty photo={louvresData.photo} text={louvresData.text}/>,
  'Colour Range': () => <ColourRange />,
  'Rain Sensor': () => <RainSensor />,
}

const features = [
  { id: 1, name: "Kudos Louvres", description: "Crafted from high-quality aluminum, these opening roofs are durable and built to withstand the elements. These innovative roofs can be operated manually or with the touch of a button."  },
  { id: 2, name: "Warranty", description: "Built to last and backed by a comprehensive warranty for long-term reliability and peace of mind."   },
  { id: 3, name: "Colour Range", description: "Customers can choose from a range of colours and finishes to ensure their opening roof fits seamlessly with the existing aesthetic of the property."  },
  { id: 4, name: "Rain Sensor", description: "The louvre system has an in-built rain sensor that will automatically close the blades if rain is detected (motorised units only)."  },
]

export default function FeaturesLouvres()  {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const ActiveFeatureComponent = FeatureComponents[activeFeature.name] || (() => <div>Feature not available</div>)

  return (
    <div>
      <div className='mx-auto lg:p-8 p-4 bg-base shadow-lg border-[1px] rounded-md'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col items-center  gap-4 bg-base-100 rounded-md'>
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