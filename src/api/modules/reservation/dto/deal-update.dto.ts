import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import {
  DealLineEnum,
  DealStatusEnum,
  DealTypeEnum,
  mEnum,
  TransportEnum,
} from '../enum';
import { DealDTO } from './deal.dto';

export class DealUpdateDTO implements DealDTO {
  @IsUUID()
  @IsOptional()
  @ApiProperty({ required: false })
  clientId: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ enum: mEnum, required: false })
  m: mEnum;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  lot: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ enum: DealStatusEnum, enumName: 'DealStatusEnum' })
  status: DealStatusEnum;

  @IsString()
  @IsOptional()
  @ApiProperty({ enum: TransportEnum, enumName: 'TransportEnum' })
  transport: TransportEnum;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  cargoWeight: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  cargoName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  cargoLoadingDate: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  cargoLoadingPlace: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  placeOfDeparture: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  amount: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    enum: DealTypeEnum,
    enumName: 'DealTypeEnum',
    required: false,
  })
  type: DealTypeEnum;

  @IsString()
  @IsOptional()
  @ApiProperty({
    enum: DealLineEnum,
    enumName: 'DealLineEnum',
    required: false,
  })
  line: DealLineEnum;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  booking: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  vessel: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ required: false })
  eta: Date;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ required: false })
  ats: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  unloadingPort: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  transshipmentPort: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  contract: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  generalComments: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  insuranceOtv: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  insuranceCargo: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  clearenceSl: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  clearenceVgm: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  customsDocuments: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  customsCargo: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  customsFlexes: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  registrationAssignment: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  supplierLine: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  supplierFlexes: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  supplierRemovalOfFt: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  supplierOther: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  accountNumber: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  accountPaidStatus: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  accountIsSealsOrStickers: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  buyerName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  buyerVed: string;
}
