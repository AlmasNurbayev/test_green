import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import app from 'src/config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class ProvidersModule {}
