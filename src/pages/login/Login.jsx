import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import TopAllPages from "../../components/topAllPages/TopAllPages";
import { useState } from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
const Login = () => {
  const [btnlogin, setBtnlogin] = useState(true);
  const [btnsign, setBtnsign] = useState(false);
  const btnloginHandler = () => {
    setBtnsign(false);
    setBtnlogin(true);
  };
  const btnsignHandler = () => {
    setBtnsign(true);
    setBtnlogin(false);
  };
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"خوش آمدید به وبسایت سرخاب"}
        head1={"ورود به سایت"}
        desc={"در زیر میتوانید ورود یا ثبت نام کنید"}
      />
      <BreadCrunb title="ورود و ثبت نام" />
      <div className="container  py-20">
        <div className="w-full bg-white rounded-lg shadow m-auto md:mt-0 sm:max-w-md xl:p-0 relative backdrop-blur-3xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="btns m-auto flex justify-center items-center gap-2 font-bold">
              <button
                onClick={() => btnloginHandler()}
                className={
                  btnlogin
                    ? "text-4xl text-pink-600 cursor-pointer"
                    : "text-xl text-gray-500 cursor-pointer"
                }
              >
                ورود
              </button>
              <span>یا</span>
              <button
                onClick={() => btnsignHandler()}
                className={
                  btnsign
                    ? "text-4xl text-pink-600 cursor-pointer"
                    : "text-xl text-gray-500 cursor-pointer"
                }
              >
                ثبت نام
              </button>
            </div>
            {btnlogin ? (
              <form className="space-y-4 md:space-y-4 py-5" method="POST">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-100 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:outline-gray-200 focus:text-left focus:placeholder:opacity-0"
                  placeholder="نام کاربری یا آدرس ایمیل"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-gray-100 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:outline-gray-200 focus:text-left focus:placeholder:opacity-0"
                  placeholder="رمز عبور"
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-pink-500 w-4 h-4 rounded-4xl border-gray-200"
                    />
                    <label
                      htmlFor=""
                      className="text-gray-500 font-extralight text-sm"
                    >
                      مرا به یاد بسپار
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <a
                      href="#"
                      className="text-gray-500 text-sm font-extralight"
                    >
                      رمز عبور خود را فراموش کرده اید؟
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-pink-700 hover:bg-orange-200 trans hover:text-black cursor-pointer rounded-lg text-sm px-5 py-2.5 font-medium text-center"
                >
                  ورود
                </button>
                <div className="flex justify-between items-center">
                  <div className="border border-gray-100 w-[40%]"></div>
                  <span className="w-[20%] text-center text-gray-400 text-sm">
                    ورود
                  </span>
                  <div className="border border-gray-100 w-[40%]"></div>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <div className="bg-red-600 p-2 rounded-xl">
                    <FaGoogle size={"20px"} color="white" />
                  </div>
                  <div className="bg-blue-600 p-2 rounded-xl">
                    <FaFacebookF size={"20px"} color="white" />
                  </div>
                  <div className="bg-sky-400 p-2 rounded-xl">
                    <FaTwitter size={"20px"} color="white" />
                  </div>
                </div>
              </form>
            ) : (
              <form className="space-y-4 md:space-y-4 py-5" method="POST">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-100 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:outline-gray-200 focus:text-left focus:placeholder:opacity-0"
                  placeholder="آدرس ایمیل"
                  required="true"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-gray-100 text-gray-900 sm:text-sm rounded-md block w-full p-2.5 focus:outline-gray-200 focus:text-left focus:placeholder:opacity-0"
                  placeholder="رمز عبور"
                  required="true"
                />
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-pink-500 w-4 h-4 rounded-4xl border-gray-200"
                  />
                  <babel htmlFor="" className="font-extralight text-sm">
                    اطلاعات کاربری من محفوظ بماند.
                  </babel>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-pink-700 hover:bg-orange-200 trans hover:text-black cursor-pointer rounded-lg text-sm px-5 py-2.5 font-medium text-center"
                >
                  ثبت‌نام
                </button>
                <div className="flex justify-between items-center">
                  <div className="border border-gray-100 w-[40%]"></div>
                  <span className="w-[20%] text-center text-gray-400 text-sm">
                    ثبت نام
                  </span>
                  <div className="border border-gray-100 w-[40%]"></div>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <div className="bg-red-600 p-2 rounded-xl">
                    <FaGoogle size={"20px"} color="white" />
                  </div>
                  <div className="bg-blue-600 p-2 rounded-xl">
                    <FaFacebookF size={"20px"} color="white" />
                  </div>
                  <div className="bg-sky-400 p-2 rounded-xl">
                    <FaTwitter size={"20px"} color="white" />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
