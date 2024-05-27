import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import hoodieimage from "../assets/hoodie.jpg";
import sneakerimage from "../assets/sneaker.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function BestProducts() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-20 px-5 max-w-[1024px]">
      <h1 className="text-center text-5xl font-bold">Our Best Products</h1>
      <div className="grid grid-cols-2 gap-3  mt-10">
        <div
          data-aos="fade-right"
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
          data-aos="fade-left"
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
          data-aos="fade-right"
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
