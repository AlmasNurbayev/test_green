import { Injectable } from '@nestjs/common';
import { NumbersCreateDto } from './schemas/numbers.create.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';

@Injectable()
export class NumbersService {
  constructor(private prisma: PrismaService) {}

  async create(data: NumbersCreateDto) {
    return this.prisma.numbers.create({ data });
  }

  async find() {
    return this.prisma.numbers.findMany();
  }
}
