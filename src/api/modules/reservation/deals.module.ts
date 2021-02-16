import { Module } from '@nestjs/common';

import { DealsService } from './services/deals.service';
import { DealsController } from './deals.contoller';
import { DealsRepository } from './repositories';
import { dealsProviders } from './providers';
import { ClientsModule } from '../clients/cleints.module';
import { RoomsModule } from '../rooms/rooms.module';

@Module({
  imports: [ClientsModule, RoomsModule],
  controllers: [DealsController],
  providers: [DealsService, DealsRepository, ...dealsProviders],
})
export class ReservationsModule {}
