import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { NOT_NULL } from 'src/api/shared/constants';

@Table({ modelName: 'rooms' })
export class RoomEntity extends Model<any> {
  @PrimaryKey
  @AutoIncrement
  @Column({ ...NOT_NULL, type: DataType.INTEGER })
  public roomId: number;

  @Column({ ...NOT_NULL, type: DataType.STRING })
  public type: string;

  @Column({ ...NOT_NULL, type: DataType.STRING })
  public price: string;
}
