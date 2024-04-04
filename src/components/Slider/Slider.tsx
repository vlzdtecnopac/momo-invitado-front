import { Swiper, SwiperSlide } from "swiper/react";
import ComplementCard from "../ComplementCard/ComplementCard";
import "swiper/css";
import "./Slider.scss";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          240: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          350: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <ComplementCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComplementCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComplementCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComplementCard />
        </SwiperSlide>
        <SwiperSlide>
          <ComplementCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
