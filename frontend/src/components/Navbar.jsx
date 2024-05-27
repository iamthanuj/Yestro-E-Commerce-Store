import React from "react";
import mainlogo from "../assets/yestro-logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="container relative px-5 flex items-center justify-between   mx-auto h-[70px]">
      {/* left nav */}
      <div className="">
        <img className="h-[30px]" src={mainlogo} alt="" />
      </div>

      {/* mid nav */}
      <div className="flex gap-10 ">
        <a href="" className="relative group">
          <span>Featured & News</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </a>
        <a href="" className="relative group">
          <span>Men</span>
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </a>
        <a href="" className="relative group">
          Women
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </a>
        <a href="" className="relative group">
          Kids
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </a>
        <a href="" className="relative group">
          Sale
          <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
        </a>
      </div>

      {/* right nav */}
      <div>
        <div className="flex items-center gap-1 bg-bg-secondary py-1 px-2 rounded-xl">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Search"
            className="bg-bg-secondary placeholder-black outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
