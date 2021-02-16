import { DealStatusEnum } from '../enum/deal-status.enum';
import { ClientEntity } from 'src/api/modules/clients';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { RoomEntity } from '../../rooms/entities';

@Table({ modelName: 'deals' })
export class DealEntity extends Model<any> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  public dealId: number;

  @Column({type: DataType.UUID})
  @ForeignKey(() => ClientEntity)
  public clientId: string;

  @Column({type: DataType.INTEGER})
  @ForeignKey(() => RoomEntity)
  public roomId: string;

  @BelongsTo(() => ClientEntity)
  public client: ClientEntity;
  
  @BelongsTo(() => RoomEntity)
  public room: RoomEntity;

  @Column({type: DataType.DATE})
  public reservationDate: Date;

  @Column({type: DataType.DATE})
  public checkInDate: Date;

  @Column({type: DataType.DATE})
  public checkOutDate: Date;

}
