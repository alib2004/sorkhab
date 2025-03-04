import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const products = [
  { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 3, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 4, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 5, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 6, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
];
const TopsalesHomeLast = () => {
  return (
    <div className=" bg-[#F4BF96] py-10">
      <div className="container">
        <span className="special">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-black">
            دسته های برتر
          </span>
          <a href="#" className="flex items-center text-lg text-black">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 gap-5">
          <div className="col-span-12 lg:col-span-4 relative">
            <img src="/imgs/g-3.png" alt="" className="h-full object-cover rounded-2xl" />
            <span className="absolute bottom-56 right-5 text-white text-sm">رویداد ویژه</span>
            <span className="absolute bottom-44 right-5 text-white text-3xl font-bold">فروش میان فصل</span>
            <span className="absolute bottom-32 right-5 text-white text-xl">تا 20% تخفیف</span>
            <a href="#" className="absolute bottom-5 right-5 flex border items-center gap-1 border-white text-white py-3 px-5 rounded-xl hover:text-pink-500 hover:bg-white transition duration-300">
                مشاهده و انتخاب
                <MdKeyboardDoubleArrowLeft/>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {products.map((prod) =>
                      <div
                        className="border-2 bg-white border-gray-200 rounded-2xl overflow-hidden shadow-xl flex flex-col"
                        key={prod.id}
                      >
                        <img src={prod.img} alt="" className="" />
                        <div className="flex flex-col justify-center items-center py-5 gap-1">
                          <a href="#" className="text-xs">
                            آرایشی
                          </a>
                          <a
                            href="#"
                            className="text-md font-light hover:text-pink-600 trans"
                          >
                            {prod.title}
                          </a>
                          <span className="font-bold text-xl">
                            200،000 تومان
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="flex text-yellow-500">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                            <span className="text-sm font-thin">
                              (از 17 نظر)
                            </span>
                          </div>
                          <a
                            href="#"
                            className="absolute top-[18rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300"
                          >
                            مشاهده و خرید
                          </a>
                        </div>
                      </div>
                    )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopsalesHomeLast;
