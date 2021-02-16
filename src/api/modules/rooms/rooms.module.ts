import { Module } from '@nestjs/common';

import { RoomsController } from './rooms.controller';
import { clientsProviders } from './providers';
import { RoomsRepository } from './rooms.repository';
import { RoomsService } from './rooms.service';

@Module({
  imports: [],
  controllers: [RoomsController],
  providers: [...clientsProviders, RoomsRepository, RoomsService],
  exports: [...clientsProviders, RoomsService]
})
export class RoomsModule {}
