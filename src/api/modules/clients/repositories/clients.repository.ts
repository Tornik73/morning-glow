import { from, Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';

import { ClientEntityModel } from './../models/client-entity.model';
import { ClientEntity } from '../entities';
import { ClientsProvidersEnum } from './../enum';

@Injectable()
export class ClientsRepository {
  constructor(
    @Inject(ClientsProvidersEnum.CLIENTS_REPOSITORY)
    private readonly _clientRepository: typeof ClientEntity,
  ) {}

  public async createOne(newClient: ClientEntityModel): Promise<ClientEntity> {
    return await this._clientRepository.create(newClient);
  }

  public findOne(clientId: string): Observable<ClientEntity> {
    return from(this._clientRepository.findOne({ where: { clientId } }));
  }

  public findAll(): Observable<ClientEntity[]> {
    return from(this._clientRepository.findAll());
  }
}
