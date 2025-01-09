import React from 'react'
import Image from 'next/image'

export default function Fabrics() {
  return (
    <div className='overflow-x-auto'>
    <table className='w-full table-fixed border-collapse border border-base-300 bg-base'>
      <thead>
        <tr className='bg-base-300 text-left text-sm font-semibold text-content'>
          <th className='border border-base-300 px-4 py-2'>Openness Factor</th>
          <th className='border border-base-300 px-4 py-2'>Fabric Name</th>
          <th className='border border-base-300 px-4 py-2'>Approx. Colour</th>
          <th className='border border-base-300 px-4 py-2'>Weave</th>
          <th className='border border-base-300 px-4 py-2'>Privacy</th>
          <th className='border border-base-300 px-4 py-2'>View Clarity</th>
          <th className='border border-base-300 px-4 py-2'>Light Rain & Splash Protection</th>
          <th className='border border-base-300 px-4 py-2'>Shading</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-sm text-content hover:bg-base-200'>
          <td className='border-b-0 px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2'>Cinder</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
              src="/blinds/fabrics/cinder.png"
              alt="Cinder"
              width={100}
              height={60}
              className="object-cover "
            />
          </div>
          </td>
          <td className='border border-base-300 px-4 py-2'>1 x 1</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content'>
          <td className='px-3'><strong>1%</strong> - <strong>99%</strong> UV Blockout</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>Flagstone</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/flagstone.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover '
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>1 x 1</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content hover:bg-base-200'>
          <td className='border-b border-base-300'></td>
          <td className='border border-base-300 px-4'>Cocoa-Bean</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/cocoabean.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2'>1 x 1</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content'>
          <td className='px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>Blackstone</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/blackstone.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content hover:bg-base-200'>
          <td className=' px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2'>Mocha</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/mocha.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content'>
          <td className=' px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>Basalt</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/basalt.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content hover:bg-base-200'>
          <td className='px-3'><strong>5%</strong> - <strong>95%</strong> UV Blockout</td>
          <td className='border border-base-300 px-4'>Gull Grey</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/gullgrey.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content'>
          <td className=' px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>Slate Grey</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/slategrey.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content hover:bg-base-200'>
          <td className=' px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2'>Champagne</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/champagne.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content'>
          <td className=' px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>Platinum</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/platinum.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2 bg-base-200'>✔✔✔✔</td>
        </tr>
        <tr className='text-sm text-content hover:bg-base-200'>
          <td className=' px-4 py-2'></td>
          <td className='border border-base-300 px-4 py-2'>Monument</td>
          <td className='border border-base-300'>
          <div className="flex justify-center items-center">
            <Image
            src='/blinds/fabrics/monument.png'
            alt='Basalt'
            width={100}
            height={60}
            className='object-cover'
            />
            </div>
          </td>
          <td className='border border-base-300 px-4 py-2'>2 x 2</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔</td>
          <td className='border border-base-300 px-4 py-2'>✔✔✔✔</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}