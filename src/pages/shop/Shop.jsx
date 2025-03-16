import TopAllPages from "../../components/topAllPages/TopAllPages";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import "swiper/css";
import { FaStar } from "react-icons/fa";
const selectProducts = [
  { id: 1, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 2, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 3, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 4, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 5, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 6, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 7, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 8, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
  { id: 9, title: "کرم ضد آفتاب", img: "/imgs/prod1.jpg" },
];
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
      },
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
  const [numprod, setNumprod] = useState(6);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(numprod);
    console.log(selectProducts.length);
    console.log(products.length);
    
    
    setProducts(selectProducts.slice(0, numprod));
  }, [numprod, products.length]);
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
          <div className="w-[30%] bg-[#fcf5ed] p-6 rounded-md hidden md:block">
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
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="font-bold text-base">{filter.title}</span>
                  {categoryFilter ? <FaMinus /> : <FaPlus />}
                </div>
                <ul className="mt-5">
                  {filter.list.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-2 border-b border-gray-200 py-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-5 h-5 accent-transparent bg-transparent"
                      />

                      <label htmlFor="">{item.title}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[70%] p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-bold block md:hidden text-pink-600 border px-6 rounded-md py-2 border-pink-600 cursor-pointer hover:text-white hover:bg-pink-600 duration-300 transition">فیلتر</span>
                <span className="font-bold hidden md:block">ترتیب نمایش :</span>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 p-1 rounded-md outline-0"
                >
                  <option value="">پیش فرض</option>
                  <option value="">پرفروش ترین‌ها</option>
                  <option value="">جدید ترین‌ها</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold hidden md:block">تعداد محصول :</span>
                <select
                  name=""
                  id=""
                  className="border border-gray-300 p-1 rounded-md outline-0"
                >
                  <option value="">12</option>
                  <option value="">24</option>
                  <option value="">36</option>
                </select>
                <IoGrid size={"25px"} className="hidden md:block"/>
                <CiGrid2H size={"30px"} className="hidden md:block" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 gap-5">
              <div className="col-span-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {products.map((prod) => (
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
                        <span className="font-bold text-xl">200،000 تومان</span>
                        <div className="flex items-center gap-3">
                          <div className="flex text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <span className="text-sm font-thin">(از 17 نظر)</span>
                        </div>
                        <a
                          href="#"
                          className="absolute top-[18rem] bg-pink-300 hover:bg-pink-600 trans text-center w-full left-0 p-2 hidden group-hover:block transition duration-300"
                        >
                          مشاهده و خرید
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {numprod < selectProducts.length ? 
              <button type="button" className="block m-auto bg-pink-600 cursor-pointer px-6 py-2 rounded-xl mt-5 text-white" onClick={()=> setNumprod(numprod + 3)}>بیشتر</button>
            : 
              null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
