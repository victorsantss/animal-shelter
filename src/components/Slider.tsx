"use client";

import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PetMedia {
  media: {
    title: string;
    url: string;
  }[];
}

export function Slider({ media }: PetMedia) {
  const slidesPerView = media.length > 1 ? 1.4 : 1;

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={slidesPerView}
    >
      {media.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            width="1000"
            height="1000"
            src={item.url}
            alt={item.title}
            className="aspect-square overflow-hidden rounded-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}