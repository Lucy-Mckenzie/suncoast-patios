import React, { useState } from 'react'
import Image from 'next/image'

const photos = [
'/louvres/louvres.webp',
'/louvres/louvres10.webp',
'/louvres/louvres12.webp',
'/louvres/louvres1.webp',
'/louvres/louvres13.webp',
'/louvres/louvres14.webp',
'/louvres/louvres5.webp',
'/louvres/louvres9.webp',
]

export default function Kudos() {
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
                  width={500}
                  height={270}
                  className='rounded-md object-fill max-h-[280px] '
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
              alt='Louvre'
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