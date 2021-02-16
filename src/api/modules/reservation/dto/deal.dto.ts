import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class DealDTO implements Partial<any> {
  @IsUUID()
  @ApiProperty({ required: false })
  clientId: string;

  @IsNumber()
  @ApiProperty({ required: false })
  public roomId: number;

  @IsString()
  @ApiProperty({ required: false })
  public reservationDate: Date;

  @IsString()
  @ApiProperty({ required: false })
  public checkInDate: Date;

  @IsString()
  @ApiProperty({ required: false })
  public checkOutDate: Date;
}
