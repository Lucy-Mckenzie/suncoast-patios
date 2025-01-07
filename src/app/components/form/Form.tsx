'use client'
import React, { useRef, useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

export default function Form() {
  const ref = useRef<HTMLFormElement>(null)
  const captchaRef = useRef<HCaptcha | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const onCaptchaChange = (token: string) => setCaptchaToken(token)
  const onCaptchaExpire = () => setCaptchaToken(null)

  const resetForm = () => {
    setName('')
    setEmail('')
    setNumber('')
    setMessage('')
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!captchaToken) {
      setStatusMessage('Please complete the captcha.')
      return
    }

    if (!name || !email || !number) {
      setStatusMessage('Please fill out all required fields.')
      return
    }

    const formData = {
      name,
      email,
      message,
      number,
      captcha: captchaToken
    }

    try {
      const response = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      const result = await response.json()
  
      if (response.ok) {
        setStatusMessage('Form submitted successfully!')
      } else {
        setStatusMessage(result.error || 'An error occurred.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatusMessage('Failed to submit the form.')
    }

    resetForm()
}


  return (
    <div>
       <form ref={ref} className='bg-[#FDB626]/60 p-8 rounded-lg space-y-4 shadow-inner'
       onSubmit={handleSubmit}
       >
        <div className='form-control mb-3'>
          <label className='label' htmlFor='name'>
            <span className='label-text'>
              Full Name*
              </span>
          </label>
          <input
            id='name'
            type='text'
            placeholder='Your full name'
            className='input input-bordered w-full'
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
            aria-required='true'
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label' htmlFor='email'>
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
            aria-required='true'
          />
        </div>

        <div className='form-control mb-3'>
          <label className='label' htmlFor='number'>
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
            aria-required='true'
          />
        </div>
        <div className='form-control mb-3'>
          <label className='label' htmlFor='message'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            id='message'
            className='textarea textarea-ghost w-full border-b-[1px] border-white'
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className='form-control mb-3'>
        <HCaptcha
        sitekey='639e7b42-77c4-4168-8208-0d7af4a22fea'
        onVerify={onCaptchaChange}
        ref={captchaRef}
        onExpire={onCaptchaExpire}
      />
        </div>
        <div className='form-control'>
          <button 
          className='btn bg-base text-base hover:bg-base-100 w-[150px] shadow-lg hover:scale-105 font-manrope'
          type='submit'
          aria-label='Submit Form'
          >
            Submit
          </button>
        </div>
      </form>
      {statusMessage && (
        <div 
        className='mt-4 text-center text-lg font-semibold'
        role='alert'
        aria-live='polite'
        >
          {statusMessage}
        </div>
      )}
    </div>
  )
}

