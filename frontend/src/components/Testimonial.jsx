import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Feedback from "./Feedback";

function Testimonial() {
  return (
    <div className="container mx-auto px-5 mt-20 rounded-lg overflow-hidden">
      <h2 className="text-4xl text-center font-bold">
        Real Customer Experiences
      </h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 rounded-lg overflow-hidden"
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
