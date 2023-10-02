import { Visit } from "./visit.entity";

export const visitProviders = [
    {
        provide: 'visit_repository',
        useValue: Visit,
    },
];