import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { GradeEntity } from './entities/grade.entity';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class GradesService {

  constructor(@InjectRepository(GradeEntity) private readonly gradeRepository: Repository<GradeEntity>)
  {}
  async create(createGradeDto: CreateGradeDto): Promise<GradeEntity> {
    try {
      const extistName = await this.gradeRepository.findOneBy({ name: createGradeDto.name});
      if (extistName) {
        throw new BadRequestException(`${createGradeDto.name} is already taken.`);
      }
      const dataUser = this.gradeRepository.create(createGradeDto)
      const createResult = await this.gradeRepository.save(dataUser)
      return createResult;

  } catch (error) {
    throw error;
  }
}

  async findAll(): Promise<GradeEntity[]> { 
    return await this.gradeRepository.find()
    
  }

  async findOne(id: number): Promise<GradeEntity | null > { 
    return await this.gradeRepository.findOneBy({id});
    
  }

  async findByName(name: string): Promise<GradeEntity[]> { 
    return await this.gradeRepository.find({ where: { name } });  
}

  async update(id: number, updateUserDto: UpdateGradeDto): Promise<GradeEntity | null> { 
    try {
     if (updateUserDto.name) {
      const existing = await this.gradeRepository.findOne({ where: { name: updateUserDto.name } });
      if (existing && existing.id !== id) {
        throw new BadRequestException(`${updateUserDto.name} is already taken.`);
      }
    }
    await this.gradeRepository.update(id, updateUserDto);
    return this.gradeRepository.findOneBy({ id });
  } catch (error) {
    throw error;
      }
    }
  remove(id: number) {
    return this.gradeRepository.delete(id);
  }
}
