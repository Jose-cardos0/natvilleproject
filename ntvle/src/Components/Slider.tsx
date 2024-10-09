//logos
import logoHeader from "../assets/logoHeader.svg";
import leitesPropaganda from "../assets/leitesPropaganda.svg";
import conhecaOsProdutos from "../assets/conhecaOsProdutos.svg";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export function Slider() {
  return (
    <div className="h-full w-full">
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={logoHeader} alt="Imagem 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={leitesPropaganda} alt="Imagem 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={conhecaOsProdutos} alt="Imagem 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
