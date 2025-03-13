import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import TopAllPages from "../../components/topAllPages/TopAllPages";
import { IoClose } from "react-icons/io5";

const Wishlists = () => {
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"لیست مورد علاقه مندی"}
        head1={"علاقه مندی"}
        desc={"در زیر لیست کالاهای مورد علاقه مندی را خواهید داشت"}
      />
      <BreadCrunb title="علاقه مندی" />
      <div className="container py-20 hidden md:block">
        <table className="table-fixed w-full">
          <thead className="border-b border-gray-200 text-right hidden lg:table-header-group">
            <tr className="pb-5">
              <th className="w-1/2 pb-5">محصول</th>
              <th className="pb-5">قیمت</th>
              <th className="pb-5">موجود در انبار</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 relative">
              <td className="flex items-center gap-2 py-5">
                <img src="/imgs/Wishlists/product11.jpg" alt="" className="rounded-xl" />
                <span>رژگونه نارس</span>
              </td>
              <td className="font-bold">800،000 تومان</td>
              <td className="text-pink-600">25 عدد در انبار</td>
              <td><a href="#" className="bg-pink-700 text-white px-7 py-3 rounded-xl">مشاهده و انتخاب</a></td>
              <td className="absolute left-8 top-2/5"><IoClose className="text-left border border-gray-200 rounded-full p-1 cursor-pointer" size='30px'/></td>
            </tr>
            <tr className="border-b border-gray-200 relative">
              <td className="flex items-center gap-2 py-5">
                <img src="/imgs/Wishlists/product12.jpg" alt="" className="rounded-xl" />
                <span>کرم پودر مک</span>
              </td>
              <td className="font-bold">800،000 تومان</td>
              <td className="text-pink-600">30 عدد در انبار</td>
              <td><a href="#" className="bg-pink-700 text-white px-7 py-3 rounded-xl">مشاهده و انتخاب</a></td>
              <td className="absolute left-8 top-2/5"><IoClose className="text-left border border-gray-200 rounded-full p-1 cursor-pointer" size='30px'/></td>
            </tr>
            <tr className="border-b border-gray-200 relative">
              <td className="flex items-center gap-2 py-5">
                <img src="/imgs/Wishlists/product13.jpg" alt="" className="rounded-xl" />
                <span>کانتو هدی بیوتی</span>
              </td>
              <td className="font-bold">800،000 تومان</td>
              <td className="text-pink-600">موجود نیست</td>
              <td><a href="#" className="bg-pink-700 text-white px-7 py-3 rounded-xl">مشاهده و انتخاب</a></td>
              <td className="absolute left-8 top-2/5"><IoClose className="text-left border border-gray-200 rounded-full p-1 cursor-pointer" size='30px'/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container py-10 md:hidden">
        <div className="border  border-gray-300">
            <div className="flex flex-col gap-2 relative items-center py-10 border-b border-gray-300">
                <img src="/imgs/Wishlists/product11.jpg" alt="" className="w-28 rounded-xl"/>
                <h2>رژگونه نارس</h2>
                <span className="font-bold">800،000 تومان</span>
                <span className="text-pink-600">25 عدد در انبار</span>
                <a href="#" className="bg-pink-700 text-white px-5 py-2 rounded-md">مشاهده و انتخاب</a>
                <span className="absolute left-6 top-5"><IoClose className="text-left border border-gray-200 rounded-full p-1 cursor-pointer" size='25px'/></span>
            </div>
            <div className="flex flex-col gap-2 relative items-center py-10 border-b border-gray-300">
                <img src="/imgs/Wishlists/product12.jpg" alt="" className="w-28 rounded-xl"/>
                <h2>کرم پودر مک</h2>
                <span className="font-bold">800،000 تومان</span>
                <span className="text-pink-600">30 عدد در انبار</span>
                <a href="#" className="bg-pink-700 text-white px-5 py-2 rounded-md">مشاهده و انتخاب</a>
                <span className="absolute left-6 top-5"><IoClose className="text-left border border-gray-200 rounded-full p-1 cursor-pointer" size='25px'/></span>
            </div>
            <div className="flex flex-col gap-2 relative items-center py-10 border-b border-gray-300">
                <img src="/imgs/Wishlists/product13.jpg" alt="" className="w-28 rounded-xl"/>
                <h2>کانتو هدی بیوتی</h2>
                <span className="font-bold">800،000 تومان</span>
                <span className="text-pink-600">موجود نیست</span>
                <a href="#" className="bg-pink-700 text-white px-5 py-2 rounded-md">مشاهده و انتخاب</a>
                <span className="absolute left-6 top-5"><IoClose className="text-left border border-gray-200 rounded-full p-1 cursor-pointer" size='25px'/></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlists;
