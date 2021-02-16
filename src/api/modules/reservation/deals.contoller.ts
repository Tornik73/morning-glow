import {

  Controller,
  Get,

} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

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

  // @Post('createOne')
  // @ApiBody({ type: DealDTO })
  // public async createOne(@Body() newDeal: DealDTO): Promise<DealEntity> {
  //   return await this._dealsService.createOne(newDeal);
  // }

  // @Put('updateOne')
  // @ApiBody({ type: DealUpdateDTO })
  // public updateOne(
  //   @Query('dealId', ParseUUIDPipe) dealId: string,
  //   @Body() deal: DealUpdateDTO,
  // ): ResponseContext<DealEntity> {
  //   return this._dealsService.updateOne(dealId, deal);
  // }
}
