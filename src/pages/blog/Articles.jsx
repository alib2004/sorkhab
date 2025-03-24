import BreadCrunb from "../../components/breadcrumb/BreadCrunb";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const blogs = [
  {
    id: 1,
    img: "/imgs/blogs/1_lg.jpg",
    title: "چطور سلامت روان می‌تواند بر زیبایی ظاهری شما تأثیر بگذارد",
    dec: "زیبایی ظاهری معمولاً با مراقبت‌های پوستی و آرایش مرتبط است، اما حقیقت این است که سلامت روان و احساسات درونی تأثیر زیادی بر ظاهر شما دارند. در این مقاله، به بررسی ارتباط بین روان و زیبایی خواهیم پرداخت و نکاتی برای تقویت اعتماد به نفس و آرامش درونی ارائه خواهیم کرد که می‌تواند به زیبایی ظاهری شما افزوده کند. مراقبت‌های روزانه که نتایج شگفت‌انگیز به همراه دارد .",
  },
  {
    id: 1,
    img: "/imgs/blogs/2_lg.jpg",
    title: "۵ ماده طبیعی که زیبایی شما را دوچندان می‌کند",
    dec: "امروزه بسیاری از افراد به جای استفاده از محصولات شیمیایی، به مواد طبیعی روی آورده‌اند تا از زیبایی خود محافظت کنند. در این مقاله، به بررسی پنج ماده طبیعی می‌پردازیم که می‌توانند تأثیرات شگفت‌انگیزی بر سلامت و زیبایی پوست و مو داشته باشند. از روغن‌های طبیعی تا گیاهان دارویی، این مواد می‌توانند گزینه‌های عالی برای داشتن زیبایی طبیعی باشند.",
  },
  {
    id: 1,
    img: "/imgs/blogs/3_lg.jpg",
    title: "بهترین غذاها برای داشتن پوست و موهای سالم",
    dec: "زیبایی فقط به مراقبت‌های بیرونی محدود نمی‌شود، بلکه رژیم غذایی شما نیز تأثیر زیادی بر سلامت پوست و مو دارد. در این مقاله، به بررسی مواد غذایی خواهیم پرداخت که به طور خاص برای تقویت پوست، مو و ناخن‌ها مفید هستند. با افزودن این غذاها به رژیم غذایی خود، می‌توانید زیبایی درونی خود را از طریق تغذیه به شکلی طبیعی افزایش دهید.",
  },
];
const Articles = () => {
  return (
    <div className="bg-white">
      <BreadCrunb title={"مقالات"} />
      <div className="container py-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-9">
            {blogs.map((blog) => (
              <div className="blog flex flex-col gap-2 mb-8" key={blog.id}>
                <div className="overflow-hidden w-full rounded-lg ">
                  <img
                    src={blog.img}
                    alt=""
                    className="hover:scale-110 duration-300 transition w-full"
                  />
                </div>
                <div className="flex gap-3">
                  <p className="text-gray-600">
                    نویسنده :{" "}
                    <span className="font-bold text-black">علی بیغوله</span>
                  </p>
                  <p className="text-gray-600">
                    تاریخ :{" "}
                    <span className="font-bold text-black">1404/01/13</span>
                  </p>
                  <p>
                    {" "}
                    3 <span>نظر</span>
                  </p>
                </div>
                <h2 className="font-semibold lg:text-3xl">{blog.title}</h2>
                <p className="lg:text-base text-gray-600 leading-8 line-clamp-3">{blog.dec}</p>
                <Link
                  to="/blog-single"
                  className="inline-flex w-[125px] rounded-lg px-4 py-2 bg-white items-center gap-2 text-pink-600 font-bold border-b border-white hover:border-b hover:border-pink-600 transition duration-300"
                >
                  ادامه مطلب
                  <MdKeyboardDoubleArrowLeft />
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:col-span-3 lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
