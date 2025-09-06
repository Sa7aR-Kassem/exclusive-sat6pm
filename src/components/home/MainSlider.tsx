"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "@/assets/images/slider-image-1.jpeg";
import slide2 from "@/assets/images/slider-image-2.jpeg";
import slide3 from "@/assets/images/slider-image-3.jpeg";

const swiperOptions = {
  pagination: {
    clickable: true,
    bulletClass: "swiper-pagination-bullet !size-4 border-2",
    bulletActiveClass:
      "swiper-pagination-bullet-active !bg-red-500 border-white",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  modules: [Pagination, Autoplay],
};

const images = [
  {
    path: slide1.src,
    label: "Slide 1",
  },
  {
    path: slide2.src,
    label: "Slide 2",
  },
  {
    path: slide3.src,
    label: "Slide 3",
  },
];

export default function MainSlider() {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <Swiper className="main-slider" {...swiperOptions}>
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img.path}
                alt={img.label}
                width={1920}
                height={344}
                loading="lazy"
                className="w-full h-[21.5rem] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
