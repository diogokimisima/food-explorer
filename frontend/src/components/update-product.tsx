import Back from '../assets/back.svg'
import Produto from '../assets/Mask group-3.png'

export function UpdateProduct() {
    return (
        <div>
            <div className="flex flex-col justify-center items-start max-w-[1220px] gap-7 mt-[180px] mx-auto">
                <a href='' className='flex items-center'>
                    <img className='w-8 h-8' src={Back} alt="back" />
                    <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
                </a>

                <h1 className='font-poppins text-[32px] text-light-300'>Editar prato</h1>
                <div className='flex gap-10'>
                    <div className=''>
                        <img className='h-auto w-[600px] object-contain' src={Produto} alt="produto" />
                    </div>
                    <div className='flex flex-col gap-6 ml-auto flex-grow'>
                        <h2 className='font-poppins text-[40px] font-bold'>Salada Ravanello</h2>
                        <p className='font-poppins text-2xl font-light leading-9'>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <p className='text-cake-200 text-3xl'>R$ 49,97</p>
                        <a href="" className='bg-tomato-100 hover:bg-tomato-200 w-32 h-12 rounded-md flex justify-center items-center font-poppins'>
                            Editar Prato
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}