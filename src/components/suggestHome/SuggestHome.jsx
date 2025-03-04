import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const tabs = [
  {
    id: "popular",
    label: "پرفروش ها",
    content: [
      { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 3, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 4, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 5, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
      { id: 6, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    ],
  },
  { id: "trending", label: "ترندها", content: [
    { id: 1, title: "کرم  ", img: "/imgs/prod1.jpg" },
    { id: 2, title: "کرم ضد ", img: "/imgs/prod1.jpg" },
    { id: 3, title: "کرم ضد ", img: "/imgs/prod1.jpg" },
    { id: 4, title: "کرم ضد ", img: "/imgs/prod1.jpg" },
    { id: 5, title: "کرم ضد ", img: "/imgs/prod1.jpg" },
    { id: 6, title: "کرم ضد ", img: "/imgs/prod1.jpg" },
  ], },
  { id: "special", label: "ویژه ما", content: [
    { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    { id: 3, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    { id: 4, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    { id: 5, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
    { id: 6, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  ], },
];
const SuggestHome = () => {
  const [activeTab, setActiveTab] = useState("popular");
  return (
    <div className="bg-[#F4BF96] py-10">
      <div className="container">
        <span className="special">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-white">
            پیشنهاد سرخاب
          </span>
          <a href="#" className="flex items-center text-lg text-white">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <div className="mt-6">
          {/* تب‌ها */}
          <div className="flex justify-center border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-lg font-medium cursor-pointer ${
                  activeTab === tab.id
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* محتوای تب‌ها */}
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-5 gap-5">
                {tabs.map((tab) =>
              activeTab === tab.id ? (
                  tab.content.map((prod) => (
                      <div className="border-2 bg-white border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col" key={prod.id}>
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
                  ))
                
              ) : null
            )}            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestHome;
