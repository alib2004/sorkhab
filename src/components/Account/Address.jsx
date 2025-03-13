import { FaEdit } from "react-icons/fa";

const Address = () => {
  return (
    <div className="p-5 text-base flex flex-col gap-10">
      <p>آدرس های زیر به طور پیش فرض در صفحه پرداخت استفاده می شود.</p>
      <div className="flex justify-between pl-32 pr-10 flex-col lg:flex-row gap-10 lg:gap-0">
        <div>
          <span className="font-bold text-xl">آدرس قبض</span>
          <ul className="mt-6 mb-4 font-light text-gray-600">
            <li>صبا منصوری</li>
            <li>دفتر فروش</li>
            <li>بلوار آزادگان</li>
          </ul>
          <a href="#" className="flex gap-2 items-center text-pink-600 font-bold">
            ویرایش
            <FaEdit />
          </a>
        </div>
        <div>
          <span className="font-bold text-xl">آدرس حمل ونقل</span>
          <p className="mt-6 mb-4 font-light text-gray-600">شما هنوز این نوع آدرس را تنظیم نکرده اید.</p>
          <a href="#" className="flex gap-2 items-center text-pink-600 font-bold">
            ویرایش
            <FaEdit />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Address;
