import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class NumbersReceivedCreateDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  value: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  numbers_id: number;
}
