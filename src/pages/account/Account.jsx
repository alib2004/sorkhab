import TopAllPages from "../../components/topAllPages/TopAllPages";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Account/Dashboard";
import Tracking from "../../components/Account/Tracking";
import Orders from "../../components/Account/Orders";
import Downloads from "../../components/Account/Downloads";
import Address from "../../components/Account/Address";
import Accounts from "../../components/Account/Account";
const Account = () => {
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"حساب کاربری"}
        head1={"علی بیغوله"}
        desc={"در زیر اطلاعاتی در موردحساب کاربریتان خواهید داشت"}
      />
      <BreadCrunb title={"حساب کاربری"} />
      <div className="container py-20">
        <div className="py-10 shadow-2xl border border-gray-300 rounded-lg">
          <h1 className="text-center font-black text-3xl mb-5">حساب کاربری</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col bg-[#FCF5ED] lg:w-[25%] p-5 rounded-lg lg:mr-1">
              <ul className="flex flex-col font-medium text-lg">
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/dashboard">داشبورد</Link>
                </li>
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/tracking">پیگیری سفارش</Link>
                </li>
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/order">سفارشات</Link>
                </li>
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/downloads">دانلود</Link>
                </li>
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/address">آدرس</Link>
                </li>
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/account">جزئیات کاربری</Link>
                </li>
                <li className="border-b border-gray-300 py-4">
                  <Link to="/my-account/logout">خروج</Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="tracking" element={<Tracking />} />
                <Route path="order" element={<Orders />} />
                <Route path="downloads" element={<Downloads />} />
                <Route path="address" element={<Address />} />
                <Route path="account" element={<Accounts />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
