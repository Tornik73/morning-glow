import { DealEntity } from "../entities";
import { DealsProvidersEnum } from "../enum";

export const dealsProviders = [
    {
        provide: DealsProvidersEnum.DEALS_REPOSITORY,
        useValue: DealEntity,
    },
];
