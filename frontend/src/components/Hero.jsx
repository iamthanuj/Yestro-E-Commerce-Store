import React from "react";
import heroimage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <div className="mt-10 container mx-auto px-5 flex items-center gap-5 h-[400px] max-w-[1024px]">
      <div className="w-2/5 flex flex-col gap-5">
        <h1 className="text-5xl font-bold leading-snug">
          Find Your Favorite Clothing Collections
        </h1>
        <p>
          Style is a way who you are without having to speak. Wear what you are
          comfortable with.
        </p>
        <div>
          <button className="bg-black text-white px-5 py-2 rounded-3xl">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className=" h-full w-3/5">
        <img
          className="object-cover object-top w-full h-full rounded-3xl"
          src={heroimage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
