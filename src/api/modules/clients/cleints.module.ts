import { Module } from '@nestjs/common';

import { ClientsController } from './clients.controller';
import { clientsProviders } from './providers';
import { ClientsRepository } from './repositories';
import { ClientsService } from './services';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [...clientsProviders, ClientsRepository, ClientsService],
  exports: [...clientsProviders, ClientsService]
})
export class ClientsModule {}
