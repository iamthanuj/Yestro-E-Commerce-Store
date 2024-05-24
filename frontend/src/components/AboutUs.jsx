import React from "react";
import aboutimage from "../assets/about.jpg";
import CountUp from "react-countup";

function AboutUs() {
  return (
    <div className="container mx-auto px-5 flex justify-center gap-5 mt-20">
      <div className="flex flex-col gap-5 w-[492px] ">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-gray-500">
          we are a passionate team dedicated to bringing you the latest trends
          and timeless classics. Our carefully curated collection features a
          wide range of apparel and accessories designed to cater to every
          fashion-forward individual. At yestro, we believe that fashion should
          be accessible to everyone, which is why we offer high-quality pieces
          at competitive prices. Our commitment to customer satisfaction drives
          us to provide exceptional service, ensuring that your shopping
          experience is as enjoyable as the clothes you wear. Join us in
          celebrating individuality and expressing yourself through fashion, one
          outfit at a time.
        </p>
        <div className="flex gap-4">
          <div className="bg-creamy rounded-2xl p-3 flex flex-col justify-center items-center w-[150px]">
            <h3 className="text-3xl font-bold">{<CountUp end={2011} />}</h3>
            <p>Year of est.</p>
          </div>
          <div className="bg-creamy rounded-2xl p-3 flex flex-col justify-center items-center w-[150px]">
            <h3 className="text-3xl font-bold">{<CountUp end={880} />}</h3>
            <p>No of products</p>
          </div>
          <div className="bg-creamy rounded-2xl p-3 flex flex-col justify-center items-center w-[150px]">
            <h3 className="text-3xl font-bold">{<CountUp end={1200} />}</h3>
            <p>Employee count</p>
          </div>
        </div>
        <div>
          <button className="bg-black text-white px-5 py-2 rounded-3xl">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-[492px] rounded-3xl overflow-hidden">
        <img className="w-full h-full object-cover" src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
