import {

  Body,
  Controller,
  Get,
  Post,

} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { DealDTO } from './dto';
import { DealEntity } from './entities';

import { DealsService } from './services';

@ApiTags('deals')
@Controller('deals')
export class DealsController {
  constructor(private readonly _dealsService: DealsService) { }

  @Get('all')
  public getAll(
  ): any {
    return this._dealsService.getAllDeals();
  }

  // @Get('one')
  // public getOneById(
  //   @Query('dealId', ParseUUIDPipe) dealId: string,
  // ): ResponseContext<DealEntity> {
  //   return this._dealsService.getOneById(dealId);
  // }

  @Post()
  @ApiBody({ type: DealDTO })
  public async createOne(@Body() newDeal: DealDTO): Promise<DealEntity> {
    return await this._dealsService.createOne(newDeal);
  }

  // @Put('updateOne')
  // @ApiBody({ type: DealUpdateDTO })
  // public updateOne(
  //   @Query('dealId', ParseUUIDPipe) dealId: string,
  //   @Body() deal: DealUpdateDTO,
  // ): ResponseContext<DealEntity> {
  //   return this._dealsService.updateOne(dealId, deal);
  // }
}
