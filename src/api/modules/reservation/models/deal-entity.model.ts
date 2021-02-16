import { DealLineEnum } from '../enum/deal-line.enum';
import { ClientEntity } from '../../clients';
import { mEnum, TransportEnum, DealStatusEnum, DealTypeEnum } from '../enum';

export interface DealEntityModel {
  readonly dealId: string;
  clientId?: string;
  client?: ClientEntity;
  m?: mEnum;
  lot?: string;
  status?: DealStatusEnum;
}
