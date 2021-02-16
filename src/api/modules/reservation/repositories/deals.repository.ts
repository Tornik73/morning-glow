import { from, Observable } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { WhereOptions } from 'sequelize/types';

import { ClientEntity } from '../../clients/entities/client.entity';
import { ClientsProvidersEnum } from '../../clients/enum';
import { DealEntity } from '../entities';
import { DealsProvidersEnum } from '../enum';
import { DealEntityModel } from '../models';
import { EXCLUDE_TIME_STAMPS } from 'src/api/shared';
import { DealDTO } from '../dto';
import { RoomEntity } from '../../rooms/entities';

@Injectable()
export class DealsRepository {
  constructor(
    @Inject(DealsProvidersEnum.DEALS_REPOSITORY)
    private readonly _dealsRepository: typeof DealEntity,
    @Inject(ClientsProvidersEnum.CLIENTS_REPOSITORY)
    private readonly _clientRepository: typeof ClientEntity,
    @Inject('ROOMS_REPOSITORY')
    private readonly _roomRepository: typeof RoomEntity,
  ) {}

  private readonly _clientsAccountsRepositories = [
    {
      model: this._clientRepository,
      attributes: EXCLUDE_TIME_STAMPS,
    },
    {
      model: this._roomRepository,
      attributes: EXCLUDE_TIME_STAMPS,
    },
  ];

  public async findAll(): Promise<DealEntity[]> {
    return await this._dealsRepository.findAll({
      include: this._clientsAccountsRepositories,
    });
  }

  public updateOne(
    dealId: string,
    deal: DealDTO,
  ): Observable<[number, DealEntity[]]> {
    return from(this._dealsRepository.update(deal, { where: { dealId } }));
  }

  public findOneById(dealId: string): Observable<DealEntity> {
    const options = { dealId } as Partial<DealEntityModel>;
    return from(
      this._dealsRepository.findOne({
        where: options as WhereOptions,
        include: this._clientsAccountsRepositories,
      }),
    );
  }

  public async createOne(
    newDeal: Partial<DealEntityModel>,
  ): Promise<DealEntity> {
    return await this._dealsRepository.create(newDeal);
  }
}
