import React, { useState } from 'react'
import Image from 'next/image'
import Tooltip from '../Tooltip'

const photos = [
  { photo: '/blinds/blinds.webp',  colour: 'Gull Grey'},
  { photo: '/blinds/blinds1.webp', colour: 'Basalt'},
  { photo: '/blinds/blinds3.webp', colour: 'Blackstone'},
  { photo: '/blinds/blinds4.webp', colour: 'Mocha'},
  { photo: '/blinds/blinds10.webp', colour: 'Platinum'},
  { photo: '/blinds/blinds12.webp', colour: 'Storm'}
]

export default function FrameColours() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const frameColours = [
    { colour: '#f2f4f5', label: 'Gull Grey' },
    { colour: '#f9e9ca', label: 'Basalt' },
    { colour: '#e5d2b4', label: 'Blackstone' },
    { colour: '#4f5650', label: 'Mocha' },
    { colour: '#404641', label: 'Platinum' },
    { colour: '#001722', label: 'Storm' },
  ]

  const handleColorSelect = (colorLabel: string) => {
    setSelectedColor(colorLabel)
  }
  
  return (
    <div className='relative flex flex-col items-center justify-center w-full lg:h-[550px] h-auto'>
    <div className='space-y-4 my-6'>
      <div className='flex gap-4 items-center justify-center'>
        {frameColours.map((colorOption, index) => (
          <div
            key={index}
            className='relative group'
            onClick={() => handleColorSelect(colorOption.label)}
          >
            <div
              style={{ backgroundColor: colorOption.colour }}
              className={`lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm cursor-pointer ${selectedColor === colorOption.label ? 'border-4 border-[#FDB626]' : ''}`}
            />
            <Tooltip tooltip={colorOption.label} />
          </div>
        ))}
      </div>
    </div>
    <div className='relative w-full overflow-hidden rounded-md'>
      <div className='grid lg:grid-cols-3 grid-rows-2 grid-cols-2 gap-2'>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`w-full h-auto ${
              selectedColor === photo.colour ? 'border-4 rounded-lg border-[#FDB626]' : ''
            }`} 
          >
            <Image
              src={photo.photo}
              alt={photo.colour}
              width={400}
              height={200}
              className='rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}




