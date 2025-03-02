import { useState } from "react";
import "./CategoryHome.css";
import category from "../../data";
const CategoryHome = () => {
  const [cat] = useState(category)
  console.log(cat);
  
  return (
    <div className="categoryHome bg-gray-100 py-10">
      <div className="container">
        <span className="special">منو</span>
        <span className="pt-4 text-4xl block font-bold">دسته بندی ها</span>
        <div className="grid grid-cols-2 lg:grid-cols-6 mt-5 gap-5">
            {cat.map((item)=>(
                <div className="flex flex-col items-center gap-y-3" key={item.id}>
            <div className="shadow bg-white p-5 rounded-2xl flex justify-center trans group overflow-hidden">
              <img
                src={item.img}
                alt=""
                className="w-2/3 group-hover:-translate-y-3 trans"
              />
            </div>
              <span className="font-bold text-xl">{item.title}</span>
          </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
