import BannerHome from '../../components/bannerHome/BannerHome';
import BlogsHome from '../../components/BlogsHome/BlogsHome';
import BrandsHome from '../../components/BrandsHome/BrandsHome';
import CategoryHome from '../../components/categoryHome/CategoryHome';
import LastSalesHome from '../../components/lastSaleHome/LastSalesHome';
import OffHome from '../../components/offHome/OffHome';
import Slider1 from '../../components/sliders/Slider1';
import SpecialProducts from '../../components/specialProducts/SpecialProducts';
import TopSales from '../../components/topsaleHome/TopSales';

const Home = () => {
    return (
        <div>
            <Slider1/>
            <SpecialProducts/>
            <CategoryHome/>
            <TopSales/>
            <BannerHome/>
            <BrandsHome/>
            <LastSalesHome/>
            <OffHome/>
            <BlogsHome/>
        </div>
    );
};

export default Home;