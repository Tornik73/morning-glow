import { Sequelize } from 'sequelize-typescript';

import { ClientEntity } from 'src/api/modules/clients';
import { DealEntity } from 'src/api/modules/reservation/entities';
import { RoomEntity } from 'src/api/modules/rooms/entities';
import { ConfigService } from 'src/api/shared';

const ManyToManyEntities = [];

const Entities = [DealEntity, ClientEntity, RoomEntity];

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService): Promise<Sequelize> => {
      const sequelize = new Sequelize(configService.sequelizeOrmConfig);
      sequelize.addModels([...Entities, ...ManyToManyEntities]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
    inject: [ConfigService],
  },
];
