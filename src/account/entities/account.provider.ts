import { Account } from "./account.entity";

export const accountProviders = [
    {
        provide: 'account_repository',
        useValue: Account,
    },
];