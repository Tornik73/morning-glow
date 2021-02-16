import { from, Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';

import { ClientEntityModel } from './models/client-entity.model';
import { RoomEntity } from './entities';

@Injectable()
export class RoomsRepository {
  constructor(
    @Inject('ROOMS_REPOSITORY')
    private readonly _clientRepository: typeof RoomEntity,
  ) {}

  public async createOne(newClient: ClientEntityModel): Promise<RoomEntity> {
    return await this._clientRepository.create(newClient);
  }

  public findOne(clientId: string): Observable<RoomEntity> {
    return from(this._clientRepository.findOne({ where: { clientId } }));
  }

  public findAll(): Observable<RoomEntity[]> {
    return from(this._clientRepository.findAll());
  }
}
