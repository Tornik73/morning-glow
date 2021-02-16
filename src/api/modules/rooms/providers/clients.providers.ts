import { RoomEntity } from '../entities';

export const clientsProviders = [
    {
        provide: 'ROOMS_REPOSITORY',
        useValue: RoomEntity,
    },
];
