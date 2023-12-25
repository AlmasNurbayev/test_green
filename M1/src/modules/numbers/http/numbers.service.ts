import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { NumbersCreateDto } from './schemas/numbers.create.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NumbersService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('rmq_client') private readonly rmq_client: ClientProxy,
  ) {}

  async create(data: NumbersCreateDto) {
    const newNumber = await this.prisma.numbers.create({
      data: {
        value: data.value,
      },
    });
    const sending = this.rmq_client.send(
      { cmd: 'numbers.create' },
      {
        id: newNumber.id,
        value: data.value,
      },
    );
    const receiving = sending.subscribe();

    //console.log(receiving);

    return newNumber;
  }

  async getResult(id: number) {
    const res = this.prisma.numbers_recieved.findFirst({
      where: { numbers_id: id },
    });
    if (!res) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          message: 'Объект не найден, повторите позже',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return res;
  }
}
