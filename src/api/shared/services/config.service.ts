import { Injectable } from '@nestjs/common';
import config from "../../../../config";

@Injectable()
export class ConfigService {
    public get sequelizeOrmConfig() {
        return config.database;
    }

    public get jwtConfig() {
        return { privateKey: config.jwtPrivateKey };
    }
}

