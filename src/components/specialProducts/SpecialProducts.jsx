import { Swiper, SwiperSlide } from 'swiper/react';
import './SpecialProducts.css'
import 'swiper/css';
import { FaStar } from "react-icons/fa";
const SpecialProducts = () => {
    return (
        <div className='bg-[url(/imgs/bg-1.jpg)] font-primary py-10'>
            <div className="container">
            <span className='special'>ویژه</span><br />
            <span className='pt-4 text-4xl block font-bold'>شگفت انگیزها</span>
            <Swiper
        slidesPerView={1}
        breakpoints={{
            800:{
                slidesPerView:4
            }
        }}
        spaceBetween={30}
        className="mySwiper mt-8"
      >
        <SwiperSlide className='border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col '>
            <img src="/imgs/prod-1.jpg" alt="" />
            <div className="flex flex-col py-5 gap-1">
                <a href='#' className='text-xs'>آرایشی</a>
                <a href='#' className='text-md font-light hover:text-pink-600 trans'>کرم آبرسان</a>
                <span className='font-bold text-xl'>200،000 تومان</span>
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className='text-sm font-thin'>(از 17 نظر)</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col '>
            <img src="/imgs/prod-1.jpg" alt="" />
            <div className="flex flex-col py-5 gap-1">
                <a href='#' className='text-xs'>آرایشی</a>
                <a href='#' className='text-md font-light hover:text-pink-600 trans'>کرم آبرسان</a>
                <span className='font-bold text-xl'>200،000 تومان</span>
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className='text-sm font-thin'>(از 17 نظر)</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col '>
            <img src="/imgs/prod-1.jpg" alt="" />
            <div className="flex flex-col py-5 gap-1">
                <a href='#' className='text-xs'>آرایشی</a>
                <a href='#' className='text-md font-light hover:text-pink-600 trans'>کرم آبرسان</a>
                <span className='font-bold text-xl'>200،000 تومان</span>
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className='text-sm font-thin'>(از 17 نظر)</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col '>
            <img src="/imgs/prod-1.jpg" alt="" />
            <div className="flex flex-col py-5 gap-1">
                <a href='#' className='text-xs'>آرایشی</a>
                <a href='#' className='text-md font-light hover:text-pink-600 trans'>کرم آبرسان</a>
                <span className='font-bold text-xl'>200،000 تومان</span>
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className='text-sm font-thin'>(از 17 نظر)</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col '>
            <img src="/imgs/prod-1.jpg" alt="" />
            <div className="flex flex-col py-5 gap-1">
                <a href='#' className='text-xs'>آرایشی</a>
                <a href='#' className='text-md font-light hover:text-pink-600 trans'>کرم آبرسان</a>
                <span className='font-bold text-xl'>200،000 تومان</span>
                <div className="flex items-center gap-3">
                    <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className='text-sm font-thin'>(از 17 نظر)</span>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

export default SpecialProducts;