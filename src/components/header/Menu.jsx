import { MdKeyboardArrowDown } from "react-icons/md";
const Menu = () => {
    return (
        <>
        <ul className="flex items-center gap-5 text-sm font-medium">
                <li><a href="#" className=" hover:text-pink-500 trans">صفحه نخست</a></li>
                <li className="relative group py-5"><a href="#" className=" hover:text-pink-500 trans flex items-center">
                    شوینده ها
                    <MdKeyboardArrowDown size={'18px'}/>
                    </a>
                    <ul className="absolute hidden flex-col gap-4 bg-gray-200 py-2 px-3 w-60 rounded-md mt-4 group-hover:flex">
                        <li className="py-2 border-b border-gray-500 text-gray-700 hover:text-pink-600 trans"><a href="#">شامپو</a></li>
                        <li className="py-2 border-b border-gray-500 text-gray-700 hover:text-pink-600 trans"><a href="#">فیس واش</a></li>
                        <li className="py-2 border-b border-gray-500 text-gray-700 hover:text-pink-600 trans"><a href="#">میسلار واتر</a></li>
                        <li className="py-2 border-b border-gray-500 text-gray-700 hover:text-pink-600 trans"><a href="#">شامپو بدن</a></li>
                        <li className="py-2 border-b border-gray-500 text-gray-700 hover:text-pink-600 trans"><a href="#">صابون</a></li>
                        <li className="py-2 border-b border-gray-500 text-gray-700 hover:text-pink-600 trans"><a href="#">نرم کننده مو</a></li>
                    </ul>
                    </li>
                <li><a href="#" className=" hover:text-pink-500 trans">صفحه نخست</a></li>
                <li><a href="#" className=" hover:text-pink-500 trans">صفحه نخست</a></li>
                <li><a href="#" className=" hover:text-pink-500 trans">تماس با ما</a></li>
                <li><a href="#" className=" hover:text-pink-500 trans">درباره ما</a></li>
            </ul>            
        </>
    );
};

export default Menu;