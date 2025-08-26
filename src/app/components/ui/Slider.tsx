"use client"; // only needed in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Card from "./Card";
import { services } from "@/data/services";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 relative">
      {/* Swiper Carousel */}
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          420: { slidesPerView: 1 },
          600: { slidesPerView: 2 }, // mobile
          768: { slidesPerView: 3 }, // tablet
          1024: { slidesPerView: 4 }, // desktop
        }}
        // extra bottom padding for dots
      >
        {services.map(({ imgUrl, title, description }, i) => (
          <SwiperSlide key={i} className="!h-auto mb-13">
            {/* <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center"> */}
            <Card imgUrl={imgUrl} title={title} description={description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
