import Banner from '../assets/banner.png'
import Produto2 from '../assets/Mask group-2.png'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import Favorite from '../assets/favorite.svg'
import FavoriteHover from '../assets/favorite-hover.svg'

import { useState } from 'react'

export function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className='bg-gradient-100 h-[260px] w-[1120px] flex justify-center mx-auto relative mt-[280px] rounded-lg '>
                <div className='absolute -left-12 -top-[146px]'>
                    <img src={Banner} alt="banner" />
                </div>

                <div className='flex flex-col justify-center items-center gap-2 w-1/2 ml-auto'>
                    <h2 className='text-light-300 text-[40px] font-medium font-poppins '>Sabores inigualáveis</h2>
                    <p className='text-light-300 text-base'>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mx-auto mt-16'>
                <div>
                    <h3 className='text-light-300 font-poppins text-3xl'>Refeições</h3>
                </div>
                <div className=''>
                    <div className='flex flex-col justify-center items-center bg-dark-200 w-72 rounded-lg gap-[15px] p-6 relative'>
                        <img className='w-44 h-44 ' src={Produto2} alt="" />
                        <h4 className='font-poppins text-2xl font-semibold text-light-300'>Spaguetti Gambe</h4>
                        <p className='text-light-400 text-[14px]'>Massa fresca com camarões e pesto.</p>
                        <p className='text-cake-200 text-[32px]'>R$ 79,97</p>
                        <div className='flex items-center gap-4'>
                            <button><img src={Minus} alt="icon minus" /></button>
                            <p className='font-bold text-[20px]'>01</p>
                            <button><img src={Plus} alt="icon plus" /></button>
                            <div className='bg-tomato-100 hover:bg-tomato-200 transition duration-200 ease-in-out rounded-md py-3 px-6'>
                                <button className=''>Incluir</button>
                            </div>
                        </div>
                        <button 
                            className='absolute top-4 right-5'
                            onMouseEnter={() => setIsHovered(true)}  
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img className='w-6 h-6 ' src={isHovered ? FavoriteHover : Favorite} alt="icon favorite" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}