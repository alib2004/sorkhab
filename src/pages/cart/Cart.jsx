/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Cart = () => {
  const [data, setData] = useState([
    {
      id: 1,
      img: "imgs/Wishlists/product11",
      price: "800000",
      priceoff: "600000",
      number: 1,
      title: "رژگونه نارس",
    },
    {
      id: 2,
      img: "imgs/Wishlists/product12",
      price: "800000",
      priceoff: "600000",
      number: 1,
      title: "رژگونه نارس",
    },
  ]);
  return (
    <div className="bg-white">
      <BreadCrunb title="سبدخرید" />
      <div className="container py-20">
        <div className="flex justify-center items-center gap-5 text-sm lg:text-2xl font-medium text-gray-600">
          <Link to="/cart" className="text-pink-600 transition duration-300">
            1. سبد خرید
          </Link>
          <MdKeyboardArrowLeft className="text-gray-400" />
          <Link
            to="/checkout"
            className="hover:text-pink-600 transition duration-300"
          >
            2. صورت حساب
          </Link>
          <MdKeyboardArrowLeft className="text-gray-400" />
          <Link
            to="/order"
            className="hover:text-pink-600 transition duration-300"
          >
            3. تکمیل خرید
          </Link>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-3">
          <div className="col-span-12 lg:col-span-8">
            <table className="table-fixed w-full">
              <thead className="border-b border-gray-200 text-right hidden lg:table-header-group">
                <tr className="pb-5">
                  <th className="w-1/2 pb-5">محصول</th>
                  <th className="pb-5">قیمت</th>
                  <th className="pb-5">تعداد</th>
                  <th className="pb-5">قیمت قبل از تخیف</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr
                    className="border-b border-gray-200 relative flex lg:table-row flex-col items-center py-5"
                    key={product.id}
                  >
                    <td className="flex flex-col lg:flex-row items-center gap-2 py-5">
                      <img
                        src="/imgs/Wishlists/product11.jpg"
                        alt=""
                        className="rounded-xl"
                      />
                      <span>{product.title}</span>
                    </td>
                    <td className="font-bold">{product.priceoff} تومان</td>
                    <td className="text-pink-600 gap-2">
                      <div className="flex justify-center items-center border my-4 lg:my-0 lg:w-[60%] rounded-md overflow-hidden">
                        <button className="border p-2 cursor-pointer">+</button>
                        <span className="border p-2">{product.number}</span>
                        <button className="border p-2 cursor-pointer">-</button>
                      </div>
                    </td>
                    <td className="font-bold">{product.price} تومان</td>
                    <td className="absolute left-2 lg:left-8 lg:top-2/5 bg-[#f4bf96] rounded-full">
                      <IoClose
                        className="text-left rounded-full p-1 cursor-pointer"
                        size="30px"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
              <button className="bg-[#f4bf96] px-6 py-3 rounded-lg text-white cursor-pointer flex items-center gap-2 hover:text-black transition duration-300">
                ادامه خرید
                <MdKeyboardDoubleArrowLeft size="20px" />
              </button>
              <button className="border px-8 py-3 rounded-lg border-gray-300 text-gray-500 cursor-pointer">
                بروزرسانی سبدخرید
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <span className="text-lg">کد تخفیف</span>
              <input
                type="text"
                className="border-b pb-4 outline-0 border-gray-300"
                placeholder="کد تخفیف را وارد کنید"
              />
              <button className="block bg-[#f4bf96] p-3 text-center rounded-lg text-white cursor-pointer  gap-2 hover:text-black transition duration-300 w-32">
                اعمال تخفیف
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 bg-[#FCF5ED] rounded-lg">
            <div className="flex flex-col p-7">
              <h2 className="border-b border-gray-200 pb-4 font-bold text-base">
                جمع سبد خرید
              </h2>
              <div className="flex justify-between items-center font-bold text-base my-4 border-b border-gray-200 pb-4">
                <span>جمع بعد از تخفیف</span>
                <span>5,000,000 تومان</span>
              </div>
              <span className=" font-bold text-base">محاسبه حمل و نقل</span>
              <div className="flex items-center gap-2 text-sm mt-4">
                <input type="radio" name="post" id="post" className="appearance-none border w-5 h-5 rounded-full border-pink-600 checked:bg-pink-400"/>
                <label htmlFor="" className="text-balance">پست</label>
              </div>
              <div className="flex items-center gap-2 text-sm mt-4">
                <input type="radio" name="post" id="post" className="appearance-none border w-5 h-5 rounded-full border-pink-600 checked:bg-pink-400"/>
                <label htmlFor="" className="text-balance">پیک رایگان</label>
              </div>
              <div className="flex items-center gap-2 text-sm mt-4">
                <input type="radio" name="post" id="post" className="appearance-none border w-5 h-5 rounded-full border-pink-600 checked:bg-pink-400"/>
                <label htmlFor="" className="text-balance">ارسال پیشتاز</label>
              </div>
              <span className=" font-bold text-base mt-5">آدرس</span>
              <input type="text" name="" id="" placeholder="شهر / استان" className="border-0 shadow-md p-3 rounded-md bg-white my-3"/>
              <input type="text" name="" id="" placeholder="بخش" className="border-0 shadow-md p-3 rounded-md bg-white my-3"/>
              <button className="block bg-[#f4bf96] p-3 text-center rounded-lg text-white cursor-pointer gap-2 hover:text-black transition duration-300 w-36">
                بروزرسانی جمع کل
              </button>
              <span className="w-full h-[1px] bg-gray-200 mt-3"></span>
              <div className="flex justify-between items-center font-bold text-base my-4">
                <span>جمع</span>
                <span>5,500,000 تومان</span>
              </div>
              <button className="block bg-[#f4bf96] p-3 text-center rounded-lg text-white cursor-pointer gap-2 hover:text-black transition duration-300 w-full">
                صورت حساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
