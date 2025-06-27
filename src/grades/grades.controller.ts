import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseBoolPipe, ParseIntPipe } from '@nestjs/common';
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post()
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @Get()
  findAll(@Query('name') name?: string) {
    if (name) {
      return this.gradesService.findByName(name);
    }
    return this.gradesService.findAll();
  }

  @Get(':id')
  findOne(
  @Param('id', ParseIntPipe) id: number) {
    return this.gradesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() UpdateGradeDto: UpdateGradeDto) {
    return this.gradesService.update(+id, UpdateGradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gradesService.remove(+id);
  }
}
