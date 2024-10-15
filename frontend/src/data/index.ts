import salada from '../assets/Mask group-3.png'
import saladaRavenello from '../assets/salada.png';
import spaguetti from '../assets/Mask group-2.png';
import torrada from '../assets/Mask group-1.png';

export interface Product {
    id: number,
    name: string;
    description: string;
    category: string;
    ingredients: string[];
    image: string;
    price: number;
}


export const products: Product[] = [
    {
        id: 1,
        name: 'Salada Ravanello',
        description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
        category: 'Refeicoes',
        price: 49.97,
        ingredients: ['alface', 'cebola', 'pão naan', 'pepino', 'rabanete', 'tomate'],
        image: saladaRavenello 
    },
    {
        id: 2,
        name: 'Spaguetti Gambe',
        description: 'Massa fresca com camarões e pesto. ',
        category: 'Refeicoes',
        price: 79.97,
        ingredients: ['espaguete', 'camarão', 'pesto', 'alho', 'azeite'],
        image: spaguetti 
    },
    {
        id: 3,
        name: 'Torradas de Parma',
        description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
        category: 'Refeicoes',
        price: 25.97,
        ingredients: ['presunto', 'rúcula', 'pãoPão ciabatta', 'azeite', 'queijo'],
        image: torrada 
    },
    {
        id: 4,
        name: 'Salada Fit',
        description: 'Mistura de folhas verdes, legumes frescos e grãos integrais',
        category: 'Refeicoes',
        price: 79.97,
        ingredients: ['tomate', 'cebola roxa', 'azeite', 'alface', 'pepino'],
        image: salada 
    },
];