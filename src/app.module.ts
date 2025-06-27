import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradesModule } from './grades/grades.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './config/postgres.config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal : true}), 
    TypeOrmModule.forRootAsync(postgresConfig),
    GradesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
