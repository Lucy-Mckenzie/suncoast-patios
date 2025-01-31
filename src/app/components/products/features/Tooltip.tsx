import React from 'react'

interface Props {
  tooltip: string
}

export default function Tooltip({ tooltip }: Props) {
  return (
    <div>
      <div className='absolute bottom-full mb-2 hidden group-hover:block bg-base-300 text-content text-md rounded py-1 px-2 text-nowrap'>
        {tooltip}
      </div>
    </div>
  )
}

