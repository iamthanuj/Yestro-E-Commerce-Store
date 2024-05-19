import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BestProductCard from "./BestProductCard";
import hoodieimage from "../assets/hoodie.jpg";
import sneakerimage from "../assets/sneaker.jpg";

function BestProducts() {
  return (
    <div className="container mx-auto mt-20 px-5">
      <h1 className="text-center text-5xl font-bold">Our Best Products</h1>
      <div className="grid grid-cols-2 gap-3  mt-10">
        {/* <BestProductCard span={""} img={hoodieimage} />
        <BestProductCard span={"row-span-2"} size={"h-full"} img={sneakerimage} />
        <BestProductCard span={""} img={sneakerimage} /> */}

        <div
          className={`relative w-full h-[300px] rounded-3xl overflow-hidden `}
        >
          <img
            className={`object-cover object-top rounded-3xl`}
            src={hoodieimage}
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
          <div className="absolute z-0 bottom-0 h-full w-full bg-gradient-to-t from-black opacity-75"></div>
        </div>

        <div
          className={`relative w-full rounded-3xl overflow-hidden row-span-2 `}
        >
          <img
            className={`object-cover object-top h-[613px] w-full rounded-3xl`}
            src={hoodieimage}
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
          <div className="absolute z-0 bottom-0 h-full w-full bg-gradient-to-t from-black opacity-75"></div>
        </div>

        <div
          className={`relative w-full h-[300px] rounded-3xl overflow-hidden `}
        >
          <img
            className={`object-cover object-bottom   rounded-3xl`}
            src={sneakerimage}
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
          <div className="absolute z-0 bottom-0 h-full w-full bg-gradient-to-t from-black opacity-75"></div>
        </div>
      </div>
    </div>
  );
}

export default BestProducts;
