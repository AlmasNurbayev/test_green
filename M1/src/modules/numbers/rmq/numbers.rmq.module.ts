import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import app from 'src/config/app';
import { ProvidersModule } from 'src/providers/providers.module';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      // cache: true,
      load: [app],
    }),
    ProvidersModule,
  ],
  controllers: [NumbersController],
  providers: [NumbersService],
  exports: [],
})
export class NumbersRMQModule {}
