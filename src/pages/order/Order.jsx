import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft,MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Order = () => {
  return (
    <div className="bg-white">
      <BreadCrunb title="تکمیل خرید" />
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
            className="hover:text-pink-600 transition duration-300"
          >
            2. صورت حساب
          </Link>
          <MdKeyboardArrowLeft className="text-gray-400" />
          <Link to="/order" className="text-pink-600 transition duration-300">
            3. تکمیل خرید
          </Link>
        </div>
        <div className="w-[350px] m-auto p-5 mt-10 bg-[#FCF5ED] shadow-lg rounded-md flex justify-center items-center gap-3">
            <IoCheckmarkDoneCircle size={'70px'} color="#e60076"/>
            <div className="flex flex-col gap-1">
                <span className="font-bold text-base">متشکریم از خرید شما!</span>
                <span className="font-light">خرید شما در انتظار ارسال است</span>
            </div>
        </div>
        <div className="grid grid-cols-12 w-[80%] m-auto gap-5 lg:gap-0 justify-center lg:divide-x-2 divide-gray-100 mt-10">
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-0 items-center">
                <span className="font-light text-base text-gray-600">شماره سفارش:</span>
                <span className="font-bold text-xl">4936</span>
            </div>
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-0 items-center">
                <span className="font-light text-base text-gray-600">وضعیت:</span>
                <span className="font-bold text-xl">در انتظار ارسال</span>
            </div>
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-0 items-center">
                <span className="font-light text-base text-gray-600">تاریخ :</span>
                <span className="font-bold text-xl">2 اردیبهشت 1404</span>
            </div>
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-0 items-center">
                <span className="font-light text-base text-gray-600">ایمیل:</span>
                <span className="font-bold text-base">aliw.b2004@gmail.com</span>
            </div>
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-0 items-center">
                <span className="font-light text-base text-gray-600">جمع:</span>
                <span className="font-bold text-xl">5,500,000 تومان</span>
            </div>
            <div className="col-span-12 lg:col-span-2 flex lg:flex-col gap-3 lg:gap-0 items-center">
                <span className="font-light text-base text-gray-600">روش پرداخت:</span>
                <span className="font-bold text-xl">نقدی هنگام تحویل</span>
            </div>
        </div>
        <h1 className="text-3xl mt-10">جزئیات فاکتور</h1>
        <div className="my-10 shadow-md rounded-lg p-5 flex-col flex">
            <span className="font-bold text-xl">محصول</span>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div className="flex justify-between items-center mt-5">
                <span>آبرسان هدی بیوتی <span> * 1</span></span>
                <span>800,000 تومان</span>
            </div>
            <div className="flex justify-between items-center mt-5">
                <span>کرم پودر مک <span> * 1</span></span>
                <span>770,000 تومان</span>
            </div>
            <div className="flex justify-between items-center mt-5">
                <span>بالم لب کایلی کازماتیک <span> * 2</span></span>
                <span>152,000 تومان</span>
            </div>
            <div className="flex justify-between items-center mt-5 font-bold text-base">
                <span>جمع قبل از تخفیف:</span>
                <span>5,500,000 تومان</span>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div className="flex justify-between items-center mt-5 font-bold text-base">
                <span>روش پرداخت:</span>
                <span>نقد هنگام تحویل</span>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div className="flex justify-between items-center mt-5 font-bold text-base">
                <span>حمل و نقل:</span>
                <span>ارسال رایگان</span>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div className="flex justify-between items-center mt-5 font-bold text-base">
                <span>جمع:</span>
                <span>5,000,000 تومان</span>
            </div>            
        </div>
        <span className="font-bold text-xl">آدرس مقصد</span>
            <div className="flex flex-col gap-2 my-5 text-gray-700 text-base">
            <p>علی بیغوله</p>
            <p>بلوار ارم ، خیابان دانشگاه ، دفتر فروش</p>
            <p>09901232336</p>
            <p>aliw.b2004@gmail.com</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <Link to='/shop' className="inline-flex rounded-xl font-bold items-center gap-2 bg-[#f4bf96] text-white px-6 py-3">بازگشت به فروشگاه
            <MdKeyboardDoubleArrowLeft size={'25px'} />
            </Link>
      </div>
    </div>
  );
};

export default Order;
