import { Product } from "../data";

interface ProductCardProps {
    product: Product;
}

export function FavoriteCard({ product }: ProductCardProps) {
    return (
        <div className='flex items-center gap-3'>
            <img className='w-[72px] h-[72px]' src={product.image} alt="imagem produto" />
            <div>
                <h2 className="font-poppins text-[20px]">{product.name}</h2>
                <button className="text-tomato-400 text-[12px]">Remover dos favoritos</button>
            </div>
        </div>
    )
} 