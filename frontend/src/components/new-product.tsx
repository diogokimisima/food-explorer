import Back from '../assets/back.svg'
import Download from '../assets/download.svg'
import X from '../assets/x.svg'
import Plus from '../assets/plus2.svg'
import arrowDown from '../assets/arrow-down.svg'

export function NewProduct() {
    return (
        <div className='flex'>
            <div className="flex flex-col justify-center items-start gap-7 mt-32 lg:mt-[180px] mx-auto">
                <div className='px-8 lg:px-0 space-y-5'>
                    <a href='' className='flex items-center'>
                        <img className='w-8 h-8' src={Back} alt="back" />
                        <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
                    </a>

                    <h1 className='font-poppins text-[32px] text-light-300'>Novo prato</h1>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className='flex flex-wrap lg:flex-nowrap gap-5 lg:gap-8 w-full'>
                        <div className='flex flex-col gap-4 w-full px-8 lg:px-0'>
                            <h2 className='text-light-400'>Imagem do prato</h2>
                            <button className='flex gap-2 bg-dark-800 py-3 pr-10 pl-4 w-full rounded-lg hover:bg-dark-1000'>
                                <img className='h-6 w-6' src={Download} alt="icon download" />
                                <p className='font-poppins whitespace-nowrap'>Selecione imagem</p>
                            </button>
                        </div>

                        <div className='flex flex-col gap-4 w-full px-8 lg:px-0'>
                            <h2 className='text-light-400'>Nome</h2>
                            <div className='flex gap-2 bg-dark-800 py-3 px-4 rounded-lg w-full'>
                                <input className='font-poppins bg-dark-800 focus:outline-none ' type="text" placeholder='Ex.: Salada Ceasar' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 w-full px-8 lg:px-0'>
                            <h2 className='text-light-400'>Categoria</h2>
                            <div className='flex gap-2 bg-dark-800 py-3 px-4 rounded-lg w-full'>
                                <input className='font-poppins bg-dark-800 focus:outline-none' type="text" placeholder='Refeição' />
                                <img className='ml-auto' src={arrowDown} alt="arrow down" />
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 lg:gap-8 flex-wrap lg:flex-nowrap flex-1'>
                        <div className='flex flex-col w-full gap-4 px-8 lg:px-0'>
                            <h2 className='text-light-400'>Ingredientes</h2>
                            <div className='flex bg-dark-800 rounded-lg h-12 w-full lg:w-[750px]'>
                                <div className='flex items-center justify-center gap-2 bg-light-600 py-2 px-4 rounded-lg m-2 '>
                                    <p className='font-poppins '>Pão Naan</p>
                                    <button><img className='w-2 h-2' src={X} alt="" /></button>
                                </div>

                                <button className='flex items-center justify-center gap-2 border border-dashed border-light-500 py-2 px-4 rounded-lg m-2'>
                                    <p className='font-poppins text-base text-light-500'>Adicionar</p>
                                    <img className='w-3 h-3' src={Plus} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 ml-auto w-full px-8 lg:px-0'>
                            <h2 className='text-light-400'>Preço</h2>
                            <div className='flex gap-2 bg-dark-800 py-3 px-4 rounded-lg w-full'>
                                <input className='font-poppins bg-dark-800 focus:outline-none ' type="text" placeholder='R$ 00,00' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full px-8 lg:px-0'>
                        <h2 className='text-light-400'>Descrição</h2>
                        <div className='flex flex-col gap-4 bg-dark-800 w-full rounded-lg h-44 mt-5'>
                            <textarea
                                className='font-poppins bg-dark-800 focus:outline-none w-full h-full py-3 px-4 resize-none rounded-lg'
                                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'>
                            </textarea>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-44 px-8 lg:px-0 ml-auto'>
                    <button className='bg-tomato-400 w-full py-3 rounded-lg font-poppins text-light-100'>
                        Salvar Alterações
                    </button>
                </div>
            </div>
        </div>
    )
}