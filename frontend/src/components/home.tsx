import Banner from '../assets/banner.png'
import Produto2 from '../assets/Mask group-2.png'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import Favorite from '../assets/favorite.svg'
import FavoriteHover from '../assets/favorite-hover.svg'
import Edit from '../assets/edit.svg'

import { useState } from 'react'

export function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const isAdmin = true;

    const handleContainerClick = (event) => {
        if (event.target.closest('.icon-button')) {
            event.stopPropagation();
            return
        }

        window.location.href = '/show-product';
    };
    

    return (
        <div>
            <div className='bg-gradient-100 h-28 w-80 sm:h-[170px] sm:w-[630px] md:h-[200px] md:w-[780px] lg:h-[260px] lg:w-[1030px] flex justify-center mx-auto relative mt-[150px] md:mt-[200px] lg:mt-[280px] rounded-md sm:rounded-lg '>
                <div className='absolute -left-6 -top-1 md:-left-12 sm:-top-[63px] md:-top-[98px] lg:-top-[162px]'>
                    <img className='w-44 sm:w-[360px] md:w-[460px] lg:w-[656px]' src={Banner} alt="banner" />
                </div>

                <div className='flex flex-col justify-center items-center gap-2 w-1/2 ml-auto'>
                    <h2 className='text-light-300 text-[15px] md:text-[30px] lg:text-[40px] -ml-4 font-medium font-poppins text-nowrap'>Sabores inigualáveis</h2>
                    <p className='text-light-300 -ml-1.5 text-[10px] md:text-[14px] lg:text-base'>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mx-auto mt-16'>
                <div>
                    <h3 className='text-light-300 font-poppins text-lg sm:text-3xl'>Refeições</h3>
                </div>
                <button onClick={handleContainerClick} className='relative'>
                    <div className={`flex flex-col justify-center items-center bg-dark-200 w-52 sm:w-72 rounded-lg gap-3 sm:gap-[20px] p-6 relative' ${isAdmin && 'py-10'} `}>
                        <img className='w-[88px] h-[88px] sm:w-44 sm:h-44 ' src={Produto2} alt="" />
                        <h4 className='font-poppins text-[14px] sm:text-2xl font-semibold text-light-300'>Spaguetti Gambe</h4>
                        <p className='text-light-400 hidden sm:block text-[14px]'>Massa fresca com camarões e pesto.</p>
                        <p className='text-cake-200 text-base sm:text-[32px]'>R$ 79,97</p>
                        {!isAdmin && (
                            <>
                                <div className='flex items-center gap-4'>
                                    <button><img className='sm:w-6 w-[18px]' src={Minus} alt="icon minus" /></button>
                                    <p className='font-bold text-base sm:text-[20px]'>01</p>
                                    <button><img className='sm:w-6 w-[18px]' src={Plus} alt="icon plus" /></button>
                                </div>
                                <div className='bg-tomato-100 hover:bg-tomato-200 flex items-center justify-center w-full rounded-md px-4 py-1 sm:py-3 sm:px-6'>
                                    <button className='text-base sm:text-xl'>Incluir</button>
                                </div>
                            </>
                        )}
                        {isAdmin ? (
                            <a
                                className='icon-button absolute top-4 right-5'
                                href='/update-product'
                            >
                                <img className='w-5 h-5 sm:w-6 sm:h-6' src={Edit} alt="icon favorite" />
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
                </button>
            </div>
        </div>
    )
}