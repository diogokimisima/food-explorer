import Back from '../assets/back.svg'
import { useNavigate } from 'react-router-dom';

import { OrderCard } from './order-card'
import { products } from '../data/';

export function Order() {
    const navigate = useNavigate();

    function backPage() {
        navigate(-1);
    }

    const total = products.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className='flex flex-col items-start mx-auto max-w-[1300px] mt-[150px] px-10 space-y-10'>
            <div className='space-y-4'>
                <button onClick={backPage} className='flex items-center'>
                    <img className='w-8 h-8' src={Back} alt="back" />
                    <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
                </button>
            </div>
            <h1 className='font-poppins text-[32px]'>Meu pedido</h1>
            <div className='flex flex-wrap gap-x-12 gap-y-7'>
                {products.map((product, index) => (
                    <OrderCard
                        key={index}
                        product={product}
                    />
                ))}

            </div>

            <p className='font-poppins text-[20px]'>Total: R$ {total.toFixed(2).replace('.', ',')}</p>

            <button className='font-poppins text-[14px] px-20 py-3 bg-tomato-200 rounded-md'>Avançar</button>
        </div>
    )
}