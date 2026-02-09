import React from 'react'
import { ArrowLeftRight,Headset,RotateCcw } from 'lucide-react'

const OurPolicy = () => {
  return (
    <div className=' flex flex-col sm:flex-row  text-center  justify-around gap-6 sm:gap-1 py-8'>
        <div>
            <ArrowLeftRight className=' w-12 m-auto'/>
            <p className='  font-semibold'>Easy Exchange Policy</p>
            <p className=' text-gray-700'>We Offer hassle free exchange policy</p>
        </div>
          <div>
            < RotateCcw className=' w-12 m-auto'/>
            <p className='  font-semibold'>7 Days Return Policy</p>
            <p className=' text-gray-700'>We Provide 7 Days Free Return Policy</p>
        </div>
          <div>
            <Headset className=' w-12 m-auto'/>
            <p className='  font-semibold'>Best Customer Support </p>
            <p className=' text-gray-700'>We Provide 24/7 customer support</p>
        </div>



    </div>
  )
}

export default OurPolicy