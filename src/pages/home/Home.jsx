import BannerHome from '../../components/bannerHome/BannerHome';
import BlogsHome from '../../components/BlogsHome/BlogsHome';
import BrandsHome from '../../components/BrandsHome/BrandsHome';
import CategoryHome from '../../components/categoryHome/CategoryHome';
import LastSalesHome from '../../components/lastSaleHome/LastSalesHome';
import OffHome from '../../components/offHome/OffHome';
import Slider1 from '../../components/sliders/Slider1';
import SpecialHome from '../../components/specialHome/SpecialHome';
import SpecialProducts from '../../components/specialProducts/SpecialProducts';
import SuggestHome from '../../components/suggestHome/SuggestHome';
import TopSales from '../../components/topsaleHome/TopSales';
import TopsalesHomeLast from '../../components/topsalesHomeLast/topsalesHomeLast';

const Home = () => {
    return (
        <div>
            <Slider1/>
            <SpecialProducts/>
            <CategoryHome/>
            <TopSales/>
            <BannerHome/>
            <SpecialHome/>
            <BrandsHome/>
            <SuggestHome/>
            <LastSalesHome/>
            <TopsalesHomeLast/>
            <OffHome/>
            <BlogsHome/>
        </div>
    );
};

export default Home;