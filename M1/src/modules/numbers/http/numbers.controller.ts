import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { NumbersService } from './numbers.service';
import { NumbersCreateDto } from './schemas/numbers.create.dto';

@ApiTags('numbers')
@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post()
  @ApiOperation({
    description: 'receive number and save to database',
  })
  @ApiBody({ type: NumbersCreateDto })
  async create(@Body() data: NumbersCreateDto) {
    return this.numbersService.create(data);
  }

  @Get(':id')
  @ApiOperation({
    description: 'get output data by input id',
  })
  async getResult(@Param('id', ParseIntPipe) id: number) {
    return this.numbersService.getResult(id);
  }
}
