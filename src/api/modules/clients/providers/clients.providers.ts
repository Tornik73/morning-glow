import { ClientEntity } from '../entities';
import { ClientsProvidersEnum } from './../enum';

export const clientsProviders = [
    {
        provide: ClientsProvidersEnum.CLIENTS_REPOSITORY,
        useValue: ClientEntity,
    },
];
