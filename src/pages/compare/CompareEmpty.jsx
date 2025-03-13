import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import TopAllPages from "../../components/topAllPages/TopAllPages";
import { Link } from "react-router-dom";
import { GiScales } from "react-icons/gi";
const CompareEmpty = () => {
    return (
        <div className="bg-white">
        <TopAllPages
          toptext={"خوش آمدید به وبسایت سرخاب"}
          head1={"مقایسه - خالی"}
          desc={""}
        />
        <BreadCrunb title="سبدخرید خالی" />
        <div className="container">
          <div className="flex flex-col gap-5 py-20 justify-center items-center">
            <GiScales size={"80px"} color="#666" />
            <span className="font-medium">
            هیچ محصولی به مقایسه اضافه نشده است
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

export default CompareEmpty;