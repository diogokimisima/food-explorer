import Product from '../assets/Mask group-3.png'

export function Order() {
    return (
        <div className='mt-[150px] px-10 space-y-10'>
            <h1 className='font-poppins text-[32px]'>Meu pedido</h1>
            <div className='space-y-7'>
                <div className='flex items-center gap-3'>
                    <img className='w-[72px] h-[72px]' src={Product} alt="imagem produto" />
                    <div>
                        <h2 className="font-poppins text-[20px]">1 x Salada Radish</h2>
                        <button className="text-tomato-400 text-[12px]">Remover</button>
                        <span className='text-[12px] text-light-400 ml-20'>R$ 25,97</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-[72px] h-[72px]' src={Product} alt="imagem produto" />
                    <div>
                        <h2 className="font-poppins text-[20px]">1 x Salada Radish</h2>
                        <button className="text-tomato-400 text-[12px]">Remover</button>
                        <span className='text-[12px] text-light-400 ml-20'>R$ 25,97</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-[72px] h-[72px]' src={Product} alt="imagem produto" />
                    <div>
                        <h2 className="font-poppins text-[20px]">1 x Salada Radish</h2>
                        <button className="text-tomato-400 text-[12px]">Remover</button>
                        <span className='text-[12px] text-light-400 ml-20'>R$ 25,97</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-[72px] h-[72px]' src={Product} alt="imagem produto" />
                    <div>
                        <h2 className="font-poppins text-[20px]">1 x Salada Radish</h2>
                        <button className="text-tomato-400 text-[12px]">Remover</button>
                        <span className='text-[12px] text-light-400 ml-20'>R$ 25,97</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-[72px] h-[72px]' src={Product} alt="imagem produto" />
                    <div>
                        <h2 className="font-poppins text-[20px]">1 x Salada Radish</h2>
                        <button className="text-tomato-400 text-[12px]">Remover</button>
                        <span className='text-[12px] text-light-400 ml-20'>R$ 25,97</span>
                    </div>
                </div>
            </div>

            <p className='font-poppins text-[20px]'>Total: R$ 103,88</p>

            <button className='font-poppins text-[14px] px-20 py-3 bg-tomato-200 rounded-md'>Avançar</button>
        </div>
    )
}