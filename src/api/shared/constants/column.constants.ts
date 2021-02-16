import { DataType } from 'sequelize-typescript';

export const NOT_NULL = {
  allowNull: false,
};

export const NOT_NULL_GUID = {
  ...NOT_NULL,
  type: DataType.UUID,
};

export const NOT_NULL_STRING = {
  ...NOT_NULL,
  type: DataType.STRING,
};

export const NOT_NULL_BOOLEAN = {
  ...NOT_NULL,
  type: DataType.BOOLEAN,
};

export const STRING = {
  type: DataType.STRING,
};

export const DATE = {
  type: DataType.DATE,
};

export const INTEGER = {
  type: DataType.INTEGER,
};

export const BOOLEAN = {
  type: DataType.BOOLEAN,
};

export const DECIMAL = {
  type: DataType.DECIMAL,
};