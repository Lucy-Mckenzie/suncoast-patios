import React, { useState } from 'react'
import Image from 'next/image'

const photos = [
  '/patios/structure/structure.webp',
  '/patios/structure/structure2.webp',
  '/patios/structure/structure3.webp',
  '/patios/structure/structure4.webp',
  '/patios/structure/structure7.webp',
  '/patios/structure/structure8.webp',
]

export default function Quality() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <div className='relative flex flex-col items-center justify-center w-full h-[550px]'>
      <div className='relative w-full rounded-md overflow-scroll'>
        <div className='grid lg:grid-cols-2 grid-rows-3 grid-cols-2 gap-1'>
          {photos.map((photo, index) => (
            <div
              key={index}
              className={'w-full h-auto hover:cursor-pointer'} 
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo}
                alt={`Structure of a patio ${index + 1}`}
                width={600}
                height={300}
                className='rounded-md object-fill max-h-[300px]'
              />
            </div>
          ))}
        </div>
      </div>
      {selectedPhoto && (
        <div
          className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70'
          onClick={() => setSelectedPhoto(null)} 
        >
          <div className='relative'>
            <Image
              src={selectedPhoto}
              alt='Different patio light exposure'
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

