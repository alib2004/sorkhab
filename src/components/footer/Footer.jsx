import { FiPhone } from "react-icons/fi";
import { IoCartOutline, IoSendOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { FaFacebookF,FaInstagram   } from "react-icons/fa6";
import { FaTelegramPlane,FaPinterestP  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-r from-pink-400 to-orange-300 py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center lg:divide-x-2 divide-gray-200 border-2 border-white rounded-2xl p-5 text-white">
            <div className="!bg-transparent overflow-hidden flex items-center lg:justify-center gap-4 p-5 text-base">
              <FiPhone size={"40px"} />
              <div className="flex flex-col gap-1 text-base">
                <span className="font-bold">پشتیبانی 24 ساعته</span>
                <span className="text-sm">دسترسی فوری به پشتیبان های ما</span>
              </div>
            </div>
            <div className="!bg-transparent overflow-hidden flex items-center lg:justify-center gap-4 p-5 text-base">
              <IoCartOutline size={"40px"} />
              <div className="flex flex-col gap-1 text-base">
                <span className="font-bold">برگشت وجه گارانتی</span>
                <span className="text-sm">
                  20% تخفیف هدیه ما برای اولین سفارش
                </span>
              </div>
            </div>
            <div className="!bg-transparent overflow-hidden flex items-center lg:justify-center gap-4 p-5 text-base">
              <IoSendOutline size={"40px"} />
              <div className="flex flex-col gap-1 text-base">
                <span className="font-bold">ارسال رایگان و مرجوعی</span>
                <span className="text-sm">سراسر کشور</span>
              </div>
            </div>
            <div className="!bg-transparent overflow-hidden flex items-center lg:justify-center gap-4 p-5 text-base">
              <CiCreditCard1 size={"40px"} />
              <div className="flex flex-col gap-1 text-base">
                <span className="font-bold">پرداخت 100٪ مطمئن</span>
                <span className="text-sm">ما تضمین پرداخت امن را داریم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/imgs/bg-02.jpg)]">
        <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-2 gap-10 justify-center">
            <div className="lg:col-span-3 flex flex-col gap-5 items-center lg:items-start">
              <img src="/logo.png" alt="" className="w-2/3"/>
              <span className="font-bold text-gray-300">نماد های اعتماد</span>
              <div className="flex justify-center lg:justify-start lg:items-center gap-3">
                <div className="bg-white/20 w-1/5 lg:w-1/3 p-2 rounded-2xl">
                  <img src="/imgs/enemad.png" alt="" className="" />
                </div>
                <div className="bg-white/20 w-1/5 lg:w-1/3 p-2 rounded-2xl">
                  <img src="/imgs/samandehi.png" alt="" className="" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 text-gray-300 items-center lg:items-start flex flex-col">
              <span className="font-bold text-xl">تماس با ما</span>
              <ul className="mt-3 flex flex-col items-center lg:items-start gap-4">
                <li className="flex gap-1 items-center">
                  تلفن : 
                  <span className="text-gray-500 hover:text-white transition duration-300">09901232336</span>
                </li>
                <li className="flex gap-1 items-center">
                  ایمیل : 
                  <span className="text-gray-500 hover:text-white transition duration-300">aliw.b2004@gmail.com</span>
                </li>
                <li className="flex gap-1 items-center">
                  آدرس : 
                  <span className="text-gray-500 hover:text-white transition duration-300">تهران</span>
                </li>
                <li className="flex gap-1 items-center">
                  روز و ساعت کاری : 
                  <span className="text-gray-500 hover:text-white transition duration-300">شنبه تا پنج شنبه/ 9:00 صبح تا 8:00 شب</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <span className="font-bold text-xl text-gray-300">حساب کاربری من</span>
              <ul className="mt-3 flex flex-col gap-4">
                <li className="text-gray-500 hover:text-white transition duration-300">
                  <a href="#">
                  تماس با ما
                  </a>
                </li>
                <li className="text-gray-500 hover:text-white transition duration-300">
                  <a href="#">
                  سرویس های ما
                  </a>
                </li>
                <li className="text-gray-500 hover:text-white transition duration-300">
                  <a href="#">
                  روش های پرداخت
                  </a>
                </li>
                <li className="text-gray-500 hover:text-white transition duration-300">
                  <a href="#">
                  راهنمای خدمات
                  </a>
                </li>
                <li className="text-gray-500 hover:text-white transition duration-300">
                  <a href="#">
                  راهنمای خرید
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4  flex flex-col items-center lg:items-start">
            <span className="font-bold text-xl text-gray-300">پیشنهاد ویژه</span><br />
            <span className="font-extralight text-sm text-gray-500">به‌روزترین تخفیف‌ها و جدیدترین محصولات را دریافت کنید</span>
            <form action="" className="flex bg-black rounded-xl my-3">
              <input type="text" placeholder="موبایل ..." className=" placeholder:text-gray-500 w-full py-3 px-2 outline-0 text-gray-200"/>
              <button type="button" className="bg-[#f4bf96] text-white py-3 px-5 rounded-l-xl cursor-pointer">درخواست</button>
            </form>
            <div className="flex gap-2">
              <a href="#" className="rounded-full border-2 border-gray-400 p-2 hover:bg-blue-400 hover:border-blue-400 transition duration-300 ">
                <FaFacebookF color="white" className=""/>
              </a>
              <a href="#" className="rounded-full border-2 border-gray-400 p-2 hover:bg-red-400 hover:border-red-400 transition duration-300 ">
                <FaInstagram color="white" className=""/>
              </a>
              <a href="#" className="rounded-full border-2 border-gray-400 p-2 hover:bg-blue-400 hover:border-blue-400 transition duration-300 ">
                <FaTelegramPlane  color="white" className=""/>
              </a>
              <a href="#" className="rounded-full border-2 border-gray-400 p-2 hover:bg-orange-400 hover:border-orange-400 transition duration-300 ">
                <FaPinterestP  color="white" className=""/>
              </a>
            </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-300 border-t border-gray-700 py-10 mt-10">
            <span>قالب سرخاب 1403 © کلیه حقوق محفوظ است .</span>
            <img src="/imgs/payment.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
