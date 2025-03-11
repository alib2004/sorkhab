/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane, FaPinterestP } from "react-icons/fa";
const Soon = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 20);
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center h-[100vh] p-5 pt-10 md:p-0">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex flex-col items-center md:w-1/2">
            <span className="font-black text-5xl">به زودی</span>
            <div className="flex gap-10 mt-6 justify-between items-center text-2xl pb-8">
              <div className="flex flex-col items-center">
                <span>{timeLeft.days}</span>
                <span className="font-light text-gray-600">روز</span>
              </div>
              :
              <div className="flex flex-col items-center">
                <span>{timeLeft.hours}</span>
                <span className="font-light text-gray-600">ساعت</span>
              </div>
              :
              <div className="flex flex-col items-center">
                <span>{timeLeft.minutes}</span>
                <span className="font-light text-gray-600">دقیقه</span>
              </div>
              :
              <div className="flex flex-col items-center">
                <span>{timeLeft.seconds}</span>
                <span className="font-light text-gray-600">ثانیه</span>
              </div>
            </div>
            <p className="pt-8 text-gray-400 text-center leading-10 text-md font-medium  border-t border-gray-300">
              ما در حال حاضر روی یک سایت جدید و عالی کار می کنیم. برای اطلاعات
              بیشتر با ما همراه باشید. در خبرنامه ما مشترک شوید تا از پیشرفت ما
              مطلع شوید .
            </p>
            <form action="" className="flex bg-white border border-gray-200 w-[80%] rounded-xl my-3">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className=" placeholder:text-gray-500 w-full py-3 px-2 outline-0 text-gray-200"
              />
              <button
                type="button"
                className="bg-[#f4bf96] text-white py-3 px-5 rounded-l-xl cursor-pointer"
              >
                عضویت
              </button>
            </form>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded-full border-2 border-gray-400 p-2 hover:bg-blue-400 hover:border-blue-400 transition duration-300 "
              >
                <FaFacebookF color="#666" className="" />
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-gray-400 p-2 hover:bg-red-400 hover:border-red-400 transition duration-300 "
              >
                <FaInstagram color="#666" className="" />
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-gray-400 p-2 hover:bg-blue-400 hover:border-blue-400 transition duration-300 "
              >
                <FaTelegramPlane color="#666" className="" />
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-gray-400 p-2 hover:bg-orange-400 hover:border-orange-400 transition duration-300 "
              >
                <FaPinterestP color="#666" className="" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
          <img src="/imgs/coming-soon.jpg" className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soon;
