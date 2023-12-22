import { Injectable } from '@nestjs/common';
import { NumbersCreateDto } from './schemas/numbers.create.dto';

@Injectable()
export class NumbersService {
  constructor() {}

  async create(data: NumbersCreateDto) {}
}
