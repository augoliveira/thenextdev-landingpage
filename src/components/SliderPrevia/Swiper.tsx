"use client";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { ReactNode } from "react";

export type TSwiper = Omit<SwiperProps, "children"> & { children: ReactNode[] };

export default function MySwiper({ id, children, ...props }: TSwiper) {
  return (
    <Swiper
      modules={[Autoplay, Grid, Navigation, Pagination]}
      className="h-full max-h-full min-h-0 w-full min-w-0 max-w-full"
      {...props}
    >
      {children.map((child, i) => (
        <SwiperSlide
          key={i}
          className="h-full max-h-full min-h-0 w-full min-w-0 max-w-full"
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
