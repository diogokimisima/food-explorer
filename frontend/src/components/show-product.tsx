import { Link, useNavigate } from 'react-router-dom';
import Back from '../assets/back.svg'
import Produto from '../assets/Mask group-3.png'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import iconPedido from '../assets/pedido.svg'

export function ShowProduct() {
    const navigate = useNavigate();
    const isAdmin = false;

    function backPage() {
        navigate(-1);
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-start max-w-[1220px] gap-7 mt-[130px] lg:mt-[180px] mx-auto px-14 md:px-32 lg:px-0">
                <div className='space-y-4'>
                    <button onClick={backPage} className='flex items-center'>
                        <img className='w-8 h-8' src={Back} alt="back" />
                        <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
                    </button>
                </div>
                <div className='flex justify-center fle-col flex-wrap lg:flex-nowrap gap-x-10 gap-y-4'>
                    <img className='h-64 w-64 md:h-80 md:w-80 lg:h-[400px] lg:w-[400px]' src={Produto} alt="produto" />
                    <div className='flex justify-center items-center mx-auto lg:items-baseline flex-col gap-6 flex-grow'>
                        <h2 className='font-poppins text-[26px] md:text-[32px] lg:text-[40px] font-bold'>Salada Ravanello</h2>
                        <p className='font-poppins text-center lg:text-left text-base md:text-xl lg:text-2xl font-light leading-9'>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <div className='flex justify-center flex-wrap gap-4'>
                            <p className='bg-dark-1000 py-1 px-2 rounded-md'>alface</p>
                            <p className='bg-dark-1000 py-1 px-2 rounded-md'>cebola</p>
                            <p className='bg-dark-1000 py-1 px-2 rounded-md'>pão naan</p>
                            <p className='bg-dark-1000 py-1 px-2 rounded-md'>pepino</p>
                            <p className='bg-dark-1000 py-1 px-2 rounded-md'>rabanete</p>
                            <p className='bg-dark-1000 py-1 px-2 rounded-md'>tomate</p>
                        </div>
                        {!isAdmin ? (
                            <div className="flex items-center gap-4 lg:gap-8 mt-4 w-full">
                                <div className="flex items-center gap-4">
                                    <button>
                                        <img
                                            className="w-7 h-7 object-cover flex-shrink-0"
                                            src={Minus}
                                            alt="icon minus"
                                        />
                                    </button>
                                    <p className="font-bold text-[22px]">01</p>
                                    <button>
                                        <img
                                            className="w-7 h-7 object-cover flex-shrink-0"
                                            src={Plus}
                                            alt="icon plus"
                                        />
                                    </button>
                                </div>
                                <div className="flex-grow">
                                    <button
                                        type="button"
                                        className="w-full bg-tomato-100 hover:bg-tomato-200 h-12 rounded-md flex justify-center items-center px-6 gap-1.5 font-poppins lg:w-auto"
                                    >
                                        <img className='w-4 h-4 sm:h-5 sm:w-5' src={iconPedido} alt="icon pedido" />
                                        <span className='text-[10px] sm:text-[14px] '>pedir &bull; R$ 25,00</span>
                                    </button>
                                </div>
                            </div>

                        ) : (
                            <Link to="/update-product" className='w-full bg-tomato-100 hover:bg-tomato-200 lg:w-32 h-12 mt-4 rounded-md flex justify-center items-center font-poppins'>
                                Editar Prato
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}