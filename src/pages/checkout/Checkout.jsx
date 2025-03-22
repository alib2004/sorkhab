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
              <a
                onClick={() => setCustomerpopup(!customerpopup)}
                className="text-pink-600 pr-2 cursor-pointer"
              >
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
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-md outline-0"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="">رمز عبور *</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-md outline-0"
                  />
                </div>
              </div>
              <div className="flex w-full items-center gap-5 mt-4 font-light justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <span>مرا به خاطر بسپر</span>
                </div>
                <a href="#" className="align-content-end">
                  رمز عبور خود را فراموش کردید ؟
                </a>
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
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-center text-lg">جزئیات صورتحساب</h1>
            <div className="grid grid-cols-12 gap-5 mt-5">
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  نام *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  نام خانوادگی *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  نام شرکت (اختیاری)
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  استان *
                </label>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                >
                  <option value="">تهران</option>
                  <option value="">گیلان</option>
                  <option value="">ایلام</option>
                  <option value="">شیراز</option>
                </select>
              </div>
              <div className="col-span-12 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  آدرس خیابان *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                  placeholder="نام محله / نام خیابان"
                />
              </div>
              <div className="col-span-12 flex flex-col gap-3">
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                  placeholder="آپارتمان / واحد / سوئیت و ..."
                />
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  شهر / منطقه *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  وضعیت *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  پلاک *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  تلفن *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 flex flex-col gap-3">
                <label htmlFor="" className="text-gray-600">
                  ایمیل *
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 outline-0 rounded-md"
                />
              </div>
              <div className="col-span-12 flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">ایجاد حساب کاربری</label>
              </div>
              <div className="col-span-12 flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">آدرس یکی از نزدیکان</label>
              </div>
            </div>
            <p className="text-center font-bold text-lg my-5">اطلاعات تکمیلی</p>
            <div className="flex flex-col gap-2">
              <label htmlFor="">یاداشت های سفارش (اختیاری)</label>
              <textarea
                className="border border-gray-300 outline-0 p-2 rounded-md"
                rows={8}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 p-8 bg-[#FCF5ED] rounded-lg">
            <div className="sticky top-0">
            <p className="text-center font-bold text-lg">سفارش شما</p>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-base">محصول</p>
              <div className="flex justify-between items-center text-gray-600">
                <span>
                  پنکیک لیدی رز <span> * 1 </span>
                </span>
                <span>1,200,000 تومان</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>
                  کرم پودر مک<span> * 1 </span>
                </span>
                <span>3,500,000 تومان</span>
              </div>
              <div className="w-full h-[1px] bg-gray-200 my-3"></div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-base">جمع قبل از تخفیف</p>
                <p className="font-bold text-base">4,700,000 تومان</p>
              </div>
              <div className="w-full h-[1px] bg-gray-200 my-3"></div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-base">جمع نهایی</p>
                <p className="font-bold text-xl text-pink-700 ">
                  4,200,000 تومان
                </p>
              </div>
              <div className="w-full h-[1px] bg-gray-200 my-3"></div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-base">نحوه پرداخت</p>
                <div className="flex flex-col gap-1 text-gray-600">
                  <div className="flex gap-3 items-center">
                    <input type="radio" name="pay" id="pay" />
                    <label htmlFor="">پرداخت با چک</label>
                  </div>
                  <p className="pr-5">
                    لطفاً یک چک به نام فروشگاه ، خیابان فروشگاه ، شهر فروشگاه ،
                    نام مدیر / شهرستان، کدپستی فروشگاه .
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <input type="radio" name="pay" id="pay" />
                  <label htmlFor="">پول نقد</label>
                </div>
                <div className="w-full h-[1px] bg-gray-200 my-3"></div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="text-gray-600">من شرایط و ضوابط وبسایت را خوانده ام و با آن موافقم .</label>
                </div>
                <button className="w-full bg-pink-600 text-white py-4 rounded-lg">ثبت سفارش</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
