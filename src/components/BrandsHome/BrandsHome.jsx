import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Autoplay } from "swiper/modules";
import "./BrandsHome.css";
const BrandsHome = () => {
  return (
    <div className="py-10">
      <div className="container">
        <span className="special !bg-orange-500">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-black">
            برندهای ما
          </span>
          <a href="#" className="flex items-center text-lg text-black">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            800: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper mt-8"
        >
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/1.png" className="img-banner p-5" />
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/1.png" className="img-banner p-5" />
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/2.png" className="img-banner p-5" />
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/3.png" className="img-banner p-5" />
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/4.png" className="img-banner p-5" />
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/5.png" className="img-banner p-5" />
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img src="/imgs/brands/6.png" className="img-banner p-5" />
          </SwiperSlide>
        </Swiper>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-center mt-24">
          <img src="/imgs/baner1.jpg" alt="" className="w-full rounded-md" />
          <img src="/imgs/baner2.jpg" alt="" className="w-full rounded-md" />
          <img src="/imgs/baner3.jpg" alt="" className="w-full rounded-md" />
          <img src="/imgs/baner4.jpg" alt="" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default BrandsHome;
