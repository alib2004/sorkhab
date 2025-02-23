import { MdKeyboardArrowDown,MdKeyboardDoubleArrowLeft } from "react-icons/md";
const Menu = () => {
  return (
    <>
      <ul className="flex items-center gap-5 text-sm font-medium">
        <li>
          <a href="#" className=" hover:text-pink-500 trans">
            صفحه نخست
          </a>
        </li>
        <li className="relative group py-5">
          <a href="#" className=" hover:text-pink-500 trans flex items-center">
            شوینده ها
            <MdKeyboardArrowDown size={"18px"} />
          </a>
          <ul className="absolute hidden flex-col gap-4 p-5 w-60 rounded-md mt-4 group-hover:flex trans shadow-lg">
            <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
              <a href="#">شامپو</a>
            </li>
            <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
              <a href="#">فیس واش</a>
            </li>
            <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
              <a href="#">میسلار واتر</a>
            </li>
            <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
              <a href="#">شامپو بدن</a>
            </li>
            <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
              <a href="#">صابون</a>
            </li>
            <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
              <a href="#">نرم کننده مو</a>
            </li>
          </ul>
        </li>
        <li className="relative group py-5">
          <a href="#" className=" hover:text-pink-500 trans flex items-center">
            آرایشی
            <MdKeyboardArrowDown size={"18px"} />
          </a>
          <div className="hidden group-hover:flex gap-4 absolute shadow-lg mt-4 w-[1000px] p-5 rounded-md">
            <ul className=" flex-col gap-4  py-2 px-3 w-60 rounded-md flex trans">
              <span className="font-bold text-xl">رژ لب</span>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژلب هدی بیوتی</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژلب نارس</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژلب مک</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژلب کازماتیک</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژلب کایلی</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژلب لیدی</a>
              </li>
            </ul>
            <ul className="flex-col gap-4  py-2 px-3 w-60 rounded-md flex trans">
              <span className="font-bold text-xl">رژ گونه</span>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژگونه هدی بیوتی</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژگونه نارس</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژگونه مک</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژگونه کازماتیک</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژگونه کایلی</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">رژگونه لیدی</a>
              </li>
            </ul>
            <ul className="flex-col gap-4  py-2 px-3 w-60 rounded-md flex trans">
              <span className="font-bold text-xl">کانتور</span>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">کانتور هدی بیوتی</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">کانتور نارس</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">کانتور مک</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">کانتور کازماتیک</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">کانتور کایلی</a>
              </li>
              <li className="py-2 border-b border-dotted border-gray-200 text-gray-700 hover:text-pink-600 trans">
                <a href="#">کانتور لیدی</a>
              </li>
            </ul>
            <div className="relative">
              <img src="/imgs/banner-1.jpg" alt="" className="w-80" />
              <span className="absolute top-10 right-[110px] text-2xl text-pink-500">فروش</span>
              <span className="absolute top-32 right-[72px] text-2xl text-black">70 % تخفیف</span>
              <a href="#" className="flex items-center gap-1 absolute top-52 right-[72px]  text-2xl text-pink-400 text-right ">
                مشاهده همه
                <MdKeyboardDoubleArrowLeft/>
              </a>
            </div>
          </div>
        </li>
        <li>
          <a href="#" className=" hover:text-pink-500 trans">
            بهداشتی
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-pink-500 trans">
            گریم
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-pink-500 trans">
            درباره ما
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-pink-500 trans">
            تماس با ما
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
