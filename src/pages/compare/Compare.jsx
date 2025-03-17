import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import TopAllPages from "../../components/topAllPages/TopAllPages";

const Compare = () => {
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"خوش آمدید به وبسایت سرخاب"}
        head1={"مقایسه ها"}
        desc={"جایگاه محصول رابا قرار گرفتن بروی محصول تغییر دهید"}
      />
      <BreadCrunb title="مقایسه" />
      <div className="container py-20"></div>
    </div>
  );
};

export default Compare;
