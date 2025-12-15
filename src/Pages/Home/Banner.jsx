import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerIMG from "./BannerIMG";
import BannerIMG2 from "./BannerIMG2";
import BannerIMG3 from "./BannerIMG3";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          <BannerIMG></BannerIMG>
        </SwiperSlide>

        <SwiperSlide>
          <BannerIMG2></BannerIMG2>
        </SwiperSlide>

        <SwiperSlide>
          <BannerIMG3></BannerIMG3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
