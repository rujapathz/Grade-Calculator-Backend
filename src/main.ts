import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
<<<<<<< HEAD
  const app = await NestFactory.create(AppModule, {cors: true});

=======
  const app = await NestFactory.create(AppModule, { cors: true });
>>>>>>> 1be6211 (added eslint config)
  app.useGlobalPipes(
    new ValidationPipe({
      // disableErrorMessages: true,
      whitelist: true,
      transform: true,
<<<<<<< HEAD
    }));

    // app.useGlobalFilters(new AllExceptionsFilter());

=======
    }),
  );
>>>>>>> 1be6211 (added eslint config)
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
