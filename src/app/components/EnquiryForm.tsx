import React from 'react'

export default function EnquiryForm() {
  return (
    <div className="dropdown dropdown-end relative">
    <label tabIndex={0} className="btn bg-[#FDB626] text-white hover:bg-[#e09c1f]">
      Free Measure and Quote
    </label>
    <div
      tabIndex={0}
      className=" flex flex-row dropdown-content card card-compact bg-white text-primary-content z-[1] w-[88vw] h-[600px] shadow-xl rounded-lg"
    >
   
   <div className="w-1/3 text-black px-4 pt-6 items-center">
      <h1 className="text-xl font-bold mb-6 text-center">
        The road to comfortable outdoor living starts here, we just need a few
        details.
      </h1>
      <h2 className="mb-2 font-medium">Call us directly:</h2>
      <p className="mb-4 text-gray-700">047589365639</p>
      <h2 className="mb-2 font-medium">Email:</h2>
      <p className="mb-4 text-gray-700">info@suncoastpatios.co.nz</p>
    </div>

           <form className="w-2/3 bg-[#FDB626]/60 p-8 shadow-inner rounded-tr-lg rounded-br-lg">
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Full Name*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Phone Number*</span>
          </label>
          <input
            type="tel"
            placeholder="Your phone number"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Optional Message</span>
          </label>
          <textarea
            placeholder="Your message here"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        
        <div className="form-control">
          <button className="btn bg-white text-[#FDB626] hover:bg-[#e09c1f] w-[150px]">Submit</button>
        </div>
      </form>
    </div>
  </div>  
  )
}