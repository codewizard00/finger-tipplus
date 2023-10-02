import { Auth } from "./auth.entity";


export const userProviders = [
  {
    provide: 'User_Repository',
    useValue: Auth,
  },
];