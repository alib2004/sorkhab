import TopAllPages from "../../components/topAllPages/TopAllPages";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"خوش آمدید به وبسایت سرخاب"}
        head1={"صفحه ای یافت نشد"}
        desc={"ظاهرا صفحه ای پیدا نشده است یا آدرس اشتباه است"}
      />
      <BreadCrunb title={"صفحه 404"} />
      <div className="container py-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl">خطا 404</h1>
          <img src="/imgs/404.png" alt="" className="w-1/2" />
          <span className="font-bold text-2xl">صفحه ای یافت نشد.</span>
          <span className="font-medium">
            ظاهرا صفحه ای پیدا نشده است یا آدرس اشتباه است.
          </span>
          <Link
            to="/"
            className="bg-[#f4bf96] px-14 py-4 rounded-md text-white font-medium"
          >
            صفحه نخست
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
