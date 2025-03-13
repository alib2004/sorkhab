import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import TopAllPages from "../../components/topAllPages/TopAllPages";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

const CartEmpty = () => {
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"سبد خرید خالی"}
        head1={"علی بیغوله"}
        desc={"در زیر سبد خالی را خواهید داشت"}
      />
      <BreadCrunb title="سبدخرید خالی" />
      <div className="container">
        <div className="flex flex-col gap-5 py-20 justify-center items-center">
          <FaShoppingBasket size={"80px"} color="#666" />
          <span className="font-medium">
          هیچ محصولی به سبد خرید اضافه نشده است
          </span>
          <Link
            to="/shop"
            className="bg-[#f4bf96] px-14 py-4 rounded-md text-white font-medium"
          >
            برو به فروشگاه
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
