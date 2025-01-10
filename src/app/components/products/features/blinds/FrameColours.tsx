import React, { useState } from 'react'
import Image from 'next/image'
import Tooltip from '../Tooltip'

const photos = [
  '/blinds/blinds.webp',
  '/blinds/blinds1.webp',
  '/blinds/blinds3.webp',
  '/blinds/blinds4.webp',
  '/blinds/blinds10.webp',
  '/blinds/blinds12.webp',
]

export default function FrameColours() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const frameColours = [
    { color: '#f2f4f5', label: 'Gull Grey' },
    { color: '#f9e9ca', label: 'Basalt' },
    { color: '#e5d2b4', label: 'Blackstone' },
    { color: '#4f5650', label: 'Mocha' },
    { color: '#404641', label: 'Platinum' },
    { color: '#001722', label: 'Storm' },
  ]
  
  return (
    <div className='relative flex flex-col items-center justify-center w-full lg:h-[550px] h-auto'>
      <div className='space-y-4 my-6'>
        <div className='flex gap-4 items-center justify-center'>
          {frameColours.map((colorOption, index) => (
            <div key={index} className='relative group'>
              <div
                className={`lg:w-14 lg:h-14 w-9 h-9 rounded-full shadow-sm cursor-pointer`}
                onClick={() => setSelectedColor(colorOption.color)}
              />
              <Tooltip tooltip={colorOption.label} />
            </div>
          ))}
        </div>
      </div>
      <div className='relative w-full overflow-hidden rounded-md'>
        <div className='grid grid-cols-3 grid-rows-2 sm:grid-cols-3 gap-1'>
          {photos.map((photoSrc, index) => (
            <div
              key={index}
              className={`w-full h-auto ${selectedColor ? `border-4 border-[${selectedColor}]` : ''}`}
            >
              <Image
                src={photoSrc}
                alt={`Slide ${index + 1}`}
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


