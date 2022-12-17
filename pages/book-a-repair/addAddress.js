import React from 'react'
import BookRepairLayout from '../../components/Layout/BookRepairLayout';

const addAddress = () => {
  return (
    <>
        <h2 className="font-extrabold text-4xl text-[#00000099] mb-8">Add New Address</h2>
        <div className="form_group">
            <div className="grid grid-cols-12 gap-4 mb-8 traplace">
                <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Name' /></div>
                <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Mobile Number' /></div>
                <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Alternate Phone Number (optional)' /></div>
                <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Pincode' /></div>
                <div className="col-span-12"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='House NO. Apartment Name' /></div>
                <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Road, Area, Locality ' /></div>
                <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Landmark (Optional)' /></div>
            </div>
            <button
              className="brand-btn"
              // onClick={handleContinue}
              type="submit"
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
        </div>
    </>
  )
}
export default addAddress

addAddress.getLayout = function (page) {
  return <BookRepairLayout>{page}</BookRepairLayout>;
};