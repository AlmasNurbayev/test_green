import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { NumbersReceivedCreateDto } from './schemas/numbers_received.create.dto';

@Injectable()
export class NumbersService {
  constructor(private readonly prisma: PrismaService) {}

  async recievedCreate(data: NumbersReceivedCreateDto) {
    return await this.prisma.numbers_recieved.create({ data });
  }
}
