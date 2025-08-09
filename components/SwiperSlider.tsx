"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

interface SwiperSliderProps {
  techs: { icon: any; label: string }[];
}

const SwiperSlider = ({ techs }: SwiperSliderProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={5}
      spaceBetween={15}
      loopedSlides={2}
      centeredSlides={true}
      loop={true}
      initialSlide={0}
      grabCursor={true}
      freeMode={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="bg-background/90 w-[300px] h-[49px] my-2"
    >
      {techs.map((tech: any) => (
        <SwiperSlide
          key={uuidv4()}
          className=" p-[2px] bg-white w-4 h-4 rounded-md"
        >
          {tech.icon}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
