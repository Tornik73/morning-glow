import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { NOT_NULL } from 'src/api/shared/constants';
import { ClientEntityModel } from '../models';

@Table({ modelName: 'clients' })
export class ClientEntity extends Model<ClientEntityModel> {
  @PrimaryKey
  @Column({ ...NOT_NULL, type: DataType.UUID })
  public clientId: string;

  @Column({ ...NOT_NULL, type: DataType.STRING })
  public clientFirstName: string;

  @Column({ ...NOT_NULL, type: DataType.STRING })
  public clientLastName: string;

  @Column({ ...NOT_NULL, type: DataType.STRING })
  public patronymic: string;

  @Column({ type: DataType.STRING })
  public comment: string;

  @Column({ type: DataType.STRING })
  public clientType: string;
}
