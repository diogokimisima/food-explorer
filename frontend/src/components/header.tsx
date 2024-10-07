import Logo from '../assets/explorer.svg'
import Search from '../assets/search.svg'
import Pedido from '../assets/pedido.svg'
import Logout from '../assets/logout.svg'

export function Header() {
    return (
        <header className='bg-dark-600 h-[104px] px-32 flex justify-center items-center gap-8 w-full fixed top-0 z-50'>
            <div className='flex items-center gap-8 flex-1'>
                <div className='flex items-center'>
                    <img className='h-8 w-8 mr-3' src={Logo} alt="logo" />
                    <h1 className='text-light-100 text-2xl font-bold text-nowrap'>Food Explorer</h1>
                </div>
                <div className='flex-1 flex bg-dark-900 py-3 px-4 min-w-[200px] rounded-md gap-2'>
                    <img className='text-light-400' src={Search} alt="" />
                    <input className='placeholder:text-light-500 bg-dark-900 focus:outline-none w-full' type="text" placeholder='Busque por pratos ou ingredientes' />
                </div>
            </div>

            <a href='' className='flex bg-tomato-100 gap-2 py-3 px-11 rounded-md hover:bg-tomato-200 transition duration-200 ease-in-out'>
                <img className='text-light-100' src={Pedido} alt="logo-pedido" />
                <p className='text-light-100 text-sm font-poppins text-[14px]'>Pedidos (0)</p>
            </a>

            <button>
                <img className='text-light-700' src={Logout} alt="logo-logout" />
            </button>
        </header>
    )
}