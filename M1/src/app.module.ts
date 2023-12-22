import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import app from './config/app';
import { ConfigModule } from '@nestjs/config';
import { NumbersModule } from './modules/http/numbers/numbes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
    }),
    NumbersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
