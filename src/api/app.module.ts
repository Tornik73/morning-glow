import { ClientsModule } from './modules/clients/cleints.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';

import { SharedModule } from './shared/shared.module';
import { DatabaseModule } from '../database';
import { RoomsModule } from './modules/rooms/rooms.module';
import { ReservationsModule } from './modules/reservation/deals.module';

@Module({
  imports: [
    SharedModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ClientsModule,
    RoomsModule,
    DatabaseModule,
    ReservationsModule,
    ConfigModule.forRoot(),
    MulterModule.register({
      dest: './uploaded-files',
    }),
  ]
})
export class AppModule {}
