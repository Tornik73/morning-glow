import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { ClientDTO } from './dto';
import { ClientEntity } from './entities';
import { ClientsService } from './services';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly _clientsService: ClientsService) {}

  @Post('createOne')
  @ApiBody({ type: ClientDTO })
  public async createOne(@Body() newClient: ClientDTO): Promise<any> {
    return await this._clientsService.createOne(newClient);
  }

  @Get('all')
  public getAll(): Observable<ClientEntity[]> {
    return this._clientsService.getAll();
  }
}
