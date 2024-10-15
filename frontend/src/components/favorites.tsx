import Back from '../assets/back.svg'
import { useNavigate } from 'react-router-dom';

import { products } from '../data/';
import { FavoriteCard } from './favorite-card';

export function Favorites() {
    const navigate = useNavigate();

    function backPage() {
        navigate(-1);
    }

    return (
        <div className='flex flex-col items-start mx-auto max-w-[1300px] mt-[150px] px-10 space-y-10'>
            <div className='space-y-4'>
                <button onClick={backPage} className='flex items-center'>
                    <img className='w-8 h-8' src={Back} alt="back" />
                    <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
                </button>
            </div>
            <h1 className='font-poppins text-[32px]'>Meus Favoritos</h1>
            <div className='flex flex-wrap gap-x-12 gap-y-7'>
                {products.map((product, index) => (
                    <FavoriteCard
                        key={index}
                        product={product}
                    />
                ))}

            </div>
        </div>
    )
}