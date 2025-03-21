import { Link } from "react-router-dom";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useState } from "react";

const Checkout = () => {
  const [offpopup, setOffpopup] = useState(false);
  const [customerpopup, setCustomerpopup] = useState(false);
  return (
    <div className="bg-white">
      <BreadCrunb title="صورت حساب" />
      <div className="container py-10">
        <div className="flex justify-center items-center gap-5 text-sm lg:text-2xl font-medium text-gray-600">
          <Link
            to="/cart"
            className="hover:text-pink-600 transition duration-300"
          >
            1. سبد خرید
          </Link>
          <MdKeyboardArrowLeft className="text-gray-400" />
          <Link
            to="/checkout"
            className="text-pink-600 transition duration-300"
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

        <div className="flex flex-col gap-3 my-6">
          <div className="border-dotted border p-3 border-pink-400 rounded-md flex gap-2 items-center">
            <BsFillExclamationCircleFill color="#c6005c" size={"25px"} />
            <p>
              مشتری دائمی؟
              <a onClick={()=> setCustomerpopup(!customerpopup)} className="text-pink-600 pr-2 cursor-pointer">
                برای ورود اینجا کلیک کنید
              </a>
            </p>
          </div>
          {customerpopup ? (
            <div className="my-1">
              <p className="font-extralight">
                اگر قبلا از ما خرید کرده اید، لطفا مشخصات خود را در زیر وارد
                کنید. اگر مشتری جدید هستید، لطفاً به بخش صورت‌حساب بروید.
              </p>
              <div className="flex w-full items-center gap-5 mt-4 font-light">
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="">نام کاربری یا ایمیل</label>
                  <input type="text" className="border border-gray-300 p-2 rounded-md outline-0" />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="">رمز عبور *</label>
                  <input type="text" className="border border-gray-300 p-2 rounded-md outline-0" />
                </div>
              </div>
              <div className="flex w-full items-center gap-5 mt-4 font-light justify-between">
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <span>مرا به خاطر بسپر</span>
                </div>
                <a href="#" className="align-content-end">رمز عبور خود را فراموش کردید ؟</a>
              </div>
            </div>
          ) : null}
          <div className="border-dotted border p-3 border-pink-400 rounded-md flex gap-2 items-center">
            <BsFillExclamationCircleFill color="#c6005c" size={"25px"} />
            <p>
              آیا کد تخفیف دارید؟
              <a
                onClick={() => setOffpopup(!offpopup)}
                className="text-pink-600 pr-2 cursor-pointer"
              >
                کد تخفیف خود را اینجا وارد نمایید
              </a>
            </p>
          </div>
          {offpopup ? (
            <div className="my-5">
              <p className="font-extralight">
                اگر کد تخفیف دارید، لطفاً آن را در زیر اعمال کنید.
              </p>
              <div className="flex items-center gap-2 my-3">
                <input
                  type="text"
                  className="border-b pb-2 border-gray-300 w-100"
                  id=""
                  placeholder="کد تخفیف"
                />
                <button className="bg-[#f4bf96] cursor-pointer text-white hover:text-black transition duration-300 px-6 py-3 rounded-lg">
                  اعمال کد تخفیف
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
