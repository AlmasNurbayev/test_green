import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [NumbersController],
  providers: [NumbersService],
  imports: [PrismaModule],
})
export class NumbersModule {}
