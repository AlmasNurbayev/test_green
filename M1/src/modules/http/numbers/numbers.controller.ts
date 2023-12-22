import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiBody } from '@nestjs/swagger';
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

  @Get()
  @ApiOperation({
    description: 'get numbers from database',
  })
  async find() {
    return this.numbersService.find();
  }
}
