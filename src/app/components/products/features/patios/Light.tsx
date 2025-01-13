import React, { useState } from 'react'
import Image from 'next/image'
import Tooltip from '../Tooltip'

const photos = [
  { photo: '/patios/patios12.webp',  colour: 'No light'},
  { photo: '/patios/patios3.webp', colour: 'Even light'},
  { photo: '/patios/patios8.webp', colour: 'Custom light'},
]

export default function Light() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const frameColours = [
    { img: '/patios/patios8.webp', label: 'No light' },
    { img: '/patios/patios8.webp', label: 'Even light' },
    { img: '/patios/patios8.webp', label: 'Custom light' },
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
               style={{
                backgroundImage: `url(${colorOption.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
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
            className={`w-full h-auto hover:cursor-pointer ${
              selectedColor === photo.colour ? 'border-4 rounded-lg border-[#FDB626]' : ''
            }`} 
            onClick={() => setSelectedPhoto(photo.photo)}
          >
            <Image
              src={photo.photo}
              alt={photo.colour}
              width={500}
              height={300}
              className='rounded-md'
            />
          </div>
        ))}
      </div>
    </div>

    {selectedPhoto && (
            <div
              className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70 hover:cursor-pointer'
              onClick={() => setSelectedPhoto(null)} 
            >
              <div className='relative '>
                <Image
                  src={selectedPhoto}
                  alt='Enlarged patio structure'
                  width={800}
                  height={600}
                  className='rounded-md'
                />
              </div>
            </div>
          )}
  </div>
  )
}
