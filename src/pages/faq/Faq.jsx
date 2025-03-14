/* eslint-disable react/no-unescaped-entities */
import TopAllPages from "../../components/topAllPages/TopAllPages";
import BreadCrunb from "../../components/breadcrumb/BreadCrunb";

const Faq = () => {
  return (
    <div className="bg-white">
      <TopAllPages
        toptext={"faq"}
        head1={"سوالات متداول"}
        desc={"در زیر اطلاعاتی در مورد خدمات سایت خواهید داشت ."}
      />
      <BreadCrunb title={"سوالات متداول"} />
      <div className="container py-20">
        <span className="font-bold text-3xl pb-5 block">سفارش</span>
        <div className="mb-16">
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            چگونه می‌توانم سفارش خود را ثبت کنم؟
            </div>
            <div className="collapse-content text-sm">
            برای ثبت سفارش، محصولات مورد نظر خود را به سبد خرید اضافه کرده و پس از ورود به حساب کاربری، مراحل پرداخت و تکمیل سفارش را دنبال کنید.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            زمان تحویل سفارش‌ها چقدر است؟
            </div>
            <div className="collapse-content text-sm">
            زمان تحویل بسته به مکان شما متفاوت است؛ معمولاً سفارش‌ها طی ۲ تا ۵ روز کاری به دست شما می‌رسند.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            آیا امکان لغو یا تغییر سفارش پس از ثبت آن وجود دارد؟
            </div>
            <div className="collapse-content text-sm">
            بله، در صورتی که سفارش شما هنوز ارسال نشده باشد، می‌توانید با تیم پشتیبانی تماس گرفته و درخواست لغو یا تغییر دهید.
            </div>
          </div>
        </div>
        <span className="font-bold text-3xl pb-5 block">پرداخت</span>
        <div className="mb-16">
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            روش‌های پرداخت در قالب سرخاب چیست؟
            </div>
            <div className="collapse-content text-sm">
            می‌توانید از روش‌های پرداخت آنلاین، کارت به کارت و پرداخت در محل (در شهرهای منتخب) استفاده کنید.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            چگونه می‌توانم سفارش خود را پیگیری کنم؟
            </div>
            <div className="collapse-content text-sm">
            پس از ثبت سفارش، کد پیگیری برای شما ارسال می‌شود. با مراجعه به صفحه پیگیری سفارش و وارد کردن این کد، می‌توانید وضعیت سفارش خود را مشاهده کنید.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            آیا امکان بازگشت یا تعویض کالا وجود دارد؟
            </div>
            <div className="collapse-content text-sm">
            بله، در صورت عدم رضایت یا وجود مشکل در محصول، می‌توانید طی ۷ روز پس از دریافت کالا درخواست بازگشت یا تعویض دهید.
            </div>
          </div>
        </div>
        <span className="font-bold text-3xl pb-5 block">بازگشت کالا</span>
        <div className="mb-16">
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            شرایط بازگشت کالا چیست؟
            </div>
            <div className="collapse-content text-sm">
            کالا باید در حالت اولیه و بدون استفاده باشد و تمامی بسته‌بندی‌ها و برچسب‌ها حفظ شده باشند.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            آیا ارسال به سراسر کشور انجام می‌شود؟
            </div>
            <div className="collapse-content text-sm">
            بله، ارسال به تمامی نقاط کشور امکان‌پذیر است.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            هزینه ارسال چگونه محاسبه می‌شود؟
            </div>
            <div className="collapse-content text-sm">
            هزینه ارسال بر اساس وزن، ابعاد بسته و محل دریافت محاسبه شده و در زمان نهایی کردن خرید به شما نمایش داده می‌شود.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            اگر محصولی که دریافت کرده‌ام با سفارش من مطابقت نداشت، چه کار کنم؟
            </div>
            <div className="collapse-content text-sm">
            لطفاً با بخش پشتیبانی تماس بگیرید تا راهنمایی لازم جهت بازگشت یا تعویض کالا به شما ارائه شود.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            آیا محصولات دارای گارانتی هستند؟
            </div>
            <div className="collapse-content text-sm">
            بله، برخی از محصولات شامل گارانتی کیفیت می‌باشند. لطفاً جزئیات گارانتی هر محصول را در صفحه آن بررسی کنید.
            </div>
          </div>
        </div>
        <span className="font-bold text-3xl pb-5 block">رمز عبور</span>
        <div className="mb-16">
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            چگونه می‌توانم رمز عبور حساب کاربری خود را تغییر دهم؟
            </div>
            <div className="collapse-content text-sm">
            از بخش "حساب کاربری" به گزینه "تغییر رمز عبور" بروید و رمز جدید خود را وارد کنید.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            چگونه کد تخفیف اضافه کنیم؟
            </div>
            <div className="collapse-content text-sm">
            در صفحه سبد خرید، گزینه "اعمال کوپن تخفیف" را بیابید و کد تخفیف را وارد کنید. سپس مبلغ تخفیف به صورت خودکار اعمال می‌شود.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            آیا می‌توانم سفارش خود را بدون ثبت‌نام در سایت ثبت کنم؟
            </div>
            <div className="collapse-content text-sm">
            بله، امکان خرید به عنوان مهمان وجود دارد، اما توصیه می‌کنیم ثبت‌نام کنید تا بتوانید از امکانات بیشتر مانند پیگیری سفارش استفاده کنید.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-gray-200 border mb-2">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold text-pink-600 text-xl">
            چگونه می‌توانم کد تخفیف دریافت کنم؟
            </div>
            <div className="collapse-content text-sm">
            کدهای تخفیف از طریق ایمیل، شبکه‌های اجتماعی و همچنین مناسبت‌های خاص در سایت اعلام می‌شوند.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
