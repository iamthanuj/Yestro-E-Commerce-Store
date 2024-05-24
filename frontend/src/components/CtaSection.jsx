import React from "react";
import logo from "../assets/yestro-logo-white.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

function CtaSection() {
  return (
    <>
      <div className="w-full bg-bg-third py-10 mt-20">
        <div className="container px-5  max-w-[1024px] mx-auto flex justify-between items-center">
          <h1 className="text-2xl w-[300px]">
            Subscribe to our newsletter to get latest updates
          </h1>
          <div className="flex gap-4">
            <input
              className="border-2 border-gray-500 outline-none bg-transparent px-5 py-2 rounded-3xl w-[280px] text-xl placeholder-black"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="text-xl bg-black text-white px-8 py-2 rounded-3xl">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* bot cta section */}
      <div className="w-full bg-bg-fourth py-10">
        <div className="container mx-auto px-5 flex justify-between">
          <div className="w-[294px] flex flex-col gap-5">
            <img className="w-[200px]" src={logo} alt="" />
            <p className="text-gray-400">
              Our collection of wedding gowns offers a wide variety of styles
              that caters to unique tastes, from classical to couture, rounding
              out the look with a choice in beautiful wedding veils and
              accessories.
            </p>
            <div className="flex justify-start items-center gap-3">
              <a
                className="border-2 border-white text-white text-[20px] p-2 rounded-full"
                href=""
              >
                {<FaYoutube />}
              </a>
              <a
                className="border-2 border-white text-white text-[20px] p-2 rounded-full"
                href=""
              >
                {<FaFacebookF />}
              </a>
              <a
                className="border-2 border-white text-white text-[20px] p-2 rounded-full"
                href=""
              >
                {<FaInstagram />}
              </a>
              <a
                className="border-2 border-white text-white text-[20px] p-2 rounded-full"
                href=""
              >
                {<FaXTwitter />}
              </a>
            </div>
          </div>

          <div className=" flex flex-col gap-5">
            <h2 className="text-white text-2xl uppercase">Services</h2>
            <div className="text-white flex flex-col gap-2">
              <p>Sample Development</p>
              <p>24/7 Customer Support</p>
              <p>Secure Payment Option</p>
              <p>Fast and Reliable Shipping</p>
              <p>Size and Fit Assistance</p>
              <p>Style Inspiration</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-white text-2xl uppercase">How does it work</h2>
            <div className="text-white flex flex-col gap-2">
              <p>Portfolio</p>
              <p>Customer Reviews</p>
              <p>About Us</p>
              <p>Blog</p>
              <p>FAQ</p>
              <p>Clothes Manufacture</p>
            </div>
          </div>

          <div className="` flex flex-col gap-5">
            <h2 className="text-white text-2xl uppercase">Contact Us</h2>
            <div className="text-white flex flex-col gap-2">
              <p>+94 767 596 551</p>
              <p>contact@yestro.com</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CtaSection;
