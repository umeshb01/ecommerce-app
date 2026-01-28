import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchIcon } from 'lucide-react'
import { User } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
// import { assets } from '../assets/assets'
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center py-6 font-medium'>
      <div>
        <h1 className=' text-3xl font-semi-bold text-gray-400 '>FOR <span className=' text-3xl font-bold text-teal-300 underline underline-offset-4 under  decoration-1'>EVER</span></h1>
      </div>
      <ul className=' hidden sm:flex gap-3 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className=' w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className=' w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/ about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className=' w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className=' w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>
      <div className=' flex items-center gap-6'>
        <div>
          <SearchIcon className=' w-5 h-5' />

        </div>
        <div className=' relative group'>
          <User className='w-5 h-5 cursor-pointer'/>
          <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className=' flex flex-col gap-2 w-36 py-3 px-6 bg-slate-100 text-gray-500 rounded'>
              <p className=' cursor-pointer hover:text-black'>My Profile</p>
              <p className=' cursor-pointer hover:text-black'>Orders</p>
              <p className=' cursor-pointer hover:text-black'>LogOut</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar
