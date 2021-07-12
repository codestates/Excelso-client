import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import img1 from "../../img/cake-1589012_1280.jpg";
import img2 from "../../img/coffee-3759005_1920.jpg";
import img3 from "../../img/coffee-4597416_1920.jpg";
import img4 from "../../img/restaurant-4011989_1920.jpg";
import img5 from "../../img/table-2600954_1920.jpg";

SwiperCore.use([Autoplay]);
const Sns: React.FC = () => {
  const slides = [];
  const images = [img1, img2, img3, img4, img5];

  for (let i = 1; i <= 5; i++) {
    slides.push(
      <SwiperSlide key={`Slide ${i}`}>
        <img src={images[i - 1]} alt="" />
      </SwiperSlide>
    );
  }

  console.log(slides);
  return (
    <React.Fragment>
      <Swiper
        id="mainSns"
        tag="section"
        wrapperTag="ul"
        style={{ height: "100%" }}
        spaceBetween={2}
        slidesPerView={3}
        autoplay={true}
        pagination={false}
        loop={true}
        centeredSlides={true}
      >
        {slides.map(slide => {
          return slide;
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default Sns;
