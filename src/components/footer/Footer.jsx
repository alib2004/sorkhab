import "./Footer.css";
import { FiPhone } from "react-icons/fi";
import { IoCartOutline, IoSendOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
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
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3 flex flex-col gap-5">
              <img src="/logo.png" alt="" className="w-2/3"/>
              <span className="font-bold text-gray-300">نماد های اعتماد</span>
              <div className="flex justify-start items-center gap-3">
                <div className="bg-white/20 w-1/3 p-2 rounded-2xl">
                  <img src="/imgs/enemad.png" alt="" className="" />
                </div>
                <div className="bg-white/20 w-1/3 p-2 rounded-2xl">
                  <img src="/imgs/samandehi.png" alt="" className="" />
                </div>
              </div>
            </div>
            <div className="col-span-3 text-gray-300">
              <span className="font-bold text-xl">تماس با ما</span>
              <ul className="mt-3 flex flex-col gap-4">
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
            <div className="col-span-2">
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
            <div className="col-span-4">hi</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
