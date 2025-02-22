import { IoIosArrowDown, IoIosHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { LuBadgePercent } from "react-icons/lu";
import Sign from "../signup/Sign";
import { ThemeProvider } from "../../Context";
import Menu from "./Menu";
const mobbtnnav = (e) => {
  let nextElem = e.target.parentElement.nextElementSibling;
  e.target.classList.toggle("-rotate-90");
  nextElem.classList.toggle("flex");
  nextElem.classList.toggle("hidden");
  nextElem.classList.toggle("flex-col");
};
const Header = () => {
  const [navMobileMneu, setNavMobileMneu] = useState(false);
  const [showpopup, setShowpopup] = useState(false);

  const menuRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavMobileMneu(false);
      }
    }

    // اضافه کردن لیسنر به document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <ThemeProvider.Provider value={{ showpopup, setShowpopup }}>
      <header className="bg-primary font-primary">
        <div
          className={`container ${navMobileMneu ? "backdrop-blur-3xl" : ""}`}
        >
          {/* start topbar */}
          <div className="topbar flex justify-between items-center font-thin text-sm py-2">
            <div className="topbar-right">
              <span>پیام خوش آمد گویی برای وبسایت !</span>
            </div>
            <div className="topbar-left">
              <ul className="flex gap-4">
                <li className="relative li-1 group">
                  <a href="#" className="flex items-center gap-1 ">
                    تومان
                    <IoIosArrowDown />
                  </a>
                  <ul
                    className="absolute hidden ulist-2 bg-gray-100 p-2 rounded-md shadow-md group-hover:flex  flex-col gap-1"
                    data-aos="fade-up"
                  >
                    <li>
                      <a href="#">تومان</a>
                    </li>
                    <li>
                      <a href="#">ریال</a>
                    </li>
                  </ul>
                </li>
                <li className="relative li-1 group">
                  <a href="#" className="flex items-center gap-1 ">
                    فارسی
                    <IoIosArrowDown />
                  </a>
                  <ul className="absolute hidden ulist-2 bg-gray-100 p-2 rounded-md shadow-md group-hover:flex  flex-col gap-1">
                    <li>
                      <a href="#">فارسی</a>
                    </li>
                    <li>
                      <a href="#">العربیه</a>
                    </li>
                  </ul>
                </li>
                <li className="hidden md:block">
                  <a href="#" className="flex gap-1 items-center">
                    <IoIosInformationCircleOutline size={"18px"} />
                    <span>نیاز به کمک</span>
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    href="#"
                    className="flex gap-1 items-center"
                    onClick={() => setShowpopup(true)}
                  >
                    <CiUser size={"18px"} />
                    <span>ورود | ثبت نام</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-200"></div>
        {/* finish topbar */}
        {/* start navbar */}
        <div className="container">
          <div className="navbar flex justify-between items-center py-4">
            <div className="nav-right flex items-center gap-3">
              <a href="#" className="md:hidden">
                <RxHamburgerMenu
                  size={"30px"}
                  className="hover:text-pink-500 trans"
                  onClick={() => setNavMobileMneu(true)}
                />
              </a>
              <a href="#">
                <img src="/logo.png" alt="" className="w-40" />
              </a>
              <form className="bg-white w-[500px] py-2 px-2 border border-orange-600 md:flex hidden rounded-md">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-[90%] border-0 outline-0 placeholder:text-sm"
                />
                <button
                  type="button"
                  className="w-[10%] flex justify-end items-center hover:text-orange-500 cursor-pointer trans"
                >
                  <IoSearch size={"25px"} />
                </button>
              </form>
            </div>
            <div className="nav-left flex gap-4">
              <a href="#" className="md:flex items-center gap-1 hidden">
                <MdOutlinePhoneEnabled
                  size={"30px"}
                  className="hover:text-pink-500 trans"
                />
                <div className="flex flex-col">
                  <span className="text-xs">تلفن پاسخگو</span>
                  <span className="text-xs font-bold">09901232336</span>
                </div>
              </a>
              <a href="#">
                <IoIosHeartEmpty
                  size={"30px"}
                  className="hover:text-pink-500 trans"
                />
              </a>
              <a href="#" className="flex items-center gap-1 relative">
                <div className="md:flex flex-col hidden">
                  <span className="text-xs">سبد خرید</span>
                  <span className="text-xs font-bold">1،800،000</span>
                </div>
                <IoCartOutline
                  size={"30px"}
                  className="hover:text-pink-500 trans relative"
                />
                <span className="hidden absolute left-3 -top-2 md:inline-flex items-center rounded-full bg-pink-500 py-0.5 px-1.5 text-white text-xs font-medium ">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-200"></div>
        {/* finish navbar */}
        {/* start menu */}
        {/* finish menu */}
        <div className="container hidden md:block">
          <div className="flex justify-between items-center">
            <div className="menu-right">
              <Menu/>
            </div>
            <div className="menu-left flex items-center gap-2">
              <LuBadgePercent size={'25px'}/>
              <span>پیشنهاد ویژه</span>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {navMobileMneu && (
            <motion.div
              initial={{ opacity: 0, scale: 1, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" bg-white rounded-lg shadow-lg"
            >
              <div
                ref={menuRef}
                className="mobilenav w-[60%] bg-[#1d2236] absolute right-0 top-0 h-[100vh] trans text-white py-5"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <form
                  action=""
                  className="flex items-center justify-center rounded-md"
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-white py-1 px-2 overflow-hidden rounded-r-md placeholder:text-black placeholder:font-extralight"
                    placeholder="جستجو"
                  />
                  <button
                    type="button"
                    className="bg-pink-700 py-1.5 px-3 rounded-l-md"
                  >
                    <IoSearch size={"20px"} />
                  </button>
                </form>
                <ul className="p-9 flex flex-col gap-5">
                  <li className="border-b pb-2 border-gray-500 font-medium text-sm">
                    <a href="#">صفحه اصلی</a>
                  </li>
                  <li className="border-b pb-2 border-gray-500 font-medium text-sm">
                    <a href="#" className=" flex justify-between items-center">
                      پوستی
                      <MdKeyboardArrowLeft
                        size={"20px"}
                        color="#fcfcfc"
                        className="cursor-pointer trans"
                        onClick={(e) => mobbtnnav(e)}
                      />
                    </a>
                    <ul className="hidden">
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          رژ لب
                          <MdKeyboardArrowLeft
                            size={"20px"}
                            color="#fcfcfc"
                            className="cursor-pointer"
                          />
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          رژ گونه
                          <MdKeyboardArrowLeft
                            size={"20px"}
                            color="#fcfcfc"
                            className="cursor-pointer"
                          />
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          کانتور
                          <MdKeyboardArrowLeft
                            size={"20px"}
                            color="#fcfcfc"
                            className="cursor-pointer"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="border-b pb-2 border-gray-500 font-medium text-sm">
                    <a href="#" className=" flex justify-between items-center">
                      بهداشتی
                      <MdKeyboardArrowLeft
                        size={"20px"}
                        color="#fcfcfc"
                        className="cursor-pointer trans"
                        onClick={(e) => mobbtnnav(e)}
                      />
                    </a>
                    <ul className="hidden">
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          کرم پودر
                          <MdKeyboardArrowLeft
                            size={"20px"}
                            color="#fcfcfc"
                            className="cursor-pointer"
                          />
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          پنکیک
                          <MdKeyboardArrowLeft
                            size={"20px"}
                            color="#fcfcfc"
                            className="cursor-pointer"
                          />
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          سایه چشم
                          <MdKeyboardArrowLeft
                            size={"20px"}
                            color="#fcfcfc"
                            className="cursor-pointer"
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="border-b pb-2 border-gray-500 font-medium text-sm">
                    <a href="#" className=" flex justify-between items-center">
                      صفحات
                      <MdKeyboardArrowLeft
                        size={"20px"}
                        color="#fcfcfc"
                        className="cursor-pointer trans"
                        onClick={(e) => mobbtnnav(e)}
                      />
                    </a>
                    <ul className="hidden">
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          درباره ما
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          تماس با ما
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          حساب کاربری
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          علاقه مندی
                        </a>
                      </li>
                      <li className="border-b border-gray-500 font-medium text-sm">
                        <a
                          href="#"
                          className=" flex justify-between items-center pr-2 py-4"
                        >
                          سوالات متداول
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <Sign />
    </ThemeProvider.Provider>
  );
};

export default Header;
