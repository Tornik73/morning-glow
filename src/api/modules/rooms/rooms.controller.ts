import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { RoomDTO } from './dto';
import { RoomEntity } from './entities';
import { RoomsService } from './rooms.service';

@ApiTags('Rooms')
@Controller('Rooms')
export class RoomsController {
  constructor(private readonly _roomsService: RoomsService) {}

  @Post()
  @ApiBody({ type: RoomDTO })
  public async createOne(@Body() newClient: RoomDTO): Promise<any> {
    return await this._roomsService.createOne(newClient);
  }

  @Get()
  public getAll(): Observable<RoomEntity[]> {
    return this._roomsService.getAll();
  }
}
