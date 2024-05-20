import React from "react";
import cateimage from "../assets/hoodie.jpg";

function Categories() {
  return (
    <div className="container mx-auto mt-20 px-5">
      <h1 className="text-center text-5xl font-bold">Product Categories</h1>
      <div className="grid grid-cols-3 gap-3 max-w-[924px] mx-auto">
        <div className="relative h-[300px] bg-black rounded-3xl overflow-hidden">
          <img className="object-contain" src={cateimage} alt="" />
          <div className="absolute z-0 bottom-0 h-full w-full bg-gradient-to-t from-black opacity-75"></div>
        </div>
        <div className="relative h-[300px] bg-black rounded-3xl overflow-hidden">
          <div className="relative transition delay-75 duration-300 ease-in-out hover:scale-125">
            <img
              className="object-contain h-full w-full"
              src={cateimage}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-75"></div>
          </div>
        </div>

        <div className="h-[300px] bg-black rounded-3xl overflow-hidden">
          <img className="object-contain" src={cateimage} alt="" />
        </div>
        <div className="h-[300px] bg-black rounded-3xl overflow-hidden">
          <img className="object-contain" src={cateimage} alt="" />
        </div>
        <div className="h-[300px] bg-black rounded-3xl overflow-hidden">
          <img className="object-contain" src={cateimage} alt="" />
        </div>
        <div className="h-[300px] bg-black rounded-3xl overflow-hidden">
          <img className="object-contain" src={cateimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Categories;
