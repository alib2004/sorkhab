import "./TopSales.css";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Autoplay } from 'swiper/modules';
const TopSales = () => {
  return (
    <div className="bg-pink-700 py-10">
      <div className="container">
        <span className="special !bg-orange-500">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-white">
            پرفروش ترین
          </span>
          <a href="#" className="flex items-center text-lg text-white">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            800: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper mt-8"
        >
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative">
            <img
              src="/imgs/prod1.jpg"
              alt=""
              className="!trans block opacity-100 group-hover:hidden  group-hover:opacity-0"
            />
            <img
              src="/imgs/prod2.jpg"
              alt=""
              className="!trans hidden opacity-0 group-hover:block  group-hover:opacity-100"
            />
            <div className="flex flex-col py-5 gap-1">
              <a href="#" className="text-xs">
                آرایشی
              </a>
              <a
                href="#"
                className="text-md font-light hover:text-pink-600 trans"
              >
                کرم آبرسان
              </a>
              <span className="font-bold text-xl">200،000 تومان</span>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm font-thin">(از 17 نظر)</span>
              </div>
              <div className=" flex-col absolute left-3 top-3 gap-3 items-center hidden group-hover:flex">
                <a href="#">
                  <FaShoppingCart />
                </a>
                <a href="#">
                  <CiHeart size={"25px"} />
                </a>
                <a href="#">
                  <FaBalanceScale />
                </a>
              </div>
              <a
                href="#"
                className="absolute top-[25rem] lg:top-[13rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300 !sm:hidden"
              >
                مشاهده و خرید
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopSales;
