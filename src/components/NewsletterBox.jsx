import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
    return (
        <div className='text-center  '>
            <p className=' text-gray-500 font-medium text-2xl '>Subscribe now & get 20% off</p>
            <p className=' text-gray-500 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa!</p>
            <form  onSubmit={onSubmitHandler} className=' flex w-full sm:w-1/2 items-center gap-3 mx-auto my-6  pl-3'>
                <input className=' w-full sm:flex-1   outline-none ' type="email" placeholder=' enter your email  ' required />
                <button className=' bg-black text-white px-10 py-4 text-xs'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterBox