import Back from '../assets/back.svg'
import Download from '../assets/download.svg'
import X from '../assets/x.svg'
import Plus from '../assets/plus2.svg'

export function NewProduct() {
    return (
        <div className='flex'>
            <div className="flex flex-col justify-center items-start max-w-[1320px] gap-7 mt-[180px] mx-auto">
                <a href='' className='flex items-center'>
                    <img className='w-8 h-8' src={Back} alt="back" />
                    <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
                </a>

                <h1 className='font-poppins text-[32px] text-light-300'>Adicionar prato</h1>

                <div className='flex flex-col gap-8'>
                    <div className='flex gap-8 w-full'>
                        <div className='flex flex-col gap-4 '>
                            <h2 className='text-light-400'>Imagem do prato</h2>
                            <button className='flex gap-2 bg-dark-800 py-3 pr-10 pl-4 rounded-lg hover:bg-dark-1000'>
                                <img className='h-6 w-6' src={Download} alt="icon download" />
                                <p className='font-poppins whitespace-nowrap'>Selecione imagem</p>
                            </button>
                        </div>

                        <div className='flex flex-col gap-4 w-full'>
                            <h2 className='text-light-400'>Nome</h2>
                            <div className='flex gap-2 bg-dark-800 py-3 px-8 rounded-lg w-full'>
                                <input className='font-poppins bg-dark-800 focus:outline-none ' type="text" placeholder='Ex.: Salada Ceasar' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h2 className='text-light-400'>Categoria</h2>
                            <div className='flex gap-2 bg-dark-800 py-3 px-8 rounded-lg'>
                                <input className='font-poppins bg-dark-800 focus:outline-none' type="text" placeholder='Refeição' />
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-8 w-full flex-1'>
                        <div className='flex flex-col gap-4 '>
                            <h2 className='text-light-400'>Ingredientes</h2>
                            <div className='flex bg-dark-800 rounded-lg h-12 w-[750px]'>
                                <div className='flex items-center justify-center gap-2 bg-light-600 py-2 px-4 rounded-lg m-2 '>
                                    <p className='font-poppins '>Pão Naan</p>
                                    <button><img className='w-2 h-2' src={X} alt="" /></button>
                                </div>

                                <button className='flex items-center justify-center gap-2 border border-dashed border-light-500 py-2 px-4 rounded-lg m-2'>
                                    <p className='font-poppins text-light-500'>Adicionar</p>
                                    <img className='w-3 h-3' src={Plus} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 ml-auto'>
                            <h2 className='text-light-400'>Nome</h2>
                            <div className='flex gap-2 bg-dark-800 py-3 px-8 rounded-lg w-full'>
                                <input className='font-poppins bg-dark-800 focus:outline-none ' type="text" placeholder='Ex.: Salada Ceasar' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full'>
                        <h2 className='text-light-400'>Descrição</h2>
                        <div className='flex flex-col gap-4 bg-dark-800 w-full rounded-lg h-44 mt-5'>
                            <div className='flex gap-2  py-3 px-8 '>
                                <input className='font-poppins bg-dark-800 focus:outline-none w-full' type="text" placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}