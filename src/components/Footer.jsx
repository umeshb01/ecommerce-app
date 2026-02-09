import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                  <h1 className=' text-3xl font-semi-bold text-gray-400 '>FOR <span className=' text-3xl font-bold text-teal-300 underline underline-offset-4 under  decoration-1'>EVER</span></h1>
                  <p className=' text-gray-700 w-full md:w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In totam dignissimos error animi expedita ratione consequatur illum doloremque. Ratione, numquam?</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className=' flex flex-col gap-1 text-gray-600' >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className=' flex flex-col gap-1 text-gray-700'>
                    <li>99999</li>
                    <li>contact@foreveryou@gmail.com</li>
                </ul>
            </div>
            <div className='col-span-full'>
                <hr />
                <p className=' py-5 text-center text-sm'>Copyright 2026@ forever.com-All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer