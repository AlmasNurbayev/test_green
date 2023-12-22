import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

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
      skipMissingProperties: true,
    }),
  );
  console.log(configService.get('port'));

  await app.listen(configService.get('port'));
}
bootstrap();
