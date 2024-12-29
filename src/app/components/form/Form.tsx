'use client'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const publicKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY!

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!name || !email || !number) {
      setStatusMessage('Please fill out all required fields.')
      return
    }

    const formData = {
      name,
      email,
      number,
      message,
    }

    try {
      const res = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatusMessage('Message sent successfully!')
        setName('')
        setEmail('')
        setNumber('')
        setMessage('')
      } else {
        setStatusMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatusMessage('An error occurred. Please try again later.')
    }
  }

  return (
    <div>
       <form className='bg-[#FDB626]/60 p-8 rounded-lg space-y-4 shadow-inner'
       onSubmit={handleSubmit}
       >
        <div className='form-control mb-3'>
          <label className='label' htmlFor='name'>
            <span className='label-text'>Full Name*</span>
          </label>
          <input
            id='name'
            type='text'
            placeholder='Your full name'
            className='input input-bordered w-full'
            value={name} 
            onChange={(e) => setName(e.target.value)}
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
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
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
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            id='message'
            className='textarea textarea-ghost w-full border-b-[1px] border-white'
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <ReCAPTCHA 
        sitekey={`${publicKey}`}
        />
        <div className='form-control'>
          <button 
          className='btn bg-base text-base hover:bg-base-100 w-[150px] shadow-lg hover:scale-105 font-manrope'
          type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      {statusMessage && (
        <div className="mt-4 text-center text-lg font-semibold">
          {statusMessage}
        </div>
      )}
    </div>
  )
}

