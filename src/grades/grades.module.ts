import { Module } from '@nestjs/common';
import { GradesService } from './grades.service';
import { GradesController } from './grades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradeEntity } from './entities/grade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GradeEntity])],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
