// src/pages/Home.tsx
import Banner from '../assets/banner.png';
import { ProductCard } from '../components/product-card'; // Ajuste o caminho de importação conforme necessário
import { products } from '../data/'; // Ajuste o caminho de importação

export function Home() {
    const isAdmin = false;

    return (
        <div>
            <div className='bg-gradient-100 h-28 w-80 sm:h-[170px] sm:w-[630px] md:h-[200px] md:w-[780px] lg:h-[260px] lg:w-[1030px] flex justify-center mx-auto relative mt-[150px] md:mt-[200px] lg:mt-[280px] rounded-md sm:rounded-lg '>
                <div className='absolute -left-6 -top-1 md:-left-12 sm:-top-[63px] md:-top-[98px] lg:-top-[162px]'>
                    <img className='w-44 sm:w-[360px] md:w-[460px] lg:w-[656px]' src={Banner} alt="banner" />
                </div>

                <div className='flex flex-col justify-center items-center gap-2 w-1/2 ml-auto'>
                    <h2 className='text-light-300 text-[15px] md:text-[30px] lg:text-[40px] -ml-4 font-medium font-poppins text-nowrap'>Sabores inigualáveis</h2>
                    <p className='text-light-300 -ml-1.5 text-[10px] md:text-[14px] lg:text-base'>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </div>

            <div className='flex flex-col items-center mx-auto mt-16 gap-6 pl-6 xl:px-0'>
                <div className='max-w-[1220px] w-full text-left'>
                    <h3 className='text-light-300 font-poppins text-lg sm:text-3xl'>Refeições</h3>
                </div>
                <div className='flex max-w-[1220px]  gap-7 w-full overflow-x-auto pr-6 sm:pr-0'>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            isAdmin={isAdmin} />
                    ))}
                </div>
            </div>
        </div>
    );
}
