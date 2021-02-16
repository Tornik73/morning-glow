import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ClientDTO {
  @IsString()
  @ApiProperty()
  public clientFirstName: string;

  @IsString()
  @ApiProperty()
  public clientLastName: string;

  @IsString()
  @ApiProperty()
  public patronymic: string;

  @IsString()
  @ApiProperty()
  public comment: string;

  @IsString()
  @ApiProperty()
  public clientType: string;
}
