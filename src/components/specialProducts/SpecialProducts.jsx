import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./SpecialProducts.css";
import "swiper/css";
import { products } from "../../products";
import { Link } from "react-router-dom";
const SpecialProducts = () => {
  const topsaleProduct = products.filter((prod) => prod.discountPrice);
  const sliceProducts = topsaleProduct.slice(0, 8);
  return (
    <div className="bg-[url(/imgs/bg-1.jpg)] font-primary py-10">
      <div className="container">
        <span className="special">ویژه</span>
        <br />
        <span className="pt-4 text-4xl block font-bold">شگفت انگیزها</span>
        <Swiper
          slidesPerView={2}
          breakpoints={{
            800: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          className="mySwiper mt-8"
          data-aos="zoom-in"
        >
          {sliceProducts.map((product) => (
              <SwiperSlide className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col group relative"  key={product.code}>
                <img src="/imgs/prod1.jpg" alt="" className="" />
                <div className="flex flex-col py-5 gap-1">
                  <span className="text-xs">
                    {product.category}
                  </span>
                  <Link
                    to={`product/${product.url}`}
                    className="text-md font-light hover:text-pink-600 trans"
                  >
                    {product.name}
                  </Link>
                  <span className="font-bold text-md text-red-600 relative before:absolute before:w-2/3 before:h-0.5 before:bg-pink-500 before:top-3 before:right-1/6 before:-rotate-12">
                    {product.price.toLocaleString()} تومان
                  </span>
                  <span className="font-bold text-xl">
                    {product.discountPrice.toLocaleString()} تومان
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex text-yellow-500" dir="ltr">
                      {[...Array(5)].map((_, i) => {
                        const rating = product.rating.score; // عدد امتیاز
                        if (rating >= i + 1) {
                          return <FaStar key={i} />; // پر
                        } else if (rating >= i + 0.5) {
                          return <FaStarHalfAlt key={i} />; // نیمه
                        } else {
                          return <FaRegStar key={i} />; // خالی
                        }
                      })}
                    </div>
                    <span className="text-sm font-thin">
                      (از {product.rating.votes} نظر)
                    </span>
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialProducts;
