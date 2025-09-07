import { useParams } from 'react-router-dom';
import { products } from '../../products';
import { div } from 'framer-motion/client';
const Product = () => {
    let slug = useParams().slug
    let product = products.find((prod)=>prod.url === slug)
    return (
        <div className='bg-white'>
            <div className='container py-10'>
                <div className="flex justify-between">
                    <div className='border border-gray-400 rounded-md overflow-hidden lg:w-[20%]'>
                        <img src="/public/imgs/prod1.jpg" alt={product.name} />
                    </div>
                    <div className='flex flex-col lg:w-[60%]'>
                        <h1 className='text-2xl'>{product.name}</h1>
                        <div className='flex gap-6 my-3 text-gray-400'>
                            <p>کد کالا : {product.code}</p>
                            <p>دسته بندی : {product.category}</p>
                        </div>
                        <p className='mb-3 text-pink-800 font-bold'>{product.shortDescription}</p>
                        {product.color && (
                            <div>
                                <span className='text-pink-600 font-bold'>رنگ را انتخاب کنید.</span>
                                <div className='flex flex-col gap-1 my-3'>
                                    {product.color.map((color)=>(
                                    <div key={color} className='flex items-center gap-2'>
                                        <input type="radio" name="color" id="color"value={color}/>
                                        <span>{color}</span>
                                    </div>
                                ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className=''>test</div>
                </div>
            </div>
        </div>
    );
};

export default Product;