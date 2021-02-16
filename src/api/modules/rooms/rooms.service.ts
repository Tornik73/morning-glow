import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';

import { RoomDTO } from './dto';
import { RoomEntity } from './entities';
import { catchNotFoundError } from 'src/api/shared/operators';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
    constructor(private readonly _clientsRepository: RoomsRepository) {}

    public async createOne(newClient: RoomDTO): Promise<RoomEntity> {
        const clientEntity: any = {
            ...newClient,
        }

        return await this._clientsRepository.createOne(clientEntity);
    }

    public findOne(clientId: string): Observable<RoomEntity> {
        return this._clientsRepository.findOne(clientId).pipe(catchNotFoundError('client not found'));
    }

    public getAll(): Observable<RoomEntity[]> {
        return this._clientsRepository.findAll();
    }
}
