const Tracking = () => {
  return (
    <div className="p-5 text-base flex flex-col gap-10">
      <h1>وضعیت سفارش خود را پیگیری کنید</h1>
      <p>
        کافی است شماره موبایل و شماره سفارش خود را در کادر زیر وارد کنید تا
        آخرین وضعیت سفارش به شما نمایش داده شود
      </p>
      <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-right text-lg font-medium text-gray-800 mb-4">
          بررسی وضعیت سفارش
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              شماره موبایل
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              شماره سفارش
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <button className=" px-6  bg-[#f4bf96] text-white py-3 rounded-lg transition">
            بررسی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
