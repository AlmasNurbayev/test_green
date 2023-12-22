import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class NumbersCreateDto {
  @ApiProperty({ required: true })
  @IsNumber()
  number: string;
}
