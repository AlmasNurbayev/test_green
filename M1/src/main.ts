import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle(configService.get('swagger.title'))
        .setDescription(configService.get('swagger.description'))
        .setVersion(configService.get('swagger.version'))
        .build(),
    ),
  );

  app.useGlobalPipes(
    // new StripEmptyStringsPipe(),
    new ValidationPipe({
      transform: true,
      whitelist: true,
      //skipMissingProperties: true,
    }),
  );
  app.use(helmet());
  app.connectMicroservice(configService.get('rmq_service'));
  await app.startAllMicroservices();
  await app.listen(configService.get('port'));

  Logger.log('app started on port: ' + configService.get('port'));
}
bootstrap();
