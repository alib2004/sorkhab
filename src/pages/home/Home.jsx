import BannerHome from '../../components/bannerHome/BannerHome';
import CategoryHome from '../../components/categoryHome/CategoryHome';
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
        </div>
    );
};

export default Home;