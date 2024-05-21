import React from 'react'
import cateimage from "../assets/hoodie.jpg";

function CategoryCard() {
  return (
    <div className="relative h-[300px] bg-black rounded-3xl overflow-hidden cursor-pointer">
          <div className="relative h-full w-full transition delay-75 duration-300 ease-in-out hover:scale-125">
            <img
              className="object-contain "
              src={cateimage}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-65"></div>
          </div>
          <h1 className="absolute z-10 bottom-[20px] left-1/2 transform -translate-x-1/2  text-3xl text-white">Hoodies</h1>
        </div>
  )
}

export default CategoryCard