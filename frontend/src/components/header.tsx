import Logo from '../assets/explorer.svg';
import Search from '../assets/search.svg';
import Pedido from '../assets/pedido.svg';
import Logout from '../assets/logout.svg';
import Menu from '../assets/menu.svg';
import X from '../assets/x.svg';
import { useState } from 'react';

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const isAdmin = false;

    const toggleModal = () => {
        if (isModalOpen) {
            setIsAnimating(false);
            setTimeout(() => setIsModalOpen(false), 300);
        } else {
            setIsModalOpen(true);
            setTimeout(() => setIsAnimating(true), 10);
        }
    };

    return (
        <>
            <header className='bg-dark-600 h-[85px] lg:h-[104px] lg:px-32 px-6 flex justify-center items-center gap-8 w-full fixed top-0 z-30'>
                <div className='md:hidden flex items-center gap-8' onClick={toggleModal}>
                    <img src={Menu} alt="Menu icon" />
                </div>

                <div className='flex justify-center items-center gap-8 flex-1'>
                    <div className='flex flex-col flex-end'>
                        <a href='/' className='flex items-center'>
                            <img className='h-6 w-6 lg:h-8 lg:w-8 mr-3' src={Logo} alt="logo" />
                            <h1 className='text-light-100 text-xl lg:text-2xl font-bold text-nowrap'>Food Explorer</h1>
                        </a>
                        {isAdmin && (
                            <span className='-mt-2 ml-auto text-[12px] text-cake-200'>admin</span>
                        )}
                    </div>
                    <div className='hidden flex-1 md:flex bg-dark-900 py-3 px-4 min-w-[200px] rounded-md gap-2'>
                        <img className='text-light-400' src={Search} alt="" />
                        <input className='placeholder:text-light-500 bg-dark-900 focus:outline-none w-full' type="text" placeholder='Busque por pratos ou ingredientes' />
                    </div>
                </div>

                {isAdmin ? (
                    <a href='/new-product' className='relative lg:flex lg:bg-tomato-100 gap-2 py-3 lg:px-11 rounded-md lg:hover:bg-tomato-200'>
                        <p className='hidden lg:block text-light-100 text-sm font-poppins text-[14px]'>Novo produto</p>
                    </a>
                ) : (
                    <a href='/order' className='relative lg:flex lg:bg-tomato-100 gap-2 py-3 lg:px-11 rounded-md lg:hover:bg-tomato-200'>
                        <img className='text-light-100' src={Pedido} alt="logo-pedido" />
                        <p className='hidden lg:block text-light-100 text-sm font-poppins text-[14px]'>Pedidos (4)</p>
                        <div className='lg:hidden absolute top-0 -right-2 p-3 bg-tomato-100 text-light-100 rounded-full h-5 w-5 flex justify-center items-center'>
                            <span>4</span>
                        </div>
                    </a>
                )}


                <button className='hidden lg:block'>
                    <img className='text-light-700' src={Logout} alt="logo-logout" />
                </button>
            </header>

            {isModalOpen && (
                <div
                    className={`fixed inset-0 z-50 bg-dark-400 transform transition-transform duration-300 ease-in-out ${isAnimating ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div>
                        <div className="h-[85px] bg-dark-600 flex items-center p-6 gap-4">
                            <button onClick={toggleModal}>
                                <img className='w-[18px]' src={X} alt="icon x" />
                            </button>
                            <h2 className="text-light-100 text-xl">Menu</h2>
                        </div>
                        <div className='px-7 py-9 space-y-8'>
                            <div className='flex-1 flex bg-dark-900 py-3 px-4 min-w-[200px] rounded-md gap-2'>
                                <img className='text-light-400' src={Search} alt="" />
                                <input className='placeholder:text-light-500 bg-dark-900 focus:outline-none w-full' type="text" placeholder='Busque por pratos ou ingredientes' />
                            </div>
                            <div className='flex flex-col'>
                                {isAdmin && (
                                    <div className='flex items-center border-b h-14 border-light-300 border-opacity-20'>
                                        <a href='/new-product' className='px-2.5 text-2xl font-poppins'>Novo prato</a>
                                    </div>
                                )}
                                {!isAdmin && (
                                    <div className='flex items-center border-b h-14 border-light-300 border-opacity-20'>
                                        <a href='/favorites' className='px-2.5 text-2xl font-poppins'>Favoritos</a>
                                    </div>
                                )}
                                <div className='flex items-center border-b h-14 border-light-300 border-opacity-20'>
                                    <a href='' className='px-2.5 text-2xl font-poppins'>Sair</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
