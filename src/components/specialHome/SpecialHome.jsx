/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { products } from "../../products";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const SpecialHome = () => {
  const topsaleProduct = products.filter((prod) => prod.discountPrice);
  const [select, setSelect] = useState("شامپو");
  const [cat,setCat] = useState(["شامپو",'صابون','لاک','ریمل'])
  return (
    <div className=" bg-[url(/imgs/bg-shape1.png)] py-10">
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
          <div className="col-span-12 lg:col-span-3 bg-[#FFF5F5] rounded-2xl border border-gray-200 shadow-md h-full">
            <ul className=" p-5">
              {cat.map((cat) => (
                <li
                  className="py-4 border-b border-gray-400 transition duration-300 hover:border-pink-500 hover:text-pink-500 cursor-pointer"
                  key={cat}
                  onClick={() => setSelect(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {topsaleProduct.filter((product)=> product.category === select).map((product)=>(
                <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col"  key={product.code}>
                <img src="/imgs/prod1.jpg" alt="" className="" />
                <div className="flex flex-col items-center py-5 gap-1">
                  <span className="text-xs">
                    {product.category}
                  </span>
                  <Link
                    to={`product/${product.url}`}
                    className="lg:text-lg lg:font-bold hover:text-pink-600 trans"
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
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialHome;
