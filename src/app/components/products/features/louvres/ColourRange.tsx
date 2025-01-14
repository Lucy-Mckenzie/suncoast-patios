import React from 'react'
import Tooltip from '../Tooltip'
import { data } from './Data'

export default function ColourRange() {
  return (
      <div className='relative flex flex-col items-center justify-center w-full lg:h-[550px] h-auto'>
        <div className='p-6 space-y-4 my-6'>
          <div className='flex flex-wrap gap-2 items-center justify-center'>
            {data.map((colorOption, index) => (
              <div
                key={index}
                className='relative group'
              >
                <div
                  style={{ backgroundColor: colorOption.colour }}
                  className='lg:w-20 lg:h-16 w-9 h-9 rounded-lg shadow-md cursor-pointer'
                />
                <Tooltip tooltip={colorOption.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}