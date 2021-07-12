import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import banner1 from "../../img/floor-1256804_1280.jpg";
import banner2 from "../../img/cafe-1869656_1280.jpg";
import banner3 from "../../img/coffee-918926_1280.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SwiperSlider: React.FC = () => {
  const items = [
    {
      id: 1,
      url: banner1
    },
    {
      id: 2,
      url: banner2
    },
    {
      id: 3,
      url: banner3
    }
  ];

  return (
    <React.Fragment>
      <Swiper
        id="main"
        style={{ height: "100%" }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
        centeredSlides={true}
      >
        {items.map(item => {
          return (
            <SwiperSlide>
              <img src={item.url} alt={`Slide ${item.id}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default SwiperSlider;
