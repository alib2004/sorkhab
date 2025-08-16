import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { products } from "../../products";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const TopsalesHomeLast = () => {
  const prods = products.slice(0,6)
  return (
    <div className=" bg-[#F4BF96] py-10">
      <div className="container">
        <span className="special">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-black">
            دسته های برتر
          </span>
          <a href="#" className="flex items-center text-lg text-black">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 gap-5">
          <div className="col-span-12 lg:col-span-4 relative">
            <img src="/imgs/g-3.png" alt="" className="h-full object-cover rounded-2xl" />
            <span className="absolute bottom-56 right-5 text-white text-sm">رویداد ویژه</span>
            <span className="absolute bottom-44 right-5 text-white text-3xl font-bold">فروش میان فصل</span>
            <span className="absolute bottom-32 right-5 text-white text-xl">تا 20% تخفیف</span>
            <a href="#" className="absolute bottom-5 right-5 flex border items-center gap-1 border-white text-white py-3 px-5 rounded-xl hover:text-pink-500 hover:bg-white transition duration-300">
                مشاهده و انتخاب
                <MdKeyboardDoubleArrowLeft/>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {prods.map((product) =>
                      <div
                      className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col"
                      key={product.code}
                    >
                      <img src="/imgs/prod1.jpg" alt="" className="" />
                      <div className="flex flex-col py-5 gap-1 bg-white items-center min-h-[170px]">
                        <span className="text-xs">{product.category}</span>
                        <Link
                          to="#"
                          className="text-lg font-medium hover:text-pink-600 trans"
                        >
                          {product.name}
                        </Link>
                        <span
                          className={`font-bold text-lg ${
                            product.discountPrice &&
                            "text-sm text-red-600 relative before:absolute before:w-2/3 before:h-0.5 before:bg-pink-500 before:top-3 before:right-1/6 before:-rotate-12"
                          }`}
                        >
                          {product.price.toLocaleString()} تومان
                        </span>
                        {product.discountPrice && (
                          <span className="font-bold text-lg">
                            {product.discountPrice.toLocaleString()} تومان
                          </span>
                        )}

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
                    </div>
                    )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopsalesHomeLast;
