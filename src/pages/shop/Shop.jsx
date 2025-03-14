import TopAllPages from "../../components/topAllPages/TopAllPages";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { div, li } from "framer-motion/client";
const filters = [
  { id: 1, title: "آرایشی" },
  { id: 2, title: "چشم" },
  { id: 3, title: "شوینده" },
  { id: 4, title: "پوست" },
  { id: 5, title: "لب" },
];
const selectsFilter = [
  {
    id: 1,
    title: "سایزبندی",
    list: [
      {
        id: 1,
        title: "کوچک",
      },
      {
        id: 2,
        title: "متوسط",
      },
      {
        id: 3,
        title: "بزرگ",
      },
    ],
  },
  {
    id: 2,
    title: "رنگ بندی",
    list: [
      {
        id: 1,
        title: "مات",
      },
      {
        id: 2,
        title: "درخشان",
      },
      {
        id: 3,
        title: "سرد",
      },
      {
        id: 4,
        title: "گرم",
      }
    ],
  },
  {
    id: 3,
    title: "برند",
    list: [
      {
        id: 1,
        title: "هدی بیوتی",
      },
      {
        id: 2,
        title: "کایلی",
      },
      {
        id: 3,
        title: "شیگلم",
      },
      {
        id: 4,
        title: "لدورا",
      },
    ],
  },
];
const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState(false);
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"خوش آمدید به وبسایت سرخاب"}
        head1={"لیست کالاها"}
        desc={"کالای خود را انتخاب کنید"}
      />
      <BreadCrunb title={"فروشگاه"} />
      <div className="container py-20">
        <div className="flex">
          <div className="w-[30%] bg-[#fcf5ed] p-6 rounded-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setCategoryFilter(!categoryFilter)}
            >
              <span className="font-bold text-base">دسته بندی محصولات</span>
              {categoryFilter ? <FaMinus /> : <FaPlus />}
            </div>
            {categoryFilter ? (
              <ul className=" transition duration-300 mt-2">
                {filters.map((cat) => (
                  <li key={cat.id} className="border-b border-gray-200 py-3">
                    <a href="#">{cat.title}</a>
                  </li>
                ))}
              </ul>
            ) : null}
            {selectsFilter.map((filter) => (
              <div key={filter.id} className="py-5">
                <div
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="font-bold text-base">{filter.title}</span>
                  {categoryFilter ? <FaMinus /> : <FaPlus />}
                </div>
                <ul className="mt-5">
                    {filter.list.map((item)=>(
                        <li key={item.id} className="flex items-center gap-2 border-b border-gray-200 py-3 text-sm">
                            <input type="checkbox"  name="" id="" className="w-5 h-5 accent-transparent bg-transparent"/>
                            
                            <label htmlFor="">{item.title}</label>
                        </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
