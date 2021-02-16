import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { ClientDTO } from '../dto';
import { ClientEntity } from '../entities';
import { ClientsRepository } from '../repositories';
import { catchNotFoundError } from 'src/api/shared/operators';

@Injectable()
export class ClientsService {
    constructor(private readonly _clientsRepository: ClientsRepository) {}

    public async createOne(newClient: ClientDTO): Promise<ClientEntity> {
        const clientEntity: any = {
            ...newClient,
            clientId: uuidv4(),
        }

        return await this._clientsRepository.createOne(clientEntity);
    }

    public findOne(clientId: string): Observable<ClientEntity> {
        return this._clientsRepository.findOne(clientId).pipe(catchNotFoundError('client not found'));
    }

    public getAll(): Observable<ClientEntity[]> {
        return this._clientsRepository.findAll();
    }
}
