import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { useState,useEffect } from "react";
const BlogsHome = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <div className="bg-white py-10">
      <div className="container">
        <span className="special !bg-orange-500">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-black">وبلاگ</span>
          <a href="#" className="flex items-center text-lg text-black">
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
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={isMobile ? { clickable: true } : false}
          modules={[Autoplay, Pagination]}
          className="mySwiper mt-8"
        >
          <SwiperSlide className="border-2 border-gray-200 !bg-orange-100 rounded-xl overflow-hidden flex flex-col">
            <img src="/imgs/blogs/person1.jpg" alt="" className="" />
            <div className="flex flex-col py-5 gap-2">
              <div className="flex justify-center items-center text-sm gap-1">
                <span>
                  نویسنده :
                  <a href="#" className="text-black font-bold">
                    {" "}
                    علی بیغوله{" "}
                  </a>
                </span>
                <span className="border-r border-gray-300 px-1">1 نظر</span>
              </div>
              <a
                href="#"
                className="text-base font-bold hover:text-pink-600 trans"
              >
                راهنمای ست کردن هودی های پاییزه
              </a>
              <a
                href="#"
                className="mt-2 font-bold flex gap-1 items-center justify-center text-sm text-pink-800 border-b-2 border-transparent hover:border-pink-500 w-[60px] m-auto pb-2 trans transition duration-300"
              >
                بیشتر
                <MdKeyboardDoubleArrowLeft />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 !bg-orange-100 rounded-xl overflow-hidden flex flex-col">
            <img src="/imgs/blogs/person2.jpg" alt="" className="" />
            <div className="flex flex-col py-5 gap-2">
              <div className="flex justify-center items-center text-sm gap-1">
                <span>
                  نویسنده :
                  <a href="#" className="text-black font-bold">
                    {" "}
                    علی بیغوله{" "}
                  </a>
                </span>
                <span className="border-r border-gray-300 px-1">1 نظر</span>
              </div>
              <a
                href="#"
                className="text-base font-bold hover:text-pink-600 trans"
              >
                انتخاب لباس ساحلی مناسب بچه ها
              </a>
              <a
                href="#"
                className="mt-2 font-bold flex gap-1 items-center justify-center text-sm text-pink-800 border-b-2 border-transparent hover:border-pink-500 w-[60px] m-auto pb-2 trans transition duration-300"
              >
                بیشتر
                <MdKeyboardDoubleArrowLeft />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 !bg-orange-100 rounded-xl overflow-hidden flex flex-col">
            <img src="/imgs/blogs/person3.jpg" alt="" className="" />
            <div className="flex flex-col py-5 gap-2">
              <div className="flex justify-center items-center text-sm gap-1">
                <span>
                  نویسنده :
                  <a href="#" className="text-black font-bold">
                    {" "}
                    علی بیغوله{" "}
                  </a>
                </span>
                <span className="border-r border-gray-300 px-1">1 نظر</span>
              </div>
              <a
                href="#"
                className="text-base font-bold hover:text-pink-600 trans"
              >
                نحوه صحیح انتخاب رژگونه شیگلم برای کودکان
              </a>
              <a
                href="#"
                className="mt-2 font-bold flex gap-1 items-center justify-center text-sm text-pink-800 border-b-2 border-transparent hover:border-pink-500 w-[60px] m-auto pb-2 trans transition duration-300"
              >
                بیشتر
                <MdKeyboardDoubleArrowLeft />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-2 border-gray-200 !bg-orange-100 rounded-xl overflow-hidden flex flex-col">
            <img src="/imgs/blogs/person4.jpg" alt="" className="" />
            <div className="flex flex-col py-5 gap-2">
              <div className="flex justify-center items-center text-sm gap-1">
                <span>
                  نویسنده :
                  <a href="#" className="text-black font-bold">
                    {" "}
                    علی بیغوله{" "}
                  </a>
                </span>
                <span className="border-r border-gray-300 px-1">1 نظر</span>
              </div>
              <a
                href="#"
                className="text-base font-bold hover:text-pink-600 trans"
              >
                همه چیز در مورد ست با رنگهای نود
              </a>
              <a
                href="#"
                className="mt-2 font-bold flex gap-1 items-center justify-center text-sm text-pink-800 border-b-2 border-transparent hover:border-pink-500 w-[60px] m-auto pb-2 trans transition duration-300"
              >
                بیشتر
                <MdKeyboardDoubleArrowLeft />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsHome;
