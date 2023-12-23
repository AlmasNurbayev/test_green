import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';
import { Module } from '@nestjs/common';
import { ProvidersModule } from 'src/providers/providers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  controllers: [NumbersController],
  providers: [NumbersService],
  imports: [
    ProvidersModule,
    ClientsModule.registerAsync([
      {
        name: 'rmq_client',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) =>
          configService.get('rmq_client'),
        inject: [ConfigService],
      },
    ]),
  ],
})
export class NumbersHTTPModule {}
