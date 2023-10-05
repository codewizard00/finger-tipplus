
import { Invoice } from "./invoice.entity";



export const invoiceProviders = [
    {
        provide: 'invoice_repository',
        useValue: Invoice,
    },
];