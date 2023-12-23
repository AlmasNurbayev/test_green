import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import app from './config/app';
import { ConfigModule } from '@nestjs/config';
import { NumbersRMQModule } from './modules/numbers/rmq/numbers.rmq.module';
import { NumbersHTTPModule } from './modules/numbers/http/numbers.http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
    }),
    NumbersHTTPModule,
    NumbersRMQModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
