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
    </footer>
  );
};

export default Footer;
