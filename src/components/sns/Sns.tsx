import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import img1 from "../../img/cake-1589012_1280.jpg";
import img2 from "../../img/coffee-3759005_1920.jpg";
import img3 from "../../img/coffee-4597416_1920.jpg";
import img4 from "../../img/restaurant-4011989_1920.jpg";
import img5 from "../../img/table-2600954_1920.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SwiperSlider: React.FC = () => {
  const slides = [];
  const images = [img1, img2, img3, img4, img5];

  for (let i = 1; i <= 5; i++) {
    slides.push(
      <SwiperSlide key={`Slide ${i}`}>
        <img src={images[i - 1]} alt="" />
      </SwiperSlide>
    );
  }
  return (
    <React.Fragment>
      <Swiper
        id="main"
        style={{ height: "100%" }}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
        centeredSlides={true}
      >
        {slides.map(slide => {
          return slide;
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default SwiperSlider;
