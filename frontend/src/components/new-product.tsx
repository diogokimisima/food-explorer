import Back from '../assets/back.svg'
import Download from '../assets/download.svg'

export function NewProduct(){
    return (
        <div className="flex flex-col justify-center items-start max-w-[1120px] gap-7 mt-[180px] mx-auto">
            <a href='' className='flex items-center'>
                <img className='w-8 h-8' src={Back} alt="back" />
                <p className='font-bold font-poppins text-light-300 text-2xl'>voltar</p>
            </a>

            <h1 className='font-poppins text-[32px] text-light-300'>Adicionar prato</h1>

            <div>
                <div className='flex gap-8'>
                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-light-400'>Imagem do prato</h2>
                        <button className='flex gap-2 bg-dark-800 py-3 px-8 rounded-lg hover:bg-dark-1000'>
                            <img className='h-6 w-6' src={Download} alt="icon download" />
                            <p className='font-poppins '>Selecione imagem</p>
                        </button>
                    </div>
                    
                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-light-400'>Nome</h2>
                        <div className='flex gap-2 bg-dark-800 py-3 px-8 rounded-lg'>
                            <input className='font-poppins bg-dark-800 focus:outline-none' type="text" placeholder='Ex.: Salada Ceasar'/>
                        </div>
                    </div>

                </div>
                
                <div></div>
                
                <div></div>
            </div>
        </div>
    )
}