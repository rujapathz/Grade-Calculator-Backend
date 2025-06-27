import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { GradeEntity } from './entities/grade.entity';

@Injectable()
export class GradesService {

  constructor(@InjectRepository(GradeEntity) private readonly gradeRepository: Repository<GradeEntity>)
  {}


  async create(createGradeDto: CreateGradeDto): Promise<GradeEntity> {
    try {

      const dataUser = this.gradeRepository.create(createGradeDto)
      const createResult = await this.gradeRepository.save(dataUser)
      return createResult;

  } catch (error) {
    throw error;
  }
}

  async findAll(): Promise<GradeEntity[]> { 
    const testResults = await this.gradeRepository.find()
    return testResults;
  }

  async findOne(id: number): Promise<GradeEntity | null > { 
    const dataUserID = await this.gradeRepository.findOneBy({id});
    return dataUserID;
  }

  async findByName(name: string): Promise<GradeEntity[]> { 
  const findUserName = await this.gradeRepository.find({ where: { name } }); 
  return findUserName;
}

  async update(id: number, updateUserDto: UpdateGradeDto): Promise<GradeEntity | null> { 
    await this.gradeRepository.update(id, updateUserDto)
    const dataUserUpdate = await this.gradeRepository.findOneBy({id});
    return dataUserUpdate;
  }

  remove(id: number) {
    return this.gradeRepository.delete(id);
  }
}
