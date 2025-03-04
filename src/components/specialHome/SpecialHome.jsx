import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const category = [
  {
    id: 1,
    name: "مراقبت از بدن",
    content: [
      { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 3, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 4, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    ],
  },
  {
    id: 2,
    name: "لوازم آرایشی",
    content: [
      { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 3, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    ],
  },
  {
    id: 3,
    name: "محصولات زیبایی",
    content: [
      { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    ],
  },
  {
    id: 4,
    name: "عطر و ادکُلن",
    content: [{ id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" }],
  },
];
const SpecialHome = () => {
  const [select, setSelect] = useState(1);

  return (
    <div className=" bg-[url(/imgs/bg-shape1.png)] py-10">
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
          <div className="col-span-12 lg:col-span-3 bg-[#FFF5F5] rounded-2xl border border-gray-200 shadow-md h-full">
            <ul className=" p-5">
              {category.map((cat) => (
                <li
                  className="py-4 border-b border-gray-400 transition duration-300 hover:border-pink-500 hover:text-pink-500 cursor-pointer"
                  key={cat.id}
                  onClick={() => setSelect(cat.id)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {category.map((cats) =>
                select === cats.id
                  ? cats.content.map((cont) => (
                      <div
                        className="border-2 bg-white border-gray-200 rounded-2xl overflow-hidden shadow-xl flex flex-col"
                        key={cont.id}
                      >
                        <img src={cont.img} alt="" className="" />
                        <div className="flex flex-col justify-center items-center py-5 gap-1">
                          <a href="#" className="text-xs">
                            آرایشی
                          </a>
                          <a
                            href="#"
                            className="text-md font-light hover:text-pink-600 trans"
                          >
                            {cont.title}
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
                    ))
                  : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialHome;
