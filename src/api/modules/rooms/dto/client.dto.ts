import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RoomDTO {
  @IsString()
  @ApiProperty()
  public type: string;

  @IsNumber()
  @ApiProperty()
  public price: number;
}
