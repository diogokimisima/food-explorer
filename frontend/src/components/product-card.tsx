// src/components/ProductCard.tsx
import { useState } from 'react';
import Minus from '../assets/minus.svg';
import Plus from '../assets/plus.svg';
import Favorite from '../assets/favorite.svg';
import FavoriteHover from '../assets/favorite-hover.svg';
import Edit from '../assets/edit.svg';
import { Product } from '../data';

interface ProductCardProps {
    product: Product;
    isAdmin: boolean;
}

export function ProductCard({ product, isAdmin }: ProductCardProps) { 
    const [isHovered, setIsHovered] = useState(false);

    const handleContainerClick = () => {
        window.location.href = '/show-product';
    };

    return (
        <div onClick={handleContainerClick} className='relative h-full'>
            <div className={`flex flex-col justify-center items-center bg-dark-200 w-52 sm:w-72 rounded-lg gap-3 sm:gap-[20px] p-6 sm:min-h-[500px] relative ${isAdmin && 'py-10'}`}>
                <img className='w-[88px] h-[88px] sm:w-44 sm:h-44' src={product.image} alt={product.name} />
                <h4 className='font-poppins text-[14px] sm:text-2xl font-semibold text-light-300'>{product.name}</h4>
                <p className='text-light-400 hidden sm:block text-[14px]'>{product.description}</p>
                <p className='text-cake-200 text-base sm:text-[32px]'>{product.price}</p>
                {!isAdmin && (
                    <>
                        <div className='flex items-center gap-4'>
                            <button><img className='sm:w-6 w-[18px]' src={Minus} alt="icon minus" /></button>
                            <p className='font-bold text-base sm:text-[20px]'>01</p>
                            <button><img className='sm:w-6 w-[18px]' src={Plus} alt="icon plus" /></button>
                        </div>
                        <div className='bg-tomato-100 hover:bg-tomato-200 flex items-center justify-center w-full rounded-md px-4 py-1 sm:py-3 sm:px-6 mt-auto'>
                            <button className='text-base sm:text-xl'>Incluir</button>
                        </div>
                    </>
                )}
                {isAdmin ? (
                    <a className='icon-button absolute top-4 right-5' href='/update-product'>
                        <img className='w-5 h-5 sm:w-6 sm:h-6' src={Edit} alt="icon edit" />
                    </a>
                ) : (
                    <button
                        className='icon-button absolute top-4 right-5'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img className='w-5 h-5 sm:w-6 sm:h-6' src={isHovered ? FavoriteHover : Favorite} alt="icon favorite" />
                    </button>
                )}
            </div>
        </div>
    );
}
