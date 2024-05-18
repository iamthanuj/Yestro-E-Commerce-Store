import React from 'react'
import mainlogo from '../assets/yestro-logo.png'

function Navbar() {
  return (
    <div className='container px-5 flex items-center justify-between bg-bg-secondary   mx-auto h-[70px]'>
        {/* left nav */}
        <div className=''>
            <img className='h-[30px]' src={mainlogo} alt="" />
        </div>

        {/* mid nav */}
        <div className='flex gap-5'>
          <a href="">New & Featured</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">Sale</a>
        </div>

        {/* right nav */}
        <div>
          
        </div>
    </div>
  )
}

export default Navbar