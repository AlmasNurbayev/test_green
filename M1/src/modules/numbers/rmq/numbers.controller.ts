import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { NumbersService } from './numbers.service';
import { NumbersReceivedCreateDto } from './schemas/numbers_received.create.dto';

@Controller()
export class NumbersController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly service: NumbersService,
  ) {}

  // @MessagePattern('numbers.create')
  // getNumberCreate(@Payload() data: any, @Ctx() context: RmqContext) {
  //   //console.log(`Pattern: ${context.getPattern()}`);
  //   this.service.recievedCreate(data);
  // }

  @MessagePattern()
  getNumberCreate2(@Payload() data: NumbersReceivedCreateDto) {
    //console.log(`Pattern: ${context.getPattern()}`);
    this.service.recievedCreate(data);
  }
}
