import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { of } from 'rxjs';

import {
  ResponseContext,
  ResponseContextPagination,
  ResponseService,
} from 'src/api/shared';
// import { DealDTO } from '../dto';
import { DealEntity } from '../entities';
// import { DealEntityModel } from '../models';
import { DealsRepository } from '../repositories';
import { map } from 'rxjs/operators';
import { catchNotFoundError } from 'src/api/shared/operators';
import { DealDTO } from '../dto';
import { DealEntityModel } from '../models';
// import { ClientsService } from '../../clients/services';


@Injectable()
export class DealsService {
  constructor(
    private readonly _dealsRepository: DealsRepository,
    // private readonly _clientsService: ClientsService,
    private readonly _responseService: ResponseService,
  ) {}

  public async getAllDeals(): Promise<DealEntity[]> {
    return await this._dealsRepository.findAll();
  }

  public getOneById(dealId: string): ResponseContext<DealEntity> {
    return this._dealsRepository.findOneById(dealId).pipe(
      catchNotFoundError(),
      map(dealEntity => this._responseService.successResponse(dealEntity)),
    );
  }

  public async createOne(newDeal: DealDTO): Promise<DealEntity> {
    const dealEntity: Partial<DealEntityModel> = {
      ...newDeal,
      dealId: uuidv4(),
    };
    return await this._dealsRepository.createOne(dealEntity);
  }
}
