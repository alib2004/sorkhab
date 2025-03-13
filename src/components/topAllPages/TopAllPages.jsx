/* eslint-disable react/prop-types */

const TopAllPages = ({toptext,head1,desc}) => {
    return (
        <div className="bg-[url(/imgs/page-header.jpg)] shadow-md shadow-gray-200">
        <div className=' flex flex-col gap-4 py-20 container justify-center items-center'>
            <span className="text-xl font-bold">{toptext}</span>
            <span className="text-4xl font-semibold text-pink-700">{head1}</span>
            <span className="font-medium ">{desc}</span>
        </div>
        </div>
    );
};

export default TopAllPages;