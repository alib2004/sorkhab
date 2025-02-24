import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Slider.css";
const Slider1 = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="relative font-primary z-0">
        <img src="/imgs/slider1.jpg" />
        <span className="absolute top-32 right-80 text-6xl font-bold text-pink-600">
          فصل بهار
        </span>
        <span className="absolute top-60 right-80 text-xl font-medium">تا 50% تخفیف به علاوه ارسال رایگان</span>
        <span className="absolute top-72 right-80 text-xl font-medium">بر روی تمام سفارش های بالای 300 هزار تومان</span>
        <button className="flex items-center gap-1 absolute top-[22rem] right-80 bg-pink-600 text-white py-4 px-6 rounded-xl cursor-pointer hover:bg-orange-300 trans hover:text-black">
        مشاهده و انتخاب
        <MdKeyboardDoubleArrowLeft />
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/imgs/slider2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/imgs/slider3.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider1;
