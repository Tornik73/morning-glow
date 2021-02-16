import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RoomDTO {
  @IsString()
  @ApiProperty()
  public type: string;

  @IsString()
  @ApiProperty()
  public price: string;
}
