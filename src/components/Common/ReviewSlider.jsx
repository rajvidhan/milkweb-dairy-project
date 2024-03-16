import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import pic1 from "../../assets/Images/pic1.jpg";
import pic2 from "../../assets/Images/pic2.jpg";
import pic3 from "../../assets/Images/pic3.jpg";
import pic4 from "../../assets/Images/pic4.jpg";
import pic5 from "../../assets/Images/pic5.jpg";

import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
      >
        <SwiperSlide className="">
          <div className="p-2">
            <img className="rounded-lg w-fit h-[208px]" src={pic1} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="p-2">
            <img className="rounded-lg w-fit h-[208px]" src={pic2} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="p-2">
            <img className="rounded-lg w-fit h-[208px]" src={pic3} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="p-2">
            <img className="rounded-lg w-fit h-[208px]" src={pic4} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="p-2">
            <img className="rounded-lg w-fit h-[208px]" src={pic5} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
