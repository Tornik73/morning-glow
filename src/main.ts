import { NestFactory } from '@nestjs/core';
import { urlencoded, json } from 'express';
import { ValidationPipe } from '@nestjs/common';

import { setupSwagger } from './swagger';
import { AppModule } from './api/app.module';
import { HttpExceptionFilter } from './api/shared';
import { Environment, environment } from './environment';

const env: Environment = environment();

console.log(`Server is listening on ${env.port}`);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .use(json({ limit: '50mb' }))
    .use(urlencoded({ extended: true, limit: '50mb' }))
    .setGlobalPrefix('api')
    .useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    )
    .useGlobalFilters(new HttpExceptionFilter())
    .enableCors();

  setupSwagger(app);

  await app.listen(process.env.PORT || env.port);
}
bootstrap();
