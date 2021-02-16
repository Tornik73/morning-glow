import { Dialect } from 'sequelize/types';

import { environmentProduction } from 'src/environment';

export const config = {
  database: {
    dialect: 'mysql' as Dialect,
    host: environmentProduction.MYSQL_HOST,
    port: +environmentProduction.MYSQL_PORT,
    username: environmentProduction.MYSQL_USER,
    password: environmentProduction.MYSQL_PASSWORD,
    database: environmentProduction.MYSQL_DATABASE,
    logging: false,
  },
  jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
};
