import React from "react";
import { FaArrowRight } from "react-icons/fa";

function BestProductCard({ span, size, img}) {
  return (
    <div
      className={`relative w-full h-[300px] rounded-3xl overflow-hidden ${span} `}
    >
      <img
        className={`object-cover rounded-3xl`}
        src={img}
        alt=""
      />
      <div className="absolute z-10  w-full bottom-[20px] flex justify-between items-center px-5 ">
        <div>
          <h1 className="text-white">Retro Sneakers</h1>
          <p className="text-white">All Sizes</p>
        </div>
        <div className="h-full flex justify-center items-center ">
          <button className="bg-white  text-black font-bold px-5 py-3 rounded-full">
            View Page
          </button>
          <span className="bg-black  h-full rounded-full p-4 flex justify-center items-center ml-[-10px]">
            <FaArrowRight className="text-white " />
          </span>
        </div>
      </div>
      <div className="absolute z-0 bottom-0 h-full w-full bg-gradient-to-t from-black opacity-75">

      </div>
    </div>
  );
}

export default BestProductCard;
