import { Order } from "./order.entity";


export const orderProviders = [
    {
        provide: 'order_repository',
        useValue: Order,
    },
];