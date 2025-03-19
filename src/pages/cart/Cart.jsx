import { Link } from "react-router-dom";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const data = [
    {id:1,img:'imgs/Wishlists/product11',price:'800000',priceoff:'600000',number:1,title:'رژگونه نارس'},
    {id:2,img:'imgs/Wishlists/product12',price:'800000',priceoff:'600000',number:1,title:'رژگونه نارس'}
]
const Cart = () => {
  return (
    <div className="bg-white">
      <BreadCrunb title="سبدخرید" />
      <div className="container py-20">
        <div className="flex justify-center items-center gap-5 text-2xl font-medium text-gray-600">
            <Link to='/cart' className="text-pink-600 transition duration-300">1. سبد خرید</Link>
            <MdKeyboardArrowLeft className="text-gray-400"/>
            <Link to='/checkout' className="hover:text-pink-600 transition duration-300">2. صورت حساب</Link>
            <MdKeyboardArrowLeft className="text-gray-400"/>
            <Link to='/order' className="hover:text-pink-600 transition duration-300">3. تکمیل خرید</Link>
        </div>
        <div className="grid grid-cols-12 mt-8">
            <div className="col-span-8">
                <table className="table-fixed w-full">
                          <thead className="border-b border-gray-200 text-right hidden lg:table-header-group">
                            <tr className="pb-5">
                              <th className="w-1/2 pb-5">محصول</th>
                              <th className="pb-5">قیمت</th>
                              <th className="pb-5">تعداد</th>
                              <th className="pb-5">قیمت قبل از تخیف</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((product)=>(
                                <tr className="border-b border-gray-200 relative" key={product.id}>
                              <td className="flex items-center gap-2 py-5">
                                <img src="/imgs/Wishlists/product11.jpg" alt="" className="rounded-xl" />
                                <span>{product.title}</span>
                              </td>
                              <td className="font-bold">{product.priceoff} تومان</td>
                              <td className="text-pink-600 gap-2">
                                <div className="flex justify-center items-center border w-[60%] rounded-md overflow-hidden">
                                <button className="border p-2 cursor-pointer" onClick={()=>product.number + 1}>+</button>
                                <span className="border p-2">{product.number}</span>
                                <button className="border p-2 cursor-pointer" onClick={()=>product.number - 1}>-</button>
                                </div>
                              </td>
                              <td className="font-bold">{product.price} تومان</td>
                              <td className="absolute left-8 top-2/5 bg-[#f4bf96] rounded-full"><IoClose className="text-left rounded-full p-1 cursor-pointer" size='30px'/></td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
            </div>
            <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
