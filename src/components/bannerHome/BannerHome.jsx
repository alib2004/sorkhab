const BannerHome = () => {
    return (
        <div className='bg-white py-10'>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className='relative group'>
                        <img src="/imgs/baner1-1.jpg" alt="" />
                        <img src="/imgs/baner1-2.png" alt="" className='absolute lg:-left-6 top-5 lg:group-hover:scale-110 trans' />
                    </div>
                    <div className='relative group'>
                        <img src="/imgs/baner2-1.jpg" alt="" />
                        <img src="/imgs/baner2-2.png" alt="" className='absolute lg:-left-6 top-5 lg:group-hover:scale-110 trans'  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;