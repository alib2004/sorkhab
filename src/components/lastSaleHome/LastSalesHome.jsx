import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const LastSalesHome = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container">
        <span className="special">ویژه</span>
        <br />
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-4xl block font-bold text-black">
            فروش آخر فصل
          </span>
          <a href="#" className="flex items-center text-lg text-black">
            مشاهده همه
            <MdKeyboardDoubleArrowLeft />
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-center mt-6">
          <img src="/imgs/baner7.jpg" alt="" className="w-full rounded-md" />
          <img src="/imgs/baner8.jpg" alt="" className="w-full rounded-md" />
          <img src="/imgs/baner9.jpg" alt="" className="w-full rounded-md" />
          <img src="/imgs/baner10.jpg" alt="" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default LastSalesHome;
