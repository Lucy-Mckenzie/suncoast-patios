import React from 'react'
import Image from 'next/image'
import data from './Data'
export default function Fabrics() {
  return (
  <div className='overflow-x-scroll lg:overflow-y-hidden overflow-y-auto relative flex flex-col items-center justify-center w-full lg:h-[560px]'>
  <table className=' w-full lg:table-fixed table-auto border-collapse border border-base-300 bg-base'>
    <thead>
      <tr className='bg-base-300 text-left text-sm font-semibold text-content'>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2'>Openness Factor</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2'>Fabric Name</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2'>Approx. Colour</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2 hidden md:table-cell'>Weave</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2 hidden md:table-cell'>Privacy</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2 hidden md:table-cell'>View Clarity</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2 hidden md:table-cell'>Light Rain & Splash Protection</th>
        <th className='border border-base-300 lg:px-4 lg:py-2 p-2'>Shading</th>
      </tr>
    </thead>
    <tbody>
      {data.map((fabric, index) => (
        <tr
          key={index}
          className={`text-sm text-content hover:bg-base-200 ${fabric.bg ? 'bg-blue-200/20' : ''}`}
        >
          <td className={`border-b-0 px-2 ${fabric.border ? 'border-b-[1px]' : ''}`}>{fabric.openness}</td>
          <td className='border border-base-300 px-2'>{fabric.name}</td>
          <td className='border border-base-300'>
            <div className='flex justify-center items-center'>
              <Image
                src={fabric.img}
                alt={fabric.name}
                width={100}
                height={60}
                className='object-cover '
              />
            </div>
          </td>
          <td className='border border-base-300 lg:px-4 lg:py-2 px-2 py-1 hidden md:table-cell'>{fabric.weave}</td>
          <td className='border border-base-300 lg:px-4 lg:py-2 px-2 py-1 hidden md:table-cell'>{fabric.privacy}</td>
          <td className='border border-base-300 lg:px-4 lg:py-2 px-2 py-1 hidden md:table-cell'>{fabric.viewClarity}</td>
          <td className='border border-base-300 lg:px-4 lg:py-2 px-2 py-1 hidden md:table-cell'>{fabric.rainProtection}</td>
          <td className='border border-base-300 lg:px-4 lg:py-2 px-2 py-1'>{fabric.shading}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}