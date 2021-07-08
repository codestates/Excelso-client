import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SwiperSlider: React.FC = () => {
  const banner1 =
    "https://pixabay.com/get/geaac6066ecbde7e321720813d43bb0466b61dd6e75fee975e496b29cb040cc8a908a7f9a58efd4bc3f0b86ecf7cda1ba_1280.jpg?attachment=";
  const banner2 =
    "https://pixabay.com/get/g22b8c8672f752d08d99af677232991e51a7421c4e5b02da5639672f1428e6c69c04c0c9609101f9fb53957180920a5f6_1280.jpg?attachment=";
  const banner3 =
    "https://pixabay.com/get/g2cd247233289d02c01bd07fef75e734d63298ca78a1a4f02cb3d8d464c2070e5a7394ff86bfcaf49b5de416ec8c2c275_1280.jpg?attachment=";

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
