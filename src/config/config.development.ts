import { Dialect } from 'sequelize/types';
import { environmentDev } from 'src/environment';

export const config = {
  database: {
    dialect: 'mysql' as Dialect,
    host: environmentDev.MYSQL_HOST,
    port: +environmentDev.MYSQL_PORT,
    username: environmentDev.MYSQL_USER,
    password: environmentDev.MYSQL_PASSWORD,
    database: environmentDev.MYSQL_DATABASE,
    logging: true,
  },
  jwtPrivateKey: 'jwtPrivateKey',
};
