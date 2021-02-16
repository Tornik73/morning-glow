import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import { DealTypeEnum } from '../enum/deal-type.enum';
import { DealStatusEnum } from '../enum/deal-status.enum';
import { mEnum } from '../enum/m.enum';
import { DealLineEnum, TransportEnum } from '../enum';
import { DealEntityModel } from '../models';
import { Type } from 'class-transformer';
export class DealDTO implements Partial<DealEntityModel> {
  @IsUUID()
  @IsOptional()
  @ApiProperty({ required: false })
  clientId: string;

  @IsString()
  @ApiProperty({ enum: mEnum })
  m: mEnum;

  @IsString()
  @ApiProperty()
  lot: string;

  @IsString()
  @ApiProperty({ enum: DealStatusEnum, enumName: 'DealStatusEnum' })
  status: DealStatusEnum;

  @IsString()
  @ApiProperty({ enum: TransportEnum, enumName: 'TransportEnum' })
  transport: TransportEnum;

  @IsString()
  @ApiProperty()
  cargoNameWeight?: string;

  @IsString()
  @ApiProperty()
  cargoLoadingDate: Date;

  @IsString()
  @ApiProperty()
  cargoLoadingPlace: string;

  @IsString()
  @ApiProperty()
  placeOfDeparture: string;

  @Type(() => Number)
  @IsInt()
  @ApiProperty()
  amount: number;

  @IsString()
  @ApiProperty({ enum: DealTypeEnum, enumName: 'DealTypeEnum' })
  type: DealTypeEnum;

  @IsString()
  @ApiProperty({ enum: DealLineEnum, enumName: 'DealLineEnum' })
  line: DealLineEnum;

  @IsString()
  @ApiProperty()
  booking: string;

  @IsString()
  @ApiProperty()
  vessel: string;

  @IsDateString()
  @ApiProperty()
  eta: Date;

  @IsDateString()
  @ApiProperty()
  ats: Date;

  @IsString()
  @ApiProperty()
  unloadingPort: string;

  @IsString()
  @ApiProperty()
  transshipmentPort: string;

  @IsString()
  @ApiProperty()
  contract: string;

  @IsString()
  @ApiProperty()
  generalComments: string;

  @IsString()
  @ApiProperty()
  insuranceOtv: string;

  @IsString()
  @ApiProperty()
  insuranceCargo: string;

  @IsString()
  @ApiProperty()
  clearenceSl: string;

  @IsString()
  @ApiProperty()
  clearenceVgm: string;

  @IsString()
  @ApiProperty()
  customsDocuments: string;

  @IsString()
  @ApiProperty()
  customsCargo: string;

  @IsString()
  @ApiProperty()
  customsFlexes: string;

  @IsString()
  @ApiProperty()
  registrationAssignment: string;

  @IsString()
  @ApiProperty()
  supplierLine: string;

  @IsString()
  @ApiProperty()
  supplierFlexes: string;

  @IsString()
  @ApiProperty()
  supplierOther: string;

  @IsString()
  @ApiProperty()
  supplierRemovalOfFt: string;

  @IsString()
  @ApiProperty()
  accountNumber: string;

  @IsString()
  @ApiProperty()
  accountPaidStatus: string;

  @IsBoolean()
  @ApiProperty()
  accountIsSealsOrStickers: boolean;

  @IsString()
  @ApiProperty()
  buyerName: string;

  @IsString()
  @ApiProperty()
  buyerVed: string;
}
