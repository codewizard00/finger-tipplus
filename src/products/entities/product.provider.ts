import { Product } from "./product.entity";


export const productProviders = [
    {
        provide: 'product_repository',
        useValue: Product,
    },
];