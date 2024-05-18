import React from 'react'
import mainlogo from '../assets/yestro-logo.png'
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='container px-5 flex items-center justify-between   mx-auto h-[70px]'>
        {/* left nav */}
        <div className=''>
            <img className='h-[30px]' src={mainlogo} alt="" />
        </div>

        {/* mid nav */}
        <div className='flex gap-10 '>
          <a href="">New & Featured</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">Sale</a>
        </div>

        {/* right nav */}
        <div>
          <div className='flex items-center gap-1 bg-bg-secondary py-1 px-2 rounded-xl'>
            <FaMagnifyingGlass/>
            <input type='text' placeholder='Search' className='bg-bg-secondary placeholder-black outline-none' />
          </div>
        </div>
    </div>
  )
}

export default Navbar