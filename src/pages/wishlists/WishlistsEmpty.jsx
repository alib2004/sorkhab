import { Link } from 'react-router-dom';
import BreadCrunb from '../../components/breadcrumb/BreadCrunb';
import TopAllPages from '../../components/topAllPages/TopAllPages';
import { FaRegHeart } from "react-icons/fa";

const WishlistsEmpty = () => {
    return (
        <div className='bg-white'>
            <TopAllPages toptext={'لیست مورد علاقه مندی'} head1={' خالی'} desc={'در زیر لیست کالاهای مورد علاقه مندی را خواهید داشت'}/>
            <BreadCrunb title={'علاقه مندی خالی'}/>
            <div className="container">
            <div className="flex flex-col gap-5 py-20 justify-center items-center">
                <FaRegHeart size={'80px'} color='#666'/>
                <span className='font-medium'>هیچ محصولی به لیست اضافه نشده است .</span>
                <Link to='/shop' className='bg-[#f4bf96] px-14 py-4 rounded-md text-white font-medium'>برو  به فروشگاه</Link>
            </div>
            </div>
            
        </div>
)};

export default WishlistsEmpty;