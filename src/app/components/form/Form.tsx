'use client'
import React from 'react'

export default function Form() {
  return (
    <div>
           <form className='lg:w-2/3 bg-[#FDB626]/60 p-8 rounded-lg space-y-4 shadow-inner'>
        <div className='form-control mb-3'>
          <label className='label' htmlFor='name'>
            <span className='label-text'>Full Name*</span>
          </label>
          <input
            id='name'
            type='text'
            placeholder='Your full name'
            className='input input-bordered w-full'
            required
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Email*</span>
          </label>
          <input
            id='email'
            type='email'
            placeholder='Your email'
            className='input input-bordered w-full'
            required
          />
        </div>

        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Phone Number*</span>
          </label>
          <input
            id='number'
            type='tel'
            placeholder='Your phone number'
            className='input input-bordered w-full'
            required
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            id='message'
            placeholder='Your message here'
            className='textarea textarea-bordered w-full'
          ></textarea>
        </div>
        
        <div className='form-control'>
          <button className='btn bg-white text-[#FDB626] hover:bg-[#e09c1f] w-[150px] shadow-lg hover:scale-105'>Submit</button>
        </div>
      </form>
    </div>
  )
}

