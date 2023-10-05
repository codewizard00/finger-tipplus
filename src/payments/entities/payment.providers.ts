import { Payment } from "./payment.entity";

export const paymentProviders = [
    {
        provide: 'payment_repository',
        useValue: Payment,
    },
];