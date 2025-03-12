import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="p-5 text-base flex flex-col gap-10">
      <p>سلام مشتری عزیز (یا مهمان گرامی / خروج)</p>
      <p>
        از داشبورد حساب خود می توانید سفارشات اخیر خود را مشاهده کنید. آدرس های
        حمل و نقل و صورتحساب خود را مدیریت کنید، و رمز عبور و جزئیات حساب خود را
        ویرایش کنید.
      </p>
      <div>
        <Link
          to="/shop"
          className="bg-[#f4bf96] px-8 py-4 rounded-md text-white font-medium inline-flex items-center gap-2"
        >
          رفتن به فروشگاه
          <MdKeyboardDoubleArrowLeft/>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
