import { DealStatusEnum } from '../enum/deal-status.enum';
import { ClientEntity } from 'src/api/modules/clients';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { NOT_NULL } from 'src/api/shared/constants';
import { DealEntityModel } from '../models';
import { RoomEntity } from '../../rooms/entities';

@Table({ modelName: 'deals' })
export class DealEntity extends Model<any>
  implements DealEntityModel {
  @PrimaryKey
  @Column({ ...NOT_NULL, type: DataType.UUID })
  public dealId: string;

  @Column({type: DataType.UUID})
  @ForeignKey(() => ClientEntity)
  public clientId: string;

  @Column({type: DataType.INTEGER})
  @ForeignKey(() => RoomEntity)
  public roomId: string;

  @BelongsTo(() => ClientEntity)
  public client: ClientEntity;

  @Column({type: DataType.DATE})
  public reservationDate: Date;

  @Column({type: DataType.DATE})
  public checkInDate: Date;

  @Column({type: DataType.DATE})
  public checkOutDate: Date;

}
