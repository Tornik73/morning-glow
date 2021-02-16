import { environmentDev } from "./environment.dev";
import { environmentProduction } from "./environment.prod";

export const BuildMode = {
    DEV: 'development',
    PROD: 'production',
}

export interface Environment {
    port: number,
    MYSQL_HOST: string,
    MYSQL_PORT: string,
    MYSQL_USER: string,
    MYSQL_PASSWORD: string,
    MYSQL_DATABASE: string,
}

export const environment = (): Environment => {
    const configuration = process.env.NODE_ENV;
    if(configuration === BuildMode.DEV) {
        return environmentDev;
    }
    if(configuration === BuildMode.PROD) {
        return environmentProduction;
    }
    return environmentDev;
};