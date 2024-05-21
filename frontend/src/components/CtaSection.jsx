import React from "react";

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


    </>
  );
}

export default CtaSection;
