"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const swiperOptions = {
  modules: [FreeMode, Thumbs],
};

export default function ProductSlider({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSliderOptions = {
    thumbs: { swiper: thumbsSwiper },
    ...swiperOptions,
  };

  const thumbnailSliderOptions = {
    onSwiper: setThumbsSwiper,
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical" as const,
    ...swiperOptions,
  };
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      <div className="lg:col-span-1 h-[37.5rem]">
        <Swiper
          className="details-thumbs-slider h-full"
          {...thumbnailSliderOptions}>
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`${img}-${idx}`}
                width={500}
                height={500}
                className="mx-auto w-full h-[8.625rem] object-contain bg-gray-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:col-span-3">
        <Swiper className="details-slider" {...mainSliderOptions}>
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`${img}-${idx}`}
                width={500}
                height={500}
                className="mx-auto w-full h-[37.5rem] object-contain bg-gray-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
