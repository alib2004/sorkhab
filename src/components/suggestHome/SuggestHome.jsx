import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";
import { products } from "../../products";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const tabs = [
  {
    id: "popular",
    label: "پرفروش ها",
    content: products.sort((a, b) => b.sale - a.sale).slice(0, 6),
  },
  {
    id: "special",
    label: "ویژه ما",
    content: products.filter((prod) => prod.discountPrice).sort().slice(0, 6),
  },
];
const SuggestHome = () => {
  const [activeTab, setActiveTab] = useState("popular");
  return (
    <div className="bg-[#F4BF96] py-10">
      <div className="container">
        <span className="special">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-white">
            پیشنهاد سرخاب
          </span>
          <a href="#" className="flex items-center text-lg text-white">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <div className="mt-6">
          {/* تب‌ها */}
          <div className="flex justify-center border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-lg font-medium cursor-pointer ${
                  activeTab === tab.id
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* محتوای تب‌ها */}
          <div className="grid grid-cols-2 lg:grid-cols-6 mt-5 gap-5">
            {tabs.map((tab) =>
              activeTab === tab.id
                ? tab.content.map((product) => (
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
                  ))
                : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestHome;
