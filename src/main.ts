import { NestFactory } from '@nestjs/core';
import { useApsoLogging } from '@apso/logging';
import { AppModule } from './app.module.rest';
import { configureNestApp } from './config/nest-app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // One JSON line per request with who called, and a request id on every line.
  useApsoLogging(app);
  await configureNestApp(app);
  await app.listen(process.env.APP_PORT || 3000);
}

bootstrap();
